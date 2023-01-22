import { Element } from "./element";
import ImageElementComponent from "../components/image-element.vue";

export class ImageElement extends Element {
    constructor(options) {
        super(options);
        this.elementType = "image";
        this.elementComponent = ImageElementComponent;
    }
}
