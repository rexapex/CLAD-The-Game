export class Point
{
    public x: number = 0;
    public y: number = 0;

    constructor(x: number = 0, y: number = 0)
    {
        this.x = x;
        this.y = y;
    }

    public equals = (p: Point): boolean => {
        return p != null && p.x === this.x && p.y === this.y;
    }

    public toString = () : string => {
        return `Point(${this.x},${this.y})`;
    }
}
