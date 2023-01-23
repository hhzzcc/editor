export function loadImage() {
    return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.click();
        input.onchange = () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    resolve(img);
                };
            };
            reader.readAsDataURL(file);
        };
    });
}
