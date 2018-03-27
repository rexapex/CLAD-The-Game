export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;

export function initCanvasAndContext()
{
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation='destination-over';
    ctx.imageSmoothingEnabled = true;   // enable anti-aliasing of images
}
