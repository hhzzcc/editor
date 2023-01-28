// 矩形碰撞
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
