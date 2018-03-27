import {ctx} from "../glob.ts"
import {TextureAtlas} from './TextureAtlas'
import {TextureAtlasFrame} from "./TextureAtlasFrame"

export class SpriteAnimation
{
    // http://www.typescriptgames.com/AnimatedSprites.html
    protected currentFrame = 0;
    private lastTime = Date.now();
    constructor(protected numFrames: number, protected atlas: TextureAtlas, protected sequenceName: string) {}

    public draw = (currentTime: number, x: number, y: number, scale: number): void => {
        let frame = this.getCurrentFrame();
        if(frame.frameDuration <= currentTime - this.lastTime)
        {
            this.currentFrame++;
            if(this.currentFrame >= this.numFrames)
            {
                this.currentFrame = 0;
            }
            this.lastTime = currentTime;
            frame = this.getCurrentFrame();
        }

        // sprites are drawn from their centre-x, bottom-y, i.e. feet position
        //let topLeftX = x - frame.w/2 * scale;
        //let topLeftY = y - frame.h * scale;

        ctx.save();
        ctx.translate(x, y);
        ctx.rect(frame.x, frame.y, frame.w, frame.h);
        ctx.drawImage(this.atlas.image,
            frame.x, frame.y,
            frame.w, frame.h,
            frame.offsetx, frame.offsety,
            frame.w * scale, frame.h * scale);
        ctx.restore();
    }

    public getCurrentFrame = (): TextureAtlasFrame => {
        if(this.currentFrame > 9)
        {
            return this.atlas.frames[this.sequenceName + "_" + this.currentFrame.toString()];
        }
        return this.atlas.frames[this.sequenceName + "_" + "0" + this.currentFrame.toString()];
    }
}
