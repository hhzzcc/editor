export function downloadDom(el) {
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    const tempImg = new Image();
    tempImg.width = width;
    tempImg.height = height;
    tempImg.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(this, 0, 0, width, height);
        const MIME_TYPE = "image/png";
        const imgURL = canvas.toDataURL(MIME_TYPE);
        const dlLink = document.createElement("a");
        dlLink.download = "下载.png";
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [
            MIME_TYPE,
            dlLink.download,
            dlLink.href
        ].join(":");

        dlLink.click();
    };

    let styleSrc = "";
    const $styles = document.querySelectorAll("style");
    for (let i = 0; i < $styles.length - 1; i++) {
        const $style = $styles[i];
        styleSrc += $style.innerHTML;
    }
    tempImg.src =
        `data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><foreignObject width="${width}" height="${height}"><body xmlns="http://www.w3.org/1999/xhtml">
            ${new XMLSerializer().serializeToString(el)}
            <style>${styleSrc}</style></body></foreignObject></svg>`
            .replace(/\n/g, "")
            .replace(/\t/g, "")
            .replace(/#/g, "%23");
}
