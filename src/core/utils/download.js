function getBase64(imgUrl) {
    return new Promise((resolve) => {
        if (imgUrl.startsWith("data:")) {
            resolve(imgUrl);
            return;
        }

        window.URL = window.URL || window.webkitURL;
        const xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            if (this.status == 200) {
                //得到一个blob对象
                const blob = this.response;
                const fileReader = new FileReader();
                fileReader.onloadend = function (e) {
                    resolve(e.target.result);
                };
                fileReader.readAsDataURL(blob);
            }
        };
        xhr.send();
    });
}

export async function downloadDom(el) {
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    const imgs = el.querySelectorAll("img");
    const promises = [];
    for (let i = 0; i < imgs.length; i++) {
        promises.push(
            new Promise((resolve) => {
                const img = imgs[i];
                getBase64(img.src).then((base64) => {
                    img.src = base64;
                    resolve();
                });
            })
        );
    }
    await Promise.all(promises);

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
