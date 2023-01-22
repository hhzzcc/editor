export function handleDragMeshXScale(mesh, mouse) {
    const { x: centerX } = mesh.getCenterPosition();
    const width = mesh.state.width;
    const { movementX, x } = mouse;

    // 左
    if (x < centerX) {
        mesh.setX(x);
        mesh.setWidth(width - movementX);
    }
    // 右
    else if (x > centerX) {
        mesh.setWidth(width + movementX);
    }
}

export function handleDragMeshYScale(mesh, mouse) {
    const { y: centerY } = mesh.getCenterPosition();
    const height = mesh.state.height;
    const { movementY, y } = mouse;

    // 上
    if (y < centerY) {
        mesh.setY(y);
        mesh.setHeight(height - movementY);
    }
    // 下
    else if (y > centerY) {
        mesh.setHeight(height + movementY);
    }
}

export function handleDragMeshScale(mesh, mouse) {
    handleDragMeshXScale(mesh, mouse);
    handleDragMeshYScale(mesh, mouse);
}
