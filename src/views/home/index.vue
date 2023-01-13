<template>
    <div class="home-view">
        <div class="home-view__header">
            <img
                class="home-view__logo"
                src="https://st0.dancf.com/static/02/202301130825-f513.png"
            />
            <button @click="handleDownload">下载</button>
        </div>
        <div class="home-view__body">
            <div class="home-view__left">
                <button @click="handleAddMesh">添加素材</button>
            </div>

            <div class="home-view__content">
                <div class="home-view__editor" ref="parent" />
            </div>

            <div class="home-view__right"></div>
        </div>
    </div>
</template>

<script>
import { Renderer } from "../../core/renderer";
import { Camera } from "../../core/camera";
import { Scene } from "../../core/scene";
import { Mesh } from "../../core/mesh";
import { mousePlugins } from "../../core/plugins/mouse";
import { onMounted, ref } from "vue";

export default {
    name: "home-view",
    setup() {
        const parent = ref(null);
        const image = new Image();
        let scene, renderer;
        let n = 10;
        onMounted(() => {
            image.setAttribute("crossorigin", "anonymous");
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
                scene = new Scene({
                    width: 400,
                    height: 600,
                    backgroundColor: "white"
                });

                renderer = new Renderer({
                    plugins: [...mousePlugins],
                    scene,
                    camera,
                    $parent: parent.value
                });

                scene.add(mesh);
                scene.add(mesh1);
                renderer.installPlugin();
                renderer.render();
            };
        });

        function handleAddMesh() {
            const mesh = new Mesh({
                x: 50 + n,
                y: 50 + n,
                backgroundImage: image,
                width: image.width,
                height: image.height
            });
            scene.add(mesh);
            n += 10;

            renderer.render();
        }

        function handleDownload() {
            const { canvas } = renderer;
            const url = canvas.toDataURL("image/png", 1);
            const a = document.createElement("a");
            a.download = "下载";
            a.href = url;
            a.click();
        }

        return {
            parent,
            handleAddMesh,
            handleDownload
        };
    }
};
</script>

<style lang="less">
.home-view {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        background-color: #fff;
        border-bottom: 2px solid #eef2f8;
        padding: 0 24px;
    }

    &__logo {
        height: 30px;
    }

    &__body {
        display: flex;
        height: calc(100vh - 54px);
    }

    &__content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f2f4;
        height: 100%;
    }

    &__left {
        width: 200px;
        height: 100%;
        background: #fff;
        border-right: 2px solid #eef2f8;
        padding: 24px;
    }

    &__right {
        width: 276px;
        height: 100%;
        background: #fff;
        border-left: 2px solid #eef2f8;
        padding: 24px;
    }

    &__editor {
        width: 400px;
        height: 600px;
        position: relative;
        border: 1px solid #eee;
        box-shadow: 1px 1px 15px rgb(0 0 0 / 20%);

        :first-child {
            background-color: #fff;
            background-image: linear-gradient(
                    to top right,
                    #ccc 25%,
                    transparent 0,
                    transparent 75%,
                    #ccc 0,
                    #ccc
                ),
                linear-gradient(
                    to top right,
                    #ccc 25%,
                    transparent 0,
                    transparent 75%,
                    #ccc 0,
                    #ccc
                );
            background-position: 0 0, 8px 8px;
            background-size: 16px 16px;
            overflow: hidden;
            user-select: none;
        }

        canvas {
            display: block;
        }
    }
}
</style>
