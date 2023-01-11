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
import { handleMeshTop } from "../utils/handles/mesh-top";

export const mouseHoverPlugin = {
    install(renderer) {
        const { scene, canvas, $parent } = renderer;
        const { meshes, width, height } = scene;
        let mousedown,
            prevMousedownLeft,
            prevMousedownTop,
            dragMesh,
            dragTransformMesh,
            dragScaleMesh,
            dragScaleXMesh,
            dragScaleYMesh;

        function clear() {
            mousedown = false;
            prevMousedownLeft = null;
            prevMousedownTop = null;
            dragMesh = null;
            dragTransformMesh = null;
            dragScaleMesh = null;
            dragScaleXMesh = null;
            dragScaleYMesh = null;
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
            dragMesh = handleStartDragMesh(v, meshes);

            // 置顶元素
            if (dragMesh) {
                handleMeshTop(meshes, dragMesh);
            }

            renderer.render();
        });

        canvas.addEventListener("mousemove", (v) => {
            if (!dragMesh) {
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
                if (dragScaleMesh) {
                    handleDragMeshScale(
                        dragScaleMesh,
                        v.layerX,
                        v.layerY,
                        prevMousedownLeft,
                        prevMousedownTop
                    );
                }
                // 拖拽mesh做x轴缩放
                else if (dragScaleXMesh) {
                    handleDragMeshXScale(
                        dragScaleXMeshes,
                        v.layerX,
                        prevMousedownLeft
                    );
                }
                // 拖拽mesh做y轴缩放
                else if (dragScaleYMesh) {
                    handleDragMeshYScale(
                        dragScaleYMesh,
                        v.layerY,
                        prevMousedownTop
                    );
                }
                // 拖拽mesh做移动
                else if (dragTransformMesh) {
                    meshTransform.handleDragMeshTransform({
                        mouse: v,
                        mesh: dragTransformMesh,
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
                        mesh: dragMesh,
                        onDragMeshMove() {
                            dragTransformMesh = dragMesh;
                        },
                        onDragMeshScale() {
                            dragScaleMesh = dragMesh;
                        },
                        onDragMeshScaleX() {
                            dragScaleXMesh = dragMesh;
                        },
                        onDragMeshScaleY() {
                            dragScaleYMesh = dragMesh;
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
