function drawCircular({ ctx, x, y, radius, radians }) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, radians);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();
}

function drawRect({ ctx, x, y, width, height }) {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.strokeRect(x, y, width, height);
    ctx.fillRect(x, y, width, height);
    ctx.stroke();
}

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
            radius = 6,
            borderWidth = 2,
            borderColor = "#6ccfff",
            borderRectWidth = 16,
            borderRectHeight = 6,
            ableScale = true
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
            radius,
            borderWidth,
            borderColor,
            borderRectWidth,
            borderRectHeight
        };

        this.type = {
            focus: false,
            hover: false,
            ableScale
        };
    }

    getCenterPosition() {
        return {
            x: this.position.x + this.style.width / 2,
            y: this.position.y + this.style.height / 2
        };
    }

    getRightPosition() {
        return {
            x: this.position.x + this.style.width,
            y: this.position.y + this.style.height
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
        const { focus, hover, ableScale } = type;
        if (!focus && !hover) return;

        const { x, y } = position;
        const {
            width,
            height,
            radius,
            borderWidth,
            borderColor,
            borderRectWidth,
            borderRectHeight
        } = style;
        const rightX = x + width;
        const bottomY = y + height;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(rightX, y);
        ctx.lineTo(rightX, bottomY);
        ctx.lineTo(x, bottomY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.stroke();
        ctx.closePath();

        if (!focus || !ableScale) return;

        const centerX = x + width / 2;
        const centerY = y + height / 2;

        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 1;
        // 4??????????????????
        drawRect({
            ctx,
            x: centerX - borderRectWidth / 2,
            y: y - borderRectHeight / 2,
            width: borderRectWidth,
            height: borderRectHeight
        });

        drawRect({
            ctx,
            x: rightX - borderRectHeight / 2,
            y: centerY - borderRectWidth / 2,
            width: borderRectHeight,
            height: borderRectWidth
        });

        drawRect({
            ctx,
            x: centerX - borderRectWidth / 2,
            y: y + height - borderRectHeight / 2,
            width: borderRectWidth,
            height: borderRectHeight
        });

        drawRect({
            ctx,
            x: x - borderRectHeight / 2,
            y: centerY - borderRectWidth / 2,
            width: borderRectHeight,
            height: borderRectWidth
        });

        const radians = 2 * Math.PI;
        // 4??????????????????
        drawCircular({ ctx, x, y, radius, radians });
        drawCircular({ ctx, x: rightX, y, radius, radians });
        drawCircular({ ctx, x: rightX, y: bottomY, radius, radians });
        drawCircular({ ctx, x, y: bottomY, radius, radians });
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
