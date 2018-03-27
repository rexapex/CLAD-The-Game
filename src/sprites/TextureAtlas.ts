import {JSONLoader} from '../resources/JSONLoader'
import {ImageLoader} from '../resources/ImageLoader'
import {TextureAtlasFrame} from './TextureAtlasFrame'

export class TextureAtlas
{
    // http://www.typescriptgames.com/TextureAtlas.html
    public frames: { [index: string]: TextureAtlasFrame } = {};
    public taLoadComplete: boolean = false;
    public image: HTMLImageElement = new Image();
    public atlasName: string = "";
    private imageFileName: string = "";
    private jsonFileName: string = "";

    constructor(atlasName: string)
    {
        this.atlasName = atlasName;
        this.imageFileName = atlasName;
        this.jsonFileName = atlasName.replace(".png", "") + ".json";
    }

    public load(): Promise<any>
    {
        const imgPromise = ImageLoader.loadImage(this.imageFileName).then((img) => {
            this.image = img;
        }).catch(() => {
            console.log('error: unable to load ' + this.imageFileName);
        })

        const jsonPromise = JSONLoader.loadJSONFile(this.jsonFileName).then((data) => {
            this.createFrames(data);
        }).catch(() => {
            console.log('error: unable to load ' + this.jsonFileName);
        });

        return Promise.all([imgPromise, jsonPromise]).then(() => {
            console.log(this.atlasName + ' loaded successfully');
        }).catch(() => {
            console.log('error: ' + this.atlasName + ' failed to load');
        });
    }

    private createFrames(data: any)
    {
        for(const name in data.frames)
        {
            const spriteData = data.frames[name];
            let frame = new TextureAtlasFrame(spriteData.frame.x, spriteData.frame.y, spriteData.frame.w, spriteData.frame.h,
                                                spriteData.spriteSourceSize.x, spriteData.spriteSourceSize.y, spriteData.frameDuration);
            this.frames[name] = frame;
        }
//        console.log(JSON.stringify(this.frames));
    }
}
