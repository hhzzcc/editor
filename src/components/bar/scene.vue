<template>
    <div class="scene-bar">
        <div>画布尺寸</div>
        <Input
            :value="width"
            @change="(v) => $emit('change-width', +v.target.value)"
        >
            <template #addonBefore>宽</template>
        </Input>
        <Input
            :value="height"
            @change="(v) => $emit('change-height', +v.target.value)"
            ><template #addonBefore>高</template>
        </Input>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Input } from "ant-design-vue";

export default defineComponent({
    name: "scene-bar",
    components: {
        Input
    },
    props: {
        width: {
            type: [String, Number],
            default: 0
        },
        height: {
            type: [String, Number],
            default: 0
        }
    }
});
</script>
