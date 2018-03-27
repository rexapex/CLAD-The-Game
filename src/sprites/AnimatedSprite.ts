import {Sprite} from "./Sprite"
import {SpriteAnimation} from "./SpriteAnimation"

export class AnimatedSprite extends Sprite
{
    protected spriteAnimations: Array<SpriteAnimation> = [];
    protected currentAnimation = -1;

    public constructor(x: number, y: number, scale: number, originHorizontal: string, originVertical: string, anims: Array<SpriteAnimation>) {
        super(x, y, scale, originHorizontal, originVertical);
        if(anims != null) {
            this.spriteAnimations = anims;
        }
    }

    public draw(currentTime: number, deltaTime: number): void {
        if(this.currentAnimation >= 0) {
            const anim = this.spriteAnimations[this.currentAnimation];
            this.refreshOrigin(anim.getCurrentFrame().w, anim.getCurrentFrame().h);
            anim.draw(currentTime, this.originX, this.originY, this.scale);
        }
    }

    public setCurrentAnimation = (newAnimationIndex: number): void => {
        if(newAnimationIndex < this.spriteAnimations.length) {
            this.currentAnimation = newAnimationIndex;
        }
    }

    public addSpriteAnimation = (anim): void => {
        if(anim != null) {
            this.spriteAnimations.push(anim);
        }
    }

    public setSpriteAnimations = (anims: Array<SpriteAnimation>): void => {
        if(anims != null) {
            this.spriteAnimations = anims;
            this.currentAnimation = -1;
        }
    }

    public setPos(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
