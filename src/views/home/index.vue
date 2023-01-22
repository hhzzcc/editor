<template>
    <div class="home-view">
        <div class="home-view__header">
            <img
                class="home-view__logo"
                src="https://st0.dancf.com/static/02/202301130825-f513.png"
            />
            <button @click="handleDownload">下载</button>
        </div>
        <div class="home-view__body">
            <div class="home-view__left">
                <button @click="handleAddMesh">添加素材</button>
            </div>

            <div class="home-view__content">
                <div class="home-view__editor" ref="parent">
                    <template v-for="(element, i) in elements" :key="i">
                        <ImageElementComponent
                            v-if="element.elementType === 'image'"
                            v-bind="element.state"
                            @drag-before="(v) => handleMousedown(v, element)"
                            @mouseenter="(v) => handleMouseenter(v, element)"
                            @mouseleave="(v) => handleMouseleave(v, element)"
                        />

                        <GroupElementComponent
                            v-else-if="element.elementType === 'group'"
                            v-bind="element.state"
                            @drag-before="(v) => handleMousedown(v, element)"
                            @mouseenter="(v) => handleMouseenter(v, element)"
                            @mouseleave="(v) => handleMouseleave(v, element)"
                        />
                    </template>
                </div>
            </div>

            <div class="home-view__right"></div>
        </div>
    </div>
</template>

<script>
import ImageElementComponent from "../../core/components/image-element.vue";
import GroupElementComponent from "../../core/components/group-element.vue";

import { onMounted, ref, reactive } from "vue";
import { AdsorptionLine } from "../../core/utils/services/adsorption-line";
import { Selection } from "../../core/utils/services/selection";
import { ImageElement } from "../../core/mesh/image-element";
import { GroupElement } from "../../core/mesh/group-element";

import { MeshTransform } from "../../core/utils/services/mesh-transform";
import {
    handleDragMeshScale,
    handleDragMeshXScale,
    handleDragMeshYScale
} from "../../core/utils/handles/drag-mesh-scale";
import { handleGroupSize } from "../../core/utils/handles/group";

export default {
    name: "home-view",
    components: {
        ImageElementComponent,
        GroupElementComponent
    },
    setup() {
        const elements = reactive([]);
        const parent = ref(null);
        let adsorptionLine, selection;
        const meshTransform = new MeshTransform();

        onMounted(() => {
            elements.push(
                new ImageElement({
                    imgSrc: "https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",
                    width: 100,
                    height: 100,
                    x: 0,
                    y: 0
                }),
                new ImageElement({
                    imgSrc: "https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",
                    width: 50,
                    height: 100,
                    x: 100,
                    y: 100
                })
            );

            adsorptionLine = new AdsorptionLine({
                width: parent.value.offsetWidth,
                height: parent.value.offsetHeight,
                $parent: parent.value
            });

            selection = new Selection({
                width: parent.value.offsetWidth,
                height: parent.value.offsetHeight,
                $parent: parent.value
            });
        });

        let mouseDownElement = null;
        let mouseDownData = null;
        let mousedown = false;

        function handleMousedown(v, currentElement) {
            currentElement.focus();

            mouseDownElement = currentElement;
            mouseDownData = v;

            // 置顶
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element === currentElement) {
                    element.setZIndex(1);
                } else {
                    element.setZIndex(null);
                }
            }
        }

        function handleMouseenter(_, currentElement) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element === currentElement) {
                    element.hover();
                    break;
                }
            }
        }

        function handleMouseleave(_, currentElement) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element === currentElement) {
                    element.unHover();
                    break;
                }
            }
        }

        let prevMousedownLeft = 0,
            prevMousedownTop = 0;

        let dragTransformElement = null;
        let dragScaleElement = null;
        let dragScaleXElement = null;
        let dragScaleYElement = null;

        document.addEventListener("mousedown", (e) => {
            const mouse = {
                x: e.clientX - parent.value.offsetLeft,
                y: e.clientY - parent.value.offsetTop
            };

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element !== mouseDownElement) {
                    element.blur();

                    // 存在临时组则解开
                    if (
                        element.elementType === "group" &&
                        element.state.temporary
                    ) {
                        for (
                            let j = 0;
                            j < element.state.children.length;
                            j++
                        ) {
                            const child = element.state.children[j];
                            child.setPosition(
                                child.state.x + element.state.x,
                                child.state.y + element.state.y
                            );
                            child.operable();
                            elements.push(child);
                        }

                        elements.splice(i, 1);
                        i--;
                    }
                }
            }

            mousedown = true;
            selection.ready({ originX: mouse.x, originY: mouse.y });
        });

        document.addEventListener("mousemove", (e) => {
            const mouse = {
                movementX: e.clientX - prevMousedownLeft,
                movementY: e.clientY - prevMousedownTop,
                x: e.clientX - parent.value.offsetLeft,
                y: e.clientY - parent.value.offsetTop,
                target: e.target
            };
            prevMousedownLeft = e.clientX;
            prevMousedownTop = e.clientY;

            if (mousedown) {
                if (!mouseDownElement) {
                    // 更新框选层的样式
                    selection.update({
                        x: mouse.x,
                        y: mouse.y,
                        targetElements: elements
                    });
                } else {
                    // 拖拽mesh做xy轴缩放
                    if (dragScaleElement) {
                        handleDragMeshScale(dragScaleElement, mouse);
                    }
                    // 拖拽mesh做x轴缩放
                    else if (dragScaleXElement) {
                        handleDragMeshXScale(dragScaleXElement, mouse);
                    }
                    // 拖拽mesh做y轴缩放
                    else if (dragScaleYElement) {
                        handleDragMeshYScale(dragScaleYElement, mouse);
                    }
                    // 拖拽mesh做移动
                    else if (dragTransformElement) {
                        meshTransform.handleDragMeshTransform({
                            mesh: dragTransformElement,
                            mouse,
                            onTransform() {
                                // 更新吸附线
                                const { x, y, xType, yType } =
                                    adsorptionLine.update({
                                        originElement: dragTransformElement,
                                        targetElements: elements
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
                        const { type } = mouseDownData;
                        switch (type) {
                            case "content":
                                dragTransformElement = mouseDownElement;
                                break;
                            case "scale-xy":
                                dragScaleElement = mouseDownElement;
                                break;
                            case "scale-x":
                                dragScaleXElement = mouseDownElement;
                                break;
                            case "scale-y":
                                dragScaleYElement = mouseDownElement;
                                break;
                        }
                    }
                }
            }
        });

        document.addEventListener("mouseup", () => {
            mousedown = false;
            mouseDownElement = null;
            mouseDownData = null;
            dragTransformElement = null;
            dragScaleElement = null;
            dragScaleXElement = null;
            dragScaleYElement = null;
            meshTransform.clear();
            selection.clear();
            adsorptionLine.clear();

            const collectElements = selection.getCollectElements();
            if (collectElements.length) {
                const { x, y, width, height } =
                    handleGroupSize(collectElements);
                const group = new GroupElement({
                    x,
                    y,
                    width,
                    height,
                    children: collectElements
                });

                for (let i = 0; i < collectElements.length; i++) {
                    const collectElement = collectElements[i];
                    for (let j = 0; j < elements.length; j++) {
                        const element = elements[j];
                        if (element === collectElement) {
                            element.setPosition(
                                element.state.x - x,
                                element.state.y - y
                            );
                            element.unHover();
                            element.inoperable();
                            element.blur();
                            elements.splice(j, 1);
                            j--;
                        }
                    }
                }
                group.temporary();
                group.focus();
                elements.push(group);
            }
        });

        function handleAddMesh() {}

        function handleDownload() {}

        return {
            parent,
            elements,
            handleMousedown,
            handleMouseenter,
            handleMouseleave,
            handleAddMesh,
            handleDownload
        };
    }
};
</script>

<style lang="less">
.home-view {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        background-color: #fff;
        border-bottom: 2px solid #eef2f8;
        padding: 0 24px;
    }

    &__logo {
        height: 30px;
    }

    &__body {
        display: flex;
        height: calc(100vh - 54px);
    }

    &__content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f2f4;
        height: 100%;
    }

    &__left {
        width: 200px;
        height: 100%;
        background: #fff;
        border-right: 2px solid #eef2f8;
        padding: 24px;
    }

    &__right {
        width: 276px;
        height: 100%;
        background: #fff;
        border-left: 2px solid #eef2f8;
        padding: 24px;
    }

    &__editor {
        width: 400px;
        height: 600px;
        position: relative;
        border: 1px solid #eee;
        box-shadow: 1px 1px 15px rgb(0 0 0 / 20%);

        // canvas:first-of-type {
        //     background-color: #fff;
        //     background-image: linear-gradient(
        //             to top right,
        //             #ccc 25%,
        //             transparent 0,
        //             transparent 75%,
        //             #ccc 0,
        //             #ccc
        //         ),
        //         linear-gradient(
        //             to top right,
        //             #ccc 25%,
        //             transparent 0,
        //             transparent 75%,
        //             #ccc 0,
        //             #ccc
        //         );
        //     background-position: 0 0, 8px 8px;
        //     background-size: 16px 16px;
        //     overflow: hidden;
        //     user-select: none;
        // }

        canvas {
            display: block;
            overflow: hidden;
            user-select: none;
        }
    }
}
</style>
