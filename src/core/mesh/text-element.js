import { Element } from "./element";

export class TextElement extends Element {
    constructor({
        text,
        fontSize = 24,
        fontColor = "#000000",
        fontFamily = "fangsong",
        ...options
    }) {
        super(options);
        this.elementType = "text";

        this.setFontSize(fontSize);
        this.setFontColor(fontColor);
        this.setFontFamily(fontFamily);
        this.setText(text);
    }

    setFontColor(fontColor) {
        this.state.fontColor = fontColor;
    }

    setFontFamily(fontFamily) {
        this.state.fontFamily = fontFamily;
    }

    setFontSize(fontSize) {
        this.state.fontSize = fontSize;
    }

    setText(text) {
        this.state.text = text;
    }

    startEdit() {
        this.state.edit = true;
    }

    endEdit() {
        this.state.edit = false;
    }
}
