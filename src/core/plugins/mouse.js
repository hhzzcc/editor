import { Selection } from "../utils/services/selection";
import { AdsorptionLine } from "../utils/services/adsorption-line";
import { MeshTransform } from "../utils/services/mesh-transform";

import { handleSelectionCollectMesh } from "../utils/handles/selection-collect-mesh";
import { handleHoverMesh } from "../utils/handles/hover-mesh";
import {
    handleStartDragMesh,
    handleDragMesh
} from "../utils/handles/drag-mesh";
import {
    handleDragMeshScale,
    handleDragMeshXScale,
    handleDragMeshYScale
} from "../utils/handles/drag-mesh-scale";

export const mouseHoverPlugin = {
    install(renderer) {
        const { scene, canvas, $parent } = renderer;
        const { meshes, width, height } = scene;
        let mousedown,
            prevMousedownLeft,
            prevMousedownTop,
            dragMeshes,
            dragTransformMeshes,
            dragScaleMeshes,
            dragScaleXMeshes,
            dragScaleYMeshes;

        function clear() {
            mousedown = false;
            prevMousedownLeft = null;
            prevMousedownTop = null;
            dragMeshes = [];
            dragTransformMeshes = [];
            dragScaleMeshes = [];
            dragScaleXMeshes = [];
            dragScaleYMeshes = [];
        }

        clear();
        const selection = new Selection({ width, height, $parent });
        const adsorptionLine = new AdsorptionLine({ width, height, $parent });
        const meshTransform = new MeshTransform();

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
                // 拖拽mesh做xy轴缩放
                if (dragScaleMeshes.length) {
                    handleDragMeshScale(
                        dragScaleMeshes,
                        v.layerX,
                        v.layerY,
                        prevMousedownLeft,
                        prevMousedownTop
                    );
                }
                // 拖拽mesh做x轴缩放
                else if (dragScaleXMeshes.length) {
                    handleDragMeshXScale(
                        dragScaleXMeshes,
                        v.layerX,
                        prevMousedownLeft
                    );
                }
                // 拖拽mesh做y轴缩放
                else if (dragScaleYMeshes.length) {
                    handleDragMeshYScale(
                        dragScaleYMeshes,
                        v.layerY,
                        prevMousedownTop
                    );
                }
                // 拖拽mesh做移动
                else if (dragTransformMeshes.length) {
                    meshTransform.handleDragMeshTransform({
                        mouse: v,
                        meshes: dragTransformMeshes,
                        prevMousedownLeft,
                        prevMousedownTop,
                        onTransform(mesh) {
                            // 更新吸附线
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
                    // 拖拽mesh
                    handleDragMesh({
                        mouse: v,
                        meshes: dragMeshes,
                        onDragMeshMove() {
                            dragTransformMeshes = dragMeshes;
                        },
                        onDragMeshScale() {
                            dragScaleMeshes = dragMeshes;
                        },
                        onDragMeshScaleX() {
                            dragScaleXMeshes = dragMeshes;
                        },
                        onDragMeshScaleY() {
                            dragScaleYMeshes = dragMeshes;
                        }
                    });
                }
            }

            prevMousedownLeft = v.layerX;
            prevMousedownTop = v.layerY;
            renderer.render();
        });

        document.addEventListener("mouseup", () => {
            clear();
            meshTransform.clear();

            selection.hide();
            adsorptionLine.hide();
        });
    }
};

export const mousePlugins = [mouseHoverPlugin];
