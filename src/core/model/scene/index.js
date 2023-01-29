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
    }

    function add(element) {
        elements.push(...element);
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

    function initMouseupEvent(sceneEl) {
        sceneEl.addEventListener("mouseup", () => {
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
