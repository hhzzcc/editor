import { Element } from "./element";

function getBase64(imgUrl) {
    return new Promise((resolve) => {
        if (imgUrl.startsWith("data:")) {
            resolve(imgUrl);
            return;
        }

        window.URL = window.URL || window.webkitURL;
        const xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        // 至关重要
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
export class ImageElement extends Element {
    constructor({ imgSrc, ...options }) {
        super(options);
        this.elementType = "image";
        this.setImgSrc(imgSrc);
    }

    async setImgSrc(imgSrc) {
        const base64 = await getBase64(imgSrc);
        this.state.imgSrc = base64;
    }
}
