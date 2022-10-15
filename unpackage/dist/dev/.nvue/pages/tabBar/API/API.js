var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { a as requireNativePlugin, f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_3$1, a as __easycom_4$1 } from "../../../uni-list.js";
import { openBlock, createElementBlock, createElementVNode, normalizeClass, toDisplayString, renderSlot, normalizeStyle, createCommentVNode, resolveDynamicComponent, createBlock, createVNode, withCtx, resolveComponent, createTextVNode, Fragment, renderList } from "vue";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { i as initVueI18n } from "../../../uni-i18n.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import "../../../uni-icons.js";
import "../../../uni-badge.js";
var popup = {
  data() {
    return {};
  },
  created() {
    this.popup = this.getParent();
  },
  methods: {
    getParent(name = "uniPopup") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
var en = {
  "uni-popup.cancel": "cancel",
  "uni-popup.ok": "ok",
  "uni-popup.placeholder": "pleace enter",
  "uni-popup.title": "Hint",
  "uni-popup.shareTitle": "Share to"
};
var zhHans = {
  "uni-popup.cancel": "\u53D6\u6D88",
  "uni-popup.ok": "\u786E\u5B9A",
  "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
  "uni-popup.title": "\u63D0\u793A",
  "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
};
var zhHant = {
  "uni-popup.cancel": "\u53D6\u6D88",
  "uni-popup.ok": "\u78BA\u5B9A",
  "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
  "uni-popup.title": "\u63D0\u793A",
  "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
};
var messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
var _style_0$3 = { "uni-popup-dialog": { "": { "width": 300, "borderRadius": 11, "backgroundColor": "#ffffff" } }, "uni-dialog-title": { "": { "flexDirection": "row", "justifyContent": "center", "paddingTop": 25 } }, "uni-dialog-title-text": { "": { "fontSize": 16, "fontWeight": "500" } }, "uni-dialog-content": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "uni-dialog-content-text": { "": { "fontSize": 14, "color": "#6C6C6C" } }, "uni-dialog-button-group": { "": { "flexDirection": "row", "borderTopColor": "#f5f5f5", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-dialog-button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 45 } }, "uni-border-left": { "": { "borderLeftColor": "#f0f0f0", "borderLeftStyle": "solid", "borderLeftWidth": 1 } }, "uni-dialog-button-text": { "": { "fontSize": 16, "color": "#333333" } }, "uni-button-color": { "": { "color": "#007aff" } }, "uni-dialog-input": { "": { "flex": 1, "fontSize": 14, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "height": 40, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 5, "color": "#555555" } }, "uni-popup__success": { "": { "color": "#4cd964" } }, "uni-popup__warn": { "": { "color": "#f0ad4e" } }, "uni-popup__error": { "": { "color": "#dd524d" } }, "uni-popup__info": { "": { "color": "#909399" } } };
const { t } = initVueI18n(messages);
const _sfc_main$5 = {
  name: "uniPopupDialog",
  mixins: [popup],
  emits: ["confirm", "close"],
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "error"
    },
    mode: {
      type: String,
      default: "base"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    beforeClose: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogType: "error",
      focus: false,
      val: ""
    };
  },
  computed: {
    okText() {
      return this.confirmText || t("uni-popup.ok");
    },
    closeText() {
      return this.cancelText || t("uni-popup.cancel");
    },
    placeholderText() {
      return this.placeholder || t("uni-popup.placeholder");
    },
    titleText() {
      return this.title || t("uni-popup.title");
    }
  },
  watch: {
    type(val) {
      this.dialogType = val;
    },
    mode(val) {
      if (val === "input") {
        this.dialogType = "info";
      }
    },
    value(val) {
      this.val = val;
    }
  },
  created() {
    this.popup.disableMask();
    if (this.mode === "input") {
      this.dialogType = "info";
      this.val = this.value;
    } else {
      this.dialogType = this.type;
    }
  },
  mounted() {
    this.focus = true;
  },
  methods: {
    onOk() {
      if (this.mode === "input") {
        this.$emit("confirm", this.val);
      } else {
        this.$emit("confirm");
      }
      if (this.beforeClose)
        return;
      this.popup.close();
    },
    closeDialog() {
      this.$emit("close");
      if (this.beforeClose)
        return;
      this.popup.close();
    },
    close() {
      this.popup.close();
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-popup-dialog",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "uni-dialog-title" }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
      }, toDisplayString($options.titleText), 3)
    ]),
    $props.mode === "base" ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-dialog-content"
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("u-text", { class: "uni-dialog-content-text" }, toDisplayString($props.content), 1)
      ])
    ])) : (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-dialog-content"
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("u-input", {
          class: "uni-dialog-input",
          modelValue: $data.val,
          onInput: _cache[0] || (_cache[0] = ($event) => $data.val = $event.detail.value),
          type: "text",
          placeholder: $options.placeholderText,
          focus: $data.focus
        }, null, 40, ["modelValue", "placeholder", "focus"])
      ])
    ])),
    createElementVNode("view", { class: "uni-dialog-button-group" }, [
      createElementVNode("view", {
        class: "uni-dialog-button",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
      }, [
        createElementVNode("u-text", { class: "uni-dialog-button-text" }, toDisplayString($options.closeText), 1)
      ]),
      createElementVNode("view", {
        class: "uni-dialog-button uni-border-left",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
      }, [
        createElementVNode("u-text", { class: "uni-dialog-button-text uni-button-color" }, toDisplayString($options.okText), 1)
      ])
    ])
  ]);
}
var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$3]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
const nvueAnimation = requireNativePlugin("animation");
class MPAnimation {
  constructor(options, _this) {
    this.options = options;
    this.animation = uni.createAnimation(options);
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  _nvuePushAnimates(type, args) {
    let aniObj = this.currentStepAnimates[this.next];
    let styles = {};
    if (!aniObj) {
      styles = {
        styles: {},
        config: {}
      };
    } else {
      styles = aniObj;
    }
    if (animateTypes1.includes(type)) {
      if (!styles.styles.transform) {
        styles.styles.transform = "";
      }
      let unit = "";
      if (type === "rotate") {
        unit = "deg";
      }
      styles.styles.transform += `${type}(${args + unit}) `;
    } else {
      styles.styles[type] = `${args}`;
    }
    this.currentStepAnimates[this.next] = styles;
  }
  _animateRun(styles = {}, config = {}) {
    let ref = this.$.$refs["ani"].ref;
    if (!ref)
      return;
    return new Promise((resolve, reject) => {
      nvueAnimation.transition(ref, __spreadValues({
        styles
      }, config), (res) => {
        resolve();
      });
    });
  }
  _nvueNextAnimate(animates, step = 0, fn) {
    let obj = animates[step];
    if (obj) {
      let {
        styles,
        config
      } = obj;
      this._animateRun(styles, config).then(() => {
        step += 1;
        this._nvueNextAnimate(animates, step, fn);
      });
    } else {
      this.currentStepAnimates = {};
      typeof fn === "function" && fn();
      this.isEnd = true;
    }
  }
  step(config = {}) {
    this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);
    this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;
    this.next++;
    return this;
  }
  run(fn) {
    this.isEnd = false;
    let ref = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
    if (!ref)
      return;
    this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
    this.next = 0;
  }
}
const animateTypes1 = [
  "matrix",
  "matrix3d",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skew",
  "skewX",
  "skewY",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ"
];
const animateTypes2 = ["opacity", "backgroundColor"];
const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
  MPAnimation.prototype[type] = function(...args) {
    this._nvuePushAnimates(type, args);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this)
    return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
const _sfc_main$4 = {
  name: "uniTransition",
  emits: ["click", "change"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    modeClass: {
      type: [Array, String],
      default() {
        return "fade";
      }
    },
    duration: {
      type: Number,
      default: 300
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isShow: false,
      transform: "",
      opacity: 1,
      animationData: {},
      durationTime: 300,
      config: {}
    };
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          if (this.isShow) {
            this.close();
          }
        }
      },
      immediate: true
    }
  },
  computed: {
    stylesObject() {
      let styles = __spreadProps(__spreadValues({}, this.styles), {
        "transition-duration": this.duration / 1e3 + "s"
      });
      let transform = "";
      for (let i in styles) {
        let line = this.toLine(i);
        transform += line + ":" + styles[i] + ";";
      }
      return transform;
    },
    transformStyles() {
      return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
    }
  },
  created() {
    this.config = {
      duration: this.duration,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    };
    this.durationTime = this.duration;
  },
  methods: {
    init(obj = {}) {
      if (obj.duration) {
        this.durationTime = obj.duration;
      }
      this.animation = createAnimation(Object.assign(this.config, obj), this);
    },
    onClick() {
      this.$emit("click", {
        detail: this.isShow
      });
    },
    step(obj, config = {}) {
      if (!this.animation)
        return;
      for (let i in obj) {
        try {
          if (typeof obj[i] === "object") {
            this.animation[i](...obj[i]);
          } else {
            this.animation[i](obj[i]);
          }
        } catch (e) {
          formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
        }
      }
      this.animation.step(config);
      return this;
    },
    run(fn) {
      if (!this.animation)
        return;
      this.animation.run(fn);
    },
    open() {
      clearTimeout(this.timer);
      this.transform = "";
      this.isShow = true;
      let { opacity, transform } = this.styleInit(false);
      if (typeof opacity !== "undefined") {
        this.opacity = opacity;
      }
      this.transform = transform;
      this.$nextTick(() => {
        this.timer = setTimeout(() => {
          this.animation = createAnimation(this.config, this);
          this.tranfromInit(false).step();
          this.animation.run();
          this.$emit("change", {
            detail: this.isShow
          });
        }, 20);
      });
    },
    close(type) {
      if (!this.animation)
        return;
      this.tranfromInit(true).step().run(() => {
        this.isShow = false;
        this.animationData = null;
        this.animation = null;
        let { opacity, transform } = this.styleInit(false);
        this.opacity = opacity || 1;
        this.transform = transform;
        this.$emit("change", {
          detail: this.isShow
        });
      });
    },
    styleInit(type) {
      let styles = {
        transform: ""
      };
      let buildStyle = (type2, mode) => {
        if (mode === "fade") {
          styles.opacity = this.animationType(type2)[mode];
        } else {
          styles.transform += this.animationType(type2)[mode] + " ";
        }
      };
      if (typeof this.modeClass === "string") {
        buildStyle(type, this.modeClass);
      } else {
        this.modeClass.forEach((mode) => {
          buildStyle(type, mode);
        });
      }
      return styles;
    },
    tranfromInit(type) {
      let buildTranfrom = (type2, mode) => {
        let aniNum = null;
        if (mode === "fade") {
          aniNum = type2 ? 0 : 1;
        } else {
          aniNum = type2 ? "-100%" : "0";
          if (mode === "zoom-in") {
            aniNum = type2 ? 0.8 : 1;
          }
          if (mode === "zoom-out") {
            aniNum = type2 ? 1.2 : 1;
          }
          if (mode === "slide-right") {
            aniNum = type2 ? "100%" : "0";
          }
          if (mode === "slide-bottom") {
            aniNum = type2 ? "100%" : "0";
          }
        }
        this.animation[this.animationMode()[mode]](aniNum);
      };
      if (typeof this.modeClass === "string") {
        buildTranfrom(type, this.modeClass);
      } else {
        this.modeClass.forEach((mode) => {
          buildTranfrom(type, mode);
        });
      }
      return this.animation;
    },
    animationType(type) {
      return {
        fade: type ? 1 : 0,
        "slide-top": `translateY(${type ? "0" : "-100%"})`,
        "slide-right": `translateX(${type ? "0" : "100%"})`,
        "slide-bottom": `translateY(${type ? "0" : "100%"})`,
        "slide-left": `translateX(${type ? "0" : "-100%"})`,
        "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
        "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
      };
    },
    animationMode() {
      return {
        fade: "opacity",
        "slide-top": "translateY",
        "slide-right": "translateX",
        "slide-bottom": "translateY",
        "slide-left": "translateX",
        "zoom-in": "scale",
        "zoom-out": "scale"
      };
    },
    toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow ? (openBlock(), createElementBlock("view", {
    key: 0,
    ref: "ani",
    animation: $data.animationData,
    class: normalizeClass($props.customClass),
    style: normalizeStyle($options.transformStyles),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, ["animation"])) : createCommentVNode("v-if", true);
}
var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
var _style_0$2 = { "uni-popup": { "": { "position": "fixed" }, ".top": { "top": 0 }, ".left": { "top": 0 }, ".right": { "top": 0 } }, "uni-popup__wrapper": { ".uni-popup ": { "position": "relative" }, ".uni-popup .left": { "paddingTop": 0, "flex": 1 }, ".uni-popup .right": { "paddingTop": 0, "flex": 1 } }, "fixforpc-top": { "": { "top": 0 } } };
const _sfc_main$3 = {
  name: "uniPopup",
  components: {},
  emits: ["change", "maskClick"],
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "center"
    },
    isMaskClick: {
      type: Boolean,
      default: null
    },
    maskClick: {
      type: Boolean,
      default: null
    },
    backgroundColor: {
      type: String,
      default: "none"
    },
    safeArea: {
      type: Boolean,
      default: true
    },
    maskBackgroundColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)"
    }
  },
  watch: {
    type: {
      handler: function(type) {
        if (!this.config[type])
          return;
        this[this.config[type]](true);
      },
      immediate: true
    },
    isDesktop: {
      handler: function(newVal) {
        if (!this.config[newVal])
          return;
        this[this.config[this.type]](true);
      },
      immediate: true
    },
    maskClick: {
      handler: function(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    isMaskClick: {
      handler: function(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    showPopup(show) {
    }
  },
  data() {
    return {
      duration: 300,
      ani: [],
      showPopup: false,
      showTrans: false,
      popupWidth: 0,
      popupHeight: 0,
      config: {
        top: "top",
        bottom: "bottom",
        center: "center",
        left: "left",
        right: "right",
        message: "top",
        dialog: "center",
        share: "bottom"
      },
      maskClass: {
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
      },
      transClass: {
        position: "fixed",
        left: 0,
        right: 0
      },
      maskShow: true,
      mkclick: true,
      popupstyle: this.isDesktop ? "fixforpc-top" : "top"
    };
  },
  computed: {
    isDesktop() {
      return this.popupWidth >= 500 && this.popupHeight >= 500;
    },
    bg() {
      if (this.backgroundColor === "" || this.backgroundColor === "none") {
        return "transparent";
      }
      return this.backgroundColor;
    }
  },
  mounted() {
    const fixSize = () => {
      const {
        windowWidth,
        windowHeight,
        windowTop,
        safeArea,
        screenHeight,
        safeAreaInsets
      } = uni.getSystemInfoSync();
      this.popupWidth = windowWidth;
      this.popupHeight = windowHeight + (windowTop || 0);
      if (safeArea && this.safeArea) {
        this.safeAreaInsets = safeAreaInsets.bottom;
      } else {
        this.safeAreaInsets = 0;
      }
    };
    fixSize();
  },
  unmounted() {
    this.setH5Visible();
  },
  created() {
    if (this.isMaskClick === null && this.maskClick === null) {
      this.mkclick = true;
    } else {
      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
    }
    if (this.animation) {
      this.duration = 300;
    } else {
      this.duration = 0;
    }
    this.messageChild = null;
    this.clearPropagation = false;
    this.maskClass.backgroundColor = this.maskBackgroundColor;
  },
  methods: {
    setH5Visible() {
    },
    closeMask() {
      this.maskShow = false;
    },
    disableMask() {
      this.mkclick = false;
    },
    clear(e) {
      this.clearPropagation = true;
    },
    open(direction) {
      if (this.showPopup) {
        clearTimeout(this.timer);
        this.showPopup = false;
      }
      let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
      if (!(direction && innerType.indexOf(direction) !== -1)) {
        direction = this.type;
      }
      if (!this.config[direction]) {
        formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
        return;
      }
      this[this.config[direction]]();
      this.$emit("change", {
        show: true,
        type: direction
      });
    },
    close(type) {
      this.showTrans = false;
      this.$emit("change", {
        show: false,
        type: this.type
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showPopup = false;
      }, 300);
    },
    touchstart() {
      this.clearPropagation = false;
    },
    onTap() {
      if (this.clearPropagation) {
        this.clearPropagation = false;
        return;
      }
      this.$emit("maskClick");
      if (!this.mkclick)
        return;
      this.close();
    },
    top(type) {
      this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
      this.ani = ["slide-top"];
      this.transClass = {
        position: "fixed",
        left: 0,
        right: 0,
        backgroundColor: this.bg
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
      this.$nextTick(() => {
        if (this.messageChild && this.type === "message") {
          this.messageChild.timerClose();
        }
      });
    },
    bottom(type) {
      this.popupstyle = "bottom";
      this.ani = ["slide-bottom"];
      this.transClass = {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: this.safeAreaInsets + "px",
        backgroundColor: this.bg
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    },
    center(type) {
      this.popupstyle = "center";
      this.ani = ["zoom-out", "fade"];
      this.transClass = {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center"
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    },
    left(type) {
      this.popupstyle = "left";
      this.ani = ["slide-left"];
      this.transClass = {
        position: "fixed",
        left: 0,
        bottom: 0,
        top: 0,
        backgroundColor: this.bg
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    },
    right(type) {
      this.popupstyle = "right";
      this.ani = ["slide-right"];
      this.transClass = {
        position: "fixed",
        bottom: 0,
        right: 0,
        top: 0,
        backgroundColor: this.bg
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_transition = resolveEasycom(resolveDynamicComponent("uni-transition"), __easycom_0$1);
  return $data.showPopup ? (openBlock(), createElementBlock("view", {
    key: 0,
    class: normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
    renderWhole: true
  }, [
    createElementVNode("view", {
      onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
    }, [
      $data.maskShow ? (openBlock(), createBlock(_component_uni_transition, {
        key: "1",
        name: "mask",
        "mode-class": "fade",
        styles: $data.maskClass,
        duration: $data.duration,
        show: $data.showTrans,
        onClick: $options.onTap
      }, null, 8, ["styles", "duration", "show", "onClick"])) : createCommentVNode("v-if", true),
      createVNode(_component_uni_transition, {
        key: "2",
        "mode-class": $data.ani,
        name: "content",
        styles: $data.transClass,
        duration: $data.duration,
        show: $data.showTrans,
        onClick: $options.onTap
      }, {
        default: withCtx(() => [
          createElementVNode("view", {
            class: normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
            style: normalizeStyle({ backgroundColor: $options.bg }),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 6)
        ]),
        _: 3
      }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
    ], 32)
  ], 2)) : createCommentVNode("v-if", true);
}
var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$2]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
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
        name: "\u5F55\u97F3",
        url: "voice"
      }
    ];
    const list = [
      {
        id: "media",
        name: "\u5A92\u4F53",
        open: false,
        pages: mediaPages
      }
    ];
    return {
      dirs: [],
      value: "",
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
    this.initDirNames();
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
    redirToDir(dir) {
      uni.navigateTo({
        url: "voice"
      });
    },
    inputDialogToggle() {
      this.$refs.inputDialog.open();
    },
    dialogInputConfirm(val) {
      uni.showLoading({
        title: "\u6B63\u5728\u4FDD\u5B58"
      });
      uni.request({
        url: "http://47.94.170.153/dir",
        method: "post",
        data: {
          dir_name: val
        },
        header: {
          "custom-header": "hello"
        },
        success: (res) => {
          formatAppLog("log", "at pages/tabBar/API/API.nvue:138", res.data);
          this.initDirNames();
          uni.hideLoading();
        }
      });
    },
    initDirNames() {
      uni.request({
        url: "http://47.94.170.153/dirs",
        success: (res) => {
          this.dirs = res.data;
        }
      });
    },
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
    goDetailPage(panel, e, dir) {
      if (e === "set-tabbar") {
        this.showSetTabBarPage = true;
        return;
      }
      let url = ~e.indexOf("platform") ? e : "/pages/API/" + e + "/" + e;
      if (this.hasLeftWin) {
        uni.reLaunch({
          url: url + "?dirName=" + dir
        });
      } else {
        uni.navigateTo({
          url: url + "?dirName=" + dir
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
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3$1);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4$1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_button = resolveComponent("button");
  const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_3);
  const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_4);
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
        createVNode(_component_uni_section, {
          title: "\u542C\u5199\u76EE\u5F55",
          type: "line"
        }, {
          default: withCtx(() => [
            createVNode(_component_uni_list, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.dirs, (dir, index) => {
                  return openBlock(), createBlock(_component_uni_list_item, {
                    title: dir,
                    clickable: "",
                    onClick: ($event) => $options.goDetailPage("media", "voice", dir)
                  }, null, 8, ["title", "onClick"]);
                }), 256))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createElementVNode("view", null, [
          createVNode(_component_button, {
            type: "primary",
            onClick: $options.inputDialogToggle
          }, {
            default: withCtx(() => [
              createTextVNode(" \u521B\u5EFA\u542C\u5199\u76EE\u5F55 ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createCommentVNode(" \u8F93\u5165\u6846\u793A\u4F8B "),
          createVNode(_component_uni_popup, {
            ref: "inputDialog",
            type: "dialog"
          }, {
            default: withCtx(() => [
              createVNode(_component_uni_popup_dialog, {
                ref: "inputClose",
                mode: "input",
                title: "\u521B\u5EFA\u65B0\u7684\u542C\u5199\u76EE\u5F55",
                placeholder: "\u8BF7\u8F93\u5165\u76EE\u5F55\u540D\u79F0",
                onConfirm: $options.dialogInputConfirm
              }, null, 8, ["onConfirm"])
            ]),
            _: 1
          }, 512)
        ])
      ], 64))
    ])
  ]);
}
var API = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/tabBar/API/API.nvue"]]);
export { API as default };
