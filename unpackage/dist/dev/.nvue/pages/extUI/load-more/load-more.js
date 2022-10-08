import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, Fragment, renderList, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0$1 } from "../../../uni-load-more.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../uni-i18n.es.js";
var _style_0 = { "uni-list-item": { "": { "borderBottomStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#eeeeee", "fontSize": 14 } }, "uni-list-item__container": { "": { "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#666666" } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      status: "more",
      statusTypes: [{
        value: "more",
        text: "\u52A0\u8F7D\u524D",
        checked: true
      }, {
        value: "loading",
        text: "\u52A0\u8F7D\u4E2D",
        checked: false
      }, {
        value: "noMore",
        text: "\u6CA1\u6709\u66F4\u591A",
        checked: false
      }],
      contentText: {
        contentdown: "\u67E5\u770B\u66F4\u591A",
        contentrefresh: "\u52A0\u8F7D\u4E2D",
        contentnomore: "\u6CA1\u6709\u66F4\u591A"
      }
    };
  },
  methods: {
    onChange(e) {
      this.status = e.detail.value;
    },
    clickLoadMore(e) {
      uni.showToast({
        icon: "none",
        title: "\u5F53\u524D\u72B6\u6001\uFF1A" + e.detail.status
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_load_more = resolveEasycom(resolveDynamicComponent("uni-load-more"), __easycom_0$1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_radio = resolveComponent("radio");
  const _component_radio_group = resolveComponent("radio-group");
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
          createElementVNode("u-text", { class: "uni-h6" }, "\u52A0\u8F7D\u66F4\u591A\u7EC4\u4EF6\u7528\u4E8E\u9875\u9762\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u65F6\uFF0C\u9875\u9762\u5E95\u90E8\u663E\u793A\u5185\u5BB9\u7B49\u573A\u666F")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u672C\u7528\u6CD5",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, { status: $data.status }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4FEE\u6539\u9ED8\u8BA4\u6587\u5B57",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            status: $data.status,
            "content-text": $data.contentText
          }, null, 8, ["status", "content-text"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6539\u53D8\u989C\u8272",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            color: "#007AFF",
            status: $data.status
          }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6307\u5B9A\u52A0\u8F7D\u56FE\u6807\u6837\u5F0F - \u6309\u5E73\u53F0\u81EA\u52A8\u9009\u62E9\u6837\u5F0F",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            iconType: "auto",
            status: $data.status
          }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6307\u5B9A\u52A0\u8F7D\u56FE\u6807\u6837\u5F0F - \u73AF\u5F62",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_load_more, {
            iconType: "circle",
            status: $data.status
          }, null, 8, ["status"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6539\u53D8\u7EC4\u4EF6\u72B6\u6001",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_radio_group, {
            class: "uni-list",
            onChange: $options.onChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.statusTypes, (item, index) => {
                return openBlock(), createElementBlock("view", {
                  key: index,
                  class: "uni-list-item"
                }, [
                  createElementVNode("view", { class: "uni-list-item__container" }, [
                    createElementVNode("view", { class: "uni-list-item__content" }, [
                      createElementVNode("u-text", { class: "uni-list-item__content-title" }, toDisplayString(item.text), 1)
                    ]),
                    createElementVNode("view", { class: "uni-list-item__extra" }, [
                      createVNode(_component_radio, {
                        value: item.value,
                        checked: item.checked
                      }, null, 8, ["value", "checked"])
                    ])
                  ])
                ]);
              }), 128))
            ]),
            _: 1
          }, 8, ["onChange"])
        ]),
        _: 1
      })
    ])
  ]);
}
var loadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/load-more/load-more.nvue"]]);
export { loadMore as default };
