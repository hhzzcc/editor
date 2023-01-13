export class Scene {
    constructor(options) {
        const {
            x = 0,
            y = 0,
            width = 500,
            height = 500,
            backgroundColor = null
        } = options;

        this.position = {
            x,
            y
        };

        this.style = {
            width,
            height,
            backgroundColor
        };
        this.meshes = [];
    }

    add(mesh) {
        this.meshes.push(mesh);
    }

    getCenterPosition() {
        return {
            x: this.position.x + this.style.width / 2,
            y: this.position.y + this.style.height / 2
        };
    }

    getRightPosition() {
        return {
            x: this.position.x + this.style.width,
            y: this.position.y + this.style.height
        };
    }
}
