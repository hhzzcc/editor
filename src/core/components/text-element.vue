<template>
    <Border
        :class="bem()"
        :visibleBox="visibleBox"
        :visibleBoxScale="visibleBoxScale"
        :visibleBoxScaleY="false"
        :style="style"
        @mousedown-scale="(v) => $emit('drag-before', v)"
        @mousedown-rotate="(v) => $emit('drag-before', v)"
    >
        <div
            :class="bem('content')"
            @mousedown="(e) => $emit('drag-before', { type: 'content', e })"
            @click="handleClick"
        >
            <div
                :class="bem('input', { visible: edit })"
                ref="input"
                :contenteditable="true"
                :style="textStyle"
                @input="handleInput"
            >
                {{ text }}
            </div>
            <div :class="bem('text')" :style="textStyle" v-show="!edit">
                {{ text }}
            </div>
        </div>
    </Border>
</template>

<script>
import {
    defineComponent,
    computed,
    onMounted,
    ref,
    nextTick,
    watch
} from "vue";
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
        const input = ref(null);

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

        function updateHeight() {
            emit("update-height", input.value.offsetHeight);
        }

        function updateWidth() {
            emit("update-width", input.value.offsetWidth);
        }

        function handleInput(e) {
            emit("change-text", e.target.textContent);
            updateHeight();
        }

        onMounted(() => {
            updateWidth();
            updateHeight();
        });

        return {
            visibleBox,
            visibleBoxScale,
            input,
            handleClick,
            handleInput,

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

    &__text,
    &__input {
        max-width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        overflow-wrap: break-word;
        user-select: none;
        outline: none;
    }

    &__input {
        opacity: 0;
        cursor: text;
        &--visible {
            opacity: 1;
        }
    }
}
</style>
