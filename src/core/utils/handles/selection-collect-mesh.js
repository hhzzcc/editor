import { isBoxCollectMesh } from "../collection";
import { Group } from "../../group";
import { handleGroupSize, handleGroupBackground } from "../handles/group";

// 框选mesh
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

// 创建框选组
export function handleCreateSelectionGroup({ collectMeshes, scene }) {
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
                sceneMesh.blur();
                sceneMesh.unHover();
                group.add(collectMesh);
                sceneMeshes.splice(j, 1);
                j--;
            }
        }
    }

    group.temporary();
    group.focus();
    return group;
}

// 解开临时组
export function handleUntieGroup({ sceneMeshes, scene, originMesh }) {
    for (let i = 0; i < sceneMeshes.length; i++) {
        const sceneGroup = sceneMeshes[i];
        // 存在临时组则解开
        if (
            sceneGroup !== originMesh &&
            sceneGroup instanceof Group &&
            sceneGroup.type.temporary
        ) {
            const scaleX = sceneGroup.style.width / sceneGroup.createWidth;
            const scaleY = sceneGroup.style.height / sceneGroup.createHeight;

            for (let j = 0; j < sceneGroup.meshes.length; j++) {
                const mesh = sceneGroup.meshes[j];
                const offsetX = mesh.position.x - sceneGroup.createX;
                const offsetY = mesh.position.y - sceneGroup.createY;

                mesh.setPosition(
                    Math.round(sceneGroup.position.x + offsetX * scaleX),
                    Math.round(sceneGroup.position.y + offsetY * scaleY)
                );

                mesh.setWidth(Math.round(mesh.style.width * scaleX));
                mesh.setHeight(Math.round(mesh.style.height * scaleY));
                scene.add(mesh);
            }

            sceneMeshes.splice(i, 1);
            i--;
        }
    }
}
