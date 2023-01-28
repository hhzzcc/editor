<template>
    <div class="image-bar">
        <Input :value="x" @change="(v) => $emit('change-x', +v.target.value)">
            <template #addonBefore>X</template>
        </Input>
        <Input :value="y" @change="(v) => $emit('change-y', +v.target.value)"
            ><template #addonBefore>Y</template>
        </Input>
        <Input
            :value="width"
            @change="(v) => $emit('change-width', +v.target.value)"
            ><template #addonBefore>宽</template>
        </Input>
        <Input
            :value="height"
            @change="(v) => $emit('change-height', +v.target.value)"
            ><template #addonBefore>高</template>
        </Input>
        <Input
            :value="angle"
            @change="(v) => $emit('change-angle', +v.target.value)"
            ><template #addonBefore>旋转角度</template>
        </Input>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Input } from "ant-design-vue";

export default defineComponent({
    name: "image-bar",
    components: {
        Input
    },
    props: {
        x: {
            type: [String, Number],
            default: 0
        },
        y: {
            type: [String, Number],
            default: 0
        },
        width: {
            type: [String, Number],
            default: 0
        },
        height: {
            type: [String, Number],
            default: 0
        },
        angle: {
            type: [String, Number],
            default: 0
        }
    }
});
</script>
