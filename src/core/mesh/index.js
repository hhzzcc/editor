export class Mesh {
    constructor(options = {}) {
        const {
            x = 0,
            y = 0,
            width = 100,
            height = 100,
            backgroundImage = null
        } = options;

        this.position = {
            x,
            y
        };

        this.style = {
            width,
            height,
            backgroundImage
        };

        this.type = {
            focus: false,
            hover: false
        };
    }

    transform(x, y) {
        this.position.x += x;
        this.position.y += y;
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
        const { width, height } = style;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.lineTo(x + width, y + height);
        ctx.lineTo(x, y + height);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    renderBackgroundImage({ ctx }) {
        const { style, position } = this;
        const { width, height, backgroundImage } = style;
        if (!backgroundImage) return;

        const { x, y } = position;
        ctx.drawImage(
            backgroundImage,
            0,
            0,
            width,
            height,
            x,
            y,
            width,
            height
        );
    }

    render({ ctx }) {
        this.renderBorder({ ctx });
        this.renderBackgroundImage({ ctx });
    }
}
