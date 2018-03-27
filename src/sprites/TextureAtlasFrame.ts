export class TextureAtlasFrame
{
    // http://www.typescriptgames.com/AnimatedSprites.html
    x: number;
    y: number;
    w: number;
    h: number;

    offsetx: number;    // image will be offset by these values so frames line up in animation
    offsety: number;

    frameDuration: number;  // the number of milliseconds this frame lasts

    constructor(x: number = 0, y: number = 0, w: number = 1, h: number = 1, offsetx: number = 0, offsety: number = 0, frameDuration: number = 100)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.frameDuration = frameDuration;
    }

    public set(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }
}
