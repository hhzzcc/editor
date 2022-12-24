export class Renderer {
    constructor(options) {
        const {
            width = 400,
            height = 600,
            plugins = [],
            scene = null,
            camera = null
        } = options;
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");
        this.plugins = plugins;
        this.scene = scene;
        this.camera = camera;

        document.body.appendChild(this.canvas);
    }

    installPlugin() {
        for (let i = 0; i < this.plugins.length; i++) {
            const plugin = this.plugins[i];
            plugin.install(this);
        }
    }

    render() {
        // debugger;
        const { scene, ctx, canvas } = this;
        const { width, height } = canvas;
        const { meshes } = scene;

        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < meshes.length; i++) {
            const mesh = meshes[i];
            mesh.render({ ctx });
        }
    }
}
