import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
var _style_0 = { "box": { "": { "display": "flex", "flexDirection": "column", "fontSize": 14, "overflow": "hidden" } }, "item-box": { ".box ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "row", "height": 50, "overflow": "hidden" } }, "item": { ".box .item-box ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1, "height": 50 } }, "box-base": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "height": 50 } } };
const _sfc_main = {
  data() {
    return {};
  },
  computed: {},
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
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
          createElementVNode("u-text", { class: "uni-h6" }, "uni-ui \u89C4\u8303\u989C\u8272\u8272\u677F\uFF0C\u901A\u8FC7\u5185\u7F6E\u6837\u5F0F\u5FEB\u901F\u6307\u5B9A\u5143\u7D20\u524D\u666F\u548C\u80CC\u666F\u8272\u3002")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4E3B\u8272",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5" }, [
            createElementVNode("view", { class: "box uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-primary-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "primary")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-primary-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-primary-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u8F85\u52A9\u8272",
        "sub-title": "\u9664\u4E86\u4E3B\u8272\u5916\u7684\u573A\u666F\u8272\uFF0C\u9700\u8981\u5728\u4E0D\u540C\u7684\u573A\u666F\u4E2D\u4F7F\u7528\uFF08\u4F8B\u5982\u5371\u9669\u8272\u8868\u793A\u5371\u9669\u7684\u64CD\u4F5C\uFF09\u3002",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5" }, [
            createElementVNode("view", { class: "box uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-success-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "success")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-success-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-success-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ]),
            createElementVNode("view", { class: "box uni-mt-5 uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-warning-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "warning")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-warning-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-warning-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ]),
            createElementVNode("view", { class: "box uni-mt-5 uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-error-bg" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "error")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-error-disable-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-error-light-bg" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ]),
            createElementVNode("view", { class: "box uni-mt-5 uni-radius" }, [
              createElementVNode("view", { class: "item-box uni-info-bg uni-white" }, [
                createElementVNode("u-text", { class: "uni-body uni-white" }, "info")
              ]),
              createElementVNode("view", { class: "item-box" }, [
                createElementVNode("view", { class: "item uni-info-disable-bg uni-white" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "disable")
                ]),
                createElementVNode("view", { class: "item uni-info-light-bg uni-white" }, [
                  createElementVNode("u-text", { class: "uni-body uni-white" }, "light")
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4E2D\u6027\u8272",
        "sub-title": "\u4E2D\u6027\u8272\u7528\u4E8E\u6587\u672C\u3001\u80CC\u666F\u548C\u8FB9\u6846\u989C\u8272\u3002\u901A\u8FC7\u8FD0\u7528\u4E0D\u540C\u7684\u4E2D\u6027\u8272\uFF0C\u6765\u8868\u73B0\u5C42\u6B21\u7ED3\u6784\u3002",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-radius" }, [
            createElementVNode("view", { class: "box-base uni-radius uni-main-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "main-color")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-base-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "base-color")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-secondary-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "secondary-color")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-extra-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "extra-color")
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5206\u9694\u7EBF",
        "sub-title": "\u4E3B\u8981\u7528\u4E8E\u8FB9\u6846\u989C\u8272",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-radius" }, [
            createElementVNode("view", { class: "box-base uni-radius uni-border-4-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color uni-white" }, "border-4")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border-3-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color uni-white" }, "border-3")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border-2-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "border-2")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border-1-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-white" }, "border-1")
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5E38\u89C4\u8272",
        "sub-title": "\u901A\u7528\u989C\u8272,\u5982\u9ED1\u8272\u767D\u8272",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "uni-ma-5 uni-radius" }, [
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-white-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "white")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-black-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "black")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-transparent-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "transparent")
            ]),
            createElementVNode("view", { class: "box-base uni-radius uni-border uni-bg-color-bg uni-mt-5" }, [
              createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "bg-color")
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u9634\u5F71",
        type: "line"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-sm uni-mt-2" }, [
            createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "shadow-sm")
          ]),
          createElementVNode("view", { class: "box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-base uni-secondary-color uni-mt-2" }, [
            createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "shadow-base")
          ]),
          createElementVNode("view", { class: "box-base uni-white-bg uni-ma-5 uni-radius uni-shadow-lg uni-secondary-color uni-mt-2" }, [
            createElementVNode("u-text", { class: "uni-body uni-secondary-color" }, "shadow-lg")
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
var color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/color/color.nvue"]]);
export { color as default };
