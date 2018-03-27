import {ctx} from "../glob.ts"
import {Point} from "./Point"
import {IShape} from "./IShape"

export class Polygon implements IShape
{
    public x: number = 0;
    public y: number = 0;
    public velocityX: number = 0;
    public velocityY: number = 0;
    public lineWidth: number = 5;
    public color: string = "black";
    public size: number = 20;
    public rotation: number = 0;
    public rotationSpeed: number = 0;
    public pointList: Array<Point> = new Array<Point>();

    public draw = (): void => {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < -this.size * 2) {
            this.x = 1280 + this.size * 2;
        }
        else if (this.x > 1280 + this.size * 2) {
            this.x = -2 * this.size;
        }

        if (this.y < -this.size * 2) {
            this.y = 720 + this.size * 2;
        }
        else if (this.y > 720 + this.size * 2) {
            this.y = -2 * this.size;
        }

        this.rotation += this.rotationSpeed;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;

        ctx.moveTo(this.pointList[this.pointList.length - 1].x, this.pointList[this.pointList.length - 1].y);

        for (var i: number = 0; i < this.pointList.length; i++) {
            ctx.lineTo(this.pointList[i].x, this.pointList[i].y);
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }

    constructor(x: number = undefined, y: number = undefined, size: number = undefined,
        color: string = "black", line_width: number = 2) {
        if (x == undefined) {
            this.x = Math.round(Math.random() * 1280);
        }
        else {
            this.x = x;
        }

        if (y == undefined) {
            this.y = Math.round(Math.random() * 720);
        }
        else {
            this.y = y;
        }

        if (size == undefined) {
            this.size = Math.ceil(Math.random() * 10) + 4;
        }
        else {
            this.size = size;
        }

        this.velocityX = Math.round(Math.random() * 4 - 2);
        this.velocityY = Math.round(Math.random() * 4 - 2);

        this.rotationSpeed = Math.random() * 0.06 - 0.03;

        var xrand: number = 0;
        var yrand: number = 0;

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand, yrand + 3 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand - 1 * this.size, yrand + 2 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand - 2 * this.size, yrand + 2 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand - 3 * this.size, yrand + this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand - 4 * this.size, yrand));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand - 1 * this.size, yrand - 3 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand + 2 * this.size, yrand - 4 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand + 2 * this.size, yrand - 3 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand + 4 * this.size, yrand - 2 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand + 4 * this.size, yrand + this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.pointList.push(new Point(xrand + 3 * this.size, yrand + 2 * this.size));

        xrand = Math.round(Math.random() * this.size - this.size / 2);
        yrand = Math.round(Math.random() * this.size - this.size / 2);

        this.color = color;
        this.lineWidth = line_width;
    }
}
