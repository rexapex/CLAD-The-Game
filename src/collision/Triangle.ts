import {ctx} from "../glob.ts"
import {IShape} from "./IShape"
import {Point} from "./Point"

export class Triangle
{
    public point1: Point;
    public point2: Point;
    public point3: Point;
    private area: number;
    private sign: number;

    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)
    {
        this.point1 = new Point(x1, y1);
        this.point2 = new Point(x2, y2);
        this.point3 = new Point(x3, y3);
        this.area = 1/2 * (-this.point2.y * this.point3.x + this.point1.y * (-this.point2.x + this.point3.x) + this.point1.x * (this.point2.y - this.point3.y) + this.point2.x * this.point3.y);
        this.sign = this.area < 0 ? -1 : 1;
    }

    public draw = (): void => {
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(this.point1.x, this.point1.y);
        ctx.lineTo(this.point2.x, this.point2.y);
        ctx.lineTo(this.point3.x, this.point3.y);
        ctx.lineTo(this.point1.x, this.point1.y);
        ctx.stroke();
        ctx.restore();
    }

    // returns true iff the point p is a vertex of the triangle
    public isVertex = (p: Point): boolean => {
        return this.point1.equals(p) || this.point2.equals(p) || this.point3.equals(p);
    }

    // http://jsfiddle.net/PerroAZUL/zdaY8/1/
    public contains = (x: number, y: number): boolean => {
        var s = (this.point1.y * this.point3.x - this.point1.x * this.point3.y + (this.point3.y - this.point1.y) * x + (this.point1.x - this.point3.x) * y) * this.sign;
        var t = (this.point1.x * this.point2.y - this.point1.y * this.point2.x + (this.point1.y - this.point2.y) * x + (this.point2.x - this.point1.x) * y) * this.sign;
        return (s > 0 && t > 0 && (s + t) < 2 * this.area * this.sign) || (this.isVertex(new Point(x, y)));
    }
}
