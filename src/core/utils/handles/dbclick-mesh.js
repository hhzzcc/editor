import { isMouseCollectMesh } from "../collection";

export function handleDbClickMesh(target, meshes) {
    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const {
            isCollectContent,
            isCollectBorderCircular,
            isCollectBorderRect
        } = isMouseCollectMesh(target, mesh);

        if (
            isCollectContent ||
            isCollectBorderCircular ||
            isCollectBorderRect
        ) {
            return mesh;
        }
    }

    return null;
}

export function handleReplaceMeshBackgroundImage(mesh) {
    return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.click();
        input.onchange = () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    mesh.setBackgroundImage(img);
                    mesh.setWidth(img.width);
                    mesh.setHeight(img.height);
                    resolve();
                };
            };
            reader.readAsDataURL(file);
        };
    });
}
