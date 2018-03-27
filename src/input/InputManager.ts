export class InputManager
{
    private mouseDownCallbacks: Array<(e: MouseEvent) => void> = Array<() => void>();

    constructor()
    {
        document.addEventListener("mousedown", this.mouseDown);
        document.addEventListener("contextmenu", event => event.preventDefault());  // disable right click context menu
    }

    public mouseDown = (e: MouseEvent) => {
        e.preventDefault();

        // notify all callbacks
        for(const callback of this.mouseDownCallbacks)
        {
            callback(e);
        }
    }

    public addMouseDownCallback(callback: (e: MouseEvent) => void)
    {
        this.mouseDownCallbacks.push(callback);
    }
}
