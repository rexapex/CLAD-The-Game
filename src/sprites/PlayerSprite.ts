import {ctx} from "../glob.ts"
import {NavSprite} from "./NavSprite"
import {Point} from "../collision/Point"
import {AnimatedSprite} from "./AnimatedSprite"
import {SpriteAnimation} from "./SpriteAnimation"

export class PlayerSprite extends NavSprite
{
    private speechBubbleImage: HTMLImageElement;
    private speechBubbleOpen: boolean = false;
    private speechBubbleShownAt: number;
    private speechBubbleText: string;
    private textWidth: number;  // width of the text in pixels
    private readonly BASE_FONT_SIZE = 75;

    public constructor(x: number, y: number, scale: number, originHorizontal: string, originVertical: string, anims: Array<SpriteAnimation>, moveSpeed: number = 0.5)
    {
        super(x, y, scale, originHorizontal, originVertical, anims, moveSpeed);
    }

    public draw(currentTime: number, deltaTime: number): void {
        super.draw(currentTime, deltaTime);

        if(this.speechBubbleOpen) {
            // draw the speech bubble
            ctx.save();
            ctx.translate(this.x, this.originY);
            //ctx.drawImage(this.speechBubbleImage, -this.speechBubbleImage.width/2 * this.scale, -this.speechBubbleImage.height/2 * this.scale, this.speechBubbleImage.width * this.scale, this.speechBubbleImage.height * this.scale);
            ctx.scale(this.scale, this.scale);
            ctx.shadowColor = "#555555";
            ctx.shadowBlur = 5;
            ctx.fillStyle = "#1AFF80";   // green: #1AFF80, amber: #FFB642, blue: #2ECFFF
            ctx.fillText(this.speechBubbleText, -this.textWidth/2, 0);
            ctx.restore();

            // speech bubble lasts 1/2 second for each word
            if(currentTime - this.speechBubbleShownAt >= this.speechBubbleText.split(" ").length * 500 + 500) {
                this.speechBubbleOpen = false;
            }
        }
    }

    public openSpeechBubble(text: string) {
        if(text != null) {
            this.speechBubbleOpen = true;
            this.speechBubbleText = text;
            this.speechBubbleShownAt = Date.now();

            ctx.font = `${this.BASE_FONT_SIZE}px Bookman`;
            this.textWidth = ctx.measureText(text).width;

            // create a div containing the text so the pixel width of text can be calculated
            // https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
            /*let div = document.createElement("div");
            div.style.cssText = `position: absolute; visibility: hidden; height: auto; width: auto; white-space: nowrap; font-size: ${this.BASE_FONT_SIZE}`;
            document.body.insertBefore(div, null);
            this.textWidth = div.clientWidth + 1;*/
            console.log("text width", this.textWidth);
        }
    }

    public setSpeechBubbleImage(img)
    {
        this.speechBubbleImage = img;
    }
}
