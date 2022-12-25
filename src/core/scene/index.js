export class Scene {
    constructor(options) {
        const { width = 500, height = 500 } = options;
        this.width = width;
        this.height = height;
        this.meshes = [];
    }

    add(mesh) {
        this.meshes.push(mesh);
    }
}
