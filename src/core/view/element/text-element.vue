<template>
    <Border
        ref="el"
        :class="bem()"
        :visibleBox="visibleBox"
        :visibleBoxScale="visibleBoxScale"
        :visibleBoxScaleY="false"
        :style="style"
        @mousedown-scale-xy="$emit('mousedown-scale-xy')"
        @mousedown-scale-x="$emit('mousedown-scale-x')"
        @mousedown-rotate="$emit('mousedown-scale-rotate')"
    >
        <div
            ref="contentEl"
            :class="bem('content')"
            @mousedown="$emit('mousedown-content')"
            @mouseenter="$emit('mouseenter-content')"
            @mouseleave="$emit('mouseleave-content')"
            @click="$emit('click-content')"
        >
            <div
                ref="textEl"
                :class="bem('text', { edit })"
                :contenteditable="edit"
                :style="textStyle"
                @input="(e) => $emit('change-text', e.target.textContent)"
            >
                {{ text }}
            </div>
        </div>
    </Border>
</template>

<script>
import { defineComponent, computed, onMounted, ref, nextTick } from "vue";
import { createNamespace } from "../../utils/create-bem";
import Border from "./border.vue";

const [name, bem] = createNamespace("text-element");

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
        zIndex: {
            type: Number,
            default: null
        },
        angle: {
            type: Number,
            default: 0
        },
        fontSize: {
            type: Number,
            default: null
        },
        fontColor: {
            type: String,
            default: null
        },
        fontFamily: {
            type: String,
            default: null
        },
        text: {
            type: String,
            default: ""
        },
        edit: {
            type: Boolean,
            default: false
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
    setup(props, { emit }) {
        const visibleBox = computed(() => props.hover || props.focus);
        const visibleBoxScale = computed(() => props.focus && props.operable);
        const el = ref(null);
        const contentEl = ref(null);
        const textEl = ref(null);

        const style = computed(() => {
            return {
                width: props.width + "px",
                height: props.height + "px",
                transform: `translate(${props.x}px, ${props.y}px) rotateZ(${props.angle}deg)`,
                zIndex: props.zIndex
            };
        });

        const textStyle = computed(() => {
            return {
                fontSize: props.fontSize + "px",
                fontFamily: props.fontFamily,
                lineHeight: props.fontSize + "px",
                color: props.fontColor
            };
        });

        onMounted(() => {
            emit("mounted", {
                el: el.value,
                textEl: textEl.value,
                contentEl: contentEl.value
            });
        });

        return {
            visibleBox,
            visibleBoxScale,
            el,
            textEl,
            contentEl,

            style,
            textStyle,
            bem
        };
    }
});
</script>

<style lang="less">
.text-element {
    position: absolute;
    left: 0;
    top: 0;

    &__content {
        width: 100%;
        height: 100%;
        cursor: move;
    }

    &__text {
        max-width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        overflow-wrap: break-word;
        word-break: break-all;
        user-select: none;
        outline: none;

        &--edit {
            cursor: text;
        }
    }
}
</style>
