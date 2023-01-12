import { Mesh } from "../mesh";

export class Group extends Mesh {
    constructor(options = {}) {
        super(options);
        this.meshes = [];
    }

    add(mesh) {
        this.meshes.push(mesh);
    }
}
