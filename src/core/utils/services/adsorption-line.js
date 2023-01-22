import { ADSORPTION_DISTANCE } from "../constants";

export class AdsorptionLine {
    constructor({ width, height, $parent }) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";
        $parent.appendChild(canvas);

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    drawXLine(y) {
        const { ctx, canvas } = this;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = "#F56C6C";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }

    drawYLine(x) {
        const { ctx, canvas } = this;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = "#F56C6C";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }

    clear() {
        const { ctx, canvas } = this;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    updateAdsorptionX({
        originX,
        originCenterX,
        originRightX,

        targetX,
        targetCenterX,
        targetRightX
    }) {
        // 中间和中间
        if (Math.abs(originCenterX - targetCenterX) < ADSORPTION_DISTANCE) {
            return { type: "center", value: targetCenterX };
        }
        // 中间和左边
        else if (Math.abs(originCenterX - targetX) < ADSORPTION_DISTANCE) {
            return { type: "center", value: targetX };
        }
        // 中间和右边
        else if (Math.abs(originCenterX - targetRightX) < ADSORPTION_DISTANCE) {
            return { type: "center", value: targetRightX };
        }
        // 左边和中间
        else if (Math.abs(originX - targetCenterX) < ADSORPTION_DISTANCE) {
            return { type: "left", value: targetCenterX };
        }
        // 左边和右边
        else if (Math.abs(originX - targetRightX) < ADSORPTION_DISTANCE) {
            return { type: "left", value: targetRightX };
        }
        // 左边和左边
        else if (Math.abs(originX - targetX) < ADSORPTION_DISTANCE) {
            return { type: "left", value: targetX };
        }
        // 右边和中间
        else if (Math.abs(originRightX - targetCenterX) < ADSORPTION_DISTANCE) {
            return { type: "right", value: targetCenterX };
        }
        // 右边和左边
        else if (Math.abs(originRightX - targetX) < ADSORPTION_DISTANCE) {
            return { type: "right", value: targetX };
        }
        // 右边和右边
        else if (Math.abs(originRightX - targetRightX) < ADSORPTION_DISTANCE) {
            return { type: "right", value: targetRightX };
        }

        return null;
    }

    updateAdsorptionY({
        originY,
        originCenterY,
        originRightY,

        targetY,
        targetCenterY,
        targetRightY
    }) {
        // 中间和中间
        if (Math.abs(originCenterY - targetCenterY) < ADSORPTION_DISTANCE) {
            return { type: "center", value: targetCenterY };
        }
        // 中间和上边
        else if (Math.abs(originCenterY - targetY) < ADSORPTION_DISTANCE) {
            return { type: "center", value: targetY };
        }
        // 中间和下边
        else if (Math.abs(originCenterY - targetRightY) < ADSORPTION_DISTANCE) {
            return { type: "center", value: targetRightY };
        }
        // 上边和中间
        else if (Math.abs(originY - targetCenterY) < ADSORPTION_DISTANCE) {
            return { type: "top", value: targetCenterY };
        }
        // 上边和下边
        else if (Math.abs(originY - targetRightY) < ADSORPTION_DISTANCE) {
            return { type: "top", value: targetRightY };
        }
        // 上边和上边
        else if (Math.abs(originY - targetY) < ADSORPTION_DISTANCE) {
            return { type: "top", value: targetY };
        }
        // 下边和中间
        else if (Math.abs(originRightY - targetCenterY) < ADSORPTION_DISTANCE) {
            return { type: "bottom", value: targetCenterY };
        }
        // 下边和上边
        else if (Math.abs(originRightY - targetY) < ADSORPTION_DISTANCE) {
            return { type: "bottom", value: targetY };
        }
        // 下边和下边
        else if (Math.abs(originRightY - targetRightY) < ADSORPTION_DISTANCE) {
            return { type: "bottom", value: targetRightY };
        }

        return null;
    }

    update({ originElement, targetElements }) {
        let resultX = null;
        let resultY = null;

        for (let i = 0; i < targetElements.length; i++) {
            const target = targetElements[i];
            if (target === originElement) continue;

            const { x: originX, y: originY } = originElement.getPosition();
            const { x: originCenterX, y: originCenterY } =
                originElement.getCenterPosition();
            const { x: originRightX, y: originRightY } =
                originElement.getRightPosition();

            const { x: targetX, y: targetY } = target.getPosition();
            const { x: targetCenterX, y: targetCenterY } =
                target.getCenterPosition();

            const { x: targetRightX, y: targetRightY } =
                target.getRightPosition();

            const adsorptionResultX = this.updateAdsorptionX({
                originX,
                originCenterX,
                originRightX,

                targetX,
                targetCenterX,
                targetRightX
            });

            const adsorptionResultY = this.updateAdsorptionY({
                originY,
                originCenterY,
                originRightY,

                targetY,
                targetCenterY,
                targetRightY
            });

            if (adsorptionResultX) {
                resultX = adsorptionResultX;
            }

            if (adsorptionResultY) {
                resultY = adsorptionResultY;
            }
        }

        this.clear();
        resultX && this.drawYLine(resultX.value);
        resultY && this.drawXLine(resultY.value);

        return {
            // 吸附状态
            xType: resultX ? resultX.type : null,
            yType: resultY ? resultY.type : null,

            // 吸附位置
            x: resultX ? resultX.value : null,
            y: resultY ? resultY.value : null
        };
    }

    // update({ originMesh, targets }) {
    //     let resultX = null;
    //     let resultY = null;

    //     for (let i = 0; i < targets.length; i++) {
    //         const target = targets[i];
    //         if (target === originMesh) continue;

    //         const { x: originX, y: originY } = originMesh.getPosition();
    //         const { x: originCenterX, y: originCenterY } =
    //             originMesh.getCenterPosition();
    //         const { x: originRightX, y: originRightY } =
    //             originMesh.getRightPosition();

    //         const { x: targetX, y: targetY } = target.getPosition();
    //         const { x: targetCenterX, y: targetCenterY } =
    //             target.getCenterPosition();

    //         const { x: targetRightX, y: targetRightY } =
    //             target.getRightPosition();

    //         const adsorptionResultX = this.updateAdsorptionX({
    //             originX,
    //             originCenterX,
    //             originRightX,

    //             targetX,
    //             targetCenterX,
    //             targetRightX
    //         });

    //         const adsorptionResultY = this.updateAdsorptionY({
    //             originY,
    //             originCenterY,
    //             originRightY,

    //             targetY,
    //             targetCenterY,
    //             targetRightY
    //         });

    //         if (adsorptionResultX) {
    //             resultX = adsorptionResultX;
    //         }

    //         if (adsorptionResultY) {
    //             resultY = adsorptionResultY;
    //         }
    //     }

    //     this.clear();
    //     resultX && this.drawYLine(resultX.value);
    //     resultY && this.drawXLine(resultY.value);

    //     return {
    //         // 吸附状态
    //         xType: resultX ? resultX.type : null,
    //         yType: resultY ? resultY.type : null,

    //         // 吸附位置
    //         x: resultX ? resultX.value : null,
    //         y: resultY ? resultY.value : null
    //     };
    // }
}
