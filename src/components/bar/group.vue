<template>
    <div class="image-bar">
        <Input :value="x" @change="(v) => $emit('change-x', +v.target.value)">
            <template #addonBefore>X</template>
        </Input>
        <Input :value="y" @change="(v) => $emit('change-y', +v.target.value)"
            ><template #addonBefore>Y</template>
        </Input>
        <Input
            :value="angle"
            @change="(v) => $emit('change-angle', +v.target.value)"
            ><template #addonBefore>旋转角度</template>
        </Input>
        <Button v-if="temporary" @click="$emit('change-permanent')"
            >成组</Button
        >
        <Button v-else @click="$emit('change-temporary')">解组</Button>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Input, Button } from "ant-design-vue";

export default defineComponent({
    name: "group-bar",
    components: {
        Input,
        Button
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
        },
        temporary: {
            type: Boolean,
            default: false
        }
    }
});
</script>
