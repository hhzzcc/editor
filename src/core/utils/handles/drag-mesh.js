import { isMouseCollectMesh } from "../collection";

export function handleStartDragMesh(mouse, meshes) {
    const startDragMeshes = [];
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const {
            isCollectContent,
            isCollectBorderCircular,
            isCollectBorderRect
        } = isMouseCollectMesh(mouse, mesh);

        if (
            isCollectContent ||
            isCollectBorderCircular ||
            isCollectBorderRect
        ) {
            mesh.hover();
            mesh.focus();
            startDragMeshes.push(mesh);
        } else {
            mesh.unHover();
            mesh.blur();
        }
    }
    return startDragMeshes;
}

export function handleDragMesh({
    mouse,
    meshes,
    onDragMeshMove,
    onDragMeshScale,
    onDragMeshScaleX,
    onDragMeshScaleY
}) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const {
            isCollectBorderCircular,
            isCollectTopBorderRect,
            isCollectRightBorderRect,
            isCollectBottomBorderRect,
            isCollectLeftBorderRect
        } = isMouseCollectMesh(mouse, mesh);

        if (isCollectBorderCircular) {
            onDragMeshScale(mesh);
        } else if (isCollectLeftBorderRect || isCollectRightBorderRect) {
            onDragMeshScaleX(mesh);
        } else if (isCollectTopBorderRect || isCollectBottomBorderRect) {
            onDragMeshScaleY(mesh);
        } else {
            onDragMeshMove(mesh);
        }
    }
}
