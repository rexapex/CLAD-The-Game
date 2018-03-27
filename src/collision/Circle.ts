import {ctx} from "../glob.ts"
import {IShape} from "./IShape"

export class Circle implements IShape
{
    public x: number = 0;
    public y: number = 0;
    public radius: number = 10;
    public lineWidth: number = 2;
    public color: string = "red";

    constructor(x: number, y: number, radius: number, color: string = "red", line_width: number = 2)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }

    public draw(): void
    {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    }

    public contains(x: number, y: number)
    {
        return ((y - this.y) ** 2 + (x - this.x) ** 2) <= this.radius ** 2;
    }
}
