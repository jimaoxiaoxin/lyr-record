import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-data-checkbox.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../uni-cloud.es.js";
import "../../../uni-i18n.es.js";
import "../../../uni-load-more.js";
var _style_0 = { "header": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "margin": { "": { "display": "flex", "height": 200, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "overflow": "hidden", "borderRadius": 5, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "margin-item": { "": { "display": "flex", "flex": 1 } }, "box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1 } }, "actions": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "action-label": { "": { "width": 50, "marginLeft": 10, "marginRight": 10, "fontSize": 12 } } };
const _sfc_main = {
  data() {
    return {
      radiusClass: "uni-radius-lg",
      formData: {
        direction: ["t", "b"],
        size: "lg"
      },
      directionData: [{
        value: "t",
        text: "\u5DE6\u4E0A+\u53F3\u4E0A"
      }, {
        value: "r",
        text: "\u53F3\u4E0A+\u53F3\u4E0B"
      }, {
        value: "b",
        text: "\u5DE6\u4E0B+\u53F3\u4E0B"
      }, {
        value: "l",
        text: "\u53F3\u4E0A+\u5DE6\u4E0B"
      }, {
        value: "tl",
        text: "\u5DE6\u4E0A"
      }, {
        value: "tr",
        text: "\u53F3\u4E0A"
      }, {
        value: "bl",
        text: "\u5DE6\u4E0B"
      }, {
        value: "br",
        text: "\u53F3\u4E0B"
      }],
      sizeData: [{
        value: "0",
        text: "\u65E0"
      }, {
        value: "sm",
        text: "\u5C0F"
      }, {
        value: "lg",
        text: "\u5E38\u89C4"
      }, {
        value: "xl",
        text: "\u5927"
      }, {
        value: "circle",
        text: "\u5706"
      }, {
        value: "pill",
        text: "\u6700\u5927\u5316"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    change(e, type) {
      let {
        direction,
        size
      } = this.formData;
      this.radiusClass = "";
      direction.forEach((v) => {
        this.radiusClass += `uni-radius-${v}-${size} `;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_data_checkbox = resolveEasycom(resolveDynamicComponent("uni-data-checkbox"), __easycom_1);
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
        "is-shadow": false,
        "is-full": ""
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "header" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "\u4F7F\u7528\u8FB9\u6846\u534A\u5F84\u8F85\u52A9\u6837\u5F0F\u5BF9\u5143\u7D20\u5FEB\u901F\u5E94\u7528"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "border-radius"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-h6" }, "\u6837\u5F0F\u3002")
          ]),
          createElementVNode("view", { class: "uni-mt-5 header" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "\u89C4\u5219\u4E3A"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "uni-radius-${direction}-${size}")
          ]),
          createElementVNode("view", { class: "uni-mt-5 header" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "\u5982\u679C\u9700\u8981\u56DB\u8FB9\uFF0C\u5219\u4E0D\u9700\u8981\u6307\u5B9A"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "direction")
          ]),
          createElementVNode("view", { class: "uni-mt-5" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "\u5404\u503C\u7684\u542B\u4E49\u8BF7\u53C2\u8003\u6587\u6863")
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6548\u679C\u5C55\u793A",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "margin" }, [
            createElementVNode("view", {
              class: normalizeClass(["box uni-primary-bg uni-ma-5", [$data.radiusClass]])
            }, [
              createElementVNode("u-text", { class: "uni-white" }, "\u901A\u8FC7\u4E0B\u9762\u7684\u9009\u9879\u63A7\u5236\u5706\u89D2")
            ], 2)
          ]),
          createElementVNode("view", { class: "actions uni-mt-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "\u4F4D\u7F6E"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.direction,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.direction = $event),
              multiple: "",
              localdata: $data.directionData,
              onChange: _cache[1] || (_cache[1] = ($event) => $options.change($event, 1))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions uni-mt-3 uni-mb-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "\u5927\u5C0F"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.size,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.size = $event),
              localdata: $data.sizeData,
              onChange: _cache[3] || (_cache[3] = ($event) => $options.change($event, 2))
            }, null, 8, ["modelValue", "localdata"])
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
var radius = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/radius/radius.nvue"]]);
export { radius as default };
