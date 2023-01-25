import { Element } from "./element";

export class TextElement extends Element {
    constructor({ text, fontSize = 24, ...options }) {
        super(options);
        this.elementType = "text";

        this.setFontSize(fontSize);
        this.setText(text);
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
