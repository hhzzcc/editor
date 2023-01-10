import { Selection } from "../utils/selection";
import { AdsorptionLine } from "../utils/adsorption-line";
import {
    handleSelectionCollectMesh,
    handleHoverMesh,
    handleStartDragMesh,
    handleDragMesh,
    handleDragMeshScale,
    handleDragMeshTransform
} from "../utils/handle";

export const mouseHoverPlugin = {
    install(renderer) {
        const { scene, canvas, $parent } = renderer;
        const { meshes, width, height } = scene;
        let mousedown = false;
        let prevMousedownLeft = 0;
        let prevMousedownTop = 0;
        let dragMeshes = [];
        let dragTransformMeshes = [];
        let dragScaleMeshes = [];

        const selection = new Selection({ width, height, $parent });
        const adsorptionLine = new AdsorptionLine({ width, height, $parent });

        document.addEventListener("mousedown", (v) => {
            mousedown = true;
            selection.ready(v.layerX, v.layerY);
            adsorptionLine.ready();

            // 鼠标按下mesh
            dragMeshes = handleStartDragMesh(v, meshes);
            renderer.render();
        });

        canvas.addEventListener("mousemove", (v) => {
            if (!dragMeshes.length) {
                if (mousedown) {
                    // 框选选中的mesh
                    handleSelectionCollectMesh(selection, meshes);

                    // 更新框选层的样式
                    selection.update(v.layerX, v.layerY);
                } else {
                    // 鼠标选中的mesh
                    handleHoverMesh(v, meshes);
                }
            } else {
                // 拖拽mesh做缩放
                if (dragScaleMeshes.length) {
                    handleDragMeshScale(
                        dragScaleMeshes,
                        v.layerX,
                        v.layerY,
                        prevMousedownLeft,
                        prevMousedownTop
                    );
                } else if (dragTransformMeshes.length) {
                    handleDragMeshTransform({
                        mouse: v,
                        meshes: dragTransformMeshes,
                        prevMousedownLeft,
                        prevMousedownTop,
                        transformCb(mesh) {
                            const { x, y, xType, yType } =
                                adsorptionLine.update({
                                    originMesh: mesh,
                                    targetMeshes: meshes
                                });

                            return {
                                x,
                                y,
                                xType,
                                yType
                            };
                        }
                    });
                } else {
                    // 鼠标拖拽mesh做移动
                    handleDragMesh({
                        mouse: v,
                        meshes: dragMeshes,
                        dragMeshMoveCb() {
                            dragTransformMeshes = dragMeshes;
                        },
                        dragMeshScaleCb() {
                            dragScaleMeshes = dragMeshes;
                        }
                    });
                }
            }

            prevMousedownLeft = v.layerX;
            prevMousedownTop = v.layerY;
            renderer.render();
        });

        document.addEventListener("mouseup", () => {
            mousedown = false;
            dragMeshes = [];
            dragTransformMeshes = [];
            dragScaleMeshes = [];
            selection.hide();
            adsorptionLine.hide();
        });
    }
};

export const mousePlugins = [mouseHoverPlugin];
