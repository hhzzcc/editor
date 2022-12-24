function isCollection(mouse, mesh) {
    return (
        mouse.layerX > mesh.position.x &&
        mouse.layerX < mesh.position.x + mesh.style.width &&
        mouse.layerY > mesh.position.y &&
        mouse.layerY < mesh.position.y + mesh.style.height
    );
}

export const mouseHoverPlugin = {
    install(renderer) {
        const { scene, canvas } = renderer;
        const { meshes } = scene;
        let mousedown = false;
        let mousedownLeft = null;
        let mousedownTop = null;
        let dragMeshes = [];

        canvas.addEventListener("mousedown", (v) => {
            dragMeshes = [];
            mousedown = true;
            mousedownLeft = v.layerX;
            mousedownTop = v.layerY;
        });

        canvas.addEventListener("mousemove", (v) => {
            for (let i = 0; i < dragMeshes.length; i++) {
                const mesh = dragMeshes[i];
                mesh.transform(
                    v.layerX - mousedownLeft,
                    v.layerY - mousedownTop
                );
                mousedownLeft = v.layerX;
                mousedownTop = v.layerY;
            }

            if (!dragMeshes.length) {
                for (let i = 0; i < meshes.length; i++) {
                    const mesh = meshes[i];
                    if (isCollection(v, mesh)) {
                        mesh.hover();
                        if (mousedown) {
                            dragMeshes.push(mesh);
                        }
                    } else {
                        mesh.unHover();
                    }
                }
            }

            renderer.render();
        });

        canvas.addEventListener("click", (v) => {
            for (let i = 0; i < meshes.length; i++) {
                const mesh = meshes[i];
                if (isCollection(v, mesh)) {
                    mesh.focus();
                } else {
                    mesh.blur();
                }
            }
            renderer.render();
        });

        document.addEventListener("mouseup", () => {
            mousedown = false;
            mousedownLeft = null;
            mousedownTop = null;
            dragMeshes = [];
        });
    }
};

export const mousePlugins = [mouseHoverPlugin];
