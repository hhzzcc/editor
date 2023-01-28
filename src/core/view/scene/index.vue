<template>
    <div :class="bem()">
        <template v-for="(element, i) in elements" :key="i">
            <!-- 图片 -->
            <ImageElementComponent
                v-if="element.elementType === 'image'"
                v-bind="element.state"
                @mousedown-scale-xy="handleMousedownScaleXY(element)"
                @mousedown-scale-x="handleMousedownScaleX(element)"
                @mousedown-scale-y="handleMousedownScaleY(element)"
                @mousedown-rotate="handleMousedownRotate(element)"
                @mousedown-content="handleMousedownContent(element)"
                @db-click-content="handleDbClickContent(element)"
                @mouseenter-content="handleMouseenterContent(element)"
                @mouseleave-content="handleMouseleaveContent(element)"
                @click-content="handleClickContent(element)"
            />

            <!-- 文字 -->
            <TextElementComponent
                v-else-if="element.elementType === 'text'"
                v-bind="element.state"
                @change-text="(v) => handleChangeText(v, element)"
                @mousedown-scale-xy="handleMousedownScaleXY(element)"
                @mousedown-scale-x="handleMousedownScaleX(element)"
                @mousedown-rotate="handleMousedownRotate(element)"
                @mousedown-content="handleMousedownContent(element)"
                @mouseenter-content="handleMouseenterContent(element)"
                @mouseleave-content="handleMouseleaveContent(element)"
                @click-content="handleClickTextElementContent(element)"
                @mounted="(target) => handleTextElementMounted(element, target)"
            />

            <!-- 组 -->
            <GroupElementComponent
                v-else-if="element.elementType === 'group'"
                v-bind="element.state"
                @mousedown-scale-xy="handleMousedownScaleXY(element)"
                @mousedown-rotate="handleMousedownRotate(element)"
                @mousedown-content="handleMousedownContent(element)"
                @mouseenter-content="handleMouseenterContent(element)"
                @mouseleave-content="handleMouseleaveContent(element)"
                @click-content="handleClickContent(element)"
            />
        </template>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { createNamespace } from "../../utils/create-bem";
import ImageElementComponent from "../element/image-element.vue";
import GroupElementComponent from "../element/group-element.vue";
import TextElementComponent from "../element/text-element.vue";
const [name, bem] = createNamespace("scene");

export default defineComponent({
    name,
    components: {
        ImageElementComponent,
        GroupElementComponent,
        TextElementComponent
    },
    props: [
        "elements",
        "handleTextElementMounted",
        "handleMousedownScaleXY",
        "handleMousedownScaleX",
        "handleMousedownScaleY",
        "handleMousedownContent",
        "handleMousedownRotate",
        "handleDbClickContent",
        "handleChangeText",
        "handleClickContent",
        "handleClickTextElementContent",
        "handleMousedown",
        "handleMouseenterContent",
        "handleMouseleaveContent"
    ],
    setup() {
        return {
            bem
        };
    }
});
</script>

<style lang="less">
@b: scene;

.@{b} {
}
</style>
