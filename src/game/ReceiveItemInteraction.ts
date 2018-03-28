import {Interaction} from "./Interaction"
import {Item} from "../items/Item"

export class ReceiveItemInteraction extends Interaction
{
    // item can be null
    constructor(item: Item, protected successText: string, protected failText: string,
            protected successAudio: HTMLAudioElement, protected failAudio: HTMLAudioElement, protected itemsReceived: Array<Item>)
    {
        super(item);
    }

    // interact with the object
    // returns a list of items received from the interaction
    public interact(item: Item): {text: string, audio: HTMLAudioElement, items: Array<Item>}
    {
        if(item == this.item)
        {
            return {text: this.successText, audio: this.successAudio, items: this.itemsReceived};
        }

        return {text: this.failText, audio: this.failAudio, items: null};
    }
}
