<template>
    <Border
        :class="bem()"
        :visibleBox="visibleBox"
        :visibleBoxScale="visibleBoxScale"
        :visibleBoxScaleX="false"
        :visibleBoxScaleY="false"
        :style="style"
        @mousedown-scale-xy="$emit('mousedown-scale-xy')"
        @mousedown-rotate="$emit('mousedown-scale-rotate')"
    >
        <div
            :class="bem('content')"
            @mousedown="$emit('mousedown-content')"
            @mouseenter="$emit('mouseenter-content')"
            @mouseleave="$emit('mouseleave-content')"
            @click="$emit('click-content')"
        >
            <template v-for="(element, i) in children" :key="i">
                <ImageElement
                    v-if="element.elementType === 'image'"
                    v-bind="element.state"
                />
                <TextElement
                    v-else-if="element.elementType === 'text'"
                    v-bind="element.state"
                />
                <GroupElement
                    v-else-if="element.elementType === 'group'"
                    v-bind="element.state"
                />
            </template>
        </div>
    </Border>
</template>

<script>
import { defineComponent, computed } from "vue";
import { createNamespace } from "../../utils/create-bem";
import Border from "./border.vue";
import ImageElement from "./image-element.vue";
import TextElement from "./text-element.vue";
import GroupElement from "./group-element.vue";

const [name, bem] = createNamespace("group-element");

export default defineComponent({
    name,
    components: {
        Border,
        ImageElement,
        TextElement,
        GroupElement
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
        zIndex: {
            type: Number,
            default: null
        },
        angle: {
            type: Number,
            default: 0
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
        },
        children: {
            type: Array,
            default: () => []
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
.group-element {
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
