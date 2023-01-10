export class Mesh {
    constructor(options = {}) {
        const {
            x = 0,
            y = 0,
            width = 100,
            height = 100,
            minWidth = 30,
            minHeight = 30,
            backgroundImage = null,
            radius = 6
        } = options;

        this.position = {
            x,
            y
        };

        this.style = {
            width,
            height,
            minWidth,
            minHeight,
            backgroundImage,
            radius
        };

        this.type = {
            focus: false,
            hover: false
        };
    }

    getCenter() {
        return {
            x: this.position.x + this.style.width / 2,
            y: this.position.y + this.style.height / 2
        };
    }

    setX(x) {
        this.position.x = x;
    }

    setY(y) {
        this.position.y = y;
    }

    scaleX(s) {
        this.style.width *= s;
    }

    scaleY(s) {
        this.style.height *= s;
    }

    setWidth(width) {
        this.style.width =
            width < this.style.minWidth ? this.style.minWidth : width;
    }

    setHeight(height) {
        this.style.height =
            height < this.style.minHeight ? this.style.minHeight : height;
    }

    transform(x, y) {
        this.transformX(x);
        this.transformY(y);
    }

    transformX(x) {
        this.position.x += x;
    }

    transformY(y) {
        this.position.y += y;
    }

    move(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    hover() {
        this.type.hover = true;
    }

    unHover() {
        this.type.hover = false;
    }

    focus() {
        this.type.focus = true;
    }

    blur() {
        this.type.focus = false;
    }

    renderBorder({ ctx }) {
        const { type, style, position } = this;
        const { focus, hover } = type;
        if (!focus && !hover) return;

        const { x, y } = position;
        const { width, height, radius } = style;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 1;
        ctx.stroke();

        if (!focus) return;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + width, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + width, y + height, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y + height, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();
    }

    renderBackgroundImage({ ctx }) {
        const { style, position } = this;
        const { width, height, backgroundImage } = style;
        if (!backgroundImage) return;

        const { x, y } = position;
        ctx.drawImage(backgroundImage, x, y, width, height);
    }

    render({ ctx }) {
        this.renderBackgroundImage({ ctx });
        this.renderBorder({ ctx });
    }
}
