import { GroupElement } from "../../model/element/group-element";

function computedGroupSize(elements) {
    let minX = null;
    let maxX = null;
    let minY = null;
    let maxY = null;

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const [p1, p2, p3, p4] = element.getPointPosition();

        minX =
            minX === null
                ? Math.min(p1.x, p2.x, p3.x, p4.x)
                : Math.min(minX, p1.x, p2.x, p3.x, p4.x);
        minY =
            minY === null
                ? Math.min(p1.y, p2.y, p3.y, p4.y)
                : Math.min(minY, p1.y, p2.y, p3.y, p4.y);
        maxX =
            maxX === null
                ? Math.max(p1.x, p2.x, p3.x, p4.x)
                : Math.max(maxX, p1.x, p2.x, p3.x, p4.x);
        maxY =
            maxY === null
                ? Math.max(p1.y, p2.y, p3.y, p4.y)
                : Math.max(maxY, p1.y, p2.y, p3.y, p4.y);
    }

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}

export function createTemporary(children, elements) {
    const { x, y, width, height } = computedGroupSize(children);
    const group = new GroupElement({
        x,
        y,
        width,
        height,
        children
    });

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            if (element === child) {
                element.setPosition(element.state.x - x, element.state.y - y);
                element.unHover();
                element.inoperable();
                element.blur();
                elements.splice(j, 1);
                j--;
            }
        }
    }
    group.temporary();
    group.focus();
    elements.push(group);

    return group;
}

export function destroyTemporary(group, elements) {
    for (let j = 0; j < group.state.children.length; j++) {
        const child = group.state.children[j];
        child.setPosition(
            child.state.x + group.state.x,
            child.state.y + group.state.y
        );
        child.operable();
        elements.push(child);
    }
}
