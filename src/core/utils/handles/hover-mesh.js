import { isMouseCollectMesh } from "../collection";

export function handleHoverMesh(meshes, target) {
    let hoverMesh = null;
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { isCollectContent } = isMouseCollectMesh(target, mesh);

        mesh.unHover();
        if (isCollectContent && !hoverMesh) {
            hoverMesh = mesh;
        }
    }

    if (hoverMesh) {
        // 判断当前是否在组内
        if (!hoverMesh.parent) {
            hoverMesh.operable();
        }

        hoverMesh.hover();
    }
}
