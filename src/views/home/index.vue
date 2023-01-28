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
                <button @click="handleAddElement('image')">添加图片</button>
                <button @click="handleAddElement('text')">添加文字</button>
            </div>

            <div class="home-view__content">
                <div class="home-view__editor" ref="parent"></div>
            </div>

            <div class="home-view__right">
                <div v-if="!editElement">画布工具</div>
                <ImageBar
                    v-else-if="editElement.elementType === 'image'"
                    :x="editElement.state.x"
                    :y="editElement.state.y"
                    :width="editElement.state.width"
                    :height="editElement.state.height"
                    :angle="editElement.state.angle"
                    @change-x="(v) => editElement.setX(v)"
                    @change-y="(v) => editElement.setY(v)"
                    @change-width="(v) => editElement.setWidth(v)"
                    @change-height="(v) => editElement.setHeight(v)"
                    @change-angle="(v) => editElement.setAngle(v)"
                />

                <TextBar
                    v-else-if="editElement.elementType === 'text'"
                    :x="editElement.state.x"
                    :y="editElement.state.y"
                    :angle="editElement.state.angle"
                    :text="editElement.state.text"
                    :fontSize="editElement.state.fontSize"
                    :fontColor="editElement.state.fontColor"
                    :fontFamily="editElement.state.fontFamily"
                    @change-x="(v) => editElement.setX(v)"
                    @change-y="(v) => editElement.setY(v)"
                    @change-angle="(v) => editElement.setAngle(v)"
                    @change-text="(v) => editElement.setText(v)"
                    @change-font-size="(v) => editElement.setFontSize(v)"
                    @change-font-family="(v) => editElement.setFontFamily(v)"
                    @change-font-color="(v) => editElement.setFontColor(v)"
                />

                <GroupBar
                    v-else-if="editElement.elementType === 'group'"
                    :x="editElement.state.x"
                    :y="editElement.state.y"
                    :angle="editElement.state.angle"
                    @change-x="(v) => editElement.setX(v)"
                    @change-y="(v) => editElement.setY(v)"
                    @change-angle="(v) => editElement.setAngle(v)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ImageBar from "../../components/bar/image.vue";
import TextBar from "../../components/bar/text.vue";
import GroupBar from "../../components/bar/group.vue";

import { onMounted, ref, nextTick } from "vue";

import { ImageElement } from "../../core/model/element/image-element";
import { TextElement } from "../../core/model/element/text-element";

import { downloadDom } from "../../core/utils/download";
import { useScene } from "../../core/model/scene";

export default {
    name: "home-view",
    components: {
        ImageBar,
        TextBar,
        GroupBar
    },
    setup() {
        const parent = ref(null);
        const scene = useScene();

        onMounted(() => {
            scene.mounted(parent.value);
        });

        function handleAddElement(type) {
            if (type === "image") {
                scene.add(
                    new ImageElement({
                        imgSrc: "https://st-gdx.dancf.com/gaodingx/4323/configs/system/20210728-095726-adc9.svg",
                        width: 100,
                        height: 100,
                        x: 0,
                        y: 0
                    })
                );
            } else if (type === "text") {
                scene.add(
                    new TextElement({
                        text: "输入一段文字",
                        width: 200,
                        height: 100,
                        x: 100,
                        y: 200
                    })
                );
            }
        }

        function handleDownload() {
            for (let i = 0; i < scene.elements.length; i++) {
                const element = scene.elements[i];
                element.blur();
            }
            nextTick(() => {
                downloadDom(parent.value);
            });
        }

        return {
            parent,
            editElement: scene.editElement,

            handleAddElement,
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

    &__font-bar {
        > * {
            margin-bottom: 12px;
        }
    }

    &__font-family {
        width: 161px;
        margin-right: 12px;
    }

    &__editor {
        width: 400px;
        height: 600px;
        position: relative;
        box-shadow: 1px 1px 15px rgb(0 0 0 / 20%);

        // canvas:first-of-type {
        //     background-color: #fff;
        //     background-image: linear-gradient(
        //             to top right,
        //             #ccc 25%,
        //             transparent 0,
        //             transparent 75%,
        //             #ccc 0,
        //             #ccc
        //         ),
        //         linear-gradient(
        //             to top right,
        //             #ccc 25%,
        //             transparent 0,
        //             transparent 75%,
        //             #ccc 0,
        //             #ccc
        //         );
        //     background-position: 0 0, 8px 8px;
        //     background-size: 16px 16px;
        //     overflow: hidden;
        //     user-select: none;
        // }

        canvas {
            display: block;
            overflow: hidden;
            user-select: none;
        }
    }
}
</style>
