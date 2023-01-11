<template>
    <div class="home-view">
        <div>
            <!-- <button @click="handleAddMesh">添加素材</button> -->
        </div>
        <div class="home-view__editor" ref="parent" />
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
        let n = 0;
        onMounted(() => {
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
            n += 2;

            renderer.render();
        }

        return {
            parent,
            handleAddMesh
        };
    }
};
</script>

<style lang="less">
.home-view {
    display: flex;
    justify-content: center;

    &__editor {
        position: relative;
        border: 1px solid #eee;
        box-shadow: 1px 1px 15px rgb(0 0 0 / 20%);
        margin-top: 50px;

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
