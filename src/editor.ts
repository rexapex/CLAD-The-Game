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
import {Item} from "./items/Item"
import {Inventory} from "./items/Inventory"

let inputManager;
let img: HTMLImageElement;
let sceneScale: number;
let levelScale: number;
let depthScaleY: number;
let staticSprites = new Array<StaticSprite>();
let interactableSprites = new Array<InteractableSprite>();
let playerStartPositions = new Array<StaticSprite>();
let navmesh;

let editorTextureAtlas;  // atlas of textures used by the editor

let items = {};         // database of items

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

    // draw the player sprite
    for(const sprite of playerStartPositions)
    {
        sprite.draw(currentTime, deltaTime);
    }

    // DEBUG - draw the collision boxes
    navmesh.draw();

    // restore canvas to original settings
    ctx.restore();

    lastTime = currentTime;
}

function addInputCallbacks()
{
    inputManager.addPrimaryMouseDownCallback((event: MouseEvent) => {
        let x = (event.layerX - canvas.offsetLeft - fbWidth/2) / sceneScale;
        let y = (event.layerY - canvas.offsetTop - fbHeight/2) / sceneScale;
        console.log("mouse down at (" + x + ", " + y + ")");
    });
}

// program entry point
window.onload = () =>
{
    initCanvasAndContext();
    inputManager = new InputManager(canvas);

    // set the canvas size
    canvas.width = window.innerWidth * 0.95;
    canvas.height = window.innerHeight * 0.95;
    fbWidth = canvas.width;
    fbHeight = canvas.height;


    editorTextureAtlas = new TextureAtlas("res/editor/editor_atlas.png");
    editorTextureAtlas.load().catch(() => {
        console.log("error: editor texture atlas could not be loaded");
    }).then(() => {
        return JSONLoader.loadJSONFile("res/items/items.json");
    }) .then((obj) => {
        //console.log(obj.items)
        for(const id in obj.items)
        {
            const itm = obj.items[id];
            items[id] = new Item(itm.name, itm.examine_text, itm.examine_audio, itm.image);
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
        initGUIControllers();
    }).catch(() => {
        console.log("error: items could not be loaded");
    }).then(() => {
        return Level.loadLevel("res/levels/level1.json", items);
    }).then((levelData) => {
        img = levelData.backgroundImg;
        staticSprites = levelData.staticSprites;
        interactableSprites = levelData.interactableSprites;
        levelScale = levelData.sceneScale ? levelData.sceneScale : 1.0;
        sceneScale = levelScale * canvas.height/880;  // scale based on the canvas size so game fits on screen
        depthScaleY = levelData.depthScaleY;
        navmesh = levelData.navmesh;

        for(const start of levelData.playerStarts) {
            let flag = new StaticSprite(start.x, start.y, 1, "centre", "top", editorTextureAtlas, "flag");
            flag.refreshImage();
            playerStartPositions.push(flag);
        }

        // start the game editor
        lastTime = Date.now();
        gameLoop();
    }).catch(() => {
        console.log("error: level could not be loaded");
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

// gui control
function initGUIControllers() {

}
