import { Element } from "./element";
import GroupElementComponent from "../components/group-element.vue";

export class GroupElement extends Element {
    constructor({ children, ...options }) {
        super(options);
        this.elementType = "group";
        this.state.children = children;
        this.elementComponent = GroupElementComponent;
    }

    add(element) {
        this.state.children.push(element);
    }

    temporary() {
        this.state.temporary = true;
    }

    permanent() {
        this.state.temporary = false;
    }
}
