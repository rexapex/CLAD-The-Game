import {Inventory} from "../items/Inventory"

export abstract class Dialog
{
    constructor(protected text: string, protected speaker: string, protected audio: HTMLAudioElement) {}

    public abstract createGUIElement(div: HTMLDivElement, invent: Inventory): Promise<Dialog>;

    public getText(): string {
        return this.text;
    }

    public getSpeaker(): string {
        return this.speaker;
    }

    public getAudio(): HTMLAudioElement {
        return this.audio;
    }
}
