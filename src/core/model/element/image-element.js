import { Element } from "./element";

export class ImageElement extends Element {
    constructor({ imgSrc, ...options }) {
        super(options);
        this.elementType = "image";
        this.setImgSrc(imgSrc);
    }

    async setImgSrc(imgSrc) {
        this.state.imgSrc = imgSrc;
    }
}
