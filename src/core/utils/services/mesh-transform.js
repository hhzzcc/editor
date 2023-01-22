import { BREAK_ADSORPTION_DISTANCE } from "../constants";

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

    handleDragMeshTransform({ mouse, mesh, onTransform }) {
        const { x, y, xType, yType } = onTransform(mesh);
        const transformDragX = mouse.movementX;
        const transformDragY = mouse.movementY;
        const distanceX = mouse.x - this.offsetX;
        const distanceY = mouse.y - this.offsetY;

        // 拖拽累计距离大于 BREAK_ADSORPTION_DISTANCE 脱离吸附
        if (
            this.offsetX !== 0 &&
            Math.abs(distanceX) > BREAK_ADSORPTION_DISTANCE
        ) {
            mesh.transformX(distanceX);
            this.offsetX = 0;
        }
        // 吸附
        else if (xType) {
            const transformAdsorptionX = getTransformX({
                type: xType,
                targetMeshX: x,
                originMeshX: mesh.state.x,
                originMeshWidth: mesh.state.width
            });
            mesh.transformX(transformAdsorptionX);
            // 记录吸附位置
            if (this.offsetX === 0) {
                this.offsetX = mouse.x;
            }
        }
        // 自由拖拽
        else {
            mesh.transformX(transformDragX);
            this.offsetX = 0;
        }

        // 拖拽累计距离大于 ADSORPTION_DISTANCE 脱离吸附
        if (
            this.offsetY !== 0 &&
            Math.abs(distanceY) > BREAK_ADSORPTION_DISTANCE
        ) {
            mesh.transformY(distanceY);
            this.offsetY = 0;
        }
        // 吸附
        else if (yType) {
            const transformAdsorptionY = getTransformY({
                type: yType,
                targetMeshY: y,
                originMeshY: mesh.state.y,
                originMeshHeight: mesh.state.height
            });
            mesh.transformY(transformAdsorptionY);
            // 记录吸附位置
            if (this.offsetY === 0) {
                this.offsetY = mouse.y;
            }
        }
        // 自由拖拽
        else {
            mesh.transformY(transformDragY);
            this.offsetY = 0;
        }
    }
}
