import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../u-link.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, createVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
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
        "load-more"
      ],
      lists: [
        {
          name: "uni-badge \u6570\u5B57\u89D2\u6807",
          url: "badge"
        },
        {
          name: "uni-breadcrumb \u9762\u5305\u5C51",
          url: "breadcrumb"
        },
        {
          name: "uni-card \u5361\u7247",
          url: "card"
        },
        {
          name: "uni-collapse \u6298\u53E0\u9762\u677F",
          url: "collapse"
        },
        {
          name: "uni-countdown \u5012\u8BA1\u65F6",
          url: "countdown"
        },
        {
          name: "uni-data-checkbox \u6570\u636E\u9009\u62E9\u5668",
          url: "data-checkbox"
        },
        {
          name: "uni-data-picker \u6570\u636E\u9A71\u52A8\u7684picker\u9009\u62E9\u5668",
          url: "data-picker"
        },
        {
          name: "uni-data-select \u6570\u636E\u9A71\u52A8\u7684\u4E0B\u62C9\u6846",
          url: "data-select"
        },
        {
          name: "uni-dateformat \u65E5\u671F\u683C\u5F0F\u5316",
          url: "dateformat"
        },
        {
          name: "uni-datetime-picker \u65E5\u671F\u9009\u62E9\u5668",
          url: "datetime-picker"
        },
        {
          name: "uni-drawer \u62BD\u5C49",
          url: "drawer"
        },
        {
          name: "uni-easyinput \u589E\u5F3A\u8F93\u5165\u6846",
          url: "easyinput"
        },
        {
          name: "uni-fab \u60AC\u6D6E\u6309\u94AE",
          url: "fab"
        },
        {
          name: "uni-fav \u6536\u85CF\u6309\u94AE",
          url: "fav"
        },
        {
          name: "uni-forms \u8868\u5355",
          url: "forms"
        },
        {
          name: "uni-goods-nav \u5546\u54C1\u5BFC\u822A",
          url: "goods-nav"
        },
        {
          name: "uni-grid \u5BAB\u683C",
          url: "grid"
        },
        {
          name: "uni-group \u5206\u7EC4",
          url: "group"
        },
        {
          name: "uni-icons \u56FE\u6807",
          url: "icons"
        },
        {
          name: "uni-indexed-list \u7D22\u5F15\u5217\u8868",
          url: "indexed-list"
        },
        {
          name: "uni-link \u8D85\u94FE\u63A5",
          url: "link"
        },
        {
          name: "uni-list \u5217\u8868",
          url: "list"
        },
        {
          name: "uni-load-more \u52A0\u8F7D\u66F4\u591A",
          url: "load-more"
        },
        {
          name: "uni-nav-bar \u81EA\u5B9A\u4E49\u5BFC\u822A\u680F",
          url: "nav-bar"
        },
        {
          name: "uni-notice-bar \u901A\u544A\u680F",
          url: "notice-bar"
        },
        {
          name: "uni-number-box \u6570\u5B57\u8F93\u5165\u6846",
          url: "number-box"
        },
        {
          name: "uni-pagination \u5206\u9875\u5668",
          url: "pagination"
        },
        {
          name: "uni-popup \u5F39\u51FA\u5C42",
          url: "popup"
        },
        {
          name: "uni-rate \u8BC4\u5206",
          url: "rate"
        },
        {
          name: "uni-row \u5E03\u5C40-\u884C",
          url: "row"
        },
        {
          name: "uni-search-bar \u641C\u7D22\u680F",
          url: "search-bar"
        },
        {
          name: "uni-section \u6807\u9898\u680F",
          url: "section"
        },
        {
          name: "uni-segmented-control \u5206\u6BB5\u5668",
          url: "segmented-control"
        },
        {
          name: "uni-steps \u6B65\u9AA4\u6761",
          url: "steps"
        },
        {
          name: "uni-swipe-action \u6ED1\u52A8\u64CD\u4F5C",
          url: "swipe-action"
        },
        {
          name: "uni-swiper-dot \u8F6E\u64AD\u56FE\u6307\u793A\u70B9",
          url: "swiper-dot"
        },
        {
          name: "uni-tag \u6807\u7B7E",
          url: "tag"
        },
        {
          name: "uni-title \u7AE0\u8282\u6807\u9898",
          url: "title"
        },
        {
          name: "uni-tooltip \u6587\u5B57\u63D0\u793A",
          url: "tooltip"
        },
        {
          name: "uni-transition \u8FC7\u6E21\u52A8\u753B",
          url: "transition"
        }
      ]
    };
  },
  onLoad() {
  },
  onReady() {
    uni.preloadPage({
      url: "/pages/extUI/calendar/calendar",
      success() {
        formatAppLog("log", "at pages/tabBar/extUI/extUI.nvue:230", "preloadPage /pages/extUI/calendar/calendar");
      },
      fail() {
      }
    });
  },
  onShareAppMessage() {
    return {
      title: "\u6B22\u8FCE\u4F53\u9A8Cuni-app",
      path: "/pages/tabBar/extUI/extUI"
    };
  },
  onNavigationBarButtonTap(e) {
    uni.navigateTo({
      url: "/pages/about/about"
    });
  },
  methods: {
    goDetailPage(path) {
      const url = "/pages/extUI/" + path + "/" + path;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
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
          src: "/static/extuiIndex.png"
        })
      ])) : createCommentVNode("v-if", true),
      !$props.hasLeftWin ? (openBlock(), createElementBlock("view", {
        key: 1,
        class: "uni-hello-text"
      }, [
        createElementVNode("u-text", { class: "hello-text" }, "\u4EE5\u4E0B\u662Funi-app\u6269\u5C55\u7EC4\u4EF6\u793A\u4F8B\uFF0C\u66F4\u591A\u7EC4\u4EF6\u89C1\u63D2\u4EF6\u5E02\u573A\uFF1A"),
        createVNode(_component_u_link, {
          class: "hello-link",
          href: "https://ext.dcloud.net.cn/",
          text: "https://ext.dcloud.net.cn",
          inWhiteList: true
        }, null, 8, ["href", "text"])
      ])) : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.lists, (item) => {
        return openBlock(), createElementBlock("view", {
          class: normalizeClass([{ "pc-hide": $data.hideList.indexOf(item.url) !== -1 && $props.hasLeftWin }, "uni-panel"]),
          key: item.url
        }, [
          createElementVNode("view", {
            class: normalizeClass([{ "left-win-active": $props.leftWinActive === item.url && $props.hasLeftWin }, "uni-panel-h"]),
            onClick: ($event) => $options.goDetailPage(item.url)
          }, [
            createElementVNode("u-text", { class: "uni-panel-text" }, toDisplayString(item.name), 1),
            createElementVNode("u-text", { class: "uni-panel-icon uni-icon" }, "\uE470")
          ], 10, ["onClick"])
        ], 2);
      }), 128))
    ])
  ]);
}
var extUI = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/tabBar/extUI/extUI.nvue"]]);
export { extUI as default };
