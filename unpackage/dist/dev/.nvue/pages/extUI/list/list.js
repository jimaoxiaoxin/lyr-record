import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createVNode, withCtx } from "vue";
import { _ as __easycom_3, a as __easycom_4 } from "../../../uni-list.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../uni-icons.js";
import "../../../uni-badge.js";
var _style_0 = { "slot-box": { "": { "flexDirection": "row", "alignItems": "center" } }, "slot-image": { "": { "marginRight": 10, "width": 30, "height": 30 } }, "slot-text": { "": { "flex": 1, "fontSize": 14, "color": "#4cd964", "marginRight": 10 } } };
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
      formatAppLog("log", "at pages/extUI/list/list.nvue:125", "\u6267\u884Cclick\u4E8B\u4EF6", e.data);
      uni.showToast({
        title: "\u70B9\u51FB\u53CD\u9988"
      });
    },
    switchChange(e) {
      uni.showToast({
        title: "change:" + e.value,
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
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
          createElementVNode("u-text", { class: "uni-h6" }, "\u5217\u8868\u7EC4\u4EF6\u53EF\u4EE5\u5728\u5176\u4E2D\u4F7F\u7528\u56FE\u6807\u3001\u7565\u7F29\u56FE\u6216\u653E\u7F6E\u4EFB\u4F55\u4F60\u60F3\u653E\u7684\u5143\u7D20\uFF0C\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u5BFC\u822A\u83DC\u5355\u3001\u5217\u8868\u3001\u8BBE\u7F6E\u4E2D\u5FC3\u6392\u7248\u7B49")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u7840\u7528\u6CD5",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, { title: "\u5217\u8868\u6587\u5B57" }),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u6587\u5B57",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              }),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u6587\u5B57",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u7981\u7528\u5217\u8868",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                disabled: true,
                title: "\u5217\u8868\u7981\u7528\u72B6\u6001",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              }),
              createVNode(_component_uni_list_item, {
                disabled: true,
                title: "\u5217\u8868\u7981\u7528\u72B6\u6001",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u663E\u793A\u53F3\u4FA7\u7BAD\u5934",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                showArrow: "",
                title: "\u5217\u8868\u6587\u5B57"
              }),
              createVNode(_component_uni_list_item, {
                showArrow: "",
                title: "\u5217\u8868\u6587\u5B57",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5F00\u542F\u70B9\u51FB\u53CD\u9988",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                title: "\u5F39\u7A97\u63D0\u793A",
                clickable: "",
                onClick: $options.onClick
              }, null, 8, ["onClick"]),
              createVNode(_component_uni_list_item, {
                title: "\u9875\u9762\u8DF3\u8F6C",
                to: `./chat`,
                onClick: $options.onClick
              }, null, 8, ["to", "onClick"]),
              createVNode(_component_uni_list_item, {
                title: "\u5173\u95ED\u5F53\u524D\u9875\u9762\u6253\u5F00\u65B0\u9875\u9762",
                showArrow: "",
                link: "redirectTo",
                to: "./chat",
                onClick: $options.onClick
              }, null, 8, ["onClick"]),
              createVNode(_component_uni_list_item, {
                title: "\u6253\u5F00\u9519\u8BEF\u9875\u9762(\u67E5\u770B\u63A7\u5236\u53F0)",
                showArrow: "",
                link: "redirectTo",
                to: "./chats",
                onClick: $options.onClick
              }, null, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4E0D\u663E\u793A\u5206\u9694\u7EBF",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, { border: false }, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, { title: "\u5217\u8868\u6587\u5B57" }),
              createVNode(_component_uni_list_item, {
                border: false,
                title: "\u5217\u8868\u6587\u5B57",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              }),
              createVNode(_component_uni_list_item, {
                border: false,
                title: "\u5217\u8868\u6587\u5B57",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5206\u9694\u7EBF\u901A\u680F",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, { "border-full": "" }, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, { title: "\u5217\u8868\u6587\u5B57" }),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u6587\u5B57",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              }),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u6587\u5B57",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                rightText: "\u53F3\u4FA7\u6587\u5B57"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6587\u5B57\u6EA2\u51FA\u9690\u85CF",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                ellipsis: "1",
                title: "\u8D85\u957F\u6587\u5B57\u663E\u793A\u4E00\u884C,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57"
              }),
              createVNode(_component_uni_list_item, {
                ellipsis: "2",
                title: "\u8D85\u957F\u6587\u5B57\u663E\u793A\u4E8C\u884C,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                rightText: "\u4E8C\u884C\u663E\u793A"
              }),
              createVNode(_component_uni_list_item, {
                ellipsis: "1",
                title: "\u5168\u90E8\u663E\u793A,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57,\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                showArrow: "",
                rightText: "\u4E00\u884C\u663E\u793A"
              }),
              createVNode(_component_uni_list_item, {
                title: "\u5168\u90E8\u663E\u793A,\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u6587\u5B57",
                showArrow: "",
                rightText: "\u5168\u90E8"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u663E\u793A\u56FE\u6807\u6216\u56FE\u7247",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, {
                "show-extra-icon": true,
                showArrow: "",
                "extra-icon": $data.extraIcon,
                title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u6269\u5C55\u56FE\u6807"
              }, null, 8, ["extra-icon"]),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                showArrow: "",
                thumb: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                "thumb-size": "sm",
                rightText: "\u5C0F\u56FE"
              }),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                showArrow: "",
                thumb: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                "thumb-size": "base",
                rightText: "\u9ED8\u8BA4"
              }),
              createVNode(_component_uni_list_item, {
                title: "\u5217\u8868\u5DE6\u4FA7\u5E26\u7565\u7F29\u56FE",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                showArrow: "",
                thumb: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
                "thumb-size": "lg",
                rightText: "\u5927\u56FE"
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4F7F\u7528\u63D2\u69FD",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_list, null, {
            default: withCtx(() => [
              createVNode(_component_uni_list_item, null, {
                body: withCtx(() => [
                  createElementVNode("view", { class: "slot-box" }, [
                    createElementVNode("u-text", { class: "slot-text" }, "\u4F7F\u7528 body \u63D2\u69FD")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_uni_list_item, {
                title: "\u81EA\u5B9A\u4E49\u53F3\u4FA7\u63D2\u69FD",
                note: "\u5217\u8868\u63CF\u8FF0\u4FE1\u606F",
                link: ""
              }, {
                footer: withCtx(() => [
                  createElementVNode("u-image", {
                    class: "slot-image",
                    src: "/static/logo.png",
                    mode: "widthFix"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_uni_list_item, null, {
                header: withCtx(() => [
                  createElementVNode("view", { class: "slot-box" }, [
                    createElementVNode("u-image", {
                      class: "slot-image",
                      src: "/static/logo.png",
                      mode: "widthFix"
                    })
                  ])
                ]),
                body: withCtx(() => [
                  createElementVNode("u-text", { class: "slot-box slot-text" }, "\u81EA\u5B9A\u4E49\u4E24\u4FA7\u63D2\u69FD")
                ]),
                footer: withCtx(() => [
                  createElementVNode("u-image", {
                    class: "slot-image",
                    src: "/static/logo.png",
                    mode: "widthFix"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])
  ]);
}
var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/list/list.nvue"]]);
export { list as default };
