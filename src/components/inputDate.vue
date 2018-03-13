<!--兼容手机日期选择-->
<template>
    <input :type="type"
           v-if="native&&nativeType[type]"
           :placeholder="placeholder"
           :value="value"
           :disabled="disabled"
           :name="name"
           @input="handleInput"
           @change="handleInput" />
    <!-- 其他插件 -->
</template>
<script>
//对应的原生类
let nativeType = {
  date: "date",
  month: "month",
  week: "week",
  datetime: "datetime-local"
};
export default {
  props: {
    //类型
    type: {
      type: String,
      validator(val) {
        let t = nativeType[val];
        if (!t) {
          let str = JSON.stringify(nativeType);
          console.warn(`Optional  type has ${str}`);
        }
        return t;
      }
    },
    //是否使用原生
    native: Boolean,
    //获得值v-model
    value: {
      default: ""
    },
    name: String,
    disabled: {
      default: !!0
    },
    //站位
    placeholder: {
      default: "请输入"
    }
  },
  data() {
    let that = this;
    return {
      nativeType
    };
  },
  methods: {
    handleInput(event) {
        let that = this;
      let value = event.target.value;
      //调用父组件的input 事件 并返回值
      this.$emit("input", value);
    },
  }
};
</script>