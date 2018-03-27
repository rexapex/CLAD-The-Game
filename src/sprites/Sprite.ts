export abstract class Sprite
{
    protected baseScale: number;
    protected originX: number;
    protected originY: number;

    constructor(protected x: number, protected y: number, protected scale: number, protected originHorizontal: string, protected originVertical: string, protected depth: number = 0)
    {
        this.baseScale = this.scale;
    }

    protected refreshOrigin(width: number, height: number) {
        // calculate the position at which to draw the sprite
        if(this.originHorizontal == "right") {
            this.originX = this.x - width * this.scale;
        } else if(this.originHorizontal == "left") {
            this.originX = this.x;
        } else {
            this.originX = this.x - width/2 * this.scale;
        }

        // calculate the position at which to draw the sprite
        if(this.originVertical == "top") {
            this.originY = this.y - height* this.scale;
        } else if(this.originVertical == "bottom") {
            this.originY = this.y;
        } else {
            this.originY = this.y - height/2 * this.scale;
        }
    }


    public abstract draw(currentTime: number, deltaTime: number): void;
}
