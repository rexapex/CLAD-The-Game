import {JSONLoader} from "../resources/JSONLoader"
import {ImageLoader} from "../resources/ImageLoader"
import {TextureAtlas} from "../sprites/TextureAtlas"
import {Sprite} from "../sprites/Sprite"
import {StaticSprite} from "../sprites/StaticSprite"
import {AnimatedSprite} from "../sprites/AnimatedSprite"
import {InteractableSprite} from "../sprites/InteractableSprite"
import {NPCSprite} from "../sprites/NPCSprite"
import {SpriteAnimation} from "../sprites/SpriteAnimation"
import {NavMesh} from "../collision/NavMesh"
import {Triangle} from "../collision/Triangle"
import {Interaction}  from "./Interaction"
import {ReceiveItemInteraction} from "./ReceiveItemInteraction"
import {Item} from "../items/Item"
import {Circle} from "../collision/Circle"
import {Rectangle} from "../collision/Rectangle"
import {Conversation} from "../chat/Conversation"
import {Dialog} from "../chat/Dialog"
import {ContinueDialog} from "../chat/ContinueDialog"
import {OptionDialog} from "../chat/OptionDialog"
import {ReceiveItemDialog} from "../chat/ReceiveItemDialog"

export class Level
{
    static loadLevel(path: string, items: any): Promise<any>
    {
        return new Promise<any>((resolve, reject) => {
            const levelDataPromise = JSONLoader.loadJSONFile(path).then((levelData) => {
                // create the texture atlas
                let atlas = new TextureAtlas(levelData.texture_atlas);
                const textureAtlasPromise = atlas.load().catch(() => {
                    console.log("error: texture atlas could not be loaded");
                });

                let allPromises = [textureAtlasPromise];

                // create the sprites
                let staticSprites = new Array<StaticSprite>();
                let interactableSprites = new Array<InteractableSprite>();
                let npcSprites = new Array<NPCSprite>();
                for(const obj of levelData.sprites)
                {
                    if(obj.type == "interactable") {
                        let interactions = new Array<Interaction>();
                        for(const inter of obj.interactions)    // create an array of interactions
                        {
                            if(inter.type == "receive_item") {
                                let receiveItems = new Array<Item>();
                                for(const itm of inter.items_received)   // create an array of receive items
                                {
                                    receiveItems.push(items[itm]);
                                }
                                interactions.push(new ReceiveItemInteraction(inter.item ? items[inter.item] : null, inter.success_text, inter.fail_text, new Audio(inter.success_audio), new Audio(inter.fail_audio), receiveItems))
                            }
                        }

                        interactableSprites.push(new InteractableSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name, obj.examine_text, new Audio(obj.examine_audio),
                                            new Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle(obj.x-obj.click_zone_width/2, obj.y-obj.click_zone_height/2, obj.click_zone_width, obj.click_zone_height), interactions));
                    } else if(obj.type == "npc") {

                        // load the animations
                        let atlas = new TextureAtlas(obj.atlas);
                        let animations: Array<SpriteAnimation> = [];
                        const atlasLoadedPromise = atlas.load().then(() => {
                            for(let sequenceName in obj.animations) {
                                const seq = obj.animations[sequenceName];
                                const anim = new SpriteAnimation(seq.num_frames, atlas, sequenceName);
                                animations.push(anim);
                            }

                            let npc = new NPCSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, animations, obj.examine_text, new Audio(obj.examine_audio),
                                                new Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle(obj.x-obj.click_zone_width/2, obj.y-obj.click_zone_height/2, obj.click_zone_width, obj.click_zone_height),
                                                Level.buildConversation(obj, items));
                            npc.setStartPos(obj.x, obj.y);
                            npc.setDepthScale(levelData.depth_scale_y);
                            npcSprites.push(npc);
                            console.log("npc atlas loaded");
                        }).catch(() => {
                            console.log('error: unable to load NPC sprite');
                            reject(null);
                        });
                        allPromises.push(atlasLoadedPromise);
                    } else {
                        staticSprites.push(new StaticSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name));
                    }
                }

                // create the navmesh
                let tris = [];
                for(let tri of levelData.navmesh) {
                    tris.push(new Triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3));
                }
                let navmesh = new NavMesh(tris);

                Promise.all(allPromises).then(() => {
                    console.log("scene files loaded");
                    for(const sprite of staticSprites) {
                        sprite.refreshImage();  // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }

                    for(const sprite of interactableSprites) {
                        sprite.refreshImage();  // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }

                    resolve({'textureAtlas': atlas, 'sceneScale': levelData.scene_scale,
                            'playerStartX': levelData.player_start_x, 'playerStartY': levelData.player_start_y, 'playerStarts': levelData.player_starts,
                            'depthScaleY': levelData.depth_scale_y, 'navmesh': navmesh, 'staticSprites': staticSprites,
                            'interactableSprites': interactableSprites, 'npcSprites': npcSprites});
                }).catch(() => {
                    reject(null);
                });
            }).catch(() => {
                console.log("error: failed to load level");
                reject(null);
            });
        });
    }

    private static buildConversation(spriteObj: any, items: any): Conversation
    {
        if(spriteObj.conversation != null) {
            if(spriteObj.conversation.first_dialog != null) {
                return new Conversation(Level.buildDialog(spriteObj.conversation.first_dialog, items));
            }
        }

        return null;
    }

    private static buildDialog(dialog: any, items: any): Dialog
    {
        if(dialog.type == "continue") {
            let nextDialog: Dialog;
            if(dialog.next_dialog != null) {
                nextDialog = Level.buildDialog(dialog.next_dialog, items);
            }
            return new ContinueDialog(dialog.text, dialog.speaker, nextDialog);
        } else if(dialog.type == "option") {
            let options = {};
            // create a dialog object for each option
            for(let optName in dialog.options) {
                options[optName] = Level.buildDialog(dialog.options[optName], items);
            }
            return new OptionDialog(dialog.text, dialog.speaker, options);
        } else if(dialog.type == "receive_item") {
            let nextDialog: Dialog;
            if(dialog.next_dialog != null) {
                nextDialog = Level.buildDialog(dialog.next_dialog, items);
            }
            let itemsLost = [];
            for(const id of dialog.items_lost) {
                itemsLost.push(items[id]);
            }
            let itemsReceived = [];
            for(const id of dialog.items_received) {
                itemsReceived.push(items[id]);
            }
            return new ReceiveItemDialog(dialog.text, dialog.speaker, nextDialog, itemsLost, itemsReceived);
        }

        return null;
    }

    private constructor() {}
}
