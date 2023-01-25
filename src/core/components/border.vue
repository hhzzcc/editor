<template>
    <div
        :class="
            bem({
                'visible-box': visibleBox
            })
        "
    >
        <slot />

        <template v-if="visibleBox && visibleBoxScale">
            <div
                :class="bem('circular', 'left-top')"
                @mousedown="$emit('mousedown-scale', { type: 'scale-xy', e })"
            />
            <div
                :class="bem('circular', 'right-top')"
                @mousedown="
                    (e) => $emit('mousedown-scale', { type: 'scale-xy', e })
                "
            />
            <div
                :class="bem('circular', 'right-bottom')"
                @mousedown="
                    (e) => $emit('mousedown-scale', { type: 'scale-xy', e })
                "
            />
            <div
                :class="bem('circular', 'left-bottom')"
                @mousedown="
                    (e) => $emit('mousedown-scale', { type: 'scale-xy', e })
                "
            />

            <template v-if="visibleBoxScaleY">
                <div
                    :class="bem('rect', 'top')"
                    @mousedown="
                        (e) => $emit('mousedown-scale', { type: 'scale-y', e })
                    "
                />

                <div
                    :class="bem('rect', 'bottom')"
                    @mousedown="
                        (e) => $emit('mousedown-scale', { type: 'scale-y', e })
                    "
                />
            </template>
            <div
                :class="bem('rect', 'right')"
                @mousedown="
                    (e) => $emit('mousedown-scale', { type: 'scale-x', e })
                "
            />
            <div
                :class="bem('rect', 'left')"
                @mousedown="
                    (e) => $emit('mousedown-scale', { type: 'scale-x', e })
                "
            />
        </template>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { createNamespace } from "../utils/create-bem";
import {
    BORDER_CIRCULAR_SIZE,
    BORDER_WIDTH,
    BORDER_RECT_WIDTH,
    BORDER_RECT_HEIGHT
} from "../utils/constants";

const [name, bem] = createNamespace("border");

export default defineComponent({
    name,
    props: {
        visibleBox: {
            type: Boolean,
            default: false
        },
        visibleBoxScale: {
            type: Boolean,
            default: false
        },
        visibleBoxScaleY: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        return {
            bem,
            BORDER_WIDTH,
            BORDER_CIRCULAR_SIZE,
            BORDER_RECT_WIDTH,
            BORDER_RECT_HEIGHT
        };
    }
});
</script>

<style lang="less">
@b: border;
@BORDER_RECT_WIDTH: 16px;
@BORDER_RECT_HEIGHT: 8px;
@BORDER_WIDTH: 2px;
@BORDER_CIRCULAR_SIZE: 10px;
@BORDER_CIRCULAR_RADIUS: 5px;
.@{b} {
    &--visible-box {
        box-shadow: 0 0 0 @BORDER_WIDTH blue;
    }

    &__circular {
        width: @BORDER_CIRCULAR_SIZE;
        height: @BORDER_CIRCULAR_SIZE;
        position: absolute;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 50%;
        z-index: 9;

        &--left-top {
            left: -@BORDER_CIRCULAR_RADIUS;
            top: -@BORDER_CIRCULAR_RADIUS;
        }

        &--right-top {
            right: -@BORDER_CIRCULAR_RADIUS;
            top: -@BORDER_CIRCULAR_RADIUS;
        }

        &--right-bottom {
            right: -@BORDER_CIRCULAR_RADIUS;
            bottom: -@BORDER_CIRCULAR_RADIUS;
        }

        &--left-bottom {
            left: -@BORDER_CIRCULAR_RADIUS;
            bottom: -@BORDER_CIRCULAR_RADIUS;
        }
    }

    &__rect {
        position: absolute;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 2px;
        z-index: 9;

        &--top {
            width: @BORDER_RECT_WIDTH;
            height: @BORDER_RECT_HEIGHT;
            left: 50%;
            transform: translateX(-50%);
            top: calc(-@BORDER_RECT_HEIGHT / 2);
        }

        &--right {
            width: @BORDER_RECT_HEIGHT;
            height: @BORDER_RECT_WIDTH;
            top: 50%;
            transform: translateY(-50%);
            right: calc(-@BORDER_RECT_HEIGHT / 2 - @BORDER_WIDTH / 2);
        }

        &--bottom {
            width: @BORDER_RECT_WIDTH;
            height: @BORDER_RECT_HEIGHT;
            left: 50%;
            transform: translateX(-50%);
            bottom: calc(-@BORDER_RECT_HEIGHT / 2);
        }

        &--left {
            width: @BORDER_RECT_HEIGHT;
            height: @BORDER_RECT_WIDTH;
            top: 50%;
            transform: translateY(-50%);
            left: calc(-@BORDER_RECT_HEIGHT / 2 - @BORDER_WIDTH / 2);
        }
    }
}
</style>
