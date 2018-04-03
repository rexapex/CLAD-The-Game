import {Item} from "../items/Item"

export abstract class Interaction
{
    private used = false;

    // item can be null
    constructor(protected item: Item) {}

    // interact with the object
    public abstract interact(item: Item):  {text: string, audio: HTMLAudioElement, items: Array<Item>};

    public getItem(): Item
    {
        return this.item;
    }

    public setUsed(): void
    {
        this.used = true;
    }

    public getUsed(): boolean
    {
        return this.used;
    }
}
