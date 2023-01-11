function isCollectCircular({
    originX,
    originY,
    targetCenterX,
    targetCenterY,
    radius
}) {
    return (
        Math.pow(originX - targetCenterX, 2) +
            Math.pow(originY - targetCenterY, 2) <
        radius * radius
    );
}

function isCollectRect({
    originX,
    originY,
    targetX,
    targetY,
    targetWidth,
    targetHeight
}) {
    return (
        originX > targetX &&
        originX < targetX + targetWidth &&
        originY > targetY &&
        originY < targetY + targetHeight
    );
}

// 鼠标碰撞mesh
export function isMouseCollectMesh(mouse, mesh) {
    const { x: leftX, y: topY } = mesh.position;
    const { x: rightX, y: bottomY } = mesh.getRightPosition();
    const originX = mouse.layerX;
    const originY = mouse.layerY;
    const isCollectContent =
        originX > leftX &&
        originX < rightX &&
        originY > topY &&
        originY < bottomY;

    if (mesh.type.focus && mesh.type.ableScale) {
        const { x: centerX, y: centerY } = mesh.getCenterPosition();
        const { borderRectWidth, borderRectHeight, radius } = mesh.style;

        const isCollectTopBorderRect = isCollectRect({
            originX,
            originY,
            targetX: centerX - borderRectWidth / 2,
            targetY: topY - borderRectHeight / 2,
            targetWidth: borderRectWidth,
            targetHeight: borderRectHeight
        });

        const isCollectRightBorderRect = isCollectRect({
            originX,
            originY,
            targetX: rightX - borderRectHeight / 2,
            targetY: centerY - borderRectWidth / 2,
            targetWidth: borderRectHeight,
            targetHeight: borderRectWidth
        });

        const isCollectBottomBorderRect = isCollectRect({
            originX,
            originY,
            targetX: centerX - borderRectWidth / 2,
            targetY: bottomY - borderRectHeight / 2,
            targetWidth: borderRectWidth,
            targetHeight: borderRectHeight
        });

        const isCollectLeftBorderRect = isCollectRect({
            originX,
            originY,
            targetX: leftX - borderRectHeight / 2,
            targetY: centerY - borderRectWidth / 2,
            targetWidth: borderRectHeight,
            targetHeight: borderRectWidth
        });

        // 碰撞缩放矩形
        const isCollectBorderRect =
            isCollectTopBorderRect ||
            isCollectRightBorderRect ||
            isCollectBottomBorderRect ||
            isCollectLeftBorderRect;

        const isCollectBorderLeftTopCircular = isCollectCircular({
            originX,
            originY,
            targetCenterX: leftX,
            targetCenterY: topY,
            radius
        });
        const isCollectBorderRightTopCircular = isCollectCircular({
            originX,
            originY,
            targetCenterX: rightX,
            targetCenterY: topY,
            radius
        });
        const isCollectBorderRightBottomCircular = isCollectCircular({
            originX,
            originY,
            targetCenterX: rightX,
            targetCenterY: bottomY,
            radius
        });
        const isCollectBorderLeftBottomCircular = isCollectCircular({
            originX,
            originY,
            targetCenterX: leftX,
            targetCenterY: bottomY,
            radius
        });

        // 碰撞缩放圆形
        const isCollectBorderCircular =
            isCollectBorderLeftTopCircular ||
            isCollectBorderRightTopCircular ||
            isCollectBorderRightBottomCircular ||
            isCollectBorderLeftBottomCircular;

        return {
            isCollectContent,

            isCollectBorderRect,
            isCollectTopBorderRect,
            isCollectRightBorderRect,
            isCollectBottomBorderRect,
            isCollectLeftBorderRect,

            isCollectBorderCircular,
            isCollectBorderLeftTopCircular,
            isCollectBorderRightTopCircular,
            isCollectBorderRightBottomCircular,
            isCollectBorderLeftBottomCircular
        };
    }

    return {
        isCollectContent,

        isCollectBorderRect: false,
        isCollectTopBorderRect: false,
        isCollectRightBorderRect: false,
        isCollectBottomBorderRect: false,
        isCollectLeftBorderRect: false,

        isCollectBorderCircular: false,
        isCollectBorderLeftTopCircular: false,
        isCollectBorderRightTopCircular: false,
        isCollectBorderRightBottomCircular: false,
        isCollectBorderLeftBottomCircular: false
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
