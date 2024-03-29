function rotateVector(vector, radius) {
    const { x, y } = vector;

    return {
        x: x * Math.cos(radius) - y * Math.sin(radius),
        y: x * Math.sin(radius) + y * Math.cos(radius)
    };
}

let id = 0;
export class Element {
    constructor(options = {}) {
        const {
            x = 0,
            y = 0,
            width = 100,
            height = 100,
            angle = 0,
            hover = false,
            focus = false,
            operable = true,
            zIndex = null,
            elementId = null
        } = options;
        this.state = {
            x,
            y,
            width,
            height,
            hover,
            focus,
            operable,
            zIndex,
            angle
        };

        if (elementId) {
            this.elementId = elementId;
        } else {
            this.elementId = id;
            id++;
        }
    }

    getPosition() {
        return {
            x: this.state.x,
            y: this.state.y
        };
    }

    getCenterPosition() {
        const { x, y } = this.getPosition();
        return {
            x: x + this.state.width / 2,
            y: y + this.state.height / 2
        };
    }

    getRightPosition() {
        const { x, y } = this.getPosition();
        return {
            x: x + this.state.width,
            y: y + this.state.height
        };
    }

    setPosition(x, y) {
        this.setX(x);
        this.setY(y);
    }

    transform(x, y) {
        this.transformX(x);
        this.transformY(y);
    }

    transformX(x) {
        this.setX(this.state.x + x);
    }

    transformY(y) {
        this.setY(this.state.y + y);
    }

    // 相对位置转绝对位置
    toAbsolutePosition(relativePosition) {
        const { x, y, width, height } = this.state;
        return {
            x: relativePosition.x + x + width / 2,
            y: y + height / 2 - relativePosition.y
        };
    }

    // 获取顶点绝对位置
    getPointPosition() {
        const { width, height, angle } = this.state;
        const leftTopVector = { x: -width / 2, y: height / 2 };
        const rightTopVector = { x: width / 2, y: height / 2 };
        const rightBottomVector = { x: width / 2, y: -height / 2 };
        const leftBottomVector = { x: -width / 2, y: -height / 2 };
        const radius = (angle * Math.PI) / 180;
        return [
            this.toAbsolutePosition(rotateVector(leftTopVector, radius)),
            this.toAbsolutePosition(rotateVector(rightTopVector, radius)),
            this.toAbsolutePosition(rotateVector(rightBottomVector, radius)),
            this.toAbsolutePosition(rotateVector(leftBottomVector, radius))
        ];
    }

    setX(x) {
        this.state.x = +x.toFixed(2);
    }

    setY(y) {
        this.state.y = +y.toFixed(2);
    }

    setAngle(angle) {
        this.state.angle = Math.ceil(angle);
    }

    scale(x, y) {
        this.scaleX(x);
        this.scaleY(y);
    }

    scaleX(s) {
        this.setWidth(this.state.width * s);
    }

    scaleY(s) {
        this.setHeight(this.state.height * s);
    }

    setWidth(width) {
        this.state.width = +width.toFixed(2);
        return this.state.width;
    }

    setHeight(height) {
        this.state.height = +height.toFixed(2);
        return this.state.height;
    }

    setZIndex(zIndex) {
        this.state.zIndex = zIndex;
    }

    hover() {
        this.state.hover = true;
    }

    unHover() {
        this.state.hover = false;
    }

    focus() {
        this.state.focus = true;
    }

    blur() {
        this.state.focus = false;
    }

    operable() {
        this.state.operable = true;
    }

    inoperable() {
        this.state.operable = false;
    }
}
