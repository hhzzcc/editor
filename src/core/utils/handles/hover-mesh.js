import { isMouseCollectMesh } from "../collection";

export function handleHoverMesh(mouse, meshes) {
    let hoverMesh = null;
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { isCollectContent } = isMouseCollectMesh(mouse, mesh);

        mesh.unHover();
        if (isCollectContent && !hoverMesh) {
            hoverMesh = mesh;
        }
    }

    hoverMesh?.hover();
}
