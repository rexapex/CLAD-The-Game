import {ctx} from "../glob.ts"
import {Sprite} from "./Sprite"
import {TextureAtlas} from "./TextureAtlas"
import {TextureAtlasFrame} from "./TextureAtlasFrame"

export class StaticSprite extends Sprite
{
    protected image: TextureAtlasFrame;

    constructor(x: number, y: number, scale: number, originHorizontal: string, originVertical: string, protected atlas: TextureAtlas, protected imageName: string)
    {
        super(x, y, scale, originHorizontal, originVertical);
    }

    public refreshImage(): void
    {
        this.image = this.atlas.frames[this.imageName]; // get the image from the atlas
        this.refreshOrigin(this.image.w, this.image.h);
    }

    public draw(currentTime: number, deltaTime: number): void
    {
        ctx.save();
        ctx.translate(this.originX, this.originY);
        ctx.rect(this.image.x, this.image.y, this.image.w, this.image.h);
        ctx.drawImage(this.atlas.image,
            this.image.x, this.image.y,
            this.image.w, this.image.h,
            this.image.offsetx, this.image.offsety,
            this.image.w * this.scale, this.image.h * this.scale);
        ctx.restore();
    }
}
