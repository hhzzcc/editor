<template>
    <Border
        :class="bem()"
        :visibleBox="visibleBox"
        :visibleBoxScale="visibleBoxScale"
        :style="style"
        @mousedown-scale="(v) => $emit('drag-before', v)"
    >
        <div
            :class="bem('content')"
            @mousedown="(e) => $emit('drag-before', { type: 'content', e })"
            @click="handleClick"
        >
            <div
                :class="bem('text')"
                ref="input"
                :contenteditable="true"
                @input="(e) => $emit('change-text', e.target.textContent)"
                v-show="edit"
            >
                {{ text }}
            </div>
            <div :class="bem('text')" v-show="!edit">{{ text }}</div>
        </div>
    </Border>
</template>

<script>
import { defineComponent, computed, watch, ref, nextTick } from "vue";
import { createNamespace } from "../utils/create-bem";
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
        const input = ref(null);

        const style = computed(() => {
            return {
                width: props.width + "px",
                height: props.height + "px",
                transform: `translate(${props.x}px, ${props.y}px)`,
                zIndex: props.zIndex
            };
        });

        function handleClick(e) {
            if (props.focus && !props.edit) {
                emit("start-change-text", { type: "content", e });
                nextTick(() => {
                    input.value.focus();
                    const range = document.createRange();
                    range.selectNodeContents(input.value);
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                });
            } else {
                emit("focus", { type: "content", e });
            }
        }

        return {
            visibleBox,
            visibleBoxScale,
            input,
            handleClick,

            style,
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
    }

    &__text {
        user-select: none;
    }

    &__text {
        font-size: 14px;
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        overflow-wrap: break-word;
        padding: 0;
        background: transparent;
        outline: none;
    }
}
</style>
