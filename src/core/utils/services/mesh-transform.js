import { ADSORPTION_DISTANCE } from "../constants";

function getTransformX({ type, targetMeshX, originMeshX, originMeshWidth }) {
    switch (type) {
        case "left":
            return targetMeshX - originMeshX;
        case "center":
            return targetMeshX - originMeshX - originMeshWidth / 2;
        case "right":
            return targetMeshX - originMeshX - originMeshWidth;
    }
}

function getTransformY({ type, targetMeshY, originMeshY, originMeshHeight }) {
    switch (type) {
        case "top":
            return targetMeshY - originMeshY;
        case "center":
            return targetMeshY - originMeshY - originMeshHeight / 2;
        case "bottom":
            return targetMeshY - originMeshY - originMeshHeight;
    }
}
export class MeshTransform {
    constructor() {
        this.clear();
    }

    clear() {
        this.offsetX = 0;
        this.offsetY = 0;
    }

    handleDragMeshTransform({
        mouse,
        mesh,
        prevMousedownLeft,
        prevMousedownTop,
        onTransform
    }) {
        const { x, y, xType, yType } = onTransform(mesh);
        const transformDragX = mouse.layerX - prevMousedownLeft;
        const transformDragY = mouse.layerY - prevMousedownTop;
        const distanceX = this.offsetX - mouse.layerX;
        const distanceY = this.offsetY - mouse.layerY;

        // 拖拽累计距离大于 ADSORPTION_DISTANCE 脱离吸附
        if (this.offsetX !== 0 && Math.abs(distanceX) > ADSORPTION_DISTANCE) {
            mesh.transformX(-distanceX);
            this.offsetX = 0;
        }
        // 吸附
        else if (xType) {
            // 记录吸附位置
            if (this.offsetX === 0) {
                this.offsetX = mouse.layerX;
            }
            const transformAdsorptionX = getTransformX({
                type: xType,
                targetMeshX: x,
                originMeshX: mesh.position.x,
                originMeshWidth: mesh.style.width
            });
            mesh.transformX(transformAdsorptionX);
        }
        // 自由拖拽
        else {
            this.offsetX = 0;
            mesh.transformX(transformDragX);
        }

        // 拖拽累计距离大于 ADSORPTION_DISTANCE 脱离吸附
        if (this.offsetY !== 0 && Math.abs(distanceY) > ADSORPTION_DISTANCE) {
            mesh.transformY(-distanceY);
            this.offsetY = 0;
        }
        // 吸附
        else if (yType) {
            // 记录吸附位置
            if (this.offsetY === 0) {
                this.offsetY = mouse.layerY;
            }
            const transformAdsorptionY = getTransformY({
                type: yType,
                targetMeshY: y,
                originMeshY: mesh.position.y,
                originMeshHeight: mesh.style.height
            });
            mesh.transformY(transformAdsorptionY);
        }
        // 自由拖拽
        else {
            this.offsetY = 0;
            mesh.transformY(transformDragY);
        }
    }
}
