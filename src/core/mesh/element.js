export class Element {
    constructor(options = {}) {
        const {
            x = 0,
            y = 0,
            width = 100,
            height = 100,
            imgSrc,
            hover = false,
            focus = false,
            operable = true,
            zIndex = null
        } = options;
        this.state = {
            x,
            y,
            width,
            height,
            imgSrc,
            hover,
            focus,
            operable,
            zIndex
        };
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

    setX(x) {
        this.state.x = x;
    }

    setY(y) {
        this.state.y = y;
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
        this.state.width = width;
    }

    setHeight(height) {
        this.state.height = height;
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
