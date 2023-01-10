import { isMouseCollectMesh, isBoxCollectMesh } from "./collection";

export function handleSelectionCollectMesh(selection, meshes) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        if (isBoxCollectMesh(mesh, selection.mesh)) {
            mesh.focus();
            mesh.hover();
        } else {
            mesh.blur();
            mesh.unHover();
        }
    }
}

export function handleStartDragMesh(mouse, meshes) {
    const dragMoveMeshes = [];
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { isCollectRect, isCollectRadius } = isMouseCollectMesh(
            mouse,
            mesh
        );
        if (isCollectRect || isCollectRadius) {
            mesh.hover();
            mesh.focus();
            dragMoveMeshes.push(mesh);
        } else {
            mesh.unHover();
            mesh.blur();
        }
    }
    return dragMoveMeshes;
}

export function handleHoverMesh(mouse, meshes) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { isCollectRect, isCollectRadius } = isMouseCollectMesh(
            mouse,
            mesh
        );
        if (isCollectRect || isCollectRadius) {
            mesh.hover();
        } else {
            mesh.unHover();
        }
    }
}

export function handleDragMeshScale(
    meshes,
    layerX,
    layerY,
    prevLayerX,
    prevLayerY
) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { x: centerX, y: centerY } = mesh.getCenter();
        const movementX = layerX - prevLayerX;
        const movementY = layerY - prevLayerY;

        // 左上
        if (layerX < centerX && layerY < centerY) {
            mesh.setX(layerX);
            mesh.setY(layerY);
            mesh.setWidth(mesh.style.width - movementX);
            mesh.setHeight(mesh.style.height - movementY);
        }
        // 右上
        else if (layerX > centerX && layerY < centerY) {
            mesh.setX(layerX - mesh.style.width);
            mesh.setY(layerY);
            mesh.setWidth(mesh.style.width + movementX);
            mesh.setHeight(mesh.style.height - movementY);
        }
        // 左下
        else if (layerX < centerX && layerY > centerY) {
            mesh.setX(layerX);
            mesh.setY(layerY - mesh.style.height);
            mesh.setWidth(mesh.style.width - movementX);
            mesh.setHeight(mesh.style.height + movementY);
        }
        // 右下
        else if (layerX > centerX && layerY > centerY) {
            mesh.setX(layerX - mesh.style.width);
            mesh.setY(layerY - mesh.style.height);
            mesh.setWidth(mesh.style.width + movementX);
            mesh.setHeight(mesh.style.height + movementY);
        }
    }
}

let offsetX = 0;
export function handleDragMeshTransform({
    mouse,
    meshes,
    prevMousedownLeft,
    prevMousedownTop,
    transformCb
}) {
    function getTransformX({
        type,
        targetMeshX,
        originMeshX,
        originMeshWidth
    }) {
        switch (type) {
            case "left":
                return targetMeshX - originMeshX;
            case "center":
                return targetMeshX - originMeshX - originMeshWidth / 2;
            case "right":
                return targetMeshX - originMeshX - originMeshWidth;
        }
    }

    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { x, y, xType } = transformCb(mesh);
        const transformDragX = mouse.layerX - prevMousedownLeft;
        const transformDragY = mouse.layerY - prevMousedownTop;

        // 拖拽累计距离大于5脱离吸附
        if (offsetX !== 0 && Math.abs(offsetX - mouse.layerX) > 5) {
            const x = offsetX - mouse.layerX < 0 ? 10 : -10;
            offsetX = 0;
            mesh.transform(x, transformDragY);
        }
        // 吸附
        else if (xType) {
            // 记录吸附位置
            if (offsetX === 0) {
                offsetX = mouse.layerX;
            }
            const transformAdsorptionX = getTransformX({
                type: xType,
                targetMeshX: x,
                originMeshX: mesh.position.x,
                originMeshWidth: mesh.style.width
            });
            mesh.transform(transformAdsorptionX, transformDragY);
        }
        // 自由拖拽
        else {
            offsetX = 0;
            mesh.transform(transformDragX, transformDragY);
        }
    }
}

export function handleDragMesh({
    mouse,
    meshes,
    dragMeshMoveCb,
    dragMeshScaleCb
}) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { isCollectRadius } = isMouseCollectMesh(mouse, mesh);

        if (isCollectRadius) {
            dragMeshScaleCb(mesh);
        } else {
            dragMeshMoveCb(mesh);
        }
    }
}
