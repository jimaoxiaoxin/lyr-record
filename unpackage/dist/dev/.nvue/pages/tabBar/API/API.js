import { _ as __easycom_0$1 } from "../../../u-link.js";
import { openBlock, createElementBlock, createElementVNode, toDisplayString, resolveDynamicComponent, resolveComponent, createVNode, withCtx, createTextVNode, createBlock, Fragment, createCommentVNode, renderList, normalizeClass } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
const _sfc_main$2 = {
  name: "page-head",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "common-page-head",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "common-page-head-title" }, [
      createElementVNode("u-text", null, toDisplayString($props.title), 1)
    ])
  ]);
}
var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/components/page-head/page-head.vue"]]);
var _style_0$1 = { "button": { "": { "marginTop": "30rpx", "marginLeft": 0, "marginRight": 0 } }, "btn-area": { "": { "paddingTop": "30rpx" } } };
const _sfc_main$1 = {
  data() {
    return {
      title: "tababr",
      hasSetTabBarBadge: false,
      hasShownTabBarRedDot: false,
      hasCustomedStyle: false,
      hasCustomedItem: false,
      hasHiddenTabBar: false
    };
  },
  destroyed() {
    if (this.hasSetTabBarBadge) {
      uni.removeTabBarBadge({
        index: 1
      });
    }
    if (this.hasShownTabBarRedDot) {
      uni.hideTabBarRedDot({
        index: 1
      });
    }
    if (this.hasHiddenTabBar) {
      uni.showTabBar();
    }
    if (this.hasCustomedStyle) {
      uni.setTabBarStyle({
        color: "#7A7E83",
        selectedColor: "#007AFF",
        backgroundColor: "#F8F8F8",
        borderStyle: "black"
      });
    }
    if (this.hasCustomedItem) {
      let tabBarOptions = {
        index: 1,
        text: "\u63A5\u53E3",
        iconPath: "/static/api.png",
        selectedIconPath: "/static/apiHL.png"
      };
      uni.setTabBarItem(tabBarOptions);
    }
  },
  methods: {
    navigateBack() {
      this.$emit("unmount");
    },
    setTabBarBadge() {
      if (this.hasShownTabBarRedDot) {
        uni.hideTabBarRedDot({
          index: 1
        });
        this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot;
      }
      if (!this.hasSetTabBarBadge) {
        uni.setTabBarBadge({
          index: 1,
          text: "1"
        });
      } else {
        uni.removeTabBarBadge({
          index: 1
        });
      }
      this.hasSetTabBarBadge = !this.hasSetTabBarBadge;
    },
    showTabBarRedDot() {
      if (this.hasSetTabBarBadge) {
        uni.removeTabBarBadge({
          index: 1
        });
        this.hasSetTabBarBadge = !this.hasSetTabBarBadge;
      }
      if (!this.hasShownTabBarRedDot) {
        uni.showTabBarRedDot({
          index: 1
        });
      } else {
        uni.hideTabBarRedDot({
          index: 1
        });
      }
      this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot;
    },
    hideTabBar() {
      if (!this.hasHiddenTabBar) {
        uni.hideTabBar();
      } else {
        uni.showTabBar();
      }
      this.hasHiddenTabBar = !this.hasHiddenTabBar;
    },
    customStyle() {
      if (this.hasCustomedStyle) {
        uni.setTabBarStyle({
          color: "#7A7E83",
          selectedColor: "#007AFF",
          backgroundColor: "#F8F8F8",
          borderStyle: "black"
        });
      } else {
        uni.setTabBarStyle({
          color: "#FFF",
          selectedColor: "#007AFF",
          backgroundColor: "#000000",
          borderStyle: "black"
        });
      }
      this.hasCustomedStyle = !this.hasCustomedStyle;
    },
    customItem() {
      let tabBarOptions = {
        index: 1,
        text: "\u63A5\u53E3",
        iconPath: "/static/api.png",
        selectedIconPath: "/static/apiHL.png"
      };
      if (this.hasCustomedItem) {
        uni.setTabBarItem(tabBarOptions);
      } else {
        tabBarOptions.text = "API";
        uni.setTabBarItem(tabBarOptions);
      }
      this.hasCustomedItem = !this.hasCustomedItem;
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_head = resolveEasycom(resolveDynamicComponent("page-head"), __easycom_0);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("view", {
    class: "uni-padding-wrap",
    renderWhole: true
  }, [
    createVNode(_component_page_head, { title: $data.title }, null, 8, ["title"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.setTabBarBadge
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasSetTabBarBadge ? "\u8BBE\u7F6Etab\u5FBD\u6807" : "\u79FB\u9664tab\u5FBD\u6807"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.showTabBarRedDot
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasShownTabBarRedDot ? "\u663E\u793A\u7EA2\u70B9" : "\u79FB\u9664\u7EA2\u70B9"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.customStyle
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasCustomedStyle ? "\u81EA\u5B9A\u4E49Tab\u6837\u5F0F" : "\u79FB\u9664\u81EA\u5B9A\u4E49\u6837\u5F0F"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.customItem
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasCustomedItem ? "\u81EA\u5B9A\u4E49Tab\u4FE1\u606F" : "\u79FB\u9664\u81EA\u5B9A\u4E49\u4FE1\u606F"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createVNode(_component_button, {
      class: "button",
      onClick: $options.hideTabBar
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(!$data.hasHiddenTabBar ? "\u9690\u85CFTabBar" : "\u663E\u793ATabBar"), 1)
      ]),
      _: 1
    }, 8, ["onClick"]),
    createElementVNode("view", { class: "btn-area" }, [
      createVNode(_component_button, {
        class: "button",
        type: "primary",
        onClick: $options.navigateBack
      }, {
        default: withCtx(() => [
          createTextVNode("\u8FD4\u56DE\u4E0A\u4E00\u7EA7")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])
  ]);
}
var setTabBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/components/api-set-tabbar.nvue"]]);
var _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
const _sfc_main = {
  components: {
    setTabBar
  },
  props: {
    hasLeftWin: {
      type: Boolean
    },
    leftWinActive: {
      type: String
    }
  },
  data() {
    let mediaPages = [
      {
        name: "\u56FE\u7247",
        url: "image"
      },
      {
        name: "\u97F3\u9891",
        url: "inner-audio"
      },
      {
        name: "\u5F55\u97F3",
        url: "voice"
      },
      {
        name: "\u80CC\u666F\u97F3\u9891",
        url: "background-audio"
      },
      {
        name: "\u89C6\u9891",
        url: "video"
      },
      {
        name: "\u6587\u4EF6",
        url: "file"
      },
      {
        name: "\u4FDD\u5B58\u5A92\u4F53\u5230\u672C\u5730",
        url: "save-media"
      }
    ];
    const list = [
      {
        id: "page",
        name: "\u754C\u9762",
        open: false,
        pages: [
          {
            name: "\u8BBE\u7F6E\u5BFC\u822A\u6761",
            url: "set-navigation-bar-title"
          },
          {
            name: "\u539F\u751F\u5B50\u7A97\u4F53",
            url: "subnvue"
          },
          {
            name: "\u9875\u9762\u8DF3\u8F6C",
            url: "navigator"
          },
          {
            name: "\u8BBE\u7F6ETabBar",
            url: "set-tabbar"
          },
          {
            name: "\u4E0B\u62C9\u5237\u65B0",
            url: "pull-down-refresh"
          },
          {
            name: "\u521B\u5EFA\u52A8\u753B",
            url: "animation"
          },
          {
            name: "\u521B\u5EFA\u7ED8\u753B",
            url: "canvas"
          },
          {
            name: "\u8282\u70B9\u4FE1\u606F",
            url: "get-node-info"
          },
          {
            name: "\u8282\u70B9\u5E03\u5C40\u4EA4\u4E92\u72B6\u6001",
            url: "intersection-observer"
          },
          {
            name: "\u663E\u793A\u64CD\u4F5C\u83DC\u5355",
            url: "action-sheet"
          },
          {
            name: "\u663E\u793A\u6A21\u6001\u5F39\u7A97",
            url: "modal"
          },
          {
            name: "\u663E\u793A\u52A0\u8F7D\u63D0\u793A\u6846",
            url: "show-loading"
          },
          {
            name: "\u663E\u793A\u6D88\u606F\u63D0\u793A\u6846",
            url: "toast"
          }
        ]
      },
      {
        id: "device",
        name: "\u8BBE\u5907",
        open: false,
        pages: [
          {
            name: "\u83B7\u53D6\u8BBE\u5907\u7F51\u7EDC\u72B6\u6001",
            url: "get-network-type"
          },
          {
            name: "\u83B7\u53D6\u8BBE\u5907\u7CFB\u7EDF\u4FE1\u606F",
            url: "get-system-info"
          },
          {
            name: "\u6253\u7535\u8BDD",
            url: "make-phone-call"
          },
          {
            name: "\u9707\u52A8",
            url: "vibrate"
          },
          {
            name: "\u6DFB\u52A0\u624B\u673A\u8054\u7CFB\u4EBA",
            url: "add-phone-contact"
          },
          {
            name: "\u626B\u7801",
            url: "scan-code"
          },
          {
            name: "\u526A\u8D34\u677F",
            url: "clipboard"
          },
          {
            name: "\u5C4F\u5E55\u4EAE\u5EA6",
            url: "brightness"
          },
          {
            name: "\u84DD\u7259",
            url: "bluetooth"
          },
          {
            name: "\u751F\u7269\u8BA4\u8BC1",
            url: "soter"
          },
          {
            name: "iBeacon",
            url: "ibeacon"
          },
          {
            name: "\u76D1\u542C\u52A0\u901F\u5EA6\u4F20\u611F\u5668",
            url: "on-accelerometer-change"
          },
          {
            name: "\u76D1\u542C\u7F57\u76D8\u6570\u636E",
            url: "on-compass-change"
          },
          {
            name: "\u76D1\u542C\u8DDD\u79BB\u4F20\u611F\u5668",
            url: "/platforms/app-plus/proximity/proximity"
          },
          {
            name: "\u76D1\u542C\u65B9\u5411\u4F20\u611F\u5668",
            url: "/platforms/app-plus/orientation/orientation"
          }
        ]
      },
      {
        id: "network",
        name: "\u7F51\u7EDC",
        open: false,
        pages: [
          {
            name: "\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42",
            url: "request"
          },
          {
            name: "\u4E0A\u4F20\u6587\u4EF6",
            url: "upload-file"
          },
          {
            name: "\u4E0B\u8F7D\u6587\u4EF6",
            url: "download-file"
          }
        ]
      },
      {
        id: "websocket",
        name: "websocket",
        open: false,
        pages: [
          {
            name: "socketTask",
            url: "websocket-socketTask"
          },
          {
            name: "\u5168\u5C40websocket",
            url: "websocket-global"
          }
        ]
      },
      {
        id: "media",
        name: "\u5A92\u4F53",
        open: false,
        pages: mediaPages
      },
      {
        id: "location",
        name: "\u4F4D\u7F6E",
        open: false,
        pages: [
          {
            name: "\u83B7\u53D6\u5F53\u524D\u4F4D\u7F6E",
            url: "get-location"
          },
          {
            name: "\u4F7F\u7528\u5730\u56FE\u67E5\u770B\u4F4D\u7F6E",
            url: "open-location"
          },
          {
            name: "\u4F7F\u7528\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E",
            url: "choose-location"
          },
          {
            name: "\u5730\u56FE\u63A7\u5236",
            url: "map"
          },
          {
            name: "\u5730\u56FE\u641C\u7D22",
            url: "map-search"
          }
        ]
      },
      {
        id: "storage",
        name: "\u6570\u636E",
        open: false,
        pages: [
          {
            name: "\u6570\u636E\u5B58\u50A8\uFF08key-value\uFF09",
            url: "storage"
          },
          {
            name: "SQLite",
            url: "sqlite"
          }
        ]
      },
      {
        url: "rewarded-video-ad",
        name: "\u6FC0\u52B1\u89C6\u9891\u5E7F\u544A",
        open: false
      },
      {
        url: "full-screen-video-ad",
        name: "\u5168\u5C4F\u89C6\u9891\u5E7F\u544A",
        open: false
      },
      {
        id: "login",
        name: "\u767B\u5F55",
        open: false,
        pages: [
          {
            name: "\u767B\u5F55",
            url: "login"
          },
          {
            name: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F",
            url: "get-user-info"
          }
        ]
      },
      {
        id: "share",
        name: "\u5206\u4EAB",
        open: false,
        pages: [{
          name: "\u5206\u4EAB",
          url: "share"
        }]
      },
      {
        id: "payment",
        name: "\u652F\u4ED8",
        open: false,
        pages: [{
          name: "\u53D1\u8D77\u652F\u4ED8",
          url: "request-payment"
        }]
      },
      {
        id: "speech",
        name: "\u8BED\u97F3",
        open: false,
        pages: [{
          name: "\u8BED\u97F3\u8BC6\u522B",
          url: "/platforms/app-plus/speech/speech"
        }]
      },
      {
        id: "push",
        name: "\u63A8\u9001",
        open: false,
        pages: [{
          name: "\u63A8\u9001",
          url: "/platforms/app-plus/push/push"
        }]
      }
    ];
    return {
      showSetTabBarPage: false,
      list,
      notForPc: [{
        name: "\u8BBE\u7F6ETabBar",
        url: "set-tabbar"
      }]
    };
  },
  onShareAppMessage() {
    return {
      title: "\u6B22\u8FCE\u4F53\u9A8Cuni-app",
      path: "/pages/tabBar/API/API"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  onLoad() {
  },
  onReady() {
  },
  onShow() {
    this.navigateFlag = false;
    this.leaveSetTabBarPage();
  },
  onHide() {
    this.leaveSetTabBarPage();
  },
  methods: {
    triggerCollapse(e, id) {
      if (!this.list[e].pages) {
        this.goDetailPage("", this.list[e].url);
        return;
      }
      for (var i = 0; i < this.list.length; ++i) {
        if (e === i) {
          this.list[i].open = !this.list[i].open;
        } else {
          this.list[i].open = false;
        }
      }
    },
    goDetailPage(panel, e) {
      if (e === "set-tabbar") {
        this.showSetTabBarPage = true;
        return;
      }
      let url = ~e.indexOf("platform") ? e : "/pages/API/" + e + "/" + e;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
    },
    leaveSetTabBarPage() {
      this.showSetTabBarPage = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_set_tab_bar = resolveComponent("set-tab-bar");
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_0$1);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      $data.showSetTabBarPage ? (openBlock(), createBlock(_component_set_tab_bar, {
        key: 0,
        onUnmount: $options.leaveSetTabBarPage
      }, null, 8, ["onUnmount"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-header-logo"
        }, [
          createElementVNode("u-image", {
            class: "uni-header-image",
            src: "/static/apiIndex.png"
          })
        ])) : createCommentVNode("v-if", true),
        !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "uni-hello-text"
        }, [
          createElementVNode("u-text", { class: "hello-text" }, "\u4EE5\u4E0B\u5C06\u6F14\u793Auni-app\u63A5\u53E3\u80FD\u529B\uFF0C\u8BE6\u7EC6\u6587\u6863\u89C1\uFF1A"),
          createVNode(_component_u_link, {
            class: "hello-link",
            href: "https://uniapp.dcloud.io/api/",
            text: "https://uniapp.dcloud.io/api/",
            inWhiteList: true
          }, null, 8, ["href", "text"])
        ])) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
          return openBlock(), createElementBlock("view", {
            class: "uni-panel",
            key: item.id
          }, [
            createElementVNode("view", {
              class: normalizeClass(["uni-panel-h", item.open ? "uni-panel-h-on" : ""]),
              onClick: ($event) => $options.triggerCollapse(index, item.id)
            }, [
              createElementVNode("u-text", { class: "uni-panel-text" }, toDisplayString(item.name), 1),
              createElementVNode("u-text", {
                class: normalizeClass(["uni-panel-icon uni-icon", item.open ? "uni-panel-icon-on" : ""])
              }, toDisplayString(item.pages ? "\uE581" : "\uE470"), 3)
            ], 10, ["onClick"]),
            item.open ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-panel-c"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(item.pages, (item2, key) => {
                return openBlock(), createElementBlock("view", {
                  class: normalizeClass([{ "left-win-active": $props.leftWinActive === item2.url && $props.hasLeftWin, "pc-hide": item2.name === "\u8BBE\u7F6ETabBar" && $props.hasLeftWin }, "uni-navigate-item"]),
                  key,
                  url: item.url,
                  onClick: ($event) => $options.goDetailPage(item.id, item2.url)
                }, [
                  createElementVNode("u-text", { class: "uni-navigate-text" }, toDisplayString(item2.name ? item2.name : item2), 1),
                  createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "\uE470")
                ], 10, ["url", "onClick"]);
              }), 128))
            ])) : createCommentVNode("v-if", true)
          ]);
        }), 128))
      ], 64))
    ])
  ]);
}
var API = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/tabBar/API/API.nvue"]]);
export { API as default };
