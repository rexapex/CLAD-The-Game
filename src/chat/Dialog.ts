export abstract class Dialog
{
    constructor(protected text: string, protected speaker: string) {}

    public abstract createGUIElement(div: HTMLDivElement): Promise<Dialog>

    public getText(): string {
        return this.text;
    }

    public getSpeaker(): string {
        return this.speaker;
    }
}
