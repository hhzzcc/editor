export class Renderer {
    constructor(options) {
        const {
            plugins = [],
            scene = null,
            camera = null,
            $parent = document.body
        } = options;
        this.canvas = document.createElement("canvas");
        this.canvas.width = scene.width;
        this.canvas.height = scene.height;
        this.ctx = this.canvas.getContext("2d");
        this.$parent = $parent;
        this.plugins = plugins;
        this.scene = scene;
        this.camera = camera;

        $parent.appendChild(this.canvas);
    }

    installPlugin() {
        for (let i = 0; i < this.plugins.length; i++) {
            const plugin = this.plugins[i];
            plugin.install(this);
        }
    }

    clear() {
        const { scene } = this;
        const { width, height } = scene;
        this.ctx.clearRect(0, 0, width, height);
    }

    render() {
        const { scene, ctx } = this;
        const { width, height, meshes } = scene;

        this.clear();
        for (let i = 0; i < meshes.length; i++) {
            const mesh = meshes[i];
            mesh.render({ ctx });
        }
    }
}
