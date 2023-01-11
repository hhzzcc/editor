export function handleMeshTop(meshes, topMesh) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        if (mesh === topMesh) {
            meshes.splice(i, 1);
            break;
        }
    }
    meshes.unshift(topMesh);
}
