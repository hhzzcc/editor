import { ref, reactive, nextTick, createVNode, render } from "vue";

import { AdsorptionLine } from "../../utils/services/adsorption-line";
import { Selection } from "../../utils/services/selection";
import { ElementTransform } from "../../utils/services/element-transform";
import {
    handleDragElementScale,
    handleDragElementXScale,
    handleDragElementYScale,
    handleDragElementRotate
} from "../../utils/handles/drag-element";
import { handleGroupSize } from "../../utils/handles/group";
import { loadImage } from "../../utils/handles/dbclick-element";

import { ImageElement } from "../element/image-element";
import { TextElement } from "../element/text-element";
import { GroupElement } from "../element/group-element";

import SceneComponent from "../../view/scene/index.vue";

export function useScene() {
    const elements = reactive([]);
    const editElement = ref(null);
    const elementTransform = new ElementTransform();

    let adsorptionLine, selection;
    let mouseDownElement = null;
    let textElement = null;
    let mousedown = false;
    let dragTransformElement = null;
    let dragScaleXYElement = null;
    let dragScaleXElement = null;
    let dragScaleYElement = null;
    let dragRotateElement = null;

    function mounted(sceneEl) {
        const vm = createVNode(SceneComponent, {
            elements,
            handleTextElementMounted,
            handleMousedownScaleXY,
            handleMousedownScaleX,
            handleMousedownScaleY,
            handleMousedownContent,
            handleMousedownRotate,
            handleDbClickContent,
            handleChangeText,
            handleClickContent,
            handleClickTextElementContent,
            handleMousedown,
            handleMouseenterContent,
            handleMouseleaveContent
        });

        render(vm, sceneEl);

        adsorptionLine = new AdsorptionLine({
            width: sceneEl.offsetWidth,
            height: sceneEl.offsetHeight,
            $parent: sceneEl
        });
        selection = new Selection({
            width: sceneEl.offsetWidth,
            height: sceneEl.offsetHeight,
            $parent: sceneEl
        });
        initMousedownEvent(sceneEl);
        initMousemoveEvent(sceneEl);
        initMouseupEvent(sceneEl);
        mock();
    }

    function add(element) {
        elements.push(element);
    }

    function mock() {
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
    }

    function initMousedownEvent(sceneEl) {
        sceneEl.addEventListener("mousedown", (e) => {
            mousedown = true;

            if (!mouseDownElement) {
                editElement.value = null;
            }

            const mouse = {
                x: e.clientX - sceneEl.offsetLeft,
                y: e.clientY - sceneEl.offsetTop
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

            selection.ready({ originX: mouse.x, originY: mouse.y });
        });
    }

    function initMousemoveEvent(sceneEl) {
        let prevMousedownLeft = 0,
            prevMousedownTop = 0;

        document.addEventListener("mousemove", (e) => {
            const mouse = {
                movementX: e.clientX - prevMousedownLeft,
                movementY: e.clientY - prevMousedownTop,
                x: e.clientX - sceneEl.offsetLeft,
                y: e.clientY - sceneEl.offsetTop,
                target: e.target
            };
            prevMousedownLeft = e.clientX;
            prevMousedownTop = e.clientY;

            if (mousedown) {
                // 拖拽element做xy轴缩放
                if (dragScaleXYElement) {
                    handleDragElementScale(dragScaleXYElement, mouse);
                }
                // 拖拽element做x轴缩放
                else if (dragScaleXElement) {
                    handleDragElementXScale(dragScaleXElement, mouse);
                }
                // 拖拽element做y轴缩放
                else if (dragScaleYElement) {
                    handleDragElementYScale(dragScaleYElement, mouse);
                }
                // 拖拽element做旋转
                else if (dragRotateElement) {
                    handleDragElementRotate(dragRotateElement, mouse);
                }
                // 拖拽element做移动
                else if (dragTransformElement) {
                    dragTransformElement.unHover();
                    dragTransformElement.blur();

                    elementTransform.handleDragElementTransform({
                        element: dragTransformElement,
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
                    // 更新框选层的样式
                    selection.update({
                        x: mouse.x,
                        y: mouse.y,
                        targetElements: elements
                    });
                }
            }
        });
    }

    function initMouseupEvent() {
        document.addEventListener("mouseup", () => {
            mousedown = false;
            mouseDownElement = null;
            dragTransformElement = null;
            dragScaleXYElement = null;
            dragScaleXElement = null;
            dragScaleYElement = null;
            dragRotateElement = null;

            elementTransform.clear();
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
                editElement.value = group;
            }
        });
    }

    function handleClickContent(element) {
        element.focus();
    }

    function handleClickTextElementContent(element) {
        if (element.state.focus && !element.state.edit) {
            textElement = element;
            element.startEdit();
            nextTick(() => {
                element.target.textEl.focus();
                const range = document.createRange();
                range.selectNodeContents(element.target.textEl);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            });
        } else {
            handleClickContent(element);
        }
    }

    function handleMousedownScaleXY(element) {
        handleMousedown(element);
        dragScaleXYElement = element;
    }

    function handleMousedownScaleX(element) {
        handleMousedown(element);
        dragScaleXElement = element;
    }

    function handleMousedownScaleY(element) {
        handleMousedown(element);
        dragScaleYElement = element;
    }

    function handleMousedownContent(element) {
        handleMousedown(element);
        dragTransformElement = element;
    }

    function handleMousedownRotate(element) {
        handleMousedown(element);
        dragRotateElement = element;
    }

    function handleMousedown(element) {
        handleTop(element);
        mouseDownElement = element;
        editElement.value = element;
    }

    function handleTextElementMounted(element, target) {
        element.setTarget(target);
        element.updateSize();
    }

    // 置顶
    function handleTop(element) {
        for (let i = 0; i < elements.length; i++) {
            if (element === elements[i]) {
                element.setZIndex(1);
            } else {
                elements[i].setZIndex(null);
            }
        }
    }

    function handleMouseenterContent(element) {
        element.hover();
    }

    function handleMouseleaveContent(element) {
        element.unHover();
    }

    async function handleDbClickContent(element) {
        const { width, height, src } = await loadImage();
        element.setWidth(width);
        element.setHeight(height);
        element.setImgSrc(src);
    }

    function handleChangeText(text, element) {
        element.setText(text);
        element.updateHeight();
    }

    return {
        elements,
        editElement,

        mounted,
        add
    };
}
