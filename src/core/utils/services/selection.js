import { Renderer } from "../../../core/renderer";
import { Camera } from "../../../core/camera";
import { Scene } from "../../../core/scene";
import { Mesh } from "../../../core/mesh";
import { Group } from "../../../core/group";

// 框选盒
export class Selection {
    constructor({ width, height, $parent }) {
        const mesh = new Mesh({
            width: 0,
            height: 0,
            minWidth: 0,
            minHeight: 0,
            radius: null,
            borderWidth: 1,
            operable: false
        });
        const camera = new Camera();
        const scene = new Scene({ width, height });
        const renderer = new Renderer({
            scene,
            camera,
            $parent
        });
        mesh.focus();
        scene.add(mesh);
        renderer.canvas.style.position = "absolute";
        renderer.canvas.style.top = "0";
        renderer.canvas.style.left = "0";
        renderer.canvas.style.zIndex = "1";
        renderer.canvas.style.pointerEvents = "none";

        this.mesh = mesh;
        this.collectMeshes = [];
        this.renderer = renderer;
    }

    ready(mousedownLeft, mousedownTop) {
        this.collectMeshes = [];
        if (this.renderer) {
            this.mousedownLeft = mousedownLeft;
            this.mousedownTop = mousedownTop;
            this.mesh.move(mousedownLeft, mousedownTop);
            this.renderer.canvas.style.display = null;
        }
    }

    update(layerX, layerY, collectMeshes) {
        const w = layerX - this.mousedownLeft;
        const h = layerY - this.mousedownTop;

        if (w < 0) {
            this.mesh.setX(this.mousedownLeft + w);
            this.mesh.setWidth(-w);
        } else {
            this.mesh.setWidth(w);
        }

        if (h < 0) {
            this.mesh.setY(this.mousedownTop + h);
            this.mesh.setHeight(-h);
        } else {
            this.mesh.setHeight(h);
        }

        this.collectMeshes = collectMeshes;
        this.renderer.render();
    }

    hide() {
        if (this.renderer) {
            this.mesh.setWidth(0);
            this.mesh.setHeight(0);
            this.renderer.canvas.style.display = "none";
            this.renderer && this.renderer.clear();
        }
    }
}
