import { isRectCollectRect } from "../collection";

// 框选盒
export class Selection {
    constructor({ width, height, $parent }) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = "9";
        canvas.style.pointerEvents = "none";
        $parent.appendChild(canvas);

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    ready({ originX, originY }) {
        this.originX = originX;
        this.originY = originY;
        this.collectElements = [];
    }

    update({ x, y, targetElements }) {
        this.clear();

        const { ctx, originX, originY } = this;
        const distanceX = x - originX;
        const distanceY = y - originY;
        let rectX, rectY, rectW, rectH;

        if (distanceX < 0) {
            rectX = x;
            rectW = -distanceX;
        } else {
            rectX = originX;
            rectW = distanceX;
        }

        if (distanceY < 0) {
            rectY = y;
            rectH = -distanceY;
        } else {
            rectY = originY;
            rectH = distanceY;
        }

        ctx.strokeStyle = "blue";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeRect(rectX, rectY, rectW, rectH);
        ctx.stroke();

        const collectElements = [];
        for (let i = 0; i < targetElements.length; i++) {
            const targetElement = targetElements[i];
            if (
                isRectCollectRect({
                    x1: targetElement.state.x,
                    y1: targetElement.state.y,
                    width1: targetElement.state.width,
                    height1: targetElement.state.height,

                    x2: rectX,
                    y2: rectY,
                    width2: rectW,
                    height2: rectH
                })
            ) {
                targetElement.inoperable();
                targetElement.focus();
                collectElements.push(targetElement);
            } else {
                targetElement.operable();
                targetElement.blur();
            }
        }

        this.collectElements = collectElements;
    }

    getCollectElements() {
        return this.collectElements;
    }

    clear() {
        const { ctx, canvas } = this;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
