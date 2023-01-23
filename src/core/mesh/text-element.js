import { Element } from "./element";

export class TextElement extends Element {
    constructor({ text, ...options }) {
        super(options);
        this.elementType = "text";
        this.setText(text);
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
