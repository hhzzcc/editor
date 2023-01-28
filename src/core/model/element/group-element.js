import { Element } from "./element";

export class GroupElement extends Element {
    constructor({ children, ...options }) {
        super(options);
        this.elementType = "group";
        this.add(children);
    }

    add(elements) {
        if (!this.state.children) {
            this.state.children = [];
        }
        this.state.children.push(...elements);
    }

    temporary() {
        this.state.temporary = true;
    }

    permanent() {
        this.state.temporary = false;
    }
}
