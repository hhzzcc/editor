<template>
    <div class="home-view"></div>
</template>

<script>
import { Renderer } from "../../core/renderer";
import { Camera } from "../../core/camera";
import { Scene } from "../../core/scene";
import { Mesh } from "../../core/mesh";
import { mousePlugins } from "../../core/plugins/mouse";

export default {
    name: "home-view",
    setup() {
        const image = new Image();
        image.src =
            "https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg";
        image.onload = () => {
            const mesh = new Mesh({
                backgroundImage: image,
                width: image.width,
                height: image.height
            });

            const mesh1 = new Mesh({
                x: 50,
                y: 50,
                backgroundImage: image,
                width: image.width,
                height: image.height
            });
            const camera = new Camera();
            const scene = new Scene({ width: 400, height: 600 });
            const renderer = new Renderer({
                plugins: [...mousePlugins],
                scene,
                camera
            });

            scene.add(mesh);
            scene.add(mesh1);
            renderer.installPlugin();
            renderer.render();
        };
    }
};
</script>

<style>
canvas {
    border: 1px solid #eee;
}
</style>
