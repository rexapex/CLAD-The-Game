//declare Promise any;

export class ImageLoader
{
    public static loadImage(path: string): Promise<HTMLImageElement>
    {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                resolve(img);
            }
            img.onerror = (err) => {
                reject(null);
            }
        });
    }
}
