export function handleGroupSize(elements) {
    let top = null;
    let right = null;
    let bottom = null;
    let left = null;

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const { x, y, width, height } = element.state;

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
