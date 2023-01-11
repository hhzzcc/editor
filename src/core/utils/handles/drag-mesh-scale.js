export function handleDragMeshScale(
    meshes,
    layerX,
    layerY,
    prevLayerX,
    prevLayerY
) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { x: centerX, y: centerY } = mesh.getCenterPosition();
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

export function handleDragMeshXScale(meshes, layerX, prevLayerX) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { x: centerX } = mesh.getCenterPosition();
        const movementX = layerX - prevLayerX;

        // 左
        if (layerX < centerX) {
            mesh.setX(layerX);
            mesh.setWidth(mesh.style.width - movementX);
        }
        // 右
        else if (layerX > centerX) {
            mesh.setX(layerX - mesh.style.width);
            mesh.setWidth(mesh.style.width + movementX);
        }
    }
}

export function handleDragMeshYScale(meshes, layerY, prevLayerY) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { y: centerY } = mesh.getCenterPosition();
        const movementY = layerY - prevLayerY;

        // 上
        if (layerY < centerY) {
            mesh.setY(layerY);
            mesh.setHeight(mesh.style.height - movementY);
        }
        // 下
        else if (layerY > centerY) {
            mesh.setY(layerY - mesh.style.height);
            mesh.setHeight(mesh.style.height + movementY);
        }
    }
}
