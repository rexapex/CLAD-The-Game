export class InputManager
{
    private primaryMouseDownCallbacks: Array<(x: number, y: number) => void> = Array<() => void>();
    private secondaryMouseDownCallbacks: Array<(x: number, y: number) => void> = Array<() => void>();
    private touchTimer: number;
    private touchDuration: number = 500;

    constructor(canvas: HTMLCanvasElement)
    {
        document.addEventListener("contextmenu", event => event.preventDefault());  // disable right click context menu
        // if(canvas != null) {
        //     canvas.addEventListener("mousedown", this.mouseDown);
        // } else {
            document.addEventListener("mousedown", this.mousedown);
            document.addEventListener("touchstart", this.touchstart);
            document.addEventListener("touchend", this.touchend);
            document.addEventListener("touchmove", this.touchmove);
        // }
    }

    private firePrimaryMouseDownEvent(x: number, y: number)
    {
        for(const callback of this.primaryMouseDownCallbacks)
        {
            callback(x, y);
        }
    }

    private fireSecondaryMouseDownEvent(x: number, y: number)
    {
        for(const callback of this.secondaryMouseDownCallbacks)
        {
            callback(x, y);
        }
    }

    public mousedown = (e: MouseEvent) => {
        e.preventDefault();

        // notify all callbacks
        if(e.button === 0) {
            this.firePrimaryMouseDownEvent(e.layerX, e.layerY);
        } else if(e.button === 2) {
            this.fireSecondaryMouseDownEvent(e.layerX, e.layerY);
        }
    }

    public onlongtouch = (e: TouchEvent) => {
        // fire secondary mouse click event
        this.fireSecondaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY);
    }

    public touchstart = (e: TouchEvent) => {
        this.touchTimer = setTimeout(this.onlongtouch, this.touchDuration);
    }

    public touchend = (e: TouchEvent) => {
        if(this.touchTimer) {
            clearTimeout(this.touchTimer);
            this.firePrimaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY); // fire primary mouse click event
        }
    }

    public touchmove = (e: TouchEvent) => {
        if(this.touchTimer) {
            clearTimeout(this.touchTimer);
        }
    }

    public addPrimaryMouseDownCallback(callback: (x: number, y: number) => void)
    {
        this.primaryMouseDownCallbacks.push(callback);
    }

    public addSecondaryMouseDownCallback(callback: (x: number, y: number) => void)
    {
        this.secondaryMouseDownCallbacks.push(callback);
    }
}
