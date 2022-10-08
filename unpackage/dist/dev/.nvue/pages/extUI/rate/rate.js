import { a as requireNativePlugin, r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, normalizeStyle, withModifiers, createVNode, withCtx } from "vue";
import { _ as __easycom_1$1 } from "../../../uni-icons.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
var _style_0 = { "uni-rate": { "": { "lineHeight": 1, "fontSize": 0, "flexDirection": "row" } }, "uni-rate__icon": { "": { "position": "relative", "lineHeight": 1, "fontSize": 0 } }, "uni-rate__icon-on": { "": { "overflow": "hidden", "position": "absolute", "top": 0, "left": 0, "lineHeight": 1, "textAlign": "left" } } };
const dom = requireNativePlugin("dom");
const _sfc_main$1 = {
  name: "UniRate",
  props: {
    isFill: {
      type: [Boolean, String],
      default: true
    },
    color: {
      type: String,
      default: "#ececec"
    },
    activeColor: {
      type: String,
      default: "#ffca3e"
    },
    disabledColor: {
      type: String,
      default: "#c0c0c0"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    value: {
      type: [Number, String],
      default: 0
    },
    modelValue: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 5
    },
    margin: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: [Boolean, String],
      default: false
    },
    allowHalf: {
      type: [Boolean, String],
      default: false
    },
    touchable: {
      type: [Boolean, String],
      default: true
    }
  },
  data() {
    return {
      valueSync: "",
      userMouseFristMove: true,
      userRated: false,
      userLastRate: 1
    };
  },
  watch: {
    value(newVal) {
      this.valueSync = Number(newVal);
    },
    modelValue(newVal) {
      this.valueSync = Number(newVal);
    }
  },
  computed: {
    stars() {
      const value = this.valueSync ? this.valueSync : 0;
      const starList = [];
      const floorValue = Math.floor(value);
      const ceilValue = Math.ceil(value);
      for (let i = 0; i < this.max; i++) {
        if (floorValue > i) {
          starList.push({
            activeWitch: "100%"
          });
        } else if (ceilValue - 1 === i) {
          starList.push({
            activeWitch: (value - floorValue) * 100 + "%"
          });
        } else {
          starList.push({
            activeWitch: "0"
          });
        }
      }
      return starList;
    },
    marginNumber() {
      return Number(this.margin);
    }
  },
  created() {
    this.valueSync = Number(this.value || this.modelValue);
    this._rateBoxLeft = 0;
    this._oldValue = null;
  },
  mounted() {
    setTimeout(() => {
      this._getSize();
    }, 100);
  },
  methods: {
    touchstart(e) {
      if (this.readonly || this.disabled)
        return;
      const {
        clientX,
        screenX
      } = e.changedTouches[0];
      this._getRateCount(clientX || screenX);
    },
    touchmove(e) {
      if (this.readonly || this.disabled || !this.touchable)
        return;
      const {
        clientX,
        screenX
      } = e.changedTouches[0];
      this._getRateCount(clientX || screenX);
    },
    mousedown(e) {
    },
    mousemove(e) {
    },
    mouseleave(e) {
    },
    _getRateCount(clientX) {
      this._getSize();
      const size = Number(this.size);
      if (isNaN(size)) {
        return new Error("size \u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E3A\u6570\u5B57");
      }
      const rateMoveRange = clientX - this._rateBoxLeft;
      let index = parseInt(rateMoveRange / (size + this.marginNumber));
      index = index < 0 ? 0 : index;
      index = index > this.max ? this.max : index;
      const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
      let value = 0;
      if (this._oldValue === index && !this.PC)
        return;
      this._oldValue = index;
      if (this.allowHalf) {
        if (range > size / 2) {
          value = index + 1;
        } else {
          value = index + 0.5;
        }
      } else {
        value = index + 1;
      }
      value = Math.max(0.5, Math.min(value, this.max));
      this.valueSync = value;
      this._onChange();
    },
    _onChange() {
      this.$emit("input", this.valueSync);
      this.$emit("update:modelValue", this.valueSync);
      this.$emit("change", {
        value: this.valueSync
      });
    },
    _getSize() {
      dom.getComponentRect(this.$refs["uni-rate"], (ret) => {
        const size = ret.size;
        if (size) {
          this._rateBoxLeft = size.left;
        }
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  return openBlock(), createElementBlock("view", { renderWhole: true }, [
    createElementVNode("view", {
      ref: "uni-rate",
      class: "uni-rate"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.stars, (star, index) => {
        return openBlock(), createElementBlock("view", {
          class: normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
          style: normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
          key: index,
          onTouchstart: _cache[0] || (_cache[0] = withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
          onTouchmove: _cache[1] || (_cache[1] = withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
          onMousedown: _cache[2] || (_cache[2] = withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
          onMousemove: _cache[3] || (_cache[3] = withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
          onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
        }, [
          createVNode(_component_uni_icons, {
            color: $props.color,
            size: $props.size,
            type: $props.isFill ? "star-filled" : "star"
          }, null, 8, ["color", "size", "type"]),
          createElementVNode("view", {
            style: normalizeStyle({ width: star.activeWitch.replace("%", "") * $props.size / 100 + "px" }),
            class: "uni-rate__icon-on"
          }, [
            createVNode(_component_uni_icons, {
              style: { "text-align": "left" },
              color: $props.disabled ? "#ccc" : $props.activeColor,
              size: $props.size,
              type: "star-filled"
            }, null, 8, ["color", "size"])
          ], 4)
        ], 38);
      }), 128))
    ], 512)
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
const _sfc_main = {
  components: {},
  data() {
    return {
      rateValue: 0
    };
  },
  onLoad() {
    setTimeout(() => {
      this.rateValue = 3;
    }, 1e3);
  },
  methods: {
    onChange(e) {
      formatAppLog("log", "at pages/extUI/rate/rate.nvue:55", "rate\u53D1\u751F\u6539\u53D8:" + JSON.stringify(e));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_rate = resolveEasycom(resolveDynamicComponent("uni-rate"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, {
        "is-full": "",
        "is-shadow": false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "\u8BC4\u5206\u7EC4\u4EF6\u591A\u7528\u4E8E\u5546\u54C1\u8BC4\u4EF7\u6253\u5206\u3001\u670D\u52A1\u6001\u5EA6\u8BC4\u4EF7\u3001\u7528\u6237\u6EE1\u610F\u5EA6\u7B49\u573A\u666F\u3002")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u672C\u7528\u6CD5",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            modelValue: $data.rateValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.rateValue = $event),
            onChange: $options.onChange
          }, null, 8, ["modelValue", "onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4E0D\u652F\u6301\u6ED1\u52A8\u624B\u52BF\u9009\u62E9\u8BC4\u5206",
        subTitle: "\u8BBE\u7F6E touchable \u5C5E\u6027\u63A7\u5236\u662F\u5426\u5F00\u542F\u624B\u52BF\u9009\u62E9",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            touchable: false,
            value: 5,
            onChange: $options.onChange
          }, null, 8, ["onChange"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u8BBE\u7F6E\u5C3A\u5BF8\u5927\u5C0F",
        subTitle: "\u8BBE\u7F6E size \u5C5E\u6027\u63A7\u5236\u7EC4\u4EF6\u5927\u5C0F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            size: "18",
            value: 5
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u8BBE\u7F6E\u8BC4\u5206\u6570",
        subTitle: "\u8BBE\u7F6E max \u5C5E\u6027\u63A7\u5236\u7EC4\u4EF6\u6700\u5927\u661F\u661F\u6570\u91CF",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            max: 10,
            value: 5
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u8BBE\u7F6E\u661F\u661F\u95F4\u9694",
        subTitle: "\u8BBE\u7F6E margin \u5C5E\u6027\u63A7\u5236\u661F\u661F\u95F4\u9694",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            value: 4,
            margin: "20"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u8BBE\u7F6E\u989C\u8272",
        subTitle: "\u4F7F\u7528 color \u5C5E\u6027\u8BBE\u7F6E\u661F\u661F\u989C\u8272",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            value: 3,
            color: "#bbb",
            "active-color": "red"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u534A\u661F",
        subTitle: "\u4F7F\u7528 allow-half \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u534A\u661F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            "allow-half": "",
            value: 3.5
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u53EA\u8BFB\u72B6\u6001",
        subTitle: "\u4F7F\u7528 readonly \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u53EA\u8BFB",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            readonly: true,
            value: 2
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
          createVNode(_component_uni_rate, {
            disabled: true,
            disabledColor: "#ccc",
            value: 3
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u672A\u9009\u4E2D\u7684\u661F\u661F\u4E3A\u9542\u7A7A\u72B6\u6001",
        subTitle: "\u4F7F\u7528 is-fill \u5C5E\u6027\u8BBE\u7F6E\u661F\u661F\u9542\u7A7A",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_rate, {
            value: 3,
            "is-fill": false
          })
        ]),
        _: 1
      })
    ])
  ]);
}
var rate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/rate/rate.nvue"]]);
export { rate as default };
