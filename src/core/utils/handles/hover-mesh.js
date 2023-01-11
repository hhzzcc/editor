import { isMouseCollectMesh } from "../collection";

export function handleHoverMesh(mouse, meshes) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { isCollectContent } = isMouseCollectMesh(mouse, mesh);

        if (isCollectContent) {
            mesh.hover();
        } else {
            mesh.unHover();
        }
    }
}
