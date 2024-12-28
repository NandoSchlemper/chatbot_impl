import { Sprite } from "./SpriteDomain";

export class SpriteBuilder {
    public imgpath: string = '';
    public ctx: Document = document;

    setImgPath(imgpath: string): SpriteBuilder {
        this.imgpath = imgpath
        return this;
    }

    setContext(context: Document): SpriteBuilder {
        this.ctx = context
        return this;
    }

    build(): Sprite {
        return new Sprite(
            this.imgpath,
            this.ctx
        )
    }
}
