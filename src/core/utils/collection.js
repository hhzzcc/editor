// 鼠标碰撞mesh
export function isMouseCollectMesh(target, mesh) {
    const isCollectContent = target.isEqualNode(mesh.vm.el);

    if (mesh.getProps("focus") && mesh.getProps("operable")) {
        const isCollectTopBorderRect =
            target.className.includes("border__rect--top");

        const isCollectRightBorderRect = target.className.includes(
            "border__rect--right"
        );

        const isCollectBottomBorderRect = target.className.includes(
            "border__rect--bottom"
        );

        const isCollectLeftBorderRect =
            target.className.includes("border__rect--left");

        // 碰撞缩放矩形
        const isCollectBorderRect =
            isCollectTopBorderRect ||
            isCollectRightBorderRect ||
            isCollectBottomBorderRect ||
            isCollectLeftBorderRect;

        const isCollectBorderLeftTopCircular = target.className.includes(
            "border__circular--left-top"
        );
        const isCollectBorderRightTopCircular = target.className.includes(
            "border__circular--right-top"
        );
        const isCollectBorderRightBottomCircular = target.className.includes(
            "border__circular--right-bottom"
        );
        const isCollectBorderLeftBottomCircular = target.className.includes(
            "border__circular--left-bottom"
        );

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
export function isRectCollectRect({
    x1,
    y1,
    width1,
    height1,
    x2,
    y2,
    width2,
    height2
}) {
    const points = [
        { x: x1, y: y1 },
        { x: x1 + width1, y: y1 },
        { x: x1, y: y1 + height1 },
        {
            x: x1 + width1,
            y: y1 + height1
        }
    ];

    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        if (
            point.x > x2 &&
            point.x < x2 + width2 &&
            point.y > y2 &&
            point.y < y2 + height2
        ) {
            return true;
        }
    }

    return false;
}
