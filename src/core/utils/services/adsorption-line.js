import { Renderer } from "../../../core/renderer";
import { Camera } from "../../../core/camera";
import { Scene } from "../../../core/scene";
import { Mesh } from "../../../core/mesh";
import { ADSORPTION_DISTANCE } from "../constants";

export class AdsorptionLine {
    constructor({ width, height, $parent }) {
        const meshX = new Mesh({
            x: 0,
            y: 100,
            width,
            height: 0.5,
            minWidth: 0,
            minHeight: 0,
            radius: null,
            borderWidth: 0.5,
            borderColor: "#F56C6C",
            ableScale: false
        });
        const meshY = new Mesh({
            y: 0,
            x: 100,
            width: 0.5,
            height,
            minWidth: 0,
            minHeight: 0,
            radius: null,
            borderWidth: 0.5,
            borderColor: "#F56C6C",
            ableScale: false
        });
        const camera = new Camera();
        const scene = new Scene({ width, height });
        const renderer = new Renderer({
            scene,
            camera,
            $parent
        });
        scene.add(meshX);
        scene.add(meshY);
        renderer.canvas.style.position = "absolute";
        renderer.canvas.style.top = "0";
        renderer.canvas.style.left = "0";
        renderer.canvas.style.zIndex = "1";
        renderer.canvas.style.pointerEvents = "none";

        this.meshX = meshX;
        this.meshY = meshY;
        this.renderer = renderer;
    }

    ready() {
        if (this.renderer) {
            this.renderer.canvas.style.display = null;
        }
    }

    updateAdsorptionX({
        meshY,

        originX,
        originCenterX,
        originRightX,

        targetX,
        targetCenterX,
        targetRightX
    }) {
        let xType = null;
        // 中间和中间
        if (Math.abs(originCenterX - targetCenterX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetCenterX);
            xType = "center";
        }
        // 中间和左边
        else if (Math.abs(originCenterX - targetX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetX);
            xType = "center";
        }
        // 中间和右边
        else if (Math.abs(originCenterX - targetRightX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetRightX);
            xType = "center";
        }
        // 左边和中间
        else if (Math.abs(originX - targetCenterX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetCenterX);
            xType = "left";
        }
        // 左边和右边
        else if (Math.abs(originX - targetRightX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetRightX);
            xType = "left";
        }
        // 左边和左边
        else if (Math.abs(originX - targetX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetX);
            xType = "left";
        }
        // 右边和中间
        else if (Math.abs(originRightX - targetCenterX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetCenterX);
            xType = "right";
        }
        // 右边和左边
        else if (Math.abs(originRightX - targetX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetX);
            xType = "right";
        }
        // 右边和右边
        else if (Math.abs(originRightX - targetRightX) < ADSORPTION_DISTANCE) {
            meshY.focus();
            meshY.setX(targetRightX);
            xType = "right";
        }

        return { xType };
    }

    updateAdsorptionY({
        meshX,

        originY,
        originCenterY,
        originRightY,

        targetY,
        targetCenterY,
        targetRightY
    }) {
        let yType = null;
        // 中间和中间
        if (Math.abs(originCenterY - targetCenterY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetCenterY);
            yType = "center";
        }
        // 中间和上边
        else if (Math.abs(originCenterY - targetY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetY);
            yType = "center";
        }
        // 中间和下边
        else if (Math.abs(originCenterY - targetRightY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetRightY);
            yType = "center";
        }
        // 上边和中间
        else if (Math.abs(originY - targetCenterY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetCenterY);
            yType = "top";
        }
        // 上边和下边
        else if (Math.abs(originY - targetRightY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetRightY);
            yType = "top";
        }
        // 上边和上边
        else if (Math.abs(originY - targetY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetY);
            yType = "top";
        }
        // 下边和中间
        else if (Math.abs(originRightY - targetCenterY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetCenterY);
            yType = "bottom";
        }
        // 下边和上边
        else if (Math.abs(originRightY - targetY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetY);
            yType = "bottom";
        }
        // 下边和下边
        else if (Math.abs(originRightY - targetRightY) < ADSORPTION_DISTANCE) {
            meshX.focus();
            meshX.setY(targetRightY);
            yType = "bottom";
        }

        return { yType };
    }

    update({ originMesh, targetMeshes }) {
        this.meshX.blur();
        this.meshY.blur();
        let xType = null;
        let yType = null;

        for (let i = 0; i < targetMeshes.length; i++) {
            const targetMesh = targetMeshes[i];
            if (targetMesh === originMesh) continue;

            const { x: originX, y: originY } = originMesh.position;
            const { x: originCenterX, y: originCenterY } =
                originMesh.getCenterPosition();
            const { x: originRightX, y: originRightY } =
                originMesh.getRightPosition();

            const { x: targetX, y: targetY } = targetMesh.position;
            const { x: targetCenterX, y: targetCenterY } =
                targetMesh.getCenterPosition();

            const { x: targetRightX, y: targetRightY } =
                targetMesh.getRightPosition();

            const resultX = this.updateAdsorptionX({
                meshY: this.meshY,

                originX,
                originCenterX,
                originRightX,

                targetX,
                targetCenterX,
                targetRightX
            });

            const resultY = this.updateAdsorptionY({
                meshX: this.meshX,

                originY,
                originCenterY,
                originRightY,

                targetY,
                targetCenterY,
                targetRightY
            });

            if (resultX.xType) {
                xType = resultX.xType;
            }

            if (resultY.yType) {
                yType = resultY.yType;
            }
        }

        this.renderer.render();

        return {
            // 吸附状态
            xType,
            yType,

            // 吸附位置
            x: xType ? this.meshY.position.x : null,
            y: yType ? this.meshX.position.y : null
        };
    }

    hide() {
        if (this.renderer) {
            this.renderer.canvas.style.display = "none";
            this.renderer && this.renderer.clear();
        }
    }
}
