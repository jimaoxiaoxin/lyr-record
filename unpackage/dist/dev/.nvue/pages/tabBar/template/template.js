import { _ as __easycom_0 } from "../../../u-link.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
var _style_0 = { "uni-icon": { "": { "fontFamily": "uniicons", "fontWeight": "normal" } }, "uni-container": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "backgroundColor": "#f8f8f8" } }, "uni-header-logo": { "": { "paddingTop": 15, "paddingRight": 15, "paddingBottom": 15, "paddingLeft": 15, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "marginTop": "10rpx" } }, "uni-header-image": { "": { "width": 80, "height": 80 } }, "uni-hello-text": { "": { "marginBottom": 20 } }, "hello-text": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "hello-link": { "": { "color": "#7A7E83", "fontSize": 14, "lineHeight": 20 } }, "uni-panel": { "": { "marginBottom": 12 } }, "uni-panel-h": { "": { "backgroundColor": "#ffffff", "!flexDirection": "row", "!alignItems": "center", "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12 } }, "uni-panel-h-on": { "": { "backgroundColor": "#f0f0f0" } }, "uni-panel-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-panel-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal", "transform": "rotate(0deg)", "transitionDuration": 0, "transitionProperty": "transform" } }, "uni-panel-icon-on": { "": { "transform": "rotate(180deg)" } }, "uni-navigate-item": { "": { "flexDirection": "row", "alignItems": "center", "backgroundColor": "#FFFFFF", "borderTopStyle": "solid", "borderTopColor": "#f0f0f0", "borderTopWidth": 1, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor:active": "#f8f8f8" } }, "uni-navigate-text": { "": { "flex": 1, "color": "#000000", "fontSize": 14, "fontWeight": "normal" } }, "uni-navigate-icon": { "": { "marginLeft": 15, "color": "#999999", "fontSize": 14, "fontWeight": "normal" } }, "@TRANSITION": { "uni-panel-icon": { "duration": 0, "property": "transform" } } };
const _sfc_main = {
  props: {
    hasLeftWin: {
      type: Boolean
    },
    leftWinActive: {
      type: String
    }
  },
  data() {
    return {
      hideList: [
        "ucharts",
        "nav-city-dropdown"
      ],
      list: [
        {
          id: "navbar",
          name: "\u9876\u90E8\u539F\u751F\u5BFC\u822A\u6807\u9898\u680F",
          open: false,
          pages: [
            {
              name: "\u5BFC\u822A\u680F\u5E26\u81EA\u5B9A\u4E49\u6309\u94AE",
              url: "nav-button"
            },
            {
              name: "\u5BFC\u822A\u680F\u5E26\u7EA2\u70B9\u548C\u89D2\u6807",
              url: "nav-dot"
            },
            {
              name: "\u5BFC\u822A\u680F\u5E26\u57CE\u5E02\u9009\u62E9",
              url: "nav-city-dropdown"
            },
            {
              name: "\u5BFC\u822A\u680F\u5E26\u641C\u7D22\u6846",
              url: "nav-search-input"
            },
            {
              name: "\u900F\u660E\u6E10\u53D8\u6837\u5F0F",
              url: "nav-transparent"
            },
            {
              name: "\u5BFC\u822A\u680F\u5E26\u56FE\u7247",
              url: "nav-image"
            }
          ]
        },
        {
          name: "\u9876\u90E8\u9009\u9879\u5361",
          url: "tabbar"
        },
        {
          name: "\u7EC4\u4EF6\u901A\u8BAF",
          url: "component-communication"
        },
        {
          name: "\u5217\u8868\u5230\u8BE6\u60C5\u793A\u4F8B",
          url: "list2detail-list"
        },
        {
          name: "swiper-list",
          url: "swiper-list-nvue"
        },
        {
          name: "GlobalData\u548Cvuex",
          url: "global"
        },
        {
          name: "\u95EE\u9898\u53CD\u9988",
          url: "/platforms/app-plus/feedback/feedback"
        },
        {
          name: "\u6253\u5F00\u5916\u90E8\u5E94\u7528",
          url: "scheme"
        }
      ]
    };
  },
  onShareAppMessage() {
    return {
      title: "\u6B22\u8FCE\u4F53\u9A8Cuni-app",
      path: "/pages/tabBar/template/template"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  methods: {
    triggerCollapse(e, id) {
      if (!this.list[e].pages) {
        this.goDetailPage(this.list[e].url);
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
    goDetailPage(e) {
      let path = e.url ? e.url : e;
      let url = ~path.indexOf("platform") ? path : "/pages/template/" + path + "/" + path;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
      return false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_u_link = resolveEasycom(resolveDynamicComponent("u-link"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-header-logo"
      }, [
        createElementVNode("u-image", {
          class: "uni-header-image",
          src: "/static/templateIndex.png"
        })
      ])) : createCommentVNode("v-if", true),
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-hello-text"
      }, [
        createElementVNode("u-text", { class: "hello-text" }, "\u4EE5\u4E0B\u662F\u90E8\u5206\u6A21\u677F\u793A\u4F8B\uFF0C\u66F4\u591A\u6A21\u677F\u89C1\u63D2\u4EF6\u5E02\u573A\uFF1A"),
        createVNode(_component_u_link, {
          class: "hello-link",
          href: "https://ext.dcloud.net.cn",
          text: "https://ext.dcloud.net.cn",
          inWhiteList: true
        }, null, 8, ["text"])
      ])) : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (item, index) => {
        return openBlock(), createElementBlock("view", {
          class: normalizeClass([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
          key: item.id
        }, [
          createElementVNode("view", {
            class: normalizeClass([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin, "uni-panel-h-on": item.open }, "uni-panel-h"]),
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
                class: normalizeClass([{ "left-win-active": $props.leftWinActive === item2.url && $props.hasLeftWin, "pc-hide": $data.hideList.indexOf(item2.url) !== -1 && $props.hasLeftWin }, "uni-navigate-item"]),
                key,
                onClick: ($event) => $options.goDetailPage(item2)
              }, [
                createElementVNode("u-text", { class: "uni-navigate-text" }, toDisplayString(item2.name ? item2.name : item2), 1),
                createElementVNode("u-text", { class: "uni-navigate-icon uni-icon" }, "\uE470")
              ], 10, ["onClick"]);
            }), 128))
          ])) : createCommentVNode("v-if", true)
        ], 2);
      }), 128))
    ])
  ]);
}
var template = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/tabBar/template/template.nvue"]]);
export { template as default };
