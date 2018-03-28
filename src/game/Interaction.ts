import {Item} from "../items/Item"

export abstract class Interaction
{
    // item can be null
    constructor(protected item: Item) {}

    // interact with the object
    public abstract interact(item: Item):  {text: string, audio: HTMLAudioElement, items: Array<Item>};

    public getItem(): Item
    {
        return this.item;
    }
}
