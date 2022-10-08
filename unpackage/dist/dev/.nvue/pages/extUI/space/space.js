import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-data-checkbox.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../uni-cloud.es.js";
import "../../../uni-i18n.es.js";
import "../../../uni-load-more.js";
var _style_0 = { "header": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "margin": { "": { "display": "flex", "height": 200, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "overflow": "hidden", "borderRadius": 5, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "margin-item": { "": { "display": "flex", "flex": 1 } }, "box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1 } }, "actions": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "action-label": { "": { "width": 70, "marginLeft": 10, "marginRight": 10, "fontSize": 12 } } };
const _sfc_main = {
  data() {
    return {
      paddingClass: "uni-pa-5",
      marginClass: "uni-ma-5",
      formData: {
        margin: ["t", "r", "l", "b"],
        marginSize: "5",
        padding: ["t", "r", "l", "b"],
        paddingSize: "5"
      },
      directionData: [{
        value: "t",
        text: "\u4E0A"
      }, {
        value: "r",
        text: "\u53F3"
      }, {
        value: "b",
        text: "\u4E0B"
      }, {
        value: "l",
        text: "\u5DE6"
      }],
      sizeData: [{
        value: "0",
        text: "0"
      }, {
        value: "2",
        text: "4px"
      }, {
        value: "5",
        text: "10px"
      }, {
        value: "10",
        text: "20px"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    change(e, type) {
      let {
        margin,
        marginSize,
        padding,
        paddingSize
      } = this.formData;
      this.marginClass = "";
      this.paddingClass = "";
      margin.forEach((v) => {
        this.marginClass += `uni-m${v}-${marginSize} `;
      });
      padding.forEach((v) => {
        this.marginClass += `uni-p${v}-${paddingSize} `;
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
            createElementVNode("u-text", { class: "uni-h6" }, "\u4F7F\u7528\u95F4\u8DDD\u8F85\u52A9\u7C7B\u5BF9\u5143\u7D20\u5FEB\u901F\u5E94\u7528"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "margin"),
            createElementVNode("u-text", { class: "uni-h6" }, " \u6216 "),
            createElementVNode("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "padding"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-h6" }, "\u6837\u5F0F\uFF0C \u8303\u56F4\u662F\u4ECE 0 \u5230 16\u3002")
          ]),
          createElementVNode("view", { class: "header uni-mt-5" }, [
            createElementVNode("u-text", { class: "uni-h6" }, "\u89C4\u5219\u4E3A"),
            createElementVNode("u-text", null, " "),
            createElementVNode("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "uni-${property}${direction}-${size}")
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
              class: normalizeClass(["margin-item uni-border-4-bg", [$data.paddingClass, $data.marginClass]])
            }, [
              createElementVNode("view", { class: "box uni-primary-bg" }, [
                createElementVNode("u-text", { class: "uni-white uni-body" }, "\u901A\u8FC7\u4E0B\u9762\u7684\u9009\u9879\u63A7\u5236\u8FB9\u8DDD")
              ])
            ], 2)
          ]),
          createElementVNode("view", { class: "actions uni-mt-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "\u5916\u8FB9\u8DDD"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.margin,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.margin = $event),
              multiple: "",
              localdata: $data.directionData,
              onChange: _cache[1] || (_cache[1] = ($event) => $options.change($event, 1))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions uni-mt-3 uni-mb-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "\u5916\u8FB9\u8DDD\u5927\u5C0F"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.marginSize,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.marginSize = $event),
              localdata: $data.sizeData,
              onChange: _cache[3] || (_cache[3] = ($event) => $options.change($event, 1))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions" }, [
            createElementVNode("u-text", { class: "action-label" }, "\u5185\u8FB9\u8DDD"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.padding,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.padding = $event),
              multiple: "",
              localdata: $data.directionData,
              onChange: _cache[5] || (_cache[5] = ($event) => $options.change($event, 2))
            }, null, 8, ["modelValue", "localdata"])
          ]),
          createElementVNode("view", { class: "actions uni-mt-3 uni-mb-10" }, [
            createElementVNode("u-text", { class: "action-label" }, "\u5185\u8FB9\u8DDD\u5927\u5C0F"),
            createVNode(_component_uni_data_checkbox, {
              modelValue: $data.formData.paddingSize,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.formData.paddingSize = $event),
              localdata: $data.sizeData,
              onChange: _cache[7] || (_cache[7] = ($event) => $options.change($event, 3))
            }, null, 8, ["modelValue", "localdata"])
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
var space = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/space/space.nvue"]]);
export { space as default };
