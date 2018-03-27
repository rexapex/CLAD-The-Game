import {AnimatedSprite} from "./AnimatedSprite"
import {SpriteAnimation} from "./SpriteAnimation"
import {Point} from "../collision/Point"

export class NavSprite extends AnimatedSprite
{
    private waypoints: Array<Point>;
    private nextWaypoint: Point;
    private moveSpeed: number;

    private depthScaleY: number;
    private startX: number;
    private startY: number;

    public constructor(x: number, y: number, scale: number, originHorizontal: string, originVertical: string, anims: Array<SpriteAnimation>, moveSpeed: number = 0.5) {
        super(x, y, scale, originHorizontal, originVertical, anims);
        this.moveSpeed = moveSpeed;
    }

    public draw(currentTime: number, deltaTime: number): void {
        // move towards the next waypoint
        if(this.nextWaypoint != null)
        {
            const angle = Math.atan(Math.abs(this.nextWaypoint.y - this.y) / Math.abs(this.nextWaypoint.x - this.x));
            const moveSpeedX = this.moveSpeed * deltaTime * Math.cos(angle) * this.scale;
            const moveSpeedY = this.moveSpeed * deltaTime * Math.sin(angle) * this.scale;

            // if the sprite has reached the waypoint (or thereabouts) then get the next waypoint
            if(this.x >= this.nextWaypoint.x - 5 && this.x <= this.nextWaypoint.x + 5 &&
                this.y >= this.nextWaypoint.y - 5 && this.y <= this.nextWaypoint.y + 5)
            {
                //console.log("arrived", this.x, this.y);
                this.x = this.nextWaypoint.x;
                this.y = this.nextWaypoint.y;
                if(this.waypoints != null && this.waypoints.length > 0) {
                    this.nextWaypoint = this.waypoints.pop();
                } else {
                    this.nextWaypoint = null;
                }
            }

            // move towards the next waypoint
            if(this.nextWaypoint != null) {
                if(this.x < this.nextWaypoint.x - 5) {
                    this.x += moveSpeedX;
                } else if(this.x > this.nextWaypoint.x + 5) {
                    this.x -= moveSpeedX;
                }

                if(this.y < this.nextWaypoint.y - 5) {
                    this.y += moveSpeedY;
                } else if(this.y > this.nextWaypoint.y + 5) {
                    this.y -= moveSpeedY;
                }
            }
        }
        // scale the player based on the depth of the mouse position
        this.scale = this.baseScale * this.depthScaleY ** (this.startY - this.y);

        super.draw(currentTime, deltaTime);
    }

    public setWaypoints(waypoints: Array<Point>) {
        this.waypoints = waypoints;
        this.nextWaypoint = null;
        if(this.waypoints != null && this.waypoints.length > 0) {
            console.log(this.waypoints);
            this.nextWaypoint = this.waypoints.pop();
            console.log("next: " + this.nextWaypoint.x + ", " + this.nextWaypoint.y)
        }
    }

    public setDepthScale(depthScaleY: number) {
        this.depthScaleY = depthScaleY;
    }

    public setStartPos(x: number, y: number) {
        this.startX = x;
        this.startY = y;
    }
}
