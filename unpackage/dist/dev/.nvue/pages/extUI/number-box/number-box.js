import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle, normalizeClass, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
var _style_0 = { "uni-numbox": { "": { "flexDirection": "row" } }, "uni-numbox-btns": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "backgroundColor": "#f5f5f5" } }, "uni-numbox__value": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "backgroundColor": "#f5f5f5", "width": 40, "height": 26, "textAlign": "center", "fontSize": 14, "borderLeftWidth": 0, "borderRightWidth": 0, "color": "#333333" } }, "uni-numbox__minus": { "": { "borderTopLeftRadius": 2, "borderBottomLeftRadius": 2 } }, "uni-numbox__plus": { "": { "borderTopRightRadius": 2, "borderBottomRightRadius": 2 } }, "uni-numbox--text": { "": { "lineHeight": 20, "fontSize": 20, "fontWeight": "300", "color": "#333333" } }, "uni-numbox--disabled": { ".uni-numbox ": { "!color": "#c0c0c0" } } };
const _sfc_main$1 = {
  name: "UniNumberBox",
  emits: ["change", "input", "update:modelValue", "blur", "focus"],
  props: {
    value: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, String],
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    background: {
      type: String,
      default: "#f5f5f5"
    },
    color: {
      type: String,
      default: "#333"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: 0
    };
  },
  watch: {
    value(val) {
      this.inputValue = +val;
    },
    modelValue(val) {
      this.inputValue = +val;
    }
  },
  created() {
    if (this.value === 1) {
      this.inputValue = +this.modelValue;
    }
    if (this.modelValue === 1) {
      this.inputValue = +this.value;
    }
  },
  methods: {
    _calcValue(type) {
      if (this.disabled) {
        return;
      }
      const scale = this._getDecimalScale();
      let value = this.inputValue * scale;
      let step = this.step * scale;
      if (type === "minus") {
        value -= step;
        if (value < this.min * scale) {
          return;
        }
        if (value > this.max * scale) {
          value = this.max * scale;
        }
      }
      if (type === "plus") {
        value += step;
        if (value > this.max * scale) {
          return;
        }
        if (value < this.min * scale) {
          value = this.min * scale;
        }
      }
      this.inputValue = (value / scale).toFixed(String(scale).length - 1);
      this.$emit("change", +this.inputValue);
      this.$emit("input", +this.inputValue);
      this.$emit("update:modelValue", +this.inputValue);
    },
    _getDecimalScale() {
      let scale = 1;
      if (~~this.step !== this.step) {
        scale = Math.pow(10, String(this.step).split(".")[1].length);
      }
      return scale;
    },
    _onBlur(event) {
      this.$emit("blur", event);
      let value = event.detail.value;
      if (!value) {
        return;
      }
      value = +value;
      if (value > this.max) {
        value = this.max;
      } else if (value < this.min) {
        value = this.min;
      }
      const scale = this._getDecimalScale();
      this.inputValue = value.toFixed(String(scale).length - 1);
      this.$emit("change", +this.inputValue);
      this.$emit("input", +this.inputValue);
    },
    _onFocus(event) {
      this.$emit("focus", event);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-numbox",
    renderWhole: true
  }, [
    createElementVNode("view", {
      onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
      class: "uni-numbox__minus uni-numbox-btns",
      style: normalizeStyle({ background: $props.background })
    }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
        style: normalizeStyle({ color: $props.color })
      }, "-", 6)
    ], 4),
    createElementVNode("u-input", {
      disabled: $props.disabled,
      onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
      onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
      class: "uni-numbox__value",
      type: "number",
      modelValue: $data.inputValue,
      onInput: _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event.detail.value),
      style: normalizeStyle({ background: $props.background, color: $props.color })
    }, null, 44, ["disabled", "modelValue"]),
    createElementVNode("view", {
      onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
      class: "uni-numbox__plus uni-numbox-btns",
      style: normalizeStyle({ background: $props.background })
    }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
        style: normalizeStyle({ color: $props.color })
      }, "+", 6)
    ], 4)
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue"]]);
const _sfc_main = {
  components: {},
  data() {
    return {
      numberValue: 0,
      vModelValue: 3
    };
  },
  methods: {
    change(value) {
      this.numberValue = value;
    },
    changeValue(value) {
      formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:43", "\u8FD4\u56DE\u6570\u503C\uFF1A", value);
    },
    blur(e) {
      formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:46", "-------blur:", e);
    },
    focus(e) {
      formatAppLog("log", "at pages/extUI/number-box/number-box.nvue:49", "-------focus:", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_number_box = resolveEasycom(resolveDynamicComponent("uni-number-box"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "page" }, [
      createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": ""
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "\u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6\u591A\u7528\u4E8E\u8D2D\u7269\u8F66\u52A0\u51CF\u5546\u54C1\u7B49\u573A\u666F")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u672C\u7528\u6CD5",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, { onChange: $options.changeValue }, null, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4F7F\u7528v-model : " + $data.vModelValue,
        subTitle: "\u4F7F\u7528 v-model \u663E\u793A\u9ED8\u8BA4\u503C",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            modelValue: $data.vModelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.vModelValue = $event),
            onBlur: $options.blur,
            onFocus: $options.focus,
            onChange: $options.changeValue
          }, null, 8, ["modelValue", "onBlur", "onFocus", "onChange"])
        ]),
        _: 1
      }, 8, ["title"]),
      createVNode(_component_uni_section, {
        title: "\u8BBE\u7F6E\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C",
        subTitle: "\u4F7F\u7528 min \\ max \u5C5E\u6027\u8BBE\u7F6E\u6700\u5927\u6700\u5C0F\u503C",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            min: 2,
            max: 9,
            value: 555
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u8BBE\u7F6E\u6B65\u957F\uFF08\u6B65\u957F0.1)",
        subTitle: "\u4F7F\u7528 step \u5C5E\u6027\u8BBE\u7F6E\u6B65\u957F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            value: 1.1,
            step: 0.1
          }, null, 8, ["value", "step"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u5B9A\u4E49\u80CC\u666F",
        type: "line",
        subTitle: "\u4F7F\u7528 background \u5C5E\u6027\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            value: 50,
            background: "#2979FF",
            color: "#fff"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u7981\u7528\u72B6\u6001",
        subTitle: "\u4F7F\u7528 disabled \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u7981\u7528",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, { disabled: true })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u83B7\u53D6\u8F93\u5165\u7684\u503C : " + $data.numberValue,
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_number_box, {
            value: $data.numberValue,
            onChange: $options.change
          }, null, 8, ["value", "onChange"])
        ]),
        _: 1
      }, 8, ["title"])
    ])
  ]);
}
var numberBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/number-box/number-box.nvue"]]);
export { numberBox as default };
