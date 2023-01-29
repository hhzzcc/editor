import { GroupElement } from "../../model/element/group-element";

function handleGroupSize(elements) {
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

export function createTemporary(children, elements) {
    const { x, y, width, height } = handleGroupSize(children);
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
