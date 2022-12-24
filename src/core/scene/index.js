export class Scene {
    constructor() {
        this.meshes = [];
    }

    add(mesh) {
        this.meshes.push(mesh);
    }
}
