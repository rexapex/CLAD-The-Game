import {ctx} from "../glob.ts"
import {NavSprite} from "./NavSprite"
import {Point} from "../collision/Point"
import {AnimatedSprite} from "./AnimatedSprite"
import {SpriteAnimation} from "./SpriteAnimation"
import {Conversation} from "../chat/Conversation"
import {Circle} from "../collision/Circle"
import {Rectangle} from "../collision/Rectangle"

export class NPCSprite extends NavSprite
{
    private speechBubbleOpen: boolean = false;
    private speechBubbleShownAt: number;
    private speechBubbleText: string;
    private textWidth: number;  // width of the text in pixels
    private readonly BASE_FONT_SIZE = 75;

    public constructor(x: number, y: number, scale: number, originHorizontal: string, originVertical: string, anims: Array<SpriteAnimation>,
                protected examineText: string, protected examineAudio: HTMLAudioElement, protected interactionZone: Circle, protected clickZone: Rectangle, protected conversation: Conversation, moveSpeed: number = 0.5)
    {
        super(x, y, scale, originHorizontal, originVertical, anims, moveSpeed);
        this.setCurrentAnimation(0);
    }

    public draw(currentTime: number, deltaTime: number): void {
        super.draw(currentTime, deltaTime);

        if(this.speechBubbleOpen) {
            // draw the speech bubble
            ctx.save();
            ctx.translate(this.x, this.originY);
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

        // DEBUG - draw the circle and rectangle
        this.clickZone.draw();
        this.interactionZone.draw();
    }

    public openSpeechBubble(text: string) {
        if(text != null) {
            this.speechBubbleOpen = true;
            this.speechBubbleText = text;
            this.speechBubbleShownAt = Date.now();

            ctx.font = `${this.BASE_FONT_SIZE}px Bookman`;
            this.textWidth = ctx.measureText(text).width;
        }
    }

    public getConversation(): Conversation
    {
        return this.conversation;
    }

    public inInteractionZone(x: number, y: number): boolean
    {
        return this.interactionZone.contains(x, y);
    }

    public inClickZone(x: number, y: number): boolean
    {
        return this.clickZone.contains(x, y);
    }

    public getExamineText(): string
    {
        return this.examineText;
    }

    public getExamineAudio(): HTMLAudioElement
    {
        return this.examineAudio;
    }
}
