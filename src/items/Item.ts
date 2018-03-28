export class Item
{
    protected combinations: Array<{other: Item, out: Array<Item>}>;

    constructor(protected name: string, protected examineText: string, protected examineAudio: HTMLAudioElement, protected imgpath: string)
    {
        this.combinations = [];
    }

    public combine(other: Item): Array<Item>
    {
        for(const cmb of this.combinations)
        {
            // if the item is combinable, return the array of items created
            if(other === cmb.other) {
                return cmb.out;
            }
        }

        return null;
    }

    public addCombination(other: Item, out: Array<Item>): void
    {
        if(other != null && out != null)
        {
            this.combinations.push({other: other, out: out});
        }
    }

    public getName(): string
    {
        return this.name;
    }

    public getExamineText(): string
    {
        return this.examineText;
    }

    public getExamineAudio(): HTMLAudioElement
    {
        return this.examineAudio;
    }

    public getImagePath(): string
    {
        return this.imgpath;
    }

    public toString(): string
    {
        return `Item(${this.name})`;
    }
}
