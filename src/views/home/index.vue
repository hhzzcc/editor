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
                <button @click="handleAddMesh('image')">添加图片</button>
                <button @click="handleAddMesh('text')">添加文字</button>
            </div>

            <div class="home-view__content">
                <div class="home-view__editor" ref="parent">
                    <template v-for="(element, i) in elements" :key="i">
                        <ImageElementComponent
                            v-if="element.elementType === 'image'"
                            v-bind="element.state"
                            @drag-before="(v) => handleMousedown(v, element)"
                            @change-Image="(v) => handleChangeImage(v, element)"
                            @mouseenter="(v) => handleHover(v, element)"
                            @mouseleave="(v) => handleUnHover(v, element)"
                            @focus="(v) => handleFocus(v, element)"
                        />

                        <TextElementComponent
                            v-else-if="element.elementType === 'text'"
                            v-bind="element.state"
                            @drag-before="(v) => handleMousedown(v, element)"
                            @start-change-text="
                                (v) => handleStartChangeText(v, element)
                            "
                            @change-text="(v) => handleChangeText(v, element)"
                            @update-width="(v) => element.setWidth(v)"
                            @update-height="(v) => element.setHeight(v)"
                            @mouseenter="(v) => handleHover(v, element)"
                            @mouseleave="(v) => handleUnHover(v, element)"
                            @focus="(v) => handleFocus(v, element)"
                        />

                        <GroupElementComponent
                            v-else-if="element.elementType === 'group'"
                            v-bind="element.state"
                            @drag-before="(v) => handleMousedown(v, element)"
                            @mouseenter="(v) => handleHover(v, element)"
                            @mouseleave="(v) => handleUnHover(v, element)"
                            @focus="(v) => handleFocus(v, element)"
                        />
                    </template>
                </div>
            </div>

            <div class="home-view__right">
                <div
                    class="home-view__font-bar"
                    v-if="editElement && editElement.elementType === 'text'"
                >
                    <div>
                        <Input :value="editElement.state.x.toFixed(2)">
                            <template #addonBefore>X</template>
                        </Input>
                        <Input :value="editElement.state.y.toFixed(2)"
                            ><template #addonBefore>Y</template>
                        </Input>
                    </div>

                    <Input
                        :value="editElement.state.text"
                        @change="handleChangeFontText"
                        ><template #addonBefore>内容</template>
                    </Input>

                    <Select
                        :value="editElement.state.fontFamily"
                        class="home-view__font-family"
                        @change="handleChangeFontFamily"
                    >
                        <template #addonBefore>X</template>
                        <SelectOption value="serif">serif</SelectOption>
                        <SelectOption value="fangsong">仿宋</SelectOption>
                    </Select>

                    <Select
                        :value="editElement.state.fontSize.toFixed(1)"
                        class="home-view__font-family"
                        @change="handleChangeFontSize"
                    >
                        <SelectOption :value="14">14px</SelectOption>
                        <SelectOption :value="20">20px</SelectOption>
                    </Select>

                    <Input
                        type="color"
                        :value="editElement.state.fontColor"
                        @change="handleChangeFontColor"
                    />
                </div>
                <div
                    v-else-if="
                        editElement && editElement.elementType === 'image'
                    "
                >
                    <div>
                        <Input :value="editElement.state.x.toFixed(2)"
                            ><template #addonBefore>X</template>
                        </Input>
                        <Input :value="editElement.state.y.toFixed(2)"
                            ><template #addonBefore>Y</template>
                        </Input>
                        <Input :value="editElement.state.width.toFixed(2)"
                            ><template #addonBefore>宽</template>
                        </Input>
                        <Input :value="editElement.state.height.toFixed(2)"
                            ><template #addonBefore>高</template>
                        </Input>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageElementComponent from "../../core/components/image-element.vue";
import GroupElementComponent from "../../core/components/group-element.vue";
import TextElementComponent from "../../core/components/text-element.vue";

import { onMounted, ref, reactive, computed, nextTick } from "vue";
import { Select, SelectOption, Input } from "ant-design-vue";
import { AdsorptionLine } from "../../core/utils/services/adsorption-line";
import { Selection } from "../../core/utils/services/selection";
import { ImageElement } from "../../core/mesh/image-element";
import { TextElement } from "../../core/mesh/text-element";
import { GroupElement } from "../../core/mesh/group-element";

import { MeshTransform } from "../../core/utils/services/mesh-transform";
import {
    handleDragMeshScale,
    handleDragMeshXScale,
    handleDragMeshYScale
} from "../../core/utils/handles/drag-mesh-scale";
import { handleGroupSize } from "../../core/utils/handles/group";
import { loadImage } from "../../core/utils/handles/dbclick-mesh";

export default {
    name: "home-view",
    components: {
        ImageElementComponent,
        GroupElementComponent,
        TextElementComponent,
        Select,
        SelectOption,
        Input
    },
    setup() {
        const elements = reactive([]);
        const parent = ref(null);
        const editElement = ref(null);
        let adsorptionLine = null;
        let selection = null;
        let mouseDownElement = null;
        let mouseDownData = null;
        let textElement = null;
        let mousedown = false;
        const meshTransform = new MeshTransform();

        onMounted(() => {
            parent.value.addEventListener("mousedown", (e) => {
                if (!mouseDownElement) {
                    editElement.value = null;
                }
                const mouse = {
                    x: e.clientX - parent.value.offsetLeft,
                    y: e.clientY - parent.value.offsetTop
                };

                for (let i = 0; i < elements.length; i++) {
                    const element = elements[i];

                    // 结束编辑
                    if (textElement && textElement !== mouseDownElement) {
                        textElement.endEdit();
                        textElement = null;
                    }

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
                if (collectElements && collectElements.length) {
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

            elements.push(
                new ImageElement({
                    imgSrc: "data:image/jpeg;base64,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",
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
                }),
                new TextElement({
                    text: "1是文字，，，a￥！%%……￥aaa hello aa的的",
                    width: 200,
                    height: 100,
                    x: 100,
                    y: 200
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

        function handleFocus(v, currentElement) {
            currentElement.focus();
        }

        function handleMousedown(v, currentElement) {
            mouseDownElement = currentElement;
            editElement.value = currentElement;
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

        function handleHover(_, currentElement) {
            currentElement.hover();
        }

        function handleUnHover(_, currentElement) {
            currentElement.unHover();
        }

        let prevMousedownLeft = 0,
            prevMousedownTop = 0;

        let dragTransformElement = null;
        let dragScaleElement = null;
        let dragScaleXElement = null;
        let dragScaleYElement = null;

        async function handleChangeImage(_, currentElement) {
            const { width, height, src } = await loadImage();
            currentElement.setWidth(width);
            currentElement.setHeight(height);
            currentElement.setImgSrc(src);
        }

        function handleStartChangeText(_, currentElement) {
            textElement = currentElement;
            currentElement.startEdit();
        }

        function handleChangeText(value, currentElement) {
            currentElement.setText(value);
        }

        function handleAddMesh(type) {
            if (type === "image") {
                elements.push(
                    new ImageElement({
                        imgSrc: "https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",
                        width: 100,
                        height: 100,
                        x: 0,
                        y: 0
                    })
                );
            } else if (type === "text") {
                elements.push(
                    new TextElement({
                        text: "输入一段文字",
                        width: 200,
                        height: 100,
                        x: 100,
                        y: 200
                    })
                );
            }
        }

        function handleDownload() {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                element.blur();
            }
            const width = parent.value.offsetWidth;
            const height = parent.value.offsetHeight;

            const tempImg = new Image();
            tempImg.width = width;
            tempImg.height = height;
            tempImg.onload = function () {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = width;
                canvas.height = height;
                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(this, 0, 0, width, height);
                const MIME_TYPE = "image/png";
                const imgURL = canvas.toDataURL(MIME_TYPE);
                const dlLink = document.createElement("a");
                dlLink.download = "下载.png";
                dlLink.href = imgURL;
                dlLink.dataset.downloadurl = [
                    MIME_TYPE,
                    dlLink.download,
                    dlLink.href
                ].join(":");

                dlLink.click();
            };

            nextTick(() => {
                let styleSrc = "";
                const $styles = document.querySelectorAll("style");
                for (let i = 0; i < $styles.length - 1; i++) {
                    const $style = $styles[i];
                    styleSrc += $style.innerHTML;
                }
                tempImg.src =
                    `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><foreignObject width="${
                        width * 2
                    }" height="${
                        height * 2
                    }"><body xmlns="http://www.w3.org/1999/xhtml">
            ${new XMLSerializer().serializeToString(parent.value)}
            <style>${styleSrc}</style></body></foreignObject></svg>`
                        .replace(/\n/g, "")
                        .replace(/\t/g, "")
                        .replace(/#/g, "%23");
            });
        }

        function handleChangeFontFamily(v) {
            editElement.value.setFontFamily(v);
        }

        function handleChangeFontSize(v) {
            editElement.value.setFontSize(v);
        }

        function handleChangeFontColor(v) {
            editElement.value.setFontColor(v.target.value);
        }

        function handleChangeFontText(v) {
            editElement.value.setText(v.target.value);
        }

        return {
            elements,
            parent,
            editElement,

            handleChangeImage,
            handleStartChangeText,
            handleChangeText,
            handleFocus,
            handleMousedown,
            handleHover,
            handleUnHover,
            handleAddMesh,
            handleDownload,
            handleChangeFontFamily,
            handleChangeFontSize,
            handleChangeFontColor,
            handleChangeFontText
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

    &__font-bar {
        > * {
            margin-bottom: 12px;
        }
    }

    &__font-family {
        width: 161px;
        margin-right: 12px;
    }

    &__editor {
        width: 400px;
        height: 600px;
        position: relative;
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
