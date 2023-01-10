import { Renderer } from "../../core/renderer";
import { Camera } from "../../core/camera";
import { Scene } from "../../core/scene";
import { Mesh } from "../../core/mesh";

export class AdsorptionLine {
    constructor({ width, height, $parent }) {
        const meshX = new Mesh({
            x: 0,
            y: 100,
            width,
            height: 0.5,
            minWidth: 0,
            minHeight: 0,
            radius: null
        });
        const meshY = new Mesh({
            y: 0,
            x: 100,
            width: 0.5,
            height,
            minWidth: 0,
            minHeight: 0,
            radius: null
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
        if (Math.abs(originCenterX - targetCenterX) < 10) {
            meshY.focus();
            meshY.setX(targetCenterX);
            xType = "center";
        }
        // 中间和左边
        else if (Math.abs(originCenterX - targetX) < 10) {
            meshY.focus();
            meshY.setX(targetX);
            xType = "center";
        }
        // 中间和右边
        else if (Math.abs(originCenterX - targetRightX) < 10) {
            meshY.focus();
            meshY.setX(targetRightX);
            xType = "center";
        }
        // 左边和中间
        else if (Math.abs(originX - targetCenterX) < 10) {
            meshY.focus();
            meshY.setX(targetCenterX);
            xType = "left";
        }
        // 左边和右边
        else if (Math.abs(originX - targetRightX) < 10) {
            meshY.focus();
            meshY.setX(targetRightX);
            xType = "left";
        }
        // 左边和左边
        else if (Math.abs(originX - targetX) < 10) {
            meshY.focus();
            meshY.setX(targetX);
            xType = "left";
        }
        // 右边和中间
        else if (Math.abs(originRightX - targetCenterX) < 10) {
            meshY.focus();
            meshY.setX(targetCenterX);
            xType = "right";
        }
        // 右边和左边
        else if (Math.abs(originRightX - targetX) < 10) {
            meshY.focus();
            meshY.setX(targetX);
            xType = "right";
        }
        // 右边和右边
        else if (Math.abs(originRightX - targetRightX) < 10) {
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
        if (Math.abs(originCenterY - targetCenterY) < 10) {
            meshX.focus();
            meshX.setY(targetCenterY);
            yType = "center";
        }
        // 中间和左边
        else if (Math.abs(originCenterY - targetY) < 10) {
            meshX.focus();
            meshX.setY(targetY);
            yType = "center";
        }
        // 中间和右边
        else if (Math.abs(originCenterY - targetRightY) < 10) {
            meshX.focus();
            meshX.setY(targetRightY);
            yType = "center";
        }
        // 左边和中间
        else if (Math.abs(originY - targetCenterY) < 10) {
            meshX.focus();
            meshX.setY(targetCenterY);
            yType = "top";
        }
        // 左边和右边
        else if (Math.abs(originY - targetRightY) < 10) {
            meshX.focus();
            meshX.setY(targetRightY);
            yType = "top";
        }
        // 左边和左边
        else if (Math.abs(originY - targetY) < 10) {
            meshX.focus();
            meshX.setY(targetY);
            yType = "top";
        }
        // 右边和中间
        else if (Math.abs(originRightY - targetCenterY) < 10) {
            meshX.focus();
            meshX.setY(targetCenterY);
            yType = "bottom";
        }
        // 右边和左边
        else if (Math.abs(originRightY - targetY) < 10) {
            meshX.focus();
            meshX.setY(targetY);
            yType = "bottom";
        }
        // 右边和右边
        else if (Math.abs(originRightY - targetRightY) < 10) {
            meshX.focus();
            meshX.setY(targetRightY);
            yType = "bottom";
        }

        return { yType };
    }

    computedAdsorptionY() {}

    update({ originMesh, targetMeshes }) {
        this.meshX.blur();
        this.meshY.blur();
        let xType = null;
        let yType = null;

        for (let i = 0; i < targetMeshes.length; i++) {
            const targetMesh = targetMeshes[i];
            if (targetMesh === originMesh) continue;

            const { x: originX, y: originY } = originMesh.position;
            const { width: originWidth, height: originHeight } =
                originMesh.style;
            const { x: originCenterX, y: originCenterY } =
                originMesh.getCenter();
            const originRightX = originX + originWidth;
            const originRightY = originY + originHeight;

            const { x: targetX, y: targetY } = targetMesh.position;
            const { width: targetWidth, height: targetHeight } =
                targetMesh.style;
            const { x: targetCenterX, y: targetCenterY } =
                targetMesh.getCenter();
            const targetRightX = targetX + targetWidth;
            const targetRightY = targetY + targetHeight;

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

            xType = resultX.xType;
            yType = resultY.yType;

            // const { x: originCenterX, y: originCenterY } =
            //     originMesh.getCenter();
            // const { x: targetCenterX, y: targetCenterY } =
            //     targetMesh.getCenter();

            // if (Math.abs(originCenterY - targetY - targetHeight / 2) < 10) {
            //     this.meshX.focus();
            //     this.meshX.setY(targetY + targetHeight / 2);
            // }

            // if (Math.abs(originCenterY - targetCenterY) < 10) {
            //     this.meshX.focus();
            //     this.meshX.setY(targetCenterY);
            // }
            // if (Math.abs(originCenterY - targetCenterY) < 10) {
            //     this.meshX.focus();
            //     this.meshX.setY(targetCenterY);
            // }
            // if (Math.abs(originCenterY - targetCenterY) < 10) {
            //     this.meshX.focus();
            //     this.meshX.setY(targetCenterY);
            // }
        }

        this.renderer.render();

        return {
            xType,
            yType,
            x: this.meshY.type.focus ? this.meshY.position.x : null,
            y: this.meshX.type.focus ? this.meshX.position.y : null
        };
    }

    hide() {
        if (this.renderer) {
            this.renderer.canvas.style.display = "none";
            this.renderer && this.renderer.clear();
        }
    }
}
