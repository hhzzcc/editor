import { isBoxCollectMesh } from "../collection";

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
