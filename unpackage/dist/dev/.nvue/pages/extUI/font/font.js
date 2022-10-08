import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createVNode, withCtx, createElementVNode } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("view", {
    class: "container",
    renderWhole: true
  }, [
    createVNode(_component_uni_card, {
      "is-shadow": false,
      "is-full": ""
    }, {
      default: withCtx(() => [
        createElementVNode("u-text", { class: "uni-h6" }, "\u5B57\u4F53\u8F85\u52A9\u6837\u5F0F\u63D0\u4F9B\u4E86\u5E38\u89C1\u7684\u5B57\u4F53\u6837\u5F0F\u7C7B")
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-h1",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-ma-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-h1" }, "\u4E00\u7EA7\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-h2",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-h2" }, "\u4E8C\u7EA7\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-h3",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-h3" }, "\u4E09\u7EA7\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-h4",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-h4" }, "\u56DB\u7EA7\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-h5",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-h5" }, "\u4E94\u7EA7\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-h6",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-h6" }, "\u516D\u7EA7\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-subtitle",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-subtitle" }, "\u526F\u6807\u9898")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-body",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-body" }, "uni-ui \u662F DCloud \u5B98\u65B9\u9762\u5411 uni-app \u5F00\u53D1\u8005\u63D0\u4F9B\u7684\u4E00\u5957 ui \u89E3\u51B3\u65B9\u6848")
        ])
      ]),
      _: 1
    }),
    createVNode(_component_uni_section, {
      title: ".uni-caption",
      type: "line"
    }, {
      default: withCtx(() => [
        createElementVNode("view", { class: "uni-mx-5 uni-mb-5 uni-pl-10" }, [
          createElementVNode("u-text", { class: "uni-caption" }, "\u6807\u6CE8\u8BF4\u660E\u6587\u5B57")
        ])
      ]),
      _: 1
    })
  ]);
}
var font = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/font/font.nvue"]]);
export { font as default };
