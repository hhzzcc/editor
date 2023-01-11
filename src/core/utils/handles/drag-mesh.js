import { isMouseCollectMesh } from "../collection";

export function handleStartDragMesh(mouse, meshes) {
    let startDragMesh = null;
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const {
            isCollectContent,
            isCollectBorderCircular,
            isCollectBorderRect
        } = isMouseCollectMesh(mouse, mesh);

        mesh.unHover();
        mesh.blur();

        if (
            !startDragMesh &&
            (isCollectContent || isCollectBorderCircular || isCollectBorderRect)
        ) {
            startDragMesh = mesh;
        }
    }

    startDragMesh?.hover();
    startDragMesh?.focus();
    return startDragMesh;
}

export function handleDragMesh({
    mouse,
    mesh,
    onDragMeshMove,
    onDragMeshScale,
    onDragMeshScaleX,
    onDragMeshScaleY
}) {
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
