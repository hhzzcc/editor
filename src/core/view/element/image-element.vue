<template>
    <Border
        :class="bem()"
        :visibleBox="visibleBox"
        :visibleBoxScale="visibleBoxScale"
        :style="style"
        @mousedown-scale-xy="$emit('mousedown-scale-xy')"
        @mousedown-scale-x="$emit('mousedown-scale-x')"
        @mousedown-scale-y="$emit('mousedown-scale-y')"
        @mousedown-rotate="$emit('mousedown-scale-rotate')"
    >
        <div
            :class="bem('content')"
            @mousedown="$emit('mousedown-content')"
            @mouseenter="$emit('mouseenter-content')"
            @mouseleave="$emit('mouseleave-content')"
            @click="$emit('click-content')"
            @dblclick="$emit('db-click-content')"
        >
            <img :src="imgSrc" v-if="imgSrc" />
        </div>
    </Border>
</template>

<script>
import { defineComponent, computed } from "vue";
import { createNamespace } from "../../utils/create-bem";
import Border from "./border.vue";

const [name, bem] = createNamespace("image-element");

export default defineComponent({
    name,
    components: {
        Border
    },
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        angle: {
            type: Number,
            default: 0
        },
        zIndex: {
            type: Number,
            default: null
        },
        imgSrc: {
            type: String,
            default: ""
        },
        hover: {
            type: Boolean,
            default: false
        },
        focus: {
            type: Boolean,
            default: false
        },
        operable: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const visibleBox = computed(() => props.hover || props.focus);
        const visibleBoxScale = computed(() => props.focus && props.operable);

        const style = computed(() => {
            return {
                width: props.width + "px",
                height: props.height + "px",
                transform: `translate(${props.x}px, ${props.y}px) rotateZ(${props.angle}deg)`,
                zIndex: props.zIndex
            };
        });

        return {
            visibleBox,
            visibleBoxScale,

            style,
            bem
        };
    }
});
</script>

<style lang="less">
.image-element {
    position: absolute;
    left: 0;
    top: 0;

    &__content {
        width: 100%;
        height: 100%;
        cursor: move;
    }

    img {
        width: 100%;
        height: 100%;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
    }
}
</style>
