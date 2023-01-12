import { isBoxCollectMesh } from "../collection";
import { Group } from "../../group";
import { handleGroupSize, handleGroupBackground } from "../handles/group";

export function handleSelectionCollectMesh(selection, meshes) {
    const collectionMeshes = [];
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        if (isBoxCollectMesh(mesh, selection.mesh)) {
            mesh.focus();
            mesh.hover();
            mesh.inoperable();
            collectionMeshes.push(mesh);
        } else {
            mesh.blur();
            mesh.unHover();
            mesh.operable();
        }
    }

    return collectionMeshes;
}

export function handleSelectionGroup({ collectMeshes, scene }) {
    const { meshes: sceneMeshes } = scene;
    const { x, y, width, height } = handleGroupSize(collectMeshes);
    const backgroundImage = handleGroupBackground({
        groupX: x,
        groupY: y,
        groupWidth: width,
        groupHeight: height,
        sceneMeshes
    });
    const group = new Group({ x, y, width, height, backgroundImage });

    for (let i = 0; i < collectMeshes.length; i++) {
        const collectMesh = collectMeshes[i];
        for (let j = 0; j < sceneMeshes.length; j++) {
            const sceneMesh = sceneMeshes[j];
            if (sceneMesh === collectMesh) {
                group.add(collectMesh);
                sceneMeshes.splice(j, 1);
                j--;
            }
        }
    }
    return group;
}
