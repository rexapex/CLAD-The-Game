import {ctx} from "../glob.ts"
import {SpriteAnimation} from "./SpriteAnimation"
import {StaticSprite} from "./StaticSprite"
import {Interaction} from "../game/Interaction"
import {TextureAtlas} from "./TextureAtlas"
import {Item} from "../items/Item"
import {Circle} from "../collision/Circle"
import {Rectangle} from "../collision/Rectangle"

export class InteractableSprite extends StaticSprite
{
    constructor(x: number, y: number, scale: number, originHorizontal: string, originVertical: string, atlas: TextureAtlas, imageName: string,
                protected examineText: string, protected examineAudio: HTMLAudioElement, protected interactionZone: Circle, protected clickZone: Rectangle, protected interactions: Array<Interaction>)
    {
        super(x, y, scale, originHorizontal, originVertical, atlas, imageName);
    }

    public draw(currentTime: number, deltaTime: number)
    {
        super.draw(currentTime, deltaTime);

        // DEBUG - draw the circle and rectangle
        this.clickZone.draw();
        this.interactionZone.draw();
    }

    public inInteractionZone(x: number, y: number): boolean
    {
        return this.interactionZone.contains(x, y);
    }

    public inClickZone(x: number, y: number): boolean
    {
        return this.clickZone.contains(x, y);
    }

    // interact with the sprite
    // item can be null
    public interact(item: Item): {text: string, audio: HTMLAudioElement, items: Array<Item>}
    {
        for(const inter of this.interactions)
        {
            // if the items match, then interact with the object
            if(inter.getItem() == item) {
                let obj = inter.interact(item);
                if(obj != null) {
                    // remove the interaction if it has been fulfilled
                    this.interactions.splice(this.interactions.indexOf(inter), 1);
                }
                return obj;
            }
        }

        return null;
    }

    public getExamineText(): string
    {
        return this.examineText;
    }

    public getExamineAudio(): HTMLAudioElement
    {
        return this.examineAudio;
    }
}
