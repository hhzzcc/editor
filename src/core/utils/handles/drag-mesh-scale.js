export function handleDragMeshXScale(element, mouse, step) {
    const { x: centerX } = element.getCenterPosition();
    const { width } = element.state;
    const { x } = mouse;
    const movementX = step === undefined ? mouse.movementX : step;

    // 左
    if (x < centerX) {
        element.setX(x);
        element.setWidth(width - movementX);
    }
    // 右
    else if (x > centerX) {
        element.setWidth(width + movementX);
    }
}

export function handleDragMeshYScale(element, mouse, step) {
    const { y: centerY } = element.getCenterPosition();
    const { height } = element.state;
    const { y } = mouse;
    const movementY = step === undefined ? mouse.movementY : step;

    // 上
    if (y < centerY) {
        element.setY(y);
        element.setHeight(height - movementY);
    }
    // 下
    else if (y > centerY) {
        element.setHeight(height + movementY);
    }
}

function handleDragMeshScaleXY(element, mouse, movement) {
    const { x: centerX, y: centerY } = element.getCenterPosition();
    const { width, height } = element.state;
    const { x, y } = mouse;
    const ratio = width / height;

    // 左上
    if (x < centerX && y < centerY) {
        const w = width - movement;
        const h = w / ratio;
        element.setWidth(w);
        element.setHeight(h);
        element.transformX(width - w);
        element.transformY(height - h);
    }
    // 左下
    else if (x < centerX && y > centerY) {
        const w = width - movement;
        const h = w / ratio;
        element.setWidth(w);
        element.setHeight(h);
        element.transformX(width - w);
    }
    // 右上
    else if (x > centerX && y < centerY) {
        const w = width + movement;
        const h = w / ratio;
        element.setWidth(w);
        element.setHeight(h);
        element.transformY(height - h);
    }
    // 右下
    else if (x > centerX && y > centerY) {
        const w = width + movement;
        const h = w / ratio;
        element.setWidth(w);
        element.setHeight(h);
    }
}

function handleDragMeshFontSizeScale(element, mouse, originHeight) {
    const {
        width: originWidth,
        height,
        fontSize: originFontSize
    } = element.state;
    const { x: centerX } = element.getCenterPosition();
    const { x } = mouse;
    const originRow = originHeight / originFontSize;
    const fontSize = height / originRow;
    element.setFontSize(fontSize);
    element.scaleX(fontSize / originFontSize);

    // 左上、左下
    if (x < centerX) {
        const x = originWidth - element.state.width;
        element.transformX(x);
    }
}

export function handleDragMeshScale(element, mouse) {
    const { movementY, movementX } = mouse;

    if (element.elementType === "text") {
        const { height } = element.state;
        handleDragMeshYScale(element, mouse, movementY);
        handleDragMeshFontSizeScale(element, mouse, height);
    } else {
        handleDragMeshScaleXY(element, mouse, movementX);
    }

    // if (element.elementType === "group") {
    //     for (let i = 0; i < element.state.children.length; i++) {
    //         const child = element.state.children[i];
    //         handleDragMeshScale(child, mouse);
    //     }
    // }
}

function normalize({ x, y }) {
    const length = Math.sqrt(x * x + y * y);
    return {
        x: x / length,
        y: y / length
    };
}

export function handleDragMeshRotate(element, mouse) {
    const { x: centerX, y: centerY } = element.getCenterPosition();
    const { x, y } = mouse;
    const originUnitVector = { x: 0, y: 1 };
    const targetUnitVector = normalize({ x: x - centerX, y: y - centerY });
    const unit = x < centerX ? 1 : -1;

    element.rotate(
        (unit *
            (Math.acos(
                originUnitVector.x * targetUnitVector.x +
                    originUnitVector.y * targetUnitVector.y
            ) *
                180)) /
            Math.PI
    );
}
