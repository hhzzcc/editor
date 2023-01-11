export class Scene {
    constructor(options) {
        const { width = 500, height = 500, backgroundColor = null } = options;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.meshes = [];
    }

    add(mesh) {
        this.meshes.push(mesh);
    }
}
