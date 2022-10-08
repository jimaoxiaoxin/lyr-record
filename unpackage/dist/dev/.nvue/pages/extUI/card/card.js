import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx, createCommentVNode } from "vue";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { _ as __easycom_3, a as __easycom_4 } from "../../../uni-list.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../uni-badge.js";
var _style_0 = { "container": { "": { "overflow": "hidden" } }, "custom-cover": { "": { "flex": 1, "flexDirection": "row", "position": "relative" } }, "cover-content": { "": { "position": "absolute", "bottom": 0, "left": 0, "right": 0, "height": 40, "backgroundColor": "rgba(0,0,0,0.4)", "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingLeft": 15, "fontSize": 14, "color": "#ffffff" } }, "card-actions": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-around", "alignItems": "center", "height": 45, "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "card-actions-item": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "card-actions-item-text": { "": { "fontSize": 12, "color": "#666666", "marginLeft": 5 } }, "cover-image": { "": { "flex": 1, "height": 150 } }, "no-border": { "": { "borderWidth": 0 } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      cover: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",
      avatar: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
      extraIcon: {
        color: "#4cd964",
        size: "22",
        type: "gear-filled"
      }
    };
  },
  methods: {
    onClick(e) {
      formatAppLog("log", "at pages/extUI/card/card.nvue:129", e);
    },
    actionsClick(text) {
      uni.showToast({
        title: text,
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
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
          createElementVNode("u-text", { class: "uni-h6" }, "\u5361\u7247\u7EC4\u4EF6\u901A\u7528\u6765\u663E\u793A\u5B8C\u6574\u72EC\u7ACB\u7684\u4E00\u6BB5\u4FE1\u606F\uFF0C\u540C\u65F6\u8BA9\u7528\u6237\u7406\u89E3\u4ED6\u7684\u4F5C\u7528\u3002\u4F8B\u5982\u4E00\u7BC7\u6587\u7AE0\u7684\u9884\u89C8\u56FE\u3001\u4F5C\u8005\u4FE1\u606F\u3001\u65F6\u95F4\u7B49\uFF0C\u5361\u7247\u901A\u5E38\u662F\u66F4\u590D\u6742\u548C\u66F4\u8BE6\u7EC6\u4FE1\u606F\u7684\u5165\u53E3\u70B9\u3002")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u7840\u5361\u7247",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, { "is-shadow": false }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5361\u7247\u793A\u4F8B\uFF0C\u5185\u5BB9\u8F83\u5C11\uFF0C\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\u4E00\u4E2A\u6CA1\u6709\u4EFB\u4F55\u5C5E\u6027\u4E0D\u5E26\u9634\u5F71\u7684\u5361\u7247\u3002")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5361\u7247\u6807\u9898+\u989D\u5916\u4FE1\u606F",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "\u57FA\u7840\u5361\u7247",
            extra: "\u989D\u5916\u4FE1\u606F"
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u5361\u7247\u793A\u4F8B\uFF0C\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\u4E00\u4E2A\u6807\u9898\u52A0\u6807\u9898\u989D\u5916\u4FE1\u606F\u7684\u6807\u51C6\u5361\u7247\u3002")
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u53CC\u6807\u9898\u5361\u7247",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "\u57FA\u7840\u5361\u7247",
            "sub-title": "\u526F\u6807\u9898",
            extra: "\u989D\u5916\u4FE1\u606F",
            thumbnail: $data.avatar,
            onClick: $options.onClick
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "\u8FD9\u662F\u4E00\u4E2A\u5E26\u5934\u50CF\u548C\u53CC\u6807\u9898\u7684\u57FA\u7840\u5361\u7247\uFF0C\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u5361\u7247\u3002")
            ]),
            _: 1
          }, 8, ["thumbnail", "onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u901A\u680F\u5361\u7247",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "\u57FA\u7840\u5361\u7247",
            isFull: true,
            "sub-title": "\u526F\u6807\u9898",
            extra: "\u989D\u5916\u4FE1\u606F",
            thumbnail: $data.avatar
          }, {
            default: withCtx(() => [
              createElementVNode("u-text", { class: "uni-body" }, "\u8FD9\u662F\u4E00\u4E2A\u901A\u680F\u5361\u7247 \uFF0C\u901A\u680F\u6CA1\u6709\u5916\u8FB9\u8DDD\uFF0C\u5DE6\u53F3\u4F1A\u8D34\u5408\u7236\u5143\u7D20\u3002")
            ]),
            _: 1
          }, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5361\u7247\u5C01\u9762\u56FE+\u64CD\u4F5C\u680F",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            cover: $data.cover,
            onClick: $options.onClick
          }, {
            default: withCtx(() => [
              createCommentVNode(` <image slot='cover' style="width: 100%;" :src="cover"></image> `),
              createElementVNode("u-text", { class: "uni-body" }, "\u8FD9\u662F\u4E00\u4E2A\u5E26\u5C01\u9762\u548C\u64CD\u4F5C\u680F\u7684\u5361\u7247\u793A\u4F8B\uFF0C\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\u5C01\u9762\u63D2\u69FD\u548C\u64CD\u4F5C\u680F\u63D2\u69FD\u7684\u7528\u6CD5\u3002"),
              createElementVNode("view", {
                slot: "actions",
                class: "card-actions"
              }, [
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[0] || (_cache[0] = ($event) => $options.actionsClick("\u5206\u4EAB"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u5206\u4EAB")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.actionsClick("\u70B9\u8D5E"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u70B9\u8D5E")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[2] || (_cache[2] = ($event) => $options.actionsClick("\u8BC4\u8BBA"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "chatbubble",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u8BC4\u8BBA")
                ])
              ])
            ]),
            _: 1
          }, 8, ["cover", "onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u5B9A\u4E49\u5361\u7247\u5185\u5BB9",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            title: "\u57FA\u7840\u5361\u7247",
            "sub-title": "\u526F\u6807\u9898",
            extra: "\u989D\u5916\u4FE1\u606F",
            padding: "10px 0",
            thumbnail: $data.avatar
          }, {
            title: withCtx(() => [
              createVNode(_component_uni_list, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_list_item, {
                    "show-switch": true,
                    title: "\u81EA\u5B9A\u4E49\u6807\u9898"
                  })
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createElementVNode("u-image", {
                style: { "width": "100%" },
                src: $data.cover
              }, null, 8, ["src"]),
              createElementVNode("u-text", { class: "uni-body uni-mt-5" }, "\u5361\u7247\u7EC4\u4EF6\u901A\u7528\u6765\u663E\u793A\u5B8C\u6574\u72EC\u7ACB\u7684\u4E00\u6BB5\u4FE1\u606F\uFF0C\u540C\u65F6\u8BA9\u7528\u6237\u7406\u89E3\u4ED6\u7684\u4F5C\u7528\u3002\u4F8B\u5982\u4E00\u7BC7\u6587\u7AE0\u7684\u9884\u89C8\u56FE\u3001\u4F5C\u8005\u4FE1\u606F\u3001\u65F6\u95F4\u7B49\uFF0C\u5361\u7247\u901A\u5E38\u662F\u66F4\u590D\u6742\u548C\u66F4\u8BE6\u7EC6\u4FE1\u606F\u7684\u5165\u53E3\u70B9\u3002"),
              createElementVNode("view", {
                slot: "actions",
                class: "card-actions"
              }, [
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.actionsClick("\u5206\u4EAB"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u5206\u4EAB")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.actionsClick("\u70B9\u8D5E"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u70B9\u8D5E")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[5] || (_cache[5] = ($event) => $options.actionsClick("\u8BC4\u8BBA"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "chatbubble",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u8BC4\u8BBA")
                ])
              ])
            ]),
            _: 1
          }, 8, ["thumbnail"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5361\u7247+\u5217\u8868",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_card, {
            padding: "0",
            spacing: "0"
          }, {
            cover: withCtx(() => [
              createElementVNode("view", { class: "custom-cover" }, [
                createElementVNode("u-image", {
                  class: "cover-image",
                  mode: "aspectFill",
                  src: $data.cover
                }, null, 8, ["src"]),
                createElementVNode("view", { class: "cover-content" }, [
                  createElementVNode("u-text", { class: "uni-subtitle uni-white" }, "\u4ECA\u65E5\u65B0\u95FB\u70ED\u70B9")
                ])
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_uni_list, null, {
                default: withCtx(() => [
                  createVNode(_component_uni_list_item, {
                    title: "\u4ECA\u65E5\u65B0\u95FB",
                    showArrow: ""
                  }),
                  createVNode(_component_uni_list_item, {
                    title: "\u4ECA\u65E5\u65B0\u95FB",
                    showArrow: ""
                  })
                ]),
                _: 1
              }),
              createElementVNode("view", {
                slot: "actions",
                class: "card-actions no-border"
              }, [
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[6] || (_cache[6] = ($event) => $options.actionsClick("\u5206\u4EAB"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "redo",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u5206\u4EAB")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[7] || (_cache[7] = ($event) => $options.actionsClick("\u70B9\u8D5E"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "heart",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u70B9\u8D5E")
                ]),
                createElementVNode("view", {
                  class: "card-actions-item",
                  onClick: _cache[8] || (_cache[8] = ($event) => $options.actionsClick("\u8BC4\u8BBA"))
                }, [
                  createVNode(_component_uni_icons, {
                    type: "chatbubble",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-text", { class: "card-actions-item-text" }, "\u8BC4\u8BBA")
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
var card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/card/card.nvue"]]);
export { card as default };
