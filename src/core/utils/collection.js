function isCollectCircular(origin, center, r) {
    return (
        Math.pow(origin.x - center.x, 2) + Math.pow(origin.y - center.y, 2) <
        r * r
    );
}

// 鼠标碰撞mesh
export function isMouseCollectMesh(mouse, mesh) {
    const lx = mesh.position.x;
    const rx = mesh.position.x + mesh.style.width;
    const ly = mesh.position.y;
    const ry = mesh.position.y + mesh.style.height;
    const isCollectRect =
        mouse.layerX > lx &&
        mouse.layerX < rx &&
        mouse.layerY > ly &&
        mouse.layerY < ry;

    if (mesh.type.focus) {
        const origin = { x: mouse.layerX, y: mouse.layerY };
        const r = mesh.style.radius;
        const isCollectRadiusLeftTop = isCollectCircular(
            origin,
            { x: lx, y: ly },
            r
        );
        const isCollectRadiusRightTop = isCollectCircular(
            origin,
            { x: rx, y: ly },
            r
        );
        const isCollectRadiusRightBottom = isCollectCircular(
            origin,
            { x: rx, y: ry },
            r
        );
        const isCollectRadiusLeftBottom = isCollectCircular(
            origin,
            { x: lx, y: ry },
            r
        );
        const isCollectRadius =
            isCollectRadiusLeftTop ||
            isCollectRadiusRightTop ||
            isCollectRadiusRightBottom ||
            isCollectRadiusLeftBottom;
        return {
            isCollectRect,
            isCollectRadius,
            isCollectRadiusLeftTop,
            isCollectRadiusRightTop,
            isCollectRadiusRightBottom,
            isCollectRadiusLeftBottom
        };
    }

    return {
        isCollectRect,
        isCollectRadius: false,
        isCollectRadiusLeftTop: false,
        isCollectRadiusRightTop: false,
        isCollectRadiusRightBottom: false,
        isCollectRadiusLeftBottom: false
    };
}

// 框选碰撞mesh
export function isBoxCollectMesh(mesh1, mesh2) {
    const points = [
        { x: mesh1.position.x, y: mesh1.position.y },
        { x: mesh1.position.x + mesh1.style.width, y: mesh1.position.y },
        { x: mesh1.position.x, y: mesh1.position.y + mesh1.style.height },
        {
            x: mesh1.position.x + mesh1.style.width,
            y: mesh1.position.y + mesh1.style.height
        }
    ];

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (
            point.x > mesh2.position.x &&
            point.x < mesh2.position.x + mesh2.style.width &&
            point.y > mesh2.position.y &&
            point.y < mesh2.position.y + mesh2.style.height
        ) {
            return true;
        }
    }

    return false;
}
