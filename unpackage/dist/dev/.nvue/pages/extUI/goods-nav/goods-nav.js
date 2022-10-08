import { r as resolveEasycom, f as formatAppLog } from "../../../uni-app.es.js";
import { _ as __easycom_0 } from "../../../uni-card.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, Fragment, renderList, createVNode, toDisplayString, normalizeClass, normalizeStyle, withCtx } from "vue";
import { _ as __easycom_1$1 } from "../../../uni-icons.js";
import { i as initVueI18n } from "../../../uni-i18n.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
var en = {
  "uni-goods-nav.options.shop": "shop",
  "uni-goods-nav.options.cart": "cart",
  "uni-goods-nav.buttonGroup.addToCart": "add to cart",
  "uni-goods-nav.buttonGroup.buyNow": "buy now"
};
var zhHans = {
  "uni-goods-nav.options.shop": "\u5E97\u94FA",
  "uni-goods-nav.options.cart": "\u8D2D\u7269\u8F66",
  "uni-goods-nav.buttonGroup.addToCart": "\u52A0\u5165\u8D2D\u7269\u8F66",
  "uni-goods-nav.buttonGroup.buyNow": "\u7ACB\u5373\u8D2D\u4E70"
};
var zhHant = {
  "uni-goods-nav.options.shop": "\u5E97\u92EA",
  "uni-goods-nav.options.cart": "\u8CFC\u7269\u8ECA",
  "uni-goods-nav.buttonGroup.addToCart": "\u52A0\u5165\u8CFC\u7269\u8ECA",
  "uni-goods-nav.buttonGroup.buyNow": "\u7ACB\u5373\u8CFC\u8CB7"
};
var messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
var _style_0$1 = { "flex": { "": { "flexDirection": "row" } }, "uni-goods-nav": { "": { "flex": 1, "flexDirection": "row" } }, "uni-tab__cart-box": { "": { "flex": 1, "height": 50, "backgroundColor": "#ffffff", "zIndex": 900 } }, "uni-tab__cart-sub-left": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5 } }, "uni-tab__cart-sub-right": { "": { "flex": 1 } }, "uni-tab__right": { "": { "marginTop": 5, "marginRight": 10, "marginBottom": 5, "marginLeft": 0, "borderRadius": 100, "overflow": "hidden" } }, "uni-tab__cart-button-left": { "": { "position": "relative", "justifyContent": "center", "alignItems": "center", "flexDirection": "column", "marginTop": 0, "marginRight": 10, "marginBottom": 0, "marginLeft": 10 } }, "uni-tab__icon": { "": { "width": 18, "height": 18 } }, "image": { "": { "width": 18, "height": 18 } }, "uni-tab__text": { "": { "marginTop": 3, "fontSize": 12, "color": "#646566" } }, "uni-tab__cart-button-right": { "": { "flex": 1, "justifyContent": "center", "alignItems": "center", "opacity:active": 0.7 } }, "uni-tab__cart-button-right-text": { "": { "fontSize": 14, "color": "#ffffff" } }, "uni-tab__dot-box": { "": { "position": "absolute", "right": -2, "top": 2, "justifyContent": "center", "alignItems": "center" } }, "uni-tab__dot": { "": { "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 15, "color": "#ffffff", "textAlign": "center", "fontSize": 12, "backgroundColor": "#ff0000", "borderRadius": 15 } }, "uni-tab__dots": { "": { "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "borderRadius": 15 } } };
const { t } = initVueI18n(messages);
const _sfc_main$1 = {
  name: "UniGoodsNav",
  emits: ["click", "buttonClick"],
  props: {
    options: {
      type: Array,
      default() {
        return [{
          icon: "shop",
          text: t("uni-goods-nav.options.shop")
        }, {
          icon: "cart",
          text: t("uni-goods-nav.options.cart")
        }];
      }
    },
    buttonGroup: {
      type: Array,
      default() {
        return [
          {
            text: t("uni-goods-nav.buttonGroup.addToCart"),
            backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
            color: "#fff"
          },
          {
            text: t("uni-goods-nav.buttonGroup.buyNow"),
            backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
            color: "#fff"
          }
        ];
      }
    },
    fill: {
      type: Boolean,
      default: false
    },
    stat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(index, item) {
      this.$emit("click", {
        index,
        content: item
      });
    },
    buttonClick(index, item) {
      if (uni.report && this.stat) {
        uni.report(item.text, item.text);
      }
      this.$emit("buttonClick", {
        index,
        content: item
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_1$1);
  return openBlock(), createElementBlock("view", {
    class: "uni-goods-nav",
    renderWhole: true
  }, [
    createCommentVNode(" \u5E95\u90E8\u5360\u4F4D "),
    createElementVNode("view", { class: "uni-tab__seat" }),
    createElementVNode("view", { class: "uni-tab__cart-box flex" }, [
      createElementVNode("view", { class: "flex uni-tab__cart-sub-left" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: index,
            class: "flex uni-tab__cart-button-left uni-tab__shop-cart",
            onClick: ($event) => $options.onClick(index, item)
          }, [
            createElementVNode("view", { class: "uni-tab__icon" }, [
              createVNode(_component_uni_icons, {
                type: item.icon,
                size: "20",
                color: "#646566"
              }, null, 8, ["type"]),
              createCommentVNode(' <image class="image" :src="item.icon" mode="widthFix" /> ')
            ]),
            createElementVNode("u-text", { class: "uni-tab__text" }, toDisplayString(item.text), 1),
            createElementVNode("view", { class: "flex uni-tab__dot-box" }, [
              item.info ? (openBlock(), createElementBlock("u-text", {
                key: 0,
                class: normalizeClass([{ "uni-tab__dots": item.info > 9 }, "uni-tab__dot"]),
                style: normalizeStyle({
                  "backgroundColor": item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
                  color: item.infoColor ? item.infoColor : "#fff"
                })
              }, toDisplayString(item.info), 7)) : createCommentVNode("v-if", true)
            ])
          ], 8, ["onClick"]);
        }), 128))
      ]),
      createElementVNode("view", {
        class: normalizeClass([{ "uni-tab__right": $props.fill }, "flex uni-tab__cart-sub-right"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.buttonGroup, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: index,
            style: normalizeStyle({ background: item.backgroundColor, color: item.color }),
            class: "flex uni-tab__cart-button-right",
            onClick: ($event) => $options.buttonClick(index, item)
          }, [
            createElementVNode("u-text", {
              style: normalizeStyle({ color: item.color }),
              class: "uni-tab__cart-button-right-text"
            }, toDisplayString(item.text), 5)
          ], 12, ["onClick"]);
        }), 128))
      ], 2)
    ])
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"]]);
var _style_0 = { "example-body": { "": { "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "goods-carts": { "": { "flexDirection": "column", "position": "fixed", "left": 0, "right": 0, "bottom": 0 } } };
const _sfc_main = {
  components: {},
  data() {
    return {
      options: [{
        icon: "chat",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "#f5f5f5"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ],
      customButtonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #1E83FF, #0053B8)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #60F3FF, #088FEB)",
          color: "#fff"
        }
      ],
      customButtonGroup1: [{
        text: "\u7ACB\u5373\u8D2D\u4E70",
        backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
        color: "#fff"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    onClick(e) {
      uni.showToast({
        title: `\u70B9\u51FB${e.content.text}`,
        icon: "none"
      });
    },
    buttonClick(e) {
      formatAppLog("log", "at pages/extUI/goods-nav/goods-nav.nvue:80", e);
      this.options[2].info++;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_goods_nav = resolveEasycom(resolveDynamicComponent("uni-goods-nav"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "uni-container" }, [
      createVNode(_component_uni_card, { "is-full": "" }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, " uni-goods-nav \u7EC4\u4EF6\u4E3B\u8981\u7528\u4E8E\u7535\u5546\u7C7B\u5E94\u7528\u5E95\u90E8\u5BFC\u822A\uFF0C\u53EF\u81EA\u5B9A\u4E49\u52A0\u5165\u8D2D\u7269\u8F66\uFF0C\u8D2D\u4E70\u7B49\u64CD\u4F5C")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u57FA\u7840\u7528\u6CD5",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_goods_nav, { onClick: $options.onClick }, null, 8, ["onClick"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u5B9A\u4E49\u7528\u6CD5",
        type: "line"
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_goods_nav, {
            fill: true,
            options: $data.options,
            "button-group": $data.customButtonGroup,
            onClick: $options.onClick,
            onButtonClick: $options.buttonClick
          }, null, 8, ["options", "button-group", "onClick", "onButtonClick"]),
          createVNode(_component_uni_goods_nav, {
            fill: true,
            options: $data.options,
            "button-group": $data.customButtonGroup1,
            onClick: $options.onClick,
            onButtonClick: $options.buttonClick,
            style: { "margin-top": "20px" }
          }, null, 8, ["options", "button-group", "onClick", "onButtonClick"])
        ]),
        _: 1
      }),
      createElementVNode("view", { class: "goods-carts" }, [
        createVNode(_component_uni_goods_nav, {
          options: $data.options,
          fill: true,
          "button-group": $data.buttonGroup,
          onClick: $options.onClick,
          onButtonClick: $options.buttonClick
        }, null, 8, ["options", "button-group", "onClick", "onButtonClick"])
      ])
    ])
  ]);
}
var goodsNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/goods-nav/goods-nav.nvue"]]);
export { goodsNav as default };
