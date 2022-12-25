import { Renderer } from "../../core/renderer";
import { Camera } from "../../core/camera";
import { Scene } from "../../core/scene";
import { Mesh } from "../../core/mesh";

function isCollection(mouse, mesh) {
    return (
        mouse.layerX > mesh.position.x &&
        mouse.layerX < mesh.position.x + mesh.style.width &&
        mouse.layerY > mesh.position.y &&
        mouse.layerY < mesh.position.y + mesh.style.height
    );
}

export const mouseHoverPlugin = {
    install(renderer) {
        const { scene, canvas, $parent } = renderer;
        const { meshes, width, height } = scene;
        let mousedown = false;
        let mousedownLeft = 0;
        let mousedownTop = 0;
        let mousedownMeshes = [];
        let boxRenderer = null;
        let boxMesh = null;

        canvas.addEventListener("mousedown", (v) => {
            mousedown = true;
            mousedownLeft = v.layerX;
            mousedownTop = v.layerY;

            if (boxRenderer) {
                boxMesh.move(v.layerX, v.layerY);
            }

            // click、hover
            for (let i = 0; i < meshes.length; i++) {
                const mesh = meshes[i];
                if (isCollection(v, mesh)) {
                    mesh.hover();
                    mesh.focus();
                    mousedownMeshes.push(mesh);
                } else {
                    mesh.unHover();
                    mesh.blur();
                }
            }

            renderer.render();
        });

        canvas.addEventListener("mousemove", (v) => {
            if (!mousedownMeshes.length) {
                if (mousedown) {
                    if (!boxRenderer) {
                        boxMesh = new Mesh({
                            width: 100,
                            height: 100
                        });
                        const camera = new Camera();
                        const scene = new Scene({ width, height });
                        boxRenderer = new Renderer({
                            scene,
                            camera,
                            $parent
                        });
                        boxMesh.focus();
                        boxMesh.move(v.layerX, v.layerY);
                        scene.add(boxMesh);
                        boxRenderer.canvas.style.position = "absolute";
                        boxRenderer.canvas.style.top = "0";
                        boxRenderer.canvas.style.left = "0";
                        boxRenderer.canvas.style.zIndex = "1";
                        boxRenderer.canvas.style.pointerEvents = "none";
                    }
                    boxRenderer.canvas.style.display = "";
                    boxMesh.setWidth(v.layerX - boxMesh.position.x);
                    boxMesh.setHeight(v.layerY - boxMesh.position.y);
                    boxRenderer.render();
                } else {
                    for (let i = 0; i < meshes.length; i++) {
                        const mesh = meshes[i];
                        if (isCollection(v, mesh)) {
                            mesh.hover();
                        } else {
                            mesh.unHover();
                        }
                    }
                }
            } else {
                for (let i = 0; i < mousedownMeshes.length; i++) {
                    const mesh = mousedownMeshes[i];
                    mesh.transform(
                        v.layerX - mousedownLeft,
                        v.layerY - mousedownTop
                    );
                }
            }

            mousedownLeft = v.layerX;
            mousedownTop = v.layerY;
            renderer.render();
        });

        document.addEventListener("mouseup", () => {
            mousedown = false;

            boxRenderer.canvas.style.display = "none";
            boxRenderer && boxRenderer.clear();
            mousedownMeshes = [];
        });
    }
};

export const mousePlugins = [mouseHoverPlugin];
