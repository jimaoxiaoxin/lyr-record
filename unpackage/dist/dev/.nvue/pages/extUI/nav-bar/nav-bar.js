import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_1 } from "../../../uni-icons.js";
import { openBlock, createElementBlock, normalizeStyle, renderSlot, resolveComponent, resolveDynamicComponent, normalizeClass, createElementVNode, createBlock, createCommentVNode, createVNode, toDisplayString, withCtx } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import { _ as __easycom_0$1 } from "../../../uni-card.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
var _style_0$2 = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$2 = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: 20
    };
  },
  mounted() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    style: normalizeStyle({ height: $data.statusBarHeight }),
    class: "uni-status-bar",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
var _style_0$1 = { "uni-nav-bar-text": { "": { "fontSize": "34rpx" } }, "uni-nav-bar-right-text": { "": { "fontSize": 12 } }, "uni-navbar__content": { "": { "position": "relative", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-navbar-btn-text": { "": { "flexDirection": "column", "justifyContent": "flex-start", "alignItems": "center", "lineHeight": 12 } }, "uni-navbar__header": { "": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "flexDirection": "row", "height": 44, "fontSize": 12 } }, "uni-navbar__header-btns": { "": { "flexWrap": "nowrap", "flexDirection": "row", "width": "120rpx", "justifyContent": "center", "alignItems": "center" } }, "uni-navbar__header-btns-left": { "": { "width": "120rpx", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-navbar__header-btns-right": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-navbar__header-container": { "": { "flex": 1, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "overflow": "hidden" } }, "uni-navbar__header-container-inner": { "": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "fontSize": 12, "overflow": "hidden" } }, "uni-navbar__placeholder-view": { "": { "height": 44 } }, "uni-navbar--fixed": { "": { "position": "fixed", "zIndex": 998, "left": 0, "right": 0 } }, "uni-navbar--shadow": { "": { "boxShadow": "0 1px 6px #ccc" } }, "uni-navbar--border": { "": { "borderBottomWidth": "1rpx", "borderBottomStyle": "solid", "borderBottomColor": "#eeeeee" } }, "uni-ellipsis-1": { "": { "overflow": "hidden", "lines": 1, "textOverflow": "ellipsis" } } };
const getVal = (val) => typeof val === "number" ? val + "px" : val;
const _sfc_main$1 = {
  name: "UniNavBar",
  components: {
    statusBar
  },
  emits: ["clickLeft", "clickRight", "clickTitle"],
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    fixed: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    statusBar: {
      type: [Boolean, String],
      default: false
    },
    shadow: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: [Boolean, String],
      default: true
    },
    height: {
      type: [Number, String],
      default: 44
    },
    leftWidth: {
      type: [Number, String],
      default: 60
    },
    rightWidth: {
      type: [Number, String],
      default: 60
    },
    stat: {
      type: [Boolean, String],
      default: ""
    }
  },
  computed: {
    themeBgColor() {
      if (this.dark) {
        if (this.backgroundColor) {
          return this.backgroundColor;
        } else {
          return this.dark ? "#333" : "#FFF";
        }
      }
      return this.backgroundColor || "#FFF";
    },
    themeColor() {
      if (this.dark) {
        if (this.color) {
          return this.color;
        } else {
          return this.dark ? "#fff" : "#333";
        }
      }
      return this.color || "#333";
    },
    navbarHeight() {
      return getVal(this.height);
    },
    leftIconWidth() {
      return getVal(this.leftWidth);
    },
    rightIconWidth() {
      return getVal(this.rightWidth);
    }
  },
  mounted() {
    if (uni.report && this.stat && this.title !== "") {
      uni.report("title", this.title);
    }
  },
  methods: {
    onClickLeft() {
      this.$emit("clickLeft");
    },
    onClickRight() {
      this.$emit("clickRight");
    },
    onClickTitle() {
      this.$emit("clickTitle");
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_status_bar = resolveComponent("status-bar");
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-navbar", { "uni-dark": $props.dark }]),
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }, "uni-navbar__content"]),
      style: normalizeStyle({ "background-color": $options.themeBgColor })
    }, [
      $props.statusBar ? (openBlock(), createBlock(_component_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
      createElementVNode("view", {
        style: normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
        class: "uni-navbar__header"
      }, [
        createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
          class: "uni-navbar__header-btns uni-navbar__header-btns-left",
          style: normalizeStyle({ width: $options.leftIconWidth })
        }, [
          renderSlot(_ctx.$slots, "left", {}, () => [
            $props.leftIcon.length > 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-navbar__content_view"
            }, [
              createVNode(_component_uni_icons, {
                color: $options.themeColor,
                type: $props.leftIcon,
                size: "20"
              }, null, 8, ["color", "type"])
            ])) : createCommentVNode("v-if", true),
            $props.leftText.length ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
            }, [
              createElementVNode("u-text", {
                style: normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
              }, toDisplayString($props.leftText), 5)
            ], 2)) : createCommentVNode("v-if", true)
          ])
        ], 4),
        createElementVNode("view", {
          class: "uni-navbar__header-container",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            $props.title.length > 0 ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-navbar__header-container-inner"
            }, [
              createElementVNode("u-text", {
                class: "uni-nav-bar-text uni-ellipsis-1",
                style: normalizeStyle({ color: $options.themeColor })
              }, toDisplayString($props.title), 5)
            ])) : createCommentVNode("v-if", true)
          ])
        ]),
        createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
          class: "uni-navbar__header-btns uni-navbar__header-btns-right",
          style: normalizeStyle({ width: $options.rightIconWidth })
        }, [
          renderSlot(_ctx.$slots, "right", {}, () => [
            $props.rightIcon.length ? (openBlock(), createElementBlock("view", { key: 0 }, [
              createVNode(_component_uni_icons, {
                color: $options.themeColor,
                type: $props.rightIcon,
                size: "22"
              }, null, 8, ["color", "type"])
            ])) : createCommentVNode("v-if", true),
            $props.rightText.length && !$props.rightIcon.length ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "uni-navbar-btn-text"
            }, [
              createElementVNode("u-text", {
                class: "uni-nav-bar-right-text",
                style: normalizeStyle({ color: $options.themeColor })
              }, toDisplayString($props.rightText), 5)
            ])) : createCommentVNode("v-if", true)
          ])
        ], 4)
      ], 4)
    ], 6),
    $props.fixed ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-navbar__placeholder"
    }, [
      $props.statusBar ? (openBlock(), createBlock(_component_status_bar, { key: 0 })) : createCommentVNode("v-if", true),
      createElementVNode("view", {
        class: "uni-navbar__placeholder-view",
        style: normalizeStyle({ height: $options.navbarHeight })
      }, null, 4)
    ])) : createCommentVNode("v-if", true)
  ], 2);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
var _style_0 = { "box-bg": { "": { "backgroundColor": "#F5F5F5", "paddingTop": 5, "paddingRight": 0, "paddingBottom": 5, "paddingLeft": 0 } }, "city": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "flex-start", "marginLeft": 4 } }, "input-view": { "": { "flexDirection": "row", "flex": 1, "backgroundColor": "#f8f8f8", "height": 30, "borderRadius": 15, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15, "flexWrap": "nowrap", "marginTop": 7, "marginRight": 0, "marginBottom": 7, "marginLeft": 0, "lineHeight": 30 } }, "input-uni-icon": { "": { "lineHeight": 30 } }, "nav-bar-input": { "": { "height": 30, "lineHeight": 30, "width": "370rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5, "fontSize": 12, "backgroundColor": "#f8f8f8" } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      city: "\u5317\u4EAC"
    };
  },
  methods: {
    back() {
      uni.navigateBack({
        delta: 1
      });
    },
    showMenu() {
      uni.showToast({
        title: "\u83DC\u5355"
      });
    },
    clickLeft() {
      uni.showToast({
        title: "\u5DE6\u4FA7\u6309\u94AE"
      });
    },
    search() {
      uni.showToast({
        title: "\u641C\u7D22"
      });
    },
    showCity() {
      uni.showToast({
        title: "\u9009\u62E9\u57CE\u5E02"
      });
    },
    scan() {
      uni.showToast({
        title: "\u626B\u7801"
      });
    },
    confirm() {
      uni.showToast({
        title: "\u641C\u7D22"
      });
    }
  },
  onPullDownRefresh() {
    formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:128", "onPullDownRefresh");
    setTimeout(function() {
      uni.stopPullDownRefresh();
      formatAppLog("log", "at pages/extUI/nav-bar/nav-bar.nvue:131", "stopPullDownRefresh");
    }, 1e3);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_nav_bar = resolveEasycom(resolveDynamicComponent("uni-nav-bar"), __easycom_0);
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0$1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_nav_bar, {
        dark: "",
        fixed: true,
        shadow: "",
        "background-color": "#007AFF",
        "status-bar": "",
        "left-icon": "left",
        "left-text": "\u8FD4\u56DE",
        title: "\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F",
        onClickLeft: $options.back
      }, null, 8, ["onClickLeft"]),
      createVNode(_component_uni_card, {
        "is-full": "",
        isShadow: false
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "\u672C\u5BFC\u822A\u680F\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u975E\u539F\u751F\u5BFC\u822A\u680F\u3002\u9664\u975E\u539F\u751F\u5BFC\u822A\u680F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u5426\u5219\u4E0D\u63A8\u8350\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u7EC4\u4EF6\u3002\u5177\u4F53\u53C2\u8003https://ask.dcloud.net.cn/article/34921")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u672C\u7528\u6CD5",
        subTitle: "\u4F7F\u7528 title \u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, { title: "\u6807\u9898" })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5F00\u542F\u9634\u5F71",
        subTitle: "\u4F7F\u7528 shadow \u5C5E\u6027\u542F\u7528\u9634\u5F71",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              title: "\u5F00\u542F\u9634\u5F71",
              onClickLeft: $options.back
            }, null, 8, ["onClickLeft"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5F00\u542F\u6697\u9ED1\u6A21\u5F0F",
        subTitle: "\u4F7F\u7528 dark \u5C5E\u6027\u8BBE\u7F6E\u6697\u9ED1\u6A21\u5F0F",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              dark: "",
              title: "\u6697\u9ED1\u6A21\u5F0F",
              onClickLeft: $options.back
            }, null, 8, ["onClickLeft"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5E26\u8FD4\u56DE\u7BAD\u5934+\u53F3\u4FA7\u56FE\u6807",
        subTitle: "\u4F7F\u7528 left-icon/right-icon \u8BBE\u7F6E\u5DE6\u53F3\u56FE\u6807",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              "right-icon": "cart",
              title: "\u6807\u9898"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5DE6\u4FA7\u6587\u5B57+\u53F3\u4FA7\u6587\u5B57",
        subTitle: "\u4F7F\u7528 left-text/right-text \u8BBE\u7F6E\u5DE6\u53F3\u6587\u5B57",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, {
              shadow: "",
              "left-icon": "left",
              leftText: "\u8FD4\u56DE",
              rightText: "\u8BBE\u7F6E",
              title: "\u6807\u9898"
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u5B9A\u4E49\u989C\u8272",
        subTitle: "\u4F7F\u7528 color/background-color \u5C5E\u6027\u8BBE\u7F6E\u524D\u666F\u80CC\u666F\u8272",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createElementVNode("view", { class: "box-bg" }, [
              createVNode(_component_uni_nav_bar, {
                dark: "",
                color: "#999",
                backgroundColor: "#f5f5f5",
                shadow: "",
                "left-icon": "left",
                leftText: "\u8FD4\u56DE",
                rightText: "\u8BBE\u7F6E",
                title: "\u81EA\u5B9A\u4E49\u989C\u8272"
              })
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6",
        subTitle: "\u4F7F\u7528 height \u4FEE\u6539\u7EC4\u4EF6\u9AD8\u5EA6",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createElementVNode("view", { class: "box-bg" }, [
              createVNode(_component_uni_nav_bar, {
                height: "65px",
                dark: "",
                shadow: "",
                "left-icon": "left",
                leftText: "\u8FD4\u56DE",
                rightText: "\u8BBE\u7F6E",
                title: "\u81EA\u5B9A\u4E49\u9AD8\u5EA6"
              })
            ])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
        subTitle: "\u4F7F\u7528 left/right/default \u63D2\u69FD\u81EA\u5B9A\u4E49\u5185\u5BB9",
        type: "line",
        style: { "margin-bottom": "3px" }
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "box-bg" }, [
            createVNode(_component_uni_nav_bar, null, {
              left: withCtx(() => [
                createElementVNode("view", { class: "city" }, [
                  createElementVNode("view", null, [
                    createElementVNode("u-text", { class: "uni-nav-bar-text" }, toDisplayString($data.city), 1)
                  ]),
                  createVNode(_component_uni_icons, {
                    type: "arrowdown",
                    color: "#666",
                    size: "18"
                  })
                ])
              ]),
              right: withCtx(() => [
                createElementVNode("view", { class: "city" }, [
                  createElementVNode("u-text", null, " \u641C\u7D22 ")
                ])
              ]),
              default: withCtx(() => [
                createElementVNode("view", { class: "input-view" }, [
                  createVNode(_component_uni_icons, {
                    class: "input-uni-icon",
                    type: "search",
                    size: "18",
                    color: "#999"
                  }),
                  createElementVNode("u-input", {
                    confirmType: "search",
                    class: "nav-bar-input",
                    type: "text",
                    placeholder: "\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",
                    onConfirm: _cache[0] || (_cache[0] = (...args) => $options.confirm && $options.confirm(...args))
                  }, null, 32)
                ])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
var navBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/nav-bar/nav-bar.nvue"]]);
export { navBar as default };
