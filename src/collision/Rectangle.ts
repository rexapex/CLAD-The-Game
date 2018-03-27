import {ctx} from "../glob.ts"
import {IShape} from "./IShape"

export class Rectangle implements IShape
{
    public x: number = 0;
    public y: number = 0;
    public lineWidth: number = 5;
    public width: number = 0;
    public height: number = 0;
    public color: string = "blue";

    constructor(x: number, y: number, width: number, height: number, color: string = "red", line_width: number = 2)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = line_width;
    }

    public draw(): void
    {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.restore();
    }

    public contains(x: number, y: number)
    {
        return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
    }
}
