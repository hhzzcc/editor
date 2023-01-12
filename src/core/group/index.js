import { Mesh } from "../mesh";

export class Group extends Mesh {
    constructor(options = {}) {
        super(options);
        this.meshes = [];
        this.createWidth = options.width;
        this.createHeight = options.height;
        this.createX = options.x;
        this.createY = options.y;
        this.type.temporary = false;
    }

    add(mesh) {
        this.meshes.push(mesh);
    }

    temporary() {
        this.type.temporary = true;
    }

    permanent() {
        this.type.temporary = false;
    }
}
