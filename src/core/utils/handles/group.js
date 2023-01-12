export function handleGroupSize(meshes) {
    let top = null;
    let right = null;
    let bottom = null;
    let left = null;

    for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const { x, y } = mesh.position;
        const { width, height } = mesh.style;

        top = top === null ? y : Math.min(top, y);
        right = right === null ? x + width : Math.max(right, x + width);
        bottom = bottom === null ? y + height : Math.max(bottom, y + height);
        left = left === null ? x : Math.min(left, x);
    }

    return {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
    };
}

export function handleGroupBackground({
    groupX,
    groupY,
    groupWidth,
    groupHeight,
    sceneMeshes
}) {
    const canvas = document.createElement("canvas");
    canvas.width = groupWidth;
    canvas.height = groupHeight;
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < sceneMeshes.length; i++) {
        const sceneMesh = sceneMeshes[i];
        const { x, y } = sceneMesh.position;
        const { backgroundImage, width, height } = sceneMesh.style;
        ctx.drawImage(backgroundImage, x - groupX, y - groupY, width, height);
    }

    return canvas;
}
