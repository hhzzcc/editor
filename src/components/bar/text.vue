<template>
    <div class="text-bar">
        <div>
            <Input
                :value="x"
                @change="(v) => $emit('change-x', +v.target.value)"
            >
                <template #addonBefore>X</template>
            </Input>
            <Input
                :value="y"
                @change="(v) => $emit('change-y', +v.target.value)"
                ><template #addonBefore>Y</template>
            </Input>
            <Input
                :value="angle"
                @change="(v) => $emit('change-angle', +v.target.value)"
                ><template #addonBefore>旋转角度</template>
            </Input>
        </div>

        <Input
            :value="text"
            @change="(v) => $emit('change-text', v.target.value)"
            ><template #addonBefore>内容</template>
        </Input>

        <Select
            :value="fontFamily"
            @change="(v) => $emit('change-font-family', v)"
        >
            <template #addonBefore>X</template>
            <SelectOption value="serif">serif</SelectOption>
            <SelectOption value="fangsong">仿宋</SelectOption>
        </Select>

        <Select :value="fontSize" @change="(v) => $emit('change-font-size', v)">
            <SelectOption :value="14">14px</SelectOption>
            <SelectOption :value="20">20px</SelectOption>
        </Select>

        <Input
            type="color"
            :value="fontColor"
            @change="(v) => $emit('change-font-color', v.target.value)"
        />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Input, Select, SelectOption } from "ant-design-vue";

export default defineComponent({
    name: "text-bar",
    components: {
        Select,
        SelectOption,
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
        },
        text: {
            type: String,
            default: ""
        },
        fontFamily: {
            type: String,
            default: ""
        },
        fontSize: {
            type: [String, Number],
            default: 0
        },
        fontColor: {
            type: String,
            default: ""
        }
    }
});
</script>
