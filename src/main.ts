import {canvas, ctx, initCanvasAndContext} from "./glob"
import {NavMesh} from "./collision/NavMesh"
import {Triangle} from "./collision/Triangle"
import {IShape} from "./collision/IShape"
import {InputManager} from "./input/InputManager"
import {ImageLoader} from "./resources/ImageLoader"
import {JSONLoader} from "./resources/JSONLoader"
import {Level} from "./game/Level"
import {StaticSprite} from "./sprites/StaticSprite"
import {AnimatedSprite} from "./sprites/AnimatedSprite"
import {InteractableSprite} from "./sprites/InteractableSprite"
import {NavSprite} from "./sprites/NavSprite"
import {SpriteAnimation} from "./sprites/SpriteAnimation"
import {TextureAtlas} from "./sprites/TextureAtlas"
import {PlayerSprite} from "./sprites/PlayerSprite"
import {NPCSprite} from "./sprites/NPCSprite"
import {Item} from "./items/Item"
import {Inventory} from "./items/Inventory"
import {Conversation} from "./chat/Conversation"
import {Dialog} from "./chat/Dialog"
import {ContinueDialog} from "./chat/ContinueDialog"
import {OptionDialog} from "./chat/OptionDialog"

let inputManager;
let img: HTMLImageElement;
let sceneScale: number;
let levelScale: number;
let depthScaleY: number;
let staticSprites = new Array<StaticSprite>();
let interactableSprites = new Array<InteractableSprite>();
let npcSprites = new Array<NPCSprite>();
let playerSprite;
let navmesh;

let items = {};         // database of items
let itemslotbtns = [];  // array of itemslot html buttons
let itembtns = [];      // array of item html buttons
let invent = new Inventory(); // the player's inventory
let selectedItem;       // user can select an item from inventory by left clicking
let selectedItemBtn;

// true iff the player is talking to an NPC
let inConversation: boolean = false;

// map from level name to and object giving details about what has changed
let levelSaveInfo = {};

let fbWidth;
let fbHeight;
let lastTime;

function gameLoop() // TODO - split draw into update and draw functions
{
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, fbWidth, fbHeight);

    // set origin to the canvas's centre
    ctx.save();
    ctx.translate(fbWidth/2, fbHeight/2);
    ctx.scale(sceneScale, sceneScale);

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;

    // draw the scene specific sprites
    for(const sprite of staticSprites)
    {
        sprite.draw(currentTime, deltaTime);
    }

    // draw the sprites which the player can interact with
    for(const sprite of interactableSprites)
    {
        sprite.draw(currentTime, deltaTime);
    }

    // draw the NPC sprites
    for(const sprite of npcSprites)
    {
        sprite.draw(currentTime, deltaTime);
    }

    // draw the player sprite
    playerSprite.draw(currentTime, deltaTime);

    // DEBUG - draw the collision boxes
    navmesh.draw();

    // restore canvas to original settings
    ctx.restore();

    lastTime = currentTime;
}

function addInputCallbacks() {
    inputManager.addPrimaryMouseDownCallback((mousex: number, mousey: number) => {
        if(!inConversation) {
            let x = (mousex - canvas.offsetLeft - fbWidth/2) / sceneScale;
            let y = (mousey - canvas.offsetTop - fbHeight/2) / sceneScale;
            console.log("left mouse down at (" + x + ", " + y + ")");
            let interactedWithSprite: boolean = false;

            // check for clicks on interactable (static) sprites
            for(const sprite of interactableSprites)
            {
                if(sprite.inInteractionZone(playerSprite.x, playerSprite.y) && sprite.inClickZone(x, y)) {
                    // interact with the sprite
                    const obj = sprite.interact(selectedItem);
                    if(obj != null) {
                        playerSprite.openSpeechBubble(obj.text);
                        for(const itm of obj.items) {
                            invent.addItem(itm);
                            refreshAllItemsDisplayed();
                        }
                        if(obj.audio != null) {
                            obj.audio.play();
                        }
                    } else {
                        playerSprite.openSpeechBubble("That's a rubbish idea!");
                    }
                    interactedWithSprite = true;
                    break;
                }
            }

            // check for clicks on NPC sprites
            for(const sprite of npcSprites)
            {
                if(sprite.inInteractionZone(playerSprite.x, playerSprite.y) && sprite.inClickZone(x, y)) {
                    openChatGUI(sprite.getConversation());
                    interactedWithSprite = true;
                }
            }

            if(!interactedWithSprite) {
                let waypoints = navmesh.getWaypoints(playerSprite.x, playerSprite.y, x, y);
                playerSprite.setWaypoints(waypoints);
            }
        }
    });

    inputManager.addSecondaryMouseDownCallback((mousex: number, mousey: number) => {
        if(!inConversation) {
            let x = (mousex - canvas.offsetLeft - fbWidth/2) / sceneScale;
            let y = (mousey - canvas.offsetTop - fbHeight/2) / sceneScale;
            console.log("right mouse down at (" + x + ", " + y + ")");

            // check for clicks on interactable (static) sprites
            for(const sprite of interactableSprites)
            {
                if(sprite.inClickZone(x, y)) {
                    // examine the interactable sprite
                    playerSprite.openSpeechBubble(sprite.getExamineText());
                    if(sprite.getExamineAudio() != null) {
                        sprite.getExamineAudio().play();
                    }
                    break;
                }
            }

            // check for clicks on NPC sprites
            for(const sprite of npcSprites)
            {
                if(sprite.inClickZone(x, y)) {
                    // examine the NPC sprite
                    playerSprite.openSpeechBubble(sprite.getExamineText());
                    if(sprite.getExamineAudio() != null) {
                        sprite.getExamineAudio().play();
                    }
                    break;
                }
            }
        }
    });
}

function loadPlayerSprite(): Promise<AnimatedSprite>
{
    return new Promise<AnimatedSprite>((resolve, reject) => {
        let atlas = new TextureAtlas("res/atlases/animated.png");
        let playerSprite;
        const atlasLoadedPromise = atlas.load().then(() => {
            const TEST_ANIMATION = new SpriteAnimation(2, atlas, "animated");
            playerSprite = new PlayerSprite(100, 200, 1.25, "centre", "top", [TEST_ANIMATION]);
            playerSprite.setCurrentAnimation(0);
        }).catch(() => {
            console.log('error: unable to load player sprite texture atlas');
            reject(null);
        });

        let speechBubbleImage;
        const speechBubbleLoadedPromise = ImageLoader.loadImage("res/images/speech_bubble.png").then((img) => {
            speechBubbleImage = img;
        }).catch(() => {
            console.log("error: speech bubble image could not be loaded");
            reject(null);
        });

        Promise.all([atlasLoadedPromise, speechBubbleLoadedPromise]).then(() => {
            playerSprite.setSpeechBubbleImage(speechBubbleImage);
            resolve(playerSprite);
        });
    });
}

// program entry point
window.onload = () =>
{
    initCanvasAndContext();
    inputManager = new InputManager(canvas);
    addInputCallbacks();

    // set the canvas size
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
    fbWidth = canvas.width;
    fbHeight = canvas.height;

    // level setup data
    let playerStartX = 0;
    let playerStartY = 0;

    const loadPlayerSpritePromise = loadPlayerSprite().then((sprite) => {
        playerSprite = sprite;
    }).catch(() => {
        console.log("error");
    });

    const loadItemsPromise = JSONLoader.loadJSONFile("res/items/items.json").then((obj) => {
        //console.log(obj.items)
        for(const id in obj.items)
        {
            const itm = obj.items[id];
            items[id] = new Item(itm.name, itm.examine_text, new Audio(itm.examine_audio), itm.image);
        }
        for(const id in obj.combinations)
        {
            const combination = obj.combinations[id];
            const item1 = items[combination.item1];
            const item2 = items[combination.item2];
            const itemsOut = [];
            for(const idOut of combination.items_out)
            {
                itemsOut.push(items[idOut]);
            }
            if(item1 != null && item2 != null)
            {
                item1.addCombination(item2, itemsOut);
                item2.addCombination(item1, itemsOut);
            }
        }
        loadLocalGameSave();
        initGUIControllers();
    }).catch(() => {
        console.log("error: items could not be loaded");
    }).then(() => {
        return Level.loadLevel("res/levels/level1.json", items);
    }).then((levelData) => {
        img = levelData.backgroundImg;
        staticSprites = levelData.staticSprites;
        interactableSprites = levelData.interactableSprites;
        npcSprites = levelData.npcSprites;
        levelScale = levelData.sceneScale ? levelData.sceneScale : 1.0;
        sceneScale = levelScale * canvas.height/880;  // scale based on the canvas size so game fits on screen
        depthScaleY = levelData.depthScaleY;

        playerStartX = levelData.playerStartX;
        playerStartY = levelData.playerStartY;

        navmesh = levelData.navmesh;
    }).catch(() => {
        console.log("error: level could not be loaded");
    });

    Promise.all([loadPlayerSpritePromise, loadItemsPromise]).then(() => {
        playerSprite.x = playerStartX;
        playerSprite.y = playerStartY;
        playerSprite.setStartPos(playerStartX, playerStartY);
        playerSprite.setDepthScale(depthScaleY);
        lastTime = Date.now();
        gameLoop();
    }).catch(() => {
        console.log("error: game could not be loaded");
    });
}

// on window resize change the scale
window.onresize = () => {
    // set the canvas size
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
    fbWidth = canvas.width;
    fbHeight = canvas.height;
    sceneScale = levelScale * canvas.height/880;  // scale based on the canvas size so game fits on screen
    console.log(sceneScale);
}

// chat gui
function openChatGUI(conversation: Conversation) {
    if(conversation != null) {
        let chatpanel = document.getElementById("chatpanel");
        if(chatpanel != null) {
            // remove the chat panel if it already exists
            chatpanel.parentNode.removeChild(chatpanel);
        }

        chatpanel = document.createElement("div");
        chatpanel.id = "chatpanel";
        document.body.insertBefore(chatpanel, document.getElementById("invent"));

        // create a GUI for the dialog
        let d = conversation.getFirstDialog();
        createDialogGUI(chatpanel as HTMLDivElement, d);
    }
}

function createDialogGUI(chatpanel: HTMLDivElement, d: Dialog) {
    chatpanel.innerHTML = "";   // clear the div of previous contents

    if(d != null) {
        inConversation = true;

        // add the speaker image based on whether player or npc is speaking
        let speakerimg = document.createElement("img");
        speakerimg.src = "res/images/player_head.png";
        speakerimg.classList.add(d.getSpeaker() == "player" ? "playerchathead" : "npcchathead");
        chatpanel.appendChild(speakerimg);

        // add labels and buttons for this dialog
        d.createGUIElement(chatpanel, invent).then((nextDialog: Dialog) => {
            if(nextDialog != null) {
                // stop the dialog audio
                if(d.getAudio() != null) {
                    d.getAudio().pause();
                    d.getAudio().currentTime = 0;
                }

                // advance to next dialog
                createDialogGUI(chatpanel, nextDialog);
            } else {
                // next dialog is null, therefore, exit conversation
                chatpanel.parentNode.removeChild(chatpanel);
                inConversation = false;
            }
        });

        // refresh inventory GUI
        refreshAllItemsDisplayed();

        // play the dialog audio
        if(d.getAudio() != null) {
            d.getAudio().play();
        }
    }
}

// gui control
function initGUIControllers() {
    // get all of the item slot html buttons
    itemslotbtns.push(document.getElementById("itemslot1"));
    itemslotbtns.push(document.getElementById("itemslot2"));
    itemslotbtns.push(document.getElementById("itemslot3"));
    itemslotbtns.push(document.getElementById("itemslot4"));
    itemslotbtns.push(document.getElementById("itemslot5"));
    itemslotbtns.push(document.getElementById("itemslot6"));
    itemslotbtns.push(document.getElementById("itemslot7"));
    itemslotbtns.push(document.getElementById("itemslot8"));
    itemslotbtns.push(document.getElementById("itemslot9"));

    // add a button for each item in the player's inventory
    for(let index = 0; index < invent.getItems().length; index ++) {
        const item = invent.getItems()[index];
        if(item != null) {
            // add a button for each item in the player's inventory
            addNewItemButton(index, item);
        }
    }

    for(let index = 0; index < itemslotbtns.length; index ++)
    {
        const itemslotbtn = itemslotbtns[index];
        itemslotbtn.onclick = (evt: MouseEvent) => {
            onItemSlotClick(itemslotbtn, index, evt);
        }
    }
}

function addNewItemButton(itemslotIndex: number, item: Item)
{
    // add a button for the item
    let itembtn = document.createElement("button");
    itembtn.classList.add("item");
    itembtn.style.cssText = `background-image: url(${item.getImagePath()});`;

    document.getElementById("invent").insertBefore(itembtn, itemslotbtns[itemslotIndex]);

    // add a mouse click callback to the new element
    itembtn.onmousedown = (evt: MouseEvent) => {
        onItemClick(itembtn, item, evt);
    }
}

function refreshAllItemsDisplayed()
{
    // first, remove all item buttons from the dom
    const elems = document.getElementsByClassName("item");
    for(let index = 0; index < elems.length; index ++)
    {
        let element = elems[index];
        element.parentNode.removeChild(element);
    }

    // add a button for each item in the player's inventory
    for(let index = 0; index < invent.getItems().length; index ++) {
        const item = invent.getItems()[index];
        if(item != null) {
            // add a button for each item in the player's inventory
            addNewItemButton(index, item);
        }
    }
}

function refreshItemDisplayed(itembtn: HTMLButtonElement, item: Item)
{
    if(item != null) {
        // change the image displayed on the item button
        itembtn.style.cssText = `background-image: url(${item.getImagePath()});`;
    } else {
        // remove the item button from the dom
        itembtn.parentNode.removeChild(itembtn);
    }
}

function onItemSlotClick(itemslotbtn: HTMLButtonElement, itemslotIndex: number, evt: MouseEvent)
{
    // move selected item to this slot
    if(selectedItem != null && selectedItemBtn != null)
    {
        // remove from previous itemslot and add to new itemslot
        selectedItemBtn.classList.remove("selecteditem");
        refreshItemDisplayed(selectedItemBtn, null);
        addNewItemButton(itemslotIndex, selectedItem);
        console.log(invent.moveItem(selectedItem, itemslotIndex));
        console.log(invent.getItems());
        selectedItem = null;
        selectedItemBtn = null;
    }
}

function onItemClick(itembtn: HTMLButtonElement, item: Item, evt: MouseEvent)
{
    if(evt.button === 0) {  // left click
        // combine 2 items, (can't combine item with itself)
        if(selectedItem != null && selectedItemBtn != null && item !== selectedItem)
        {
            const outItems = selectedItem.combine(item);
            if(outItems != null)
            {
                refreshItemDisplayed(selectedItemBtn, null);
                refreshItemDisplayed(itembtn, null);
                invent.removeItem(selectedItem);
                invent.removeItem(item);
                for(const outItem of outItems)
                {
                    invent.addItem(outItem);
                }
                selectedItem = null;
                selectedItemBtn = null;
                console.log(invent.getItems());
                refreshAllItemsDisplayed();
            }
            else
            {
                selectedItemBtn.classList.remove("selecteditem");
                selectedItem = null;
                selectedItemBtn = null;
            }
        }
        // select an item
        else
        {
            if(item === selectedItem) {
                selectedItemBtn.classList.remove("selecteditem");
                selectedItem = null;
                selectedItemBtn = null;
            } else {
                selectedItem = item;
                selectedItemBtn = itembtn;
                selectedItemBtn.classList.add("selecteditem");
            }
        }
    } else if(evt.button === 2) {   // right click
        playerSprite.openSpeechBubble(item.getExamineText());
        if(item.getExamineAudio() != null) {
            item.getExamineAudio().play();
        }
    }
}

document.getElementById("savebtn").onclick = () => {
    saveGameLocally(localStorage.lastSavedIndex);
};

document.getElementById("exitbtn").onclick = () => {
    resetLocalGameSave();
};

function loadLocalGameSave()
{
    console.log("local storage", localStorage);
    console.log("session storage", sessionStorage);
    if(typeof(Storage) !== "undefined") {
        // get a list of game saves
        const saves = JSON.parse(localStorage.saves);

        // determine which save game to load
        if(sessionStorage.saveToLoadIndex != null) {
            if(saves.length > sessionStorage.saveToLoadIndex) {
                // get the correct save game
                const save = saves[sessionStorage.saveToLoadIndex];

                // load the player's items
                for(const itemid of save.invent)
                {
                    if(itemid != null) {
                        console.log(itemid);
                        invent.addItem(items[itemid]);
                    }
                }
            }
        }
    } else {
        console.log("error: no local storage to load");
    }
}

// save the game locally
function saveGameLocally(overwriteIndex: number = undefined)
{
    if(typeof(Storage) !== "undefined") {
        console.log("saving game locally");
        let save1 = { invent: null, levelData: null };

        // create an array of item IDs representing the player's inventory
        let itemIDs = new Array<string>(9);
        for(const inventIndex in invent.getItems()) {
            for(const itemID in items) {
                console.log(itemID, inventIndex)
                if(items[itemID] === invent.getItems()[inventIndex]) {
                    itemIDs[inventIndex] = itemID;
                }
            }
        }
        // save the array of item IDs to local storage
        save1.invent = itemIDs;

        // TODO - save the position of the sprites and the level name
        let levelData = { player_x: null, player_y: null, npcSprites: null };
        // store the player's position
        levelData.player_x = playerSprite.getX();
        levelData.player_y = playerSprite.getY();
        // store the positions of other nav sprites
        levelData.npcSprites = [];
        for(const sprite of npcSprites)
        {
            levelData.npcSprites.push({ x: sprite.getX(), y: sprite.getY() });
        }
        // save the level data to local storage
        save1.levelData = levelData;

        // NOTE - must do this for all levels explored in this playthrough
        // TODO - make a note of any interactable sprites which have had their interactions used up
        // TODO - make a note of any receive item dialogs which have been used up

        if(localStorage.saves == null) {
            // create an array of saves containing the new save
            localStorage.saves = JSON.stringify([save1]);
            localStorage.lastSavedIndex = 0;
        } else {
            let saves = JSON.parse(localStorage.saves);
            if(overwriteIndex != null) {
                // overwrite the save specified
                if(saves.length > overwriteIndex) {
                    saves[overwriteIndex] = save1;
                    localStorage.lastSavedIndex = overwriteIndex;
                } else {
                    saves.push(save1);
                    localStorage.lastSavedIndex = saves.length - 1;
                }
            } else {
                // add the new save to the save games list
                saves.push(save1);
                localStorage.lastSavedIndex = saves.length - 1;
            }
            // restore the save data
            localStorage.saves = JSON.stringify(saves);
        }

    } else {
        console.log("error: no local storage support");
        alert("error: no local storage support");
    }
}

function resetLocalGameSave()
{
    if(typeof(Storage) !== "undefined") {
        console.log("resetting local game save");
        localStorage.removeItem("save1");
    } else {
        console.log("error: no local storage to reset");
        alert("error: no local storage to reset");
    }
}
