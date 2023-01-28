import { BREAK_ADSORPTION_DISTANCE } from "../constants";

function getTransformX({
    type,
    targetElementX,
    originElementX,
    originElementWidth
}) {
    switch (type) {
        case "left":
            return targetElementX - originElementX;
        case "center":
            return targetElementX - originElementX - originElementWidth / 2;
        case "right":
            return targetElementX - originElementX - originElementWidth;
    }
}

function getTransformY({
    type,
    targetElementY,
    originElementY,
    originElementHeight
}) {
    switch (type) {
        case "top":
            return targetElementY - originElementY;
        case "center":
            return targetElementY - originElementY - originElementHeight / 2;
        case "bottom":
            return targetElementY - originElementY - originElementHeight;
    }
}
export class ElementTransform {
    constructor() {
        this.clear();
    }

    clear() {
        this.offsetX = 0;
        this.offsetY = 0;
    }

    handleDragElementTransform({ mouse, element, onTransform }) {
        const { x, y, xType, yType } = onTransform(element);
        const transformDragX = mouse.movementX;
        const transformDragY = mouse.movementY;
        const distanceX = mouse.x - this.offsetX;
        const distanceY = mouse.y - this.offsetY;

        // 拖拽累计距离大于 BREAK_ADSORPTION_DISTANCE 脱离吸附
        if (
            this.offsetX !== 0 &&
            Math.abs(distanceX) > BREAK_ADSORPTION_DISTANCE
        ) {
            element.transformX(distanceX);
            this.offsetX = 0;
        }
        // 吸附
        else if (xType) {
            const transformAdsorptionX = getTransformX({
                type: xType,
                targetElementX: x,
                originElementX: element.state.x,
                originElementWidth: element.state.width
            });
            element.transformX(transformAdsorptionX);
            // 记录吸附位置
            if (this.offsetX === 0) {
                this.offsetX = mouse.x;
            }
        }
        // 自由拖拽
        else {
            element.transformX(transformDragX);
            this.offsetX = 0;
        }

        // 拖拽累计距离大于 ADSORPTION_DISTANCE 脱离吸附
        if (
            this.offsetY !== 0 &&
            Math.abs(distanceY) > BREAK_ADSORPTION_DISTANCE
        ) {
            element.transformY(distanceY);
            this.offsetY = 0;
        }
        // 吸附
        else if (yType) {
            const transformAdsorptionY = getTransformY({
                type: yType,
                targetElementY: y,
                originElementY: element.state.y,
                originElementHeight: element.state.height
            });
            element.transformY(transformAdsorptionY);
            // 记录吸附位置
            if (this.offsetY === 0) {
                this.offsetY = mouse.y;
            }
        }
        // 自由拖拽
        else {
            element.transformY(transformDragY);
            this.offsetY = 0;
        }
    }
}
