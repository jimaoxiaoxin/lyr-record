"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-card.js
  var import_vue = __toESM(require_vue());

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-card.js
  var _style_0 = { "uni-card": { "": { "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "borderRadius": 4, "overflow": "hidden", "fontFamily": "Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif", "backgroundColor": "#ffffff", "flex": 1 } }, "uni-card__cover": { ".uni-card ": { "position": "relative", "marginTop": 10, "flexDirection": "row", "overflow": "hidden", "borderRadius": 4 } }, "uni-card__cover-image": { ".uni-card .uni-card__cover ": { "flex": 1 } }, "uni-card__header": { ".uni-card ": { "display": "flex", "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#EBEEF5", "flexDirection": "row", "alignItems": "center", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "overflow": "hidden" } }, "uni-card__header-box": { ".uni-card .uni-card__header ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "uni-card__header-avatar": { ".uni-card .uni-card__header ": { "width": 40, "height": 40, "overflow": "hidden", "borderRadius": 5, "marginRight": 10 } }, "uni-card__header-avatar-image": { ".uni-card .uni-card__header .uni-card__header-avatar ": { "flex": 1, "width": 40, "height": 40 } }, "uni-card__header-content": { ".uni-card .uni-card__header ": { "flexDirection": "column", "justifyContent": "center", "flex": 1, "overflow": "hidden" } }, "uni-card__header-content-title": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 15, "color": "#3a3a3a" } }, "uni-card__header-content-subtitle": { ".uni-card .uni-card__header .uni-card__header-content ": { "fontSize": 12, "marginTop": 5, "color": "#909399" } }, "uni-card__header-extra": { ".uni-card .uni-card__header ": { "lineHeight": 12 } }, "uni-card__header-extra-text": { ".uni-card .uni-card__header .uni-card__header-extra ": { "fontSize": 12, "color": "#909399" } }, "uni-card__content": { ".uni-card ": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "fontSize": 14, "color": "#6a6a6a", "lineHeight": 22 } }, "uni-card__actions": { ".uni-card ": { "fontSize": 12 } }, "uni-card--border": { "": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#EBEEF5" } }, "uni-card--shadow": { "": { "position": "relative" } }, "uni-card--full": { "": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "borderLeftWidth": 0, "borderRadius": 0 } }, "uni-ellipsis": { "": { "lines": 1 } } };
  var _sfc_main = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        type: Boolean,
        default: false
      },
      isShadow: {
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: (0, import_vue.normalizeClass)(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
      style: (0, import_vue.normalizeStyle)({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" }),
      renderWhole: true
    }, [
      (0, import_vue.createCommentVNode)(" \u5C01\u9762 "),
      (0, import_vue.renderSlot)(_ctx.$slots, "cover", {}, () => [
        $props.cover ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
          key: 0,
          class: "uni-card__cover"
        }, [
          (0, import_vue.createElementVNode)("u-image", {
            class: "uni-card__cover-image",
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
            src: $props.cover
          }, null, 8, ["src"])
        ])) : (0, import_vue.createCommentVNode)("v-if", true)
      ]),
      (0, import_vue.renderSlot)(_ctx.$slots, "title", {}, () => [
        $props.title || $props.extra ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
          key: 0,
          class: "uni-card__header"
        }, [
          (0, import_vue.createCommentVNode)(" \u5361\u7247\u6807\u9898 "),
          (0, import_vue.createElementVNode)("view", {
            class: "uni-card__header-box",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
          }, [
            $props.thumbnail ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
              key: 0,
              class: "uni-card__header-avatar"
            }, [
              (0, import_vue.createElementVNode)("u-image", {
                class: "uni-card__header-avatar-image",
                src: $props.thumbnail,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ])) : (0, import_vue.createCommentVNode)("v-if", true),
            (0, import_vue.createElementVNode)("view", { class: "uni-card__header-content" }, [
              (0, import_vue.createElementVNode)("u-text", { class: "uni-card__header-content-title uni-ellipsis" }, (0, import_vue.toDisplayString)($props.title), 1),
              $props.title && $props.subTitle ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                key: 0,
                class: "uni-card__header-content-subtitle uni-ellipsis"
              }, (0, import_vue.toDisplayString)($props.subTitle), 1)) : (0, import_vue.createCommentVNode)("v-if", true)
            ])
          ]),
          (0, import_vue.createElementVNode)("view", {
            class: "uni-card__header-extra",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
          }, [
            (0, import_vue.createElementVNode)("u-text", { class: "uni-card__header-extra-text" }, (0, import_vue.toDisplayString)($props.extra), 1)
          ])
        ])) : (0, import_vue.createCommentVNode)("v-if", true)
      ]),
      (0, import_vue.createCommentVNode)(" \u5361\u7247\u5185\u5BB9 "),
      (0, import_vue.createElementVNode)("view", {
        class: "uni-card__content",
        style: (0, import_vue.normalizeStyle)({ padding: $props.padding }),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
      }, [
        (0, import_vue.renderSlot)(_ctx.$slots, "default")
      ], 4),
      (0, import_vue.createElementVNode)("view", {
        class: "uni-card__actions",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
      }, [
        (0, import_vue.renderSlot)(_ctx.$slots, "actions")
      ])
    ], 6);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/pages/extUI/radius/radius.js
  var import_vue6 = __toESM(require_vue());

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue2 = __toESM(require_vue());
  Object.freeze({});
  Object.freeze([]);
  var isString = (val) => typeof val === "string";
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-i18n.es.js
  var isObject = (val) => val !== null && typeof val === "object";
  var defaultDelimiters = ["{", "}"];
  var BaseFormatter = class {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  };
  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  var LOCALE_ZH_HANS = "zh-Hans";
  var LOCALE_ZH_HANT = "zh-Hant";
  var LOCALE_EN = "en";
  var LOCALE_FR = "fr";
  var LOCALE_ES = "es";
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  var I18n = class {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  };
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t3 = (key, values) => {
      if (typeof getApp !== "function") {
        t3 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t3 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t3(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t3(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-cloud.es.js
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp2.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var leftWindow = {
    path: "windows/left-window.vue",
    style: {
      width: "350px"
    }
  };
  var topWindow = {
    path: "windows/top-window.vue",
    style: {
      height: "60px"
    }
  };
  var pages = [
    {
      path: "pages/tabBar/component/component",
      style: {
        navigationBarTitleText: "\u5185\u7F6E\u7EC4\u4EF6",
        "app-plus": {
          bounce: "vertical",
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabBar/API/API",
      style: {
        navigationBarTitleText: "\u63A5\u53E3",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabBar/template/template",
      style: {
        navigationBarTitleText: "\u6A21\u7248",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/tabBar/extUI/extUI",
      style: {
        navigationBarTitleText: "\u6269\u5C55\u7EC4\u4EF6",
        "app-plus": {
          titleNView: {
            buttons: [
              {
                text: "\uE534",
                fontSrc: "/static/uni.ttf",
                fontSize: "22px",
                color: "#FFFFFF"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/component/view/view",
      style: {
        navigationBarTitleText: "view"
      }
    },
    {
      path: "pages/component/scroll-view/scroll-view",
      style: {
        navigationBarTitleText: "scroll-view"
      }
    },
    {
      path: "pages/component/swiper/swiper",
      style: {
        navigationBarTitleText: "swiper"
      }
    },
    {
      path: "pages/component/cover-view/cover-view",
      style: {
        navigationBarTitleText: "cover-view"
      }
    },
    {
      path: "pages/component/movable-view/movable-view",
      style: {
        navigationBarTitleText: "movable-view"
      }
    },
    {
      path: "pages/component/text/text",
      style: {
        navigationBarTitleText: "text"
      }
    },
    {
      path: "pages/component/rich-text/rich-text",
      style: {
        navigationBarTitleText: "rich-text"
      }
    },
    {
      path: "pages/component/progress/progress",
      style: {
        navigationBarTitleText: "progress"
      }
    },
    {
      path: "pages/component/button/button",
      style: {
        navigationBarTitleText: "button"
      }
    },
    {
      path: "pages/component/checkbox/checkbox",
      style: {
        navigationBarTitleText: "checkbox"
      }
    },
    {
      path: "pages/component/form/form",
      style: {
        navigationBarTitleText: "form"
      }
    },
    {
      path: "pages/component/input/input",
      style: {
        navigationBarTitleText: "input",
        "app-plus": {
          softinputNavBar: "none"
        }
      }
    },
    {
      path: "pages/component/label/label",
      style: {
        navigationBarTitleText: "label"
      }
    },
    {
      path: "pages/component/picker/picker",
      style: {
        navigationBarTitleText: "picker"
      }
    },
    {
      path: "pages/component/picker-view/picker-view",
      style: {
        navigationBarTitleText: "picker-view"
      }
    },
    {
      path: "pages/component/radio/radio",
      style: {
        navigationBarTitleText: "radio"
      }
    },
    {
      path: "pages/component/slider/slider",
      style: {
        navigationBarTitleText: "slider"
      }
    },
    {
      path: "pages/component/switch/switch",
      style: {
        navigationBarTitleText: "switch"
      }
    },
    {
      path: "pages/component/textarea/textarea",
      style: {
        navigationBarTitleText: "textarea"
      }
    },
    {
      path: "pages/component/editor/editor",
      style: {
        navigationBarTitleText: "editor",
        "app-plus": {
          softinputMode: "adjustResize"
        }
      }
    },
    {
      path: "pages/component/navigator/navigator",
      style: {
        navigationBarTitleText: "navigator"
      }
    },
    {
      path: "pages/component/navigator/navigate/navigate",
      style: {
        navigationBarTitleText: "navigatePage"
      }
    },
    {
      path: "pages/component/navigator/redirect/redirect",
      style: {
        navigationBarTitleText: "redirectPage"
      }
    },
    {
      path: "pages/component/image/image",
      style: {
        navigationBarTitleText: "image"
      }
    },
    {
      path: "pages/component/video/video",
      style: {
        navigationBarTitleText: "video"
      }
    },
    {
      path: "pages/component/map/map",
      style: {
        navigationBarTitleText: "map"
      }
    },
    {
      path: "pages/component/canvas/canvas",
      style: {
        navigationBarTitleText: "canvas"
      }
    },
    {
      path: "pages/component/web-view/web-view",
      style: {
        navigationBarTitleText: "web-view"
      }
    },
    {
      path: "pages/component/ad/ad",
      style: {
        navigationBarTitleText: "AD"
      }
    },
    {
      path: "pages/component/web-view-local/web-view-local",
      style: {}
    },
    {
      path: "platforms/app-plus/speech/speech",
      style: {
        navigationBarTitleText: "\u8BED\u97F3\u8BC6\u522B"
      }
    },
    {
      path: "platforms/app-plus/orientation/orientation",
      style: {
        navigationBarTitleText: "\u65B9\u5411\u4F20\u611F\u5668"
      }
    },
    {
      path: "platforms/app-plus/proximity/proximity",
      style: {
        navigationBarTitleText: "\u8DDD\u79BB\u4F20\u611F\u5668"
      }
    },
    {
      path: "platforms/app-plus/push/push",
      style: {
        navigationBarTitleText: "\u63A8\u9001"
      }
    },
    {
      path: "platforms/app-plus/shake/shake",
      style: {
        navigationBarTitleText: "\u6447\u4E00\u6447"
      }
    },
    {
      path: "pages/about/about",
      style: {
        navigationBarTitleText: "\u5173\u4E8E"
      }
    },
    {
      path: "platforms/app-plus/feedback/feedback",
      style: {
        navigationBarTitleText: "\u95EE\u9898\u53CD\u9988"
      }
    },
    {
      path: "uni_modules/uni-upgrade-center-app/pages/upgrade-popup",
      style: {
        "app-plus": {
          animationDuration: 200,
          animationType: "fade-in",
          background: "transparent",
          backgroundColorTop: "transparent",
          popGesture: "none",
          scrollIndicator: false,
          titleNView: false
        },
        disableScroll: true
      }
    }
  ];
  var subPackages = [
    {
      root: "pages/API",
      pages: [
        {
          path: "login/login",
          style: {
            navigationBarTitleText: "\u6388\u6743\u767B\u5F55"
          }
        },
        {
          path: "subnvue/subnvue",
          style: {
            navigationBarTitleText: "\u539F\u751F\u5B50\u7A97\u4F53",
            "app-plus": {
              subNVues: [
                {
                  id: "drawer",
                  path: "subnvue/subnvue/drawer",
                  type: "popup",
                  style: {
                    width: "50%"
                  }
                },
                {
                  id: "popup",
                  path: "subnvue/subnvue/popup",
                  type: "popup",
                  style: {
                    margin: "auto",
                    width: "80%",
                    height: "600rpx"
                  }
                },
                {
                  id: "video_mask",
                  path: "subnvue/subnvue/video-mask",
                  style: {
                    position: "absolute",
                    bottom: "30px",
                    left: "0",
                    width: "230px",
                    height: "110px",
                    background: "transparent"
                  }
                }
              ]
            }
          }
        },
        {
          path: "get-user-info/get-user-info",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F"
          }
        },
        {
          path: "request-payment/request-payment",
          style: {
            navigationBarTitleText: "\u53D1\u8D77\u652F\u4ED8"
          }
        },
        {
          path: "share/share",
          style: {
            navigationBarTitleText: "\u5206\u4EAB"
          }
        },
        {
          path: "set-navigation-bar-title/set-navigation-bar-title",
          style: {
            navigationBarTitleText: "\u8BBE\u7F6E\u754C\u9762\u6807\u9898"
          }
        },
        {
          path: "show-loading/show-loading",
          style: {
            navigationBarTitleText: "\u52A0\u8F7D\u63D0\u793A\u6846"
          }
        },
        {
          path: "navigator/navigator",
          style: {
            navigationBarTitleText: "\u9875\u9762\u8DF3\u8F6C"
          }
        },
        {
          path: "navigator/new-page/new-vue-page-1",
          style: {
            navigationBarTitleText: "\u65B0VUE\u9875\u97621"
          }
        },
        {
          path: "navigator/new-page/new-vue-page-2",
          style: {
            navigationBarTitleText: "\u65B0VUE\u9875\u97622"
          }
        },
        {
          path: "pull-down-refresh/pull-down-refresh",
          style: {
            navigationBarTitleText: "\u4E0B\u62C9\u5237\u65B0",
            enablePullDownRefresh: true
          }
        },
        {
          path: "animation/animation",
          style: {
            navigationBarTitleText: "\u521B\u5EFA\u52A8\u753B"
          }
        },
        {
          path: "get-node-info/get-node-info",
          style: {
            navigationBarTitleText: "\u8282\u70B9\u4FE1\u606F"
          }
        },
        {
          path: "intersection-observer/intersection-observer",
          style: {
            navigationBarTitleText: "\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001"
          }
        },
        {
          path: "canvas/canvas",
          style: {
            navigationBarTitleText: "\u521B\u5EFA\u7ED8\u753B"
          }
        },
        {
          path: "action-sheet/action-sheet",
          style: {
            navigationBarTitleText: "\u64CD\u4F5C\u83DC\u5355"
          }
        },
        {
          path: "modal/modal",
          style: {
            navigationBarTitleText: "\u6A21\u6001\u5F39\u7A97"
          }
        },
        {
          path: "toast/toast",
          style: {
            navigationBarTitleText: "\u6D88\u606F\u63D0\u793A\u6846"
          }
        },
        {
          path: "get-network-type/get-network-type",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u8BBE\u5907\u7F51\u7EDC\u72B6\u6001"
          }
        },
        {
          path: "get-system-info/get-system-info",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u8BBE\u5907\u7CFB\u7EDF\u4FE1\u606F"
          }
        },
        {
          path: "add-phone-contact/add-phone-contact",
          style: {
            navigationBarTitleText: "\u6DFB\u52A0\u624B\u673A\u8054\u7CFB\u4EBA"
          }
        },
        {
          path: "on-accelerometer-change/on-accelerometer-change",
          style: {
            navigationBarTitleText: "\u76D1\u542C\u52A0\u901F\u5EA6\u8BA1\u6570\u636E"
          }
        },
        {
          path: "on-compass-change/on-compass-change",
          style: {
            navigationBarTitleText: "\u76D1\u542C\u7F57\u76D8\u6570\u636E"
          }
        },
        {
          path: "make-phone-call/make-phone-call",
          style: {
            navigationBarTitleText: "\u6253\u7535\u8BDD"
          }
        },
        {
          path: "scan-code/scan-code",
          style: {
            navigationBarTitleText: "\u626B\u7801"
          }
        },
        {
          path: "clipboard/clipboard",
          style: {
            navigationBarTitleText: "\u526A\u8D34\u677F"
          }
        },
        {
          path: "request/request",
          style: {
            navigationBarTitleText: "\u7F51\u7EDC\u8BF7\u6C42"
          }
        },
        {
          path: "upload-file/upload-file",
          style: {
            navigationBarTitleText: "\u4E0A\u4F20\u6587\u4EF6"
          }
        },
        {
          path: "download-file/download-file",
          style: {
            navigationBarTitleText: "\u4E0B\u8F7D\u6587\u4EF6"
          }
        },
        {
          path: "image/image",
          style: {
            navigationBarTitleText: "\u56FE\u7247"
          }
        },
        {
          path: "voice/voice",
          style: {
            navigationBarTitleText: "\u5F55\u97F3"
          }
        },
        {
          path: "inner-audio/inner-audio",
          style: {
            navigationBarTitleText: "\u97F3\u9891"
          }
        },
        {
          path: "background-audio/background-audio",
          style: {
            navigationBarTitleText: "\u80CC\u666F\u97F3\u9891"
          }
        },
        {
          path: "video/video",
          style: {
            navigationBarTitleText: "\u89C6\u9891"
          }
        },
        {
          path: "file/file",
          style: {
            navigationBarTitleText: "\u6587\u4EF6"
          }
        },
        {
          path: "map/map",
          style: {
            navigationBarTitleText: "map"
          }
        },
        {
          path: "map-search/map-search",
          style: {
            navigationBarTitleText: "map search"
          }
        },
        {
          path: "get-location/get-location",
          style: {
            navigationBarTitleText: "\u83B7\u53D6\u4F4D\u7F6E"
          }
        },
        {
          path: "open-location/open-location",
          style: {
            navigationBarTitleText: "\u67E5\u770B\u4F4D\u7F6E"
          }
        },
        {
          path: "choose-location/choose-location",
          style: {
            navigationBarTitleText: "\u4F7F\u7528\u5730\u56FE\u9009\u62E9\u4F4D\u7F6E"
          }
        },
        {
          path: "storage/storage",
          style: {
            navigationBarTitleText: "\u6570\u636E\u5B58\u50A8"
          }
        },
        {
          path: "sqlite/sqlite",
          style: {
            navigationBarTitleText: "SQLite"
          }
        },
        {
          path: "rewarded-video-ad/rewarded-video-ad",
          style: {
            navigationBarTitleText: "\u6FC0\u52B1\u89C6\u9891\u5E7F\u544A"
          }
        },
        {
          path: "full-screen-video-ad/full-screen-video-ad",
          style: {
            navigationBarTitleText: "\u5168\u5C4F\u89C6\u9891\u5E7F\u544A"
          }
        },
        {
          path: "brightness/brightness",
          style: {
            navigationBarTitleText: "\u5C4F\u5E55\u4EAE\u5EA6"
          }
        },
        {
          path: "save-media/save-media",
          style: {
            navigationBarTitleText: "\u4FDD\u5B58\u5A92\u4F53\u5230\u672C\u5730"
          }
        },
        {
          path: "bluetooth/bluetooth",
          style: {
            navigationBarTitleText: "\u84DD\u7259"
          }
        },
        {
          path: "soter/soter",
          style: {
            navigationBarTitleText: "\u751F\u7269\u8BA4\u8BC1"
          }
        },
        {
          path: "ibeacon/ibeacon",
          style: {
            navigationBarTitleText: "iBeacon"
          }
        },
        {
          path: "vibrate/vibrate",
          style: {
            navigationBarTitleText: "\u9707\u52A8"
          }
        },
        {
          path: "websocket-socketTask/websocket-socketTask",
          style: {
            navigationBarTitleText: "websocket-socketTask"
          }
        },
        {
          path: "websocket-global/websocket-global",
          style: {
            navigationBarTitleText: "websocket-global"
          }
        }
      ]
    },
    {
      root: "pages/extUI",
      pages: [
        {
          path: "forms/forms",
          style: {
            navigationBarTitleText: "Form \u8868\u5355"
          }
        },
        {
          path: "group/group",
          style: {
            navigationBarTitleText: "Group \u5206\u7EC4"
          }
        },
        {
          path: "badge/badge",
          style: {
            navigationBarTitleText: "Badge \u6570\u5B57\u89D2\u6807"
          }
        },
        {
          path: "breadcrumb/breadcrumb",
          style: {
            navigationBarTitleText: "Breadcrumb \u9762\u5305\u5C51"
          }
        },
        {
          path: "countdown/countdown",
          style: {
            navigationBarTitleText: "Countdown \u5012\u8BA1\u65F6"
          }
        },
        {
          path: "drawer/drawer",
          style: {
            navigationBarTitleText: "Drawer \u62BD\u5C49"
          }
        },
        {
          path: "icons/icons",
          style: {
            navigationBarTitleText: "Icons \u56FE\u6807"
          }
        },
        {
          path: "load-more/load-more",
          style: {
            navigationBarTitleText: "LoadMore \u52A0\u8F7D\u66F4\u591A"
          }
        },
        {
          path: "nav-bar/nav-bar",
          style: {
            navigationBarTitleText: "NavBar \u5BFC\u822A\u680F",
            navigationStyle: "custom",
            enablePullDownRefresh: true,
            "app-plus": {
              titleNView: false,
              bounce: "none",
              pullToRefresh: {
                style: "circle",
                offset: "70px"
              }
            }
          }
        },
        {
          path: "number-box/number-box",
          style: {
            navigationBarTitleText: "NumberBox \u6570\u5B57\u8F93\u5165\u6846"
          }
        },
        {
          path: "popup/popup",
          style: {
            navigationBarTitleText: "Popup \u5F39\u51FA\u5C42",
            "app-plus": {
              softinputMode: "adjustResize"
            }
          }
        },
        {
          path: "segmented-control/segmented-control",
          style: {
            navigationBarTitleText: "SegmentedControl \u5206\u6BB5\u5668"
          }
        },
        {
          path: "tag/tag",
          style: {
            navigationBarTitleText: "Tag \u6807\u7B7E"
          }
        },
        {
          path: "list/list",
          style: {
            navigationBarTitleText: "List \u5217\u8868"
          }
        },
        {
          path: "card/card",
          style: {
            navigationBarTitleText: "Card \u5361\u7247"
          }
        },
        {
          path: "collapse/collapse",
          style: {
            navigationBarTitleText: "Collapse \u6298\u53E0\u9762\u677F"
          }
        },
        {
          path: "pagination/pagination",
          style: {
            navigationBarTitleText: "Pagination \u5206\u9875\u5668"
          }
        },
        {
          path: "swiper-dot/swiper-dot",
          style: {
            navigationBarTitleText: "SwiperDot \u8F6E\u64AD\u56FE\u6307\u793A\u70B9",
            "mp-baidu": {
              disableSwipeBack: true
            }
          }
        },
        {
          path: "grid/grid",
          style: {
            navigationBarTitleText: "Grid \u5BAB\u683C"
          }
        },
        {
          path: "rate/rate",
          style: {
            navigationBarTitleText: "Rate \u8BC4\u5206"
          }
        },
        {
          path: "steps/steps",
          style: {
            navigationBarTitleText: "Steps \u6B65\u9AA4\u6761"
          }
        },
        {
          path: "notice-bar/notice-bar",
          style: {
            navigationBarTitleText: "NoticeBar \u901A\u544A\u680F"
          }
        },
        {
          path: "swipe-action/swipe-action",
          style: {
            navigationBarTitleText: "SwipeAction \u6ED1\u52A8\u64CD\u4F5C",
            "app-plus": {
              bounce: "none"
            }
          }
        },
        {
          path: "search-bar/search-bar",
          style: {
            navigationBarTitleText: "SearchBar \u641C\u7D22\u680F"
          }
        },
        {
          path: "calendar/calendar",
          style: {
            navigationBarTitleText: "Calendar \u65E5\u5386"
          }
        },
        {
          path: "indexed-list/indexed-list",
          style: {
            navigationBarTitleText: "IndexedList \u7D22\u5F15\u5217\u8868",
            "mp-weixin": {
              disableScroll: true
            },
            "app-plus": {
              bounce: "none"
            },
            "mp-alipay": {
              allowsBounceVertical: "NO"
            },
            "mp-baidu": {
              disableScroll: true
            }
          }
        },
        {
          path: "fab/fab",
          style: {
            navigationBarTitleText: "Fab \u60AC\u6D6E\u6309\u94AE"
          }
        },
        {
          path: "fav/fav",
          style: {
            navigationBarTitleText: "Fav \u6536\u85CF\u6309\u94AE"
          }
        },
        {
          path: "goods-nav/goods-nav",
          style: {
            navigationBarTitleText: "GoodsNav \u5546\u54C1\u5BFC\u822A"
          }
        },
        {
          path: "section/section",
          style: {
            navigationBarTitleText: "Section \u6807\u9898\u680F"
          }
        },
        {
          path: "transition/transition",
          style: {
            navigationBarTitleText: "Transition \u8FC7\u6E21\u52A8\u753B"
          }
        },
        {
          path: "title/title",
          style: {
            navigationBarTitleText: "Title \u7AE0\u8282\u6807\u9898"
          }
        },
        {
          path: "tooltip/tooltip",
          style: {
            navigationBarTitleText: "Tooltip \u6587\u5B57\u63D0\u793A"
          }
        },
        {
          path: "link/link",
          style: {
            navigationBarTitleText: "Link \u94FE\u63A5"
          }
        },
        {
          path: "combox/combox",
          style: {
            navigationBarTitleText: "Combox \u7EC4\u5408\u6846"
          }
        },
        {
          path: "list/chat",
          style: {}
        },
        {
          path: "table/table",
          style: {
            navigationBarTitleText: "",
            enablePullDownRefresh: false
          }
        },
        {
          path: "dateformat/dateformat",
          style: {
            navigationBarTitleText: "Dateformat \u65E5\u671F\u683C\u5F0F\u5316",
            enablePullDownRefresh: false
          }
        },
        {
          path: "data-checkbox/data-checkbox",
          style: {
            navigationBarTitleText: "DataCheckbox \u5355\u9009\u590D\u9009\u6846",
            enablePullDownRefresh: false
          }
        },
        {
          path: "easyinput/easyinput",
          style: {
            navigationBarTitleText: "Easyinput \u589E\u5F3A\u8F93\u5165\u6846",
            enablePullDownRefresh: false
          }
        },
        {
          path: "data-picker/data-picker",
          style: {
            navigationBarTitleText: "DataPicker \u7EA7\u8054\u9009\u62E9",
            enablePullDownRefresh: false
          }
        },
        {
          path: "data-select/data-select",
          style: {
            navigationBarTitleText: "DataSelect \u4E0B\u62C9\u6846",
            enablePullDownRefresh: false
          }
        },
        {
          path: "datetime-picker/datetime-picker",
          style: {
            navigationBarTitleText: "DatetimePicker \u65E5\u671F\u65F6\u95F4",
            enablePullDownRefresh: false
          }
        },
        {
          path: "row/row",
          style: {
            navigationBarTitleText: "Layout \u5E03\u5C40",
            enablePullDownRefresh: false
          }
        },
        {
          path: "file-picker/file-picker",
          style: {
            navigationBarTitleText: "FilePicker \u6587\u4EF6\u9009\u62E9\u4E0A\u4F20",
            enablePullDownRefresh: false
          }
        },
        {
          path: "space/space",
          style: {
            navigationBarTitleText: "\u95F4\u8DDD",
            enablePullDownRefresh: false
          }
        },
        {
          path: "font/font",
          style: {
            navigationBarTitleText: "\u5B57\u4F53",
            enablePullDownRefresh: false
          }
        },
        {
          path: "color/color",
          style: {
            navigationBarTitleText: "\u989C\u8272",
            enablePullDownRefresh: false
          }
        },
        {
          path: "radius/radius",
          style: {
            navigationBarTitleText: "\u5706\u89D2",
            enablePullDownRefresh: false
          }
        },
        {
          path: "button/button",
          style: {
            navigationBarTitleText: "",
            enablePullDownRefresh: false
          }
        }
      ]
    },
    {
      root: "pages/template",
      pages: [
        {
          path: "nav-default/nav-default",
          style: {
            navigationBarTitleText: "\u9ED8\u8BA4\u5BFC\u822A\u680F"
          }
        },
        {
          path: "component-communication/component-communication",
          style: {
            navigationBarTitleText: "\u7EC4\u4EF6\u901A\u8BAF"
          }
        },
        {
          path: "nav-transparent/nav-transparent",
          style: {
            navigationBarTitleText: "\u900F\u660E\u6E10\u53D8\u5BFC\u822A\u680F",
            transparentTitle: "auto"
          }
        },
        {
          path: "nav-button/nav-button",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u81EA\u5B9A\u4E49\u6309\u94AE",
            "app-plus": {
              titleNView: {
                buttons: [
                  {
                    type: "share"
                  },
                  {
                    type: "favorite"
                  }
                ]
              }
            }
          }
        },
        {
          path: "nav-image/nav-image",
          style: {
            navigationBarBackgroundColor: "#FFFFFF",
            navigationBarTextStyle: "black",
            titleImage: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b3e4cbd0-517d-11eb-a16f-5b3e54966275.png"
          }
        },
        {
          path: "nav-city-dropdown/nav-city-dropdown",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u57CE\u5E02\u9009\u62E9",
            "app-plus": {
              titleNView: {
                buttons: [
                  {
                    text: "\u5317\u4EAC\u5E02",
                    fontSize: "14",
                    select: true,
                    width: "auto"
                  }
                ]
              }
            }
          }
        },
        {
          path: "nav-dot/nav-dot",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u7EA2\u70B9\u548C\u89D2\u6807",
            "app-plus": {
              titleNView: {
                buttons: [
                  {
                    text: "\u6D88\u606F",
                    fontSize: "14",
                    redDot: true
                  },
                  {
                    text: "\u5173\u6CE8",
                    fontSize: "14",
                    badgeText: "12"
                  }
                ]
              }
            }
          }
        },
        {
          path: "nav-search-input/nav-search-input",
          style: {
            navigationBarTitleText: "\u5BFC\u822A\u680F\u5E26\u641C\u7D22\u6846",
            "app-plus": {
              titleNView: {
                type: "transparent",
                titleColor: "#fff",
                backgroundColor: "#007AFF",
                buttons: [
                  {
                    fontSrc: "/static/uni.ttf",
                    text: "\uE537",
                    width: "40px",
                    fontSize: "28px",
                    color: "#fff",
                    background: "rgba(0,0,0,0)"
                  }
                ],
                searchInput: {
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  placeholder: "\u8BF7\u8F93\u5165\u5730\u5740 \u5982\uFF1A\u5927\u949F\u5BFA",
                  disabled: true
                }
              }
            }
          }
        },
        {
          path: "nav-search-input/detail/detail",
          style: {
            navigationBarTitleText: "\u641C\u7D22",
            "app-plus": {
              titleNView: {
                titleColor: "#fff",
                backgroundColor: "#007AFF",
                buttons: [
                  {
                    fontSrc: "/static/uni.ttf",
                    text: "\uE537",
                    width: "auto",
                    fontSize: "28px",
                    color: "#fff"
                  }
                ],
                searchInput: {
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  placeholder: "\u8BF7\u8F93\u5165\u5730\u5740 \u5982\uFF1A\u5927\u949F\u5BFA",
                  autoFocus: true
                }
              }
            }
          }
        },
        {
          path: "list2detail-list/list2detail-list",
          style: {
            navigationBarTitleText: "\u5217\u8868\u5230\u8BE6\u60C5\u793A\u4F8B",
            enablePullDownRefresh: true
          }
        },
        {
          path: "list2detail-detail/list2detail-detail",
          style: {
            navigationBarTitleText: "\u8BE6\u60C5",
            "app-plus": {
              titleNView: {
                type: "transparent",
                buttons: [
                  {
                    type: "share"
                  }
                ]
              }
            },
            h5: {
              titleNView: {
                type: "transparent",
                buttons: []
              }
            }
          }
        },
        {
          path: "tabbar/tabbar",
          style: {
            navigationBarTitleText: "\u53EF\u62D6\u52A8\u9876\u90E8\u9009\u9879\u5361"
          }
        },
        {
          path: "tabbar/detail/detail",
          style: {
            navigationBarTitleText: "\u8BE6\u60C5\u9875\u9762"
          }
        },
        {
          path: "swiper-vertical/swiper-vertical",
          style: {
            navigationBarTitleText: "\u4E0A\u4E0B\u6ED1\u52A8\u5207\u6362\u89C6\u9891",
            "app-plus": {
              titleNView: false
            }
          }
        },
        {
          path: "swiper-list/swiper-list",
          style: {
            navigationBarTitleText: "swiper-list"
          }
        },
        {
          path: "swiper-list-nvue/swiper-list-nvue",
          style: {
            navigationBarTitleText: "swiper-list"
          }
        },
        {
          path: "scheme/scheme",
          style: {
            navigationBarTitleText: "\u6253\u5F00\u5916\u90E8\u5E94\u7528"
          }
        },
        {
          path: "global/global",
          style: {
            navigationBarTitleText: "GlobalData\u548Cvuex"
          }
        }
      ]
    }
  ];
  var globalStyle = {
    pageOrientation: "portrait",
    navigationBarTitleText: "Hello uniapp",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: "#007AFF",
    backgroundColor: "#F8F8F8",
    backgroundColorTop: "#F4F5F6",
    backgroundColorBottom: "#F4F5F6",
    "mp-360": {
      navigationStyle: "custom"
    },
    h5: {
      maxWidth: 1190,
      navigationBarTextStyle: "black",
      navigationBarBackgroundColor: "#F1F1F1"
    }
  };
  var tabBar = {
    color: "#7A7E83",
    selectedColor: "#007AFF",
    borderStyle: "black",
    backgroundColor: "#F8F8F8",
    list: [
      {
        pagePath: "pages/tabBar/component/component",
        iconPath: "static/component.png",
        selectedIconPath: "static/componentHL.png",
        text: "\u5185\u7F6E\u7EC4\u4EF6"
      },
      {
        pagePath: "pages/tabBar/API/API",
        iconPath: "static/api.png",
        selectedIconPath: "static/apiHL.png",
        text: "\u63A5\u53E3"
      },
      {
        pagePath: "pages/tabBar/extUI/extUI",
        iconPath: "static/extui.png",
        selectedIconPath: "static/extuiHL.png",
        text: "\u6269\u5C55\u7EC4\u4EF6"
      },
      {
        pagePath: "pages/tabBar/template/template",
        iconPath: "static/template.png",
        selectedIconPath: "static/templateHL.png",
        text: "\u6A21\u677F"
      }
    ]
  };
  var t = {
    leftWindow,
    topWindow,
    pages,
    subPackages,
    globalStyle,
    tabBar
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t22, n2) {
    return e(n2 = { path: t22, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var o = s(function(e, t22) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, o2 = s2.lib = {}, r2 = o2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = o2.WordArray = r2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, o3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var r3 = 0; r3 < o3; r3++) {
            var i3 = n4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
            t4[s3 + r3 >>> 2] |= i3 << 24 - (s3 + r3) % 4 * 8;
          }
        else
          for (r3 = 0; r3 < o3; r3 += 4)
            t4[s3 + r3 >>> 2] = n4[r3 >>> 2];
        return this.sigBytes += o3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], o3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var o4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return o4 /= 4294967296, (o4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, r3 = 0; r3 < t4; r3 += 4) {
          var a3 = o3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push((r3 >>> 4).toString(16)), s3.push((15 & r3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(r3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, h2 = o2.BufferedBlockAlgorithm = r2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, o3 = n4.sigBytes, r3 = this.blockSize, a3 = o3 / (4 * r3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * r3, u3 = e2.min(4 * c3, o3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += r3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(h3, u3);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      o2.Hasher = h2.extend({ cfg: r2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  });
  var r = (s(function(e, t22) {
    var n2;
    e.exports = (n2 = o, function(e2) {
      var t3 = n2, s2 = t3.lib, o2 = s2.WordArray, r2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = r2.extend({ _doReset: function() {
        this._hash = new o2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, o3 = e3[s3];
          e3[s3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
        }
        var r3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], g2 = e3[t4 + 3], p2 = e3[t4 + 4], m2 = e3[t4 + 5], y = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], v2 = e3[t4 + 10], T2 = e3[t4 + 11], S2 = e3[t4 + 12], P2 = e3[t4 + 13], A2 = e3[t4 + 14], I2 = e3[t4 + 15], b2 = r3[0], O2 = r3[1], C2 = r3[2], E2 = r3[3];
        b2 = u2(b2, O2, C2, E2, i3, 7, a2[0]), E2 = u2(E2, b2, O2, C2, c3, 12, a2[1]), C2 = u2(C2, E2, b2, O2, f2, 17, a2[2]), O2 = u2(O2, C2, E2, b2, g2, 22, a2[3]), b2 = u2(b2, O2, C2, E2, p2, 7, a2[4]), E2 = u2(E2, b2, O2, C2, m2, 12, a2[5]), C2 = u2(C2, E2, b2, O2, y, 17, a2[6]), O2 = u2(O2, C2, E2, b2, _2, 22, a2[7]), b2 = u2(b2, O2, C2, E2, w2, 7, a2[8]), E2 = u2(E2, b2, O2, C2, k2, 12, a2[9]), C2 = u2(C2, E2, b2, O2, v2, 17, a2[10]), O2 = u2(O2, C2, E2, b2, T2, 22, a2[11]), b2 = u2(b2, O2, C2, E2, S2, 7, a2[12]), E2 = u2(E2, b2, O2, C2, P2, 12, a2[13]), C2 = u2(C2, E2, b2, O2, A2, 17, a2[14]), b2 = l2(b2, O2 = u2(O2, C2, E2, b2, I2, 22, a2[15]), C2, E2, c3, 5, a2[16]), E2 = l2(E2, b2, O2, C2, y, 9, a2[17]), C2 = l2(C2, E2, b2, O2, T2, 14, a2[18]), O2 = l2(O2, C2, E2, b2, i3, 20, a2[19]), b2 = l2(b2, O2, C2, E2, m2, 5, a2[20]), E2 = l2(E2, b2, O2, C2, v2, 9, a2[21]), C2 = l2(C2, E2, b2, O2, I2, 14, a2[22]), O2 = l2(O2, C2, E2, b2, p2, 20, a2[23]), b2 = l2(b2, O2, C2, E2, k2, 5, a2[24]), E2 = l2(E2, b2, O2, C2, A2, 9, a2[25]), C2 = l2(C2, E2, b2, O2, g2, 14, a2[26]), O2 = l2(O2, C2, E2, b2, w2, 20, a2[27]), b2 = l2(b2, O2, C2, E2, P2, 5, a2[28]), E2 = l2(E2, b2, O2, C2, f2, 9, a2[29]), C2 = l2(C2, E2, b2, O2, _2, 14, a2[30]), b2 = h2(b2, O2 = l2(O2, C2, E2, b2, S2, 20, a2[31]), C2, E2, m2, 4, a2[32]), E2 = h2(E2, b2, O2, C2, w2, 11, a2[33]), C2 = h2(C2, E2, b2, O2, T2, 16, a2[34]), O2 = h2(O2, C2, E2, b2, A2, 23, a2[35]), b2 = h2(b2, O2, C2, E2, c3, 4, a2[36]), E2 = h2(E2, b2, O2, C2, p2, 11, a2[37]), C2 = h2(C2, E2, b2, O2, _2, 16, a2[38]), O2 = h2(O2, C2, E2, b2, v2, 23, a2[39]), b2 = h2(b2, O2, C2, E2, P2, 4, a2[40]), E2 = h2(E2, b2, O2, C2, i3, 11, a2[41]), C2 = h2(C2, E2, b2, O2, g2, 16, a2[42]), O2 = h2(O2, C2, E2, b2, y, 23, a2[43]), b2 = h2(b2, O2, C2, E2, k2, 4, a2[44]), E2 = h2(E2, b2, O2, C2, S2, 11, a2[45]), C2 = h2(C2, E2, b2, O2, I2, 16, a2[46]), b2 = d2(b2, O2 = h2(O2, C2, E2, b2, f2, 23, a2[47]), C2, E2, i3, 6, a2[48]), E2 = d2(E2, b2, O2, C2, _2, 10, a2[49]), C2 = d2(C2, E2, b2, O2, A2, 15, a2[50]), O2 = d2(O2, C2, E2, b2, m2, 21, a2[51]), b2 = d2(b2, O2, C2, E2, S2, 6, a2[52]), E2 = d2(E2, b2, O2, C2, g2, 10, a2[53]), C2 = d2(C2, E2, b2, O2, v2, 15, a2[54]), O2 = d2(O2, C2, E2, b2, c3, 21, a2[55]), b2 = d2(b2, O2, C2, E2, w2, 6, a2[56]), E2 = d2(E2, b2, O2, C2, I2, 10, a2[57]), C2 = d2(C2, E2, b2, O2, y, 15, a2[58]), O2 = d2(O2, C2, E2, b2, P2, 21, a2[59]), b2 = d2(b2, O2, C2, E2, p2, 6, a2[60]), E2 = d2(E2, b2, O2, C2, T2, 10, a2[61]), C2 = d2(C2, E2, b2, O2, f2, 15, a2[62]), O2 = d2(O2, C2, E2, b2, k2, 21, a2[63]), r3[0] = r3[0] + b2 | 0, r3[1] = r3[1] + O2 | 0, r3[2] = r3[2] + C2 | 0, r3[3] = r3[3] + E2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, o3 = 8 * t4.sigBytes;
        n3[o3 >>> 5] |= 128 << 24 - o3 % 32;
        var r3 = e2.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (o3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), n3[14 + (o3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function l2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function h2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function d2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      t3.MD5 = r2._createHelper(c2), t3.HmacMD5 = r2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t22) {
    var n2, s2, r2;
    e.exports = (s2 = (n2 = o).lib.Base, r2 = n2.enc.Utf8, void (n2.algo.HMAC = s2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = r2.parse(t3));
      var n3 = e2.blockSize, s3 = 4 * n3;
      t3.sigBytes > s3 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var o2 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = o2.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      o2.sigBytes = i2.sigBytes = s3, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, n3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), s(function(e, t22) {
    e.exports = o.HmacMD5;
  }));
  var i = "FUNCTION";
  var a = "OBJECT";
  var c = "CLIENT_DB";
  function u(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function l(e) {
    return u(e) === "object";
  }
  function h(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  var d = true;
  var f = "app";
  var g;
  switch (f) {
    case "h5":
      g = "web";
      break;
    case "app-plus":
      g = "app";
      break;
    default:
      g = f;
  }
  var p = h({}.UNICLOUD_DEBUG);
  var m = h("[]") || [];
  var _ = "";
  try {
    _ = "__UNI__B2EE046";
  } catch (e) {
  }
  var w = {};
  function k(e, t22 = {}) {
    var n2, s2;
    return n2 = w, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (w[e] = t22), w[e];
  }
  g === "app" && (w = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  var v = ["invoke", "success", "fail", "complete"];
  var T = k("_globalUniCloudInterceptor");
  function S(e, t22) {
    T[e] || (T[e] = {}), l(t22) && Object.keys(t22).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = T[e2][t3];
        s2 || (s2 = T[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t22[n2]);
    });
  }
  function P(e, t22) {
    T[e] || (T[e] = {}), l(t22) ? Object.keys(t22).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = T[e2][t3];
        if (!s2)
          return;
        const o2 = s2.indexOf(n3);
        o2 > -1 && s2.splice(o2, 1);
      }(e, n2, t22[n2]);
    }) : delete T[e];
  }
  function A(e, t22) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t22)), Promise.resolve()) : Promise.resolve();
  }
  function I(e, t22) {
    return T[e] && T[e][t22] || [];
  }
  function b(e) {
    S("callObject", e);
  }
  var O = k("_globalUniCloudListener");
  var C = "response";
  var E = "needLogin";
  var R = "refreshToken";
  var U = "clientdb";
  var x = "cloudfunction";
  var L = "cloudobject";
  function D(e) {
    return O[e] || (O[e] = []), O[e];
  }
  function N(e, t22) {
    const n2 = D(e);
    n2.includes(t22) || n2.push(t22);
  }
  function q(e, t22) {
    const n2 = D(e), s2 = n2.indexOf(t22);
    s2 !== -1 && n2.splice(s2, 1);
  }
  function F(e, t22) {
    const n2 = D(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t22);
    }
  }
  var M = false;
  var j = new Promise((e) => {
    M && e(), function t22() {
      if (typeof getCurrentPages == "function") {
        const t3 = getCurrentPages();
        t3 && t3[0] && (M = true, e());
      }
      M || setTimeout(() => {
        t22();
      }, 30);
    }();
  });
  function $() {
    return j;
  }
  function K(e, t22) {
    return t22 ? function(n2) {
      let s2 = false;
      if (t22 === "callFunction") {
        const e2 = n2 && n2.type || i;
        s2 = e2 !== i;
      }
      const o2 = t22 === "callFunction" && !s2;
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const a2 = r2.then(() => s2 ? Promise.resolve() : A(I(t22, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : A(I(t22, "success"), e2).then(() => A(I(t22, "complete"), e2)).then(() => (o2 && F(C, { type: x, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : A(I(t22, "fail"), e2).then(() => A(I(t22, "complete"), e2)).then(() => (F(C, { type: x, content: e2 }), Promise.reject(e2))));
      if (!(n2.success || n2.fail || n2.complete))
        return a2;
      a2.then((e2) => {
        n2.success && n2.success(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      }, (e2) => {
        n2.fail && n2.fail(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  var B = class extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", this.errCode = this.code = e.code || "SYSTEM_ERROR", this.requestId = e.requestId;
    }
  };
  function H() {
    let e, t22;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t22 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t22 };
  }
  var W;
  function z() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (W)
      return __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
    const t22 = uni.getSystemInfoSync(), { deviceId: n2, osName: s2, uniPlatform: o2, appId: r2 } = t22, i2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < i2.length; e2++) {
      delete t22[i2[e2]];
    }
    return W = __spreadValues(__spreadValues({ PLATFORM: o2, OS: s2, APPID: r2, DEVICEID: n2 }, H()), t22), __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
  }
  var J = { sign: function(e, t22) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t22).toString();
  }, wrappedRequest: function(e, t22) {
    return new Promise((n2, s2) => {
      t22(Object.assign(e, { complete(e2) {
        e2 || (e2 = {}), g === "web" && e2.errMsg && e2.errMsg.indexOf("request:fail") === 0 && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new B({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const o2 = e2.data;
        if (o2.error)
          return s2(new B({ code: o2.error.code, message: o2.error.message, requestId: t3 }));
        o2.result = o2.data, o2.requestId = t3, delete o2.data, n2(o2);
      } }));
    });
  } };
  var V = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t22) => uni.setStorageSync(e, t22), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  var Y = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  var { t: X } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: Y, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: Y }, "zh-Hans");
  var G = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t22) => {
        if (!Object.prototype.hasOwnProperty.call(e, t22))
          throw new Error(X("uniCloud.init.paramRequired", { param: t22 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = V, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return J.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t22) {
      return Promise.resolve().then(() => this.hasAccessToken ? t22 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t22 = Object.assign({}, e);
      return t22.data.token = this.accessToken, t22.header["x-basement-token"] = this.accessToken, t22.header["x-serverless-sign"] = J.sign(t22.data, this.config.clientSecret), t22;
    }
    setupRequest(e, t22) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t22 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t22, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t22(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new B({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t22 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t22));
    }
    getOSSUploadOptionsFromPath(e) {
      const t22 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t22));
    }
    uploadFileToOSS({ url: e, formData: t22, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t22, name: n2, filePath: s2, fileType: o2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t22 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t22));
    }
    uploadFile({ filePath: e, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2, config: o2 }) {
      if (u(t22) !== "string")
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t22 = t22.trim()))
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t22))
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const r2 = o2 && o2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: r2, filename: t22 }).then((t3) => {
        const o3 = t3.result;
        i2 = o3.id, a2 = "https://" + o3.cdnDomain + "/" + o3.ossPath;
        const r3 = { url: "https://" + o3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o3.accessKeyId, Signature: o3.signature, host: o3.host, id: i2, key: o3.ossPath, policy: o3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, r3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: a2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t22));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t22, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new B({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t22({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var Q = { init(e) {
    const t22 = new G(e), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  var Z = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var ee;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(ee || (ee = {}));
  var te = function() {
  };
  var ne = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new B({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t22 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t22, e;
  };
  function se(e) {
    return e === void 0;
  }
  function oe(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var re;
  function ie(e) {
    const t22 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t22) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(re || (re = {}));
  var ae = { adapter: null, runtime: void 0 };
  var ce = ["anonymousUuidKey"];
  var ue = class extends te {
    constructor() {
      super(), ae.adapter.root.tcbObject || (ae.adapter.root.tcbObject = {});
    }
    setItem(e, t22) {
      ae.adapter.root.tcbObject[e] = t22;
    }
    getItem(e) {
      return ae.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete ae.adapter.root.tcbObject[e];
    }
    clear() {
      delete ae.adapter.root.tcbObject;
    }
  };
  function le(e, t22) {
    switch (e) {
      case "local":
        return t22.localStorage || new ue();
      case "none":
        return new ue();
      default:
        return t22.sessionStorage || new ue();
    }
  }
  var he = class {
    constructor(e) {
      if (!this._storage) {
        this._persistence = ae.adapter.primaryStorage || e.persistence, this._storage = le(this._persistence, ae.adapter);
        const t22 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, o2 = `anonymous_uuid_${e.env}`, r2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: o2, loginTypeKey: r2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t22 = this._persistence === "local";
      this._persistence = e;
      const n2 = le(e, ae.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t22 && ce.includes(e2))
          continue;
        const o2 = this._storage.getItem(s2);
        se(o2) || oe(o2) || (n2.setItem(s2, o2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t22, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t22 }, o2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, o2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t22) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t22 = t22 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t22) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  };
  var de = {};
  var fe = {};
  function ge(e) {
    return de[e];
  }
  var pe = class {
    constructor(e, t22) {
      this.data = t22 || null, this.name = e;
    }
  };
  var me = class extends pe {
    constructor(e, t22) {
      super("error", { error: e, data: t22 }), this.error = e;
    }
  };
  var ye = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t22) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t22, this._listeners), this;
    }
    off(e, t22) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t22, this._listeners), this;
    }
    fire(e, t22) {
      if (e instanceof me)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new pe(e, t22 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function _e(e, t22) {
    ye.on(e, t22);
  }
  function we(e, t22 = {}) {
    ye.fire(e, t22);
  }
  function ke(e, t22) {
    ye.off(e, t22);
  }
  var ve = "loginStateChanged";
  var Te = "loginStateExpire";
  var Se = "loginTypeChanged";
  var Pe = "anonymousConverted";
  var Ae = "refreshAccessToken";
  var Ie;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(Ie || (Ie = {}));
  var be = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"];
  var Oe = { "X-SDK-Version": "1.3.5" };
  function Ce(e, t22, n2) {
    const s2 = e[t22];
    e[t22] = function(t3) {
      const o2 = {}, r2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e, t3);
        Object.assign(o2, s3), Object.assign(r2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), o2);
        else
          for (const e3 in o2)
            i2.append(e3, o2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), r2), s2.call(e, t3);
    };
  }
  function Ee() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, Oe), { "x-seqid": e }) };
  }
  var Re = class {
    constructor(e = {}) {
      var t22;
      this.config = e, this._reqClass = new ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = ge(this.config.env), this._localCache = (t22 = this.config.env, fe[t22]), Ce(this._reqClass, "post", [Ee]), Ce(this._reqClass, "upload", [Ee]), Ce(this._reqClass, "download", [Ee]);
    }
    post(e) {
      return __async(this, null, function* () {
        return yield this._reqClass.post(e);
      });
    }
    upload(e) {
      return __async(this, null, function* () {
        return yield this._reqClass.upload(e);
      });
    }
    download(e) {
      return __async(this, null, function* () {
        return yield this._reqClass.download(e);
      });
    }
    refreshAccessToken() {
      return __async(this, null, function* () {
        let e, t22;
        this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
        try {
          e = yield this._refreshAccessTokenPromise;
        } catch (e2) {
          t22 = e2;
        }
        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t22)
          throw t22;
        return e;
      });
    }
    _refreshAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e, accessTokenExpireKey: t22, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: o2 } = this._cache.keys;
        this._cache.removeStore(e), this._cache.removeStore(t22);
        let r2 = this._cache.getStore(n2);
        if (!r2)
          throw new B({ message: "\u672A\u767B\u5F55CloudBase" });
        const i2 = { refresh_token: r2 }, a2 = yield this.request("auth.fetchAccessTokenWithRefreshToken", i2);
        if (a2.data.code) {
          const { code: e2 } = a2.data;
          if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
            if (this._cache.getStore(s2) === Ie.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
              const e3 = this._cache.getStore(o2), t3 = this._cache.getStore(n2), s3 = yield this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
              return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
            }
            we(Te), this._cache.removeStore(n2);
          }
          throw new B({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
        }
        if (a2.data.access_token)
          return we(Ae), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t22, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
        a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        const { accessTokenKey: e, accessTokenExpireKey: t22, refreshTokenKey: n2 } = this._cache.keys;
        if (!this._cache.getStore(n2))
          throw new B({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
        let s2 = this._cache.getStore(e), o2 = this._cache.getStore(t22), r2 = true;
        return this._shouldRefreshAccessTokenHook && !(yield this._shouldRefreshAccessTokenHook(s2, o2)) && (r2 = false), (!s2 || !o2 || o2 < Date.now()) && r2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: o2 };
      });
    }
    request(e, t22, n2) {
      return __async(this, null, function* () {
        const s2 = `x-tcb-trace_${this.config.env}`;
        let o2 = "application/x-www-form-urlencoded";
        const r2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t22);
        if (be.indexOf(e) === -1) {
          const { refreshTokenKey: e2 } = this._cache.keys;
          this._cache.getStore(e2) && (r2.access_token = (yield this.getAccessToken()).accessToken);
        }
        let i2;
        if (e === "storage.uploadFile") {
          i2 = new FormData();
          for (let e2 in i2)
            i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, r2[e2]);
          o2 = "multipart/form-data";
        } else {
          o2 = "application/json", i2 = {};
          for (let e2 in r2)
            r2[e2] !== void 0 && (i2[e2] = r2[e2]);
        }
        let a2 = { headers: { "content-type": o2 } };
        n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
        const c2 = this._localCache.getStore(s2);
        c2 && (a2.headers["X-TCB-Trace"] = c2);
        const { parse: u2, inQuery: l2, search: h2 } = t22;
        let d2 = { env: this.config.env };
        u2 && (d2.parse = true), l2 && (d2 = __spreadValues(__spreadValues({}, l2), d2));
        let f2 = function(e2, t3, n3 = {}) {
          const s3 = /\?/.test(t3);
          let o3 = "";
          for (let e3 in n3)
            o3 === "" ? !s3 && (t3 += "?") : o3 += "&", o3 += `${e3}=${encodeURIComponent(n3[e3])}`;
          return /^http(s)?\:\/\//.test(t3 += o3) ? t3 : `${e2}${t3}`;
        }(Z, "//tcb-api.tencentcloudapi.com/web", d2);
        h2 && (f2 += h2);
        const g2 = yield this.post(__spreadValues({ url: f2, data: i2 }, a2)), p2 = g2.header && g2.header["x-tcb-trace"];
        if (p2 && this._localCache.setStore(s2, p2), Number(g2.status) !== 200 && Number(g2.statusCode) !== 200 || !g2.data)
          throw new B({ code: "NETWORK_ERROR", message: "network request error" });
        return g2;
      });
    }
    send(_0) {
      return __async(this, arguments, function* (e, t22 = {}) {
        const n2 = yield this.request(e, t22, { onUploadProgress: t22.onUploadProgress });
        if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && be.indexOf(e) === -1) {
          yield this.refreshAccessToken();
          const n3 = yield this.request(e, t22, { onUploadProgress: t22.onUploadProgress });
          if (n3.data.code)
            throw new B({ code: n3.data.code, message: n3.data.message });
          return n3.data;
        }
        if (n2.data.code)
          throw new B({ code: n2.data.code, message: n2.data.message });
        return n2.data;
      });
    }
    setRefreshToken(e) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  };
  var Ue = {};
  function xe(e) {
    return Ue[e];
  }
  var Le = class {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t22, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t22) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t22);
    }
    refreshUserInfo() {
      return __async(this, null, function* () {
        const { data: e } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e), e;
      });
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e);
    }
  };
  var De = class {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = ge(this._envId), this._request = xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t22) {
      return this._request.send("auth.updatePassword", { oldPassword: t22, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    getLinkedUidList() {
      return __async(this, null, function* () {
        const { data: e } = yield this._request.send("auth.getLinkedUidList", {});
        let t22 = false;
        const { users: n2 } = e;
        return n2.forEach((e2) => {
          e2.wxOpenId && e2.wxPublicId && (t22 = true);
        }), { users: n2, hasPrimaryUid: t22 };
      });
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    update(e) {
      return __async(this, null, function* () {
        const { nickName: t22, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 } = e, { data: a2 } = yield this._request.send("auth.updateUserInfo", { nickName: t22, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 });
        this.setLocalUserInfo(a2);
      });
    }
    refresh() {
      return __async(this, null, function* () {
        const { data: e } = yield this._request.send("auth.getUserInfo", {});
        return this.setLocalUserInfo(e), e;
      });
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t22 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t22[e2];
      }), this.location = { country: t22.country, province: t22.province, city: t22.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t22 } = this._cache.keys;
      this._cache.setStore(t22, e), this.setUserInfo();
    }
  };
  var Ne = class {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = ge(e);
      const { refreshTokenKey: t22, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, o2 = this._cache.getStore(t22), r2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: o2, accessToken: r2, accessTokenExpire: i2 }, this.user = new De(e);
    }
    get isAnonymousAuth() {
      return this.loginType === Ie.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Ie.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Ie.WECHAT || this.loginType === Ie.WECHAT_OPEN || this.loginType === Ie.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  };
  var qe = class extends Le {
    signIn() {
      return __async(this, null, function* () {
        this._cache.updatePersistence("local");
        const { anonymousUuidKey: e, refreshTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t22) || void 0, o2 = yield this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
        if (o2.uuid && o2.refresh_token) {
          this._setAnonymousUUID(o2.uuid), this.setRefreshToken(o2.refresh_token), yield this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.ANONYMOUS, persistence: "local" });
          const e2 = new Ne(this.config.env);
          return yield e2.user.refresh(), e2;
        }
        throw new B({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
      });
    }
    linkAndRetrieveDataWithTicket(e) {
      return __async(this, null, function* () {
        const { anonymousUuidKey: t22, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t22), o2 = this._cache.getStore(n2), r2 = yield this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: o2, ticket: e });
        if (r2.refresh_token)
          return this._clearAnonymousUUID(), this.setRefreshToken(r2.refresh_token), yield this._request.refreshAccessToken(), we(Pe, { env: this.config.env }), we(Se, { loginType: Ie.CUSTOM, persistence: "local" }), { credential: { refreshToken: r2.refresh_token } };
        throw new B({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
      });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t22, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t22), this._cache.setStore(t22, e), this._cache.setStore(n2, Ie.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  };
  var Fe = class extends Le {
    signIn(e) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new B({ param: "PARAM_ERROR", message: "ticket must be a string" });
        const { refreshTokenKey: t22 } = this._cache.keys, n2 = yield this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t22) || "" });
        if (n2.refresh_token)
          return this.setRefreshToken(n2.refresh_token), yield this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.CUSTOM, persistence: this.config.persistence }), yield this.refreshUserInfo(), new Ne(this.config.env);
        throw new B({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var Me = class extends Le {
    signIn(e, t22) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new B({ code: "PARAM_ERROR", message: "email must be a string" });
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token: r2, access_token_expire: i2 } = s2;
        if (o2)
          return this.setRefreshToken(o2), r2 && i2 ? this.setAccessToken(r2, i2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.EMAIL, persistence: this.config.persistence }), new Ne(this.config.env);
        throw s2.code ? new B({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
      });
    }
    activate(e) {
      return __async(this, null, function* () {
        return this._request.send("auth.activateEndUserMail", { token: e });
      });
    }
    resetPasswordWithToken(e, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t22 });
      });
    }
  };
  var je = class extends Le {
    signIn(e, t22) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
        typeof t22 != "string" && (t22 = "", console.warn("password is empty"));
        const { refreshTokenKey: n2 } = this._cache.keys, s2 = yield this._request.send("auth.signIn", { loginType: Ie.USERNAME, username: e, password: t22, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token_expire: r2, access_token: i2 } = s2;
        if (o2)
          return this.setRefreshToken(o2), i2 && r2 ? this.setAccessToken(i2, r2) : yield this._request.refreshAccessToken(), yield this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.USERNAME, persistence: this.config.persistence }), new Ne(this.config.env);
        throw s2.code ? new B({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
      });
    }
  };
  var $e = class {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), _e(Se, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new qe(this.config);
    }
    customAuthProvider() {
      return new Fe(this.config);
    }
    emailAuthProvider() {
      return new Me(this.config);
    }
    usernameAuthProvider() {
      return new je(this.config);
    }
    signInAnonymously() {
      return __async(this, null, function* () {
        return new qe(this.config).signIn();
      });
    }
    signInWithEmailAndPassword(e, t22) {
      return __async(this, null, function* () {
        return new Me(this.config).signIn(e, t22);
      });
    }
    signInWithUsernameAndPassword(e, t22) {
      return new je(this.config).signIn(e, t22);
    }
    linkAndRetrieveDataWithTicket(e) {
      return __async(this, null, function* () {
        this._anonymousAuthProvider || (this._anonymousAuthProvider = new qe(this.config)), _e(Pe, this._onAnonymousConverted);
        return yield this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
      });
    }
    signOut() {
      return __async(this, null, function* () {
        if (this.loginType === Ie.ANONYMOUS)
          throw new B({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
        const { refreshTokenKey: e, accessTokenKey: t22, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
        if (!s2)
          return;
        const o2 = yield this._request.send("auth.logout", { refresh_token: s2 });
        return this._cache.removeStore(e), this._cache.removeStore(t22), this._cache.removeStore(n2), we(ve), we(Se, { env: this.config.env, loginType: Ie.NULL, persistence: this.config.persistence }), o2;
      });
    }
    signUpWithEmailAndPassword(e, t22) {
      return __async(this, null, function* () {
        return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t22 });
      });
    }
    sendPasswordResetEmail(e) {
      return __async(this, null, function* () {
        return this._request.send("auth.sendPasswordResetEmail", { email: e });
      });
    }
    onLoginStateChanged(e) {
      _e(ve, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t22 = this.hasLoginState();
      e.call(this, t22);
    }
    onLoginStateExpired(e) {
      _e(Te, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      _e(Ae, e.bind(this));
    }
    onAnonymousConverted(e) {
      _e(Pe, e.bind(this));
    }
    onLoginTypeChanged(e) {
      _e(Se, () => {
        const t22 = this.hasLoginState();
        e.call(this, t22);
      });
    }
    getAccessToken() {
      return __async(this, null, function* () {
        return { accessToken: (yield this._request.getAccessToken()).accessToken, env: this.config.env };
      });
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new Ne(this.config.env) : null;
    }
    isUsernameRegistered(e) {
      return __async(this, null, function* () {
        if (typeof e != "string")
          throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
        const { data: t22 } = yield this._request.send("auth.isUsernameRegistered", { username: e });
        return t22 && t22.isRegistered;
      });
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    signInWithTicket(e) {
      return __async(this, null, function* () {
        return new Fe(this.config).signIn(e);
      });
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t22 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t22) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t22 } = e.data;
      t22 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t22, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t22));
    }
  };
  var Ke = function(e, t22) {
    t22 = t22 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2, filePath: o2, onUploadProgress: r2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: o2, name: s2, fileType: i2, onUploadProgress: r2 }).then((e3) => {
        e3.statusCode === 201 ? t22(null, { fileID: l2, requestId: d2 }) : t22(new B({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t22(e3);
      });
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var Be = function(e, t22) {
    t22 = t22 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t22(null, e2);
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var He = function({ fileList: e }, t22) {
    if (t22 = t22 || ne(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return xe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t22(null, e2) : t22(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var We = function({ fileList: e }, t22) {
    t22 = t22 || ne(), e && Array.isArray(e) || t22(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t22(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t22(null, e2) : t22(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t22(e2);
    }), t22.promise;
  };
  var ze = function(_0, _1) {
    return __async(this, arguments, function* ({ fileID: e }, t22) {
      const n2 = (yield We.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
      if (n2.code !== "SUCCESS")
        return t22 ? t22(n2) : new Promise((e2) => {
          e2(n2);
        });
      const s2 = xe(this.config.env);
      let o2 = n2.download_url;
      if (o2 = encodeURI(o2), !t22)
        return s2.download({ url: o2 });
      t22(yield s2.download({ url: o2 }));
    });
  };
  var Je = function({ name: e, data: t22, query: n2, parse: s2, search: o2 }, r2) {
    const i2 = r2 || ne();
    let a2;
    try {
      a2 = t22 ? JSON.stringify(t22) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new B({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: o2, function_name: e, request_data: a2 };
    return xe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new B({ message: "response data must be json" }));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  };
  var Ve = { timeout: 15e3, persistence: "session" };
  var Ye = {};
  var Xe = class {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (ae.adapter || (this.requestClient = new ae.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, Ve), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new Xe(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t22 = e || ae.adapter.primaryStorage || Ve.persistence;
      var n2;
      return t22 !== this.config.persistence && (this.config.persistence = t22), function(e2) {
        const { env: t3 } = e2;
        de[t3] = new he(e2), fe[t3] = new he(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, Ue[n2.env] = new Re(n2), this.authObj = new $e(this.config), this.authObj;
    }
    on(e, t22) {
      return _e.apply(this, [e, t22]);
    }
    off(e, t22) {
      return ke.apply(this, [e, t22]);
    }
    callFunction(e, t22) {
      return Je.apply(this, [e, t22]);
    }
    deleteFile(e, t22) {
      return He.apply(this, [e, t22]);
    }
    getTempFileURL(e, t22) {
      return We.apply(this, [e, t22]);
    }
    downloadFile(e, t22) {
      return ze.apply(this, [e, t22]);
    }
    uploadFile(e, t22) {
      return Ke.apply(this, [e, t22]);
    }
    getUploadMetadata(e, t22) {
      return Be.apply(this, [e, t22]);
    }
    registerExtension(e) {
      Ye[e.name] = e;
    }
    invokeExtension(e, t22) {
      return __async(this, null, function* () {
        const n2 = Ye[e];
        if (!n2)
          throw new B({ message: `\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C` });
        return yield n2.invoke(t22, this);
      });
    }
    useAdapters(e) {
      const { adapter: t22, runtime: n2 } = ie(e) || {};
      t22 && (ae.adapter = t22), n2 && (ae.runtime = n2);
    }
  };
  var Ge = new Xe();
  function Qe(e, t22, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t22), o2 = "";
    for (var r2 in n2)
      o2 === "" ? !s2 && (t22 += "?") : o2 += "&", o2 += r2 + "=" + encodeURIComponent(n2[r2]);
    return /^http(s)?:\/\//.test(t22 += o2) ? t22 : "" + e + t22;
  }
  var Ze = class {
    post(e) {
      const { url: t22, data: n2, headers: s2 } = e;
      return new Promise((e2, o2) => {
        V.request({ url: Qe("https:", t22), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          o2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t22, n2) => {
        const { url: s2, file: o2, data: r2, headers: i2, fileType: a2 } = e, c2 = V.uploadFile({ url: Qe("https:", s2), name: "file", formData: Object.assign({}, r2), filePath: o2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && r2.success_action_status && (n3.statusCode = parseInt(r2.success_action_status, 10)), t22(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  };
  var et = { setItem(e, t22) {
    V.setStorageSync(e, t22);
  }, getItem: (e) => V.getStorageSync(e), removeItem(e) {
    V.removeStorageSync(e);
  }, clear() {
    V.clearStorageSync();
  } };
  var tt = { genAdapter: function() {
    return { root: {}, reqClass: Ze, localStorage: et, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ge.useAdapters(tt);
  var nt = Ge;
  var st = nt.init;
  nt.init = function(e) {
    e.env = e.spaceId;
    const t22 = st.call(this, e);
    t22.config.provider = "tencent", t22.config.spaceId = e.spaceId;
    const n2 = t22.auth;
    return t22.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = K(t3[e3]).bind(t3);
      }), t3;
    }, t22.customAuth = t22.auth, t22;
  };
  var ot = nt;
  function rt(e) {
    return e && rt(e.__v_raw) || e;
  }
  function it() {
    return { token: V.getStorageSync("uni_id_token") || V.getStorageSync("uniIdToken"), tokenExpired: V.getStorageSync("uni_id_token_expired") };
  }
  function at({ token: e, tokenExpired: t22 } = {}) {
    e && V.setStorageSync("uni_id_token", e), t22 && V.setStorageSync("uni_id_token_expired", t22);
  }
  function ct() {
    if (g !== "web")
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== _ && (uni.setStorageSync("__LAST_DCLOUD_APPID", _), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), V.removeStorageSync("uni_id_token"), V.removeStorageSync("uniIdToken"), V.removeStorageSync("uni_id_token_expired"));
  }
  var ut = class extends G {
    getAccessToken() {
      return new Promise((e, t22) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t22) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t22 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret);
      const o2 = z();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(o2));
      const { token: r2 } = it();
      return s2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t22, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t22, name: n2, filePath: s2, fileType: o2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t22, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t22)
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let o2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t22 }).then((t3) => {
        const { url: r2, formData: i2, name: a2 } = t3.result;
        o2 = t3.result.fileUrl;
        const c2 = { url: r2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t22 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: o2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t22 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t22));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t22 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t22));
    }
  };
  var lt = { init(e) {
    const t22 = new ut(e), n2 = { signInAnonymously: function() {
      return t22.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t22.auth = function() {
      return n2;
    }, t22.customAuth = t22.auth, t22;
  } };
  function ht({ data: e }) {
    let t22;
    t22 = z();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t22 }), !n2.uniIdToken) {
      const { token: e2 } = it();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function dt({ name: e, data: t22 } = {}) {
    const { localAddress: n2, localPort: s2 } = this.__dev__, o2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      V.request({ method: "POST", url: i2, data: { name: e, platform: g, provider: o2, spaceId: r2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t22 });
      }
      return new Promise((e2, n4) => {
        const s4 = ht.call(this, { data: t22 });
        V.request({ method: "POST", url: a2, data: { provider: o2, platform: g, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new B({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new B({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  var ft = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var gt = /[\\^$.*+?()[\]{}|]/g;
  var pt = RegExp(gt.source);
  function mt(e, t22, n2) {
    return e.replace(new RegExp((s2 = t22) && pt.test(s2) ? s2.replace(gt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function yt({ functionName: e, result: t22, logPvd: n2 }) {
    if (this.__dev__.debugLog && t22 && t22.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t22.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function _t(e) {
    const t22 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = ht.call(e, { data: n3.data });
      const o2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];
      return t22.call(this, n3).then((e2) => (e2.errCode = 0, yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), Promise.resolve(e2)), (e2) => (yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: o3, content: r2, mode: i2 } = n4[s3], a2 = e3.match(o3);
          if (!a2)
            continue;
          let c2 = r2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = mt(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = mt(c2, `{${e4}}`, t3[e4]);
          return i2 === "replace" ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: ft, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let s2;
      e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && m ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = dt), s2 = dt) : s2 = n2;
      const o2 = s2.call(this, t3);
      return Object.defineProperty(o2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), o2;
    };
  }
  var wt = Symbol("CLIENT_DB_INTERNAL");
  function kt(e, t22) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = wt, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e2 || typeof n2 != "string") {
        const t3 = e2[n2];
        return typeof t3 == "function" ? t3.bind(e2) : t3;
      }
      return t22.get(e2, n2, s2);
    } });
  }
  function vt(e) {
    return { on: (t22, n2) => {
      e[t22] = e[t22] || [], e[t22].indexOf(n2) > -1 || e[t22].push(n2);
    }, off: (t22, n2) => {
      e[t22] = e[t22] || [];
      const s2 = e[t22].indexOf(n2);
      s2 !== -1 && e[t22].splice(s2, 1);
    } };
  }
  var Tt = ["db.Geo", "db.command", "command.aggregate"];
  function St(e, t22) {
    return Tt.indexOf(`${e}.${t22}`) > -1;
  }
  function Pt(e) {
    switch (u(e = rt(e))) {
      case "array":
        return e.map((e2) => Pt(e2));
      case "object":
        return e._internalType === wt || Object.keys(e).forEach((t22) => {
          e[t22] = Pt(e[t22]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function At(e) {
    return e && e.content && e.content.$method;
  }
  var It = class {
    constructor(e, t22, n2) {
      this.content = e, this.prevStage = t22 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t22 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t22.push(e.content);
      return { $db: t22.reverse().map((e2) => ({ $method: e2.$method, $param: Pt(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t22 = At(e), n2 = At(e.prevStage);
        if (t22 === "aggregate" && n2 === "collection" || t22 === "pipeline")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if (At(e) === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t22 = At(e), n2 = At(e.prevStage);
        if (t22 === "aggregate" && n2 === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get count() {
      if (!this.isAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "count", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get remove() {
      if (!this.isCommand)
        return function() {
          return this._send("remove", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "remove", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      if (!this.isCommand)
        return function() {
          throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
        };
      const e = this;
      return function() {
        return bt({ $method: "set", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    _send(e, t22) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Pt(t22) }), d) {
        const e2 = s2.$db.find((e3) => e3.$method === "collection"), t3 = e2 && e2.$param;
        t3 && t3.length === 1 && typeof e2.$param[0] == "string" && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  };
  function bt(e, t22, n2) {
    return kt(new It(e, t22, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), St(s2, t3) ? bt({ $method: t3 }, e2, n2) : function() {
        return bt({ $method: t3, $param: Pt(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function Ot({ path: e, method: t22 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t22, $param: this.param }] };
      }
    };
  }
  var Ct = class extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = k("_globalUniCloudDatabaseCallback")), this.auth = vt(this._authCallBacks), Object.assign(this, vt(this._dbCallBacks)), this.env = kt({}, { get: (e2, t22) => ({ $env: t22 }) }), this.Geo = kt({}, { get: (e2, t22) => Ot({ path: ["Geo"], method: t22 }) }), this.serverDate = Ot({ path: [], method: "serverDate" }), this.RegExp = Ot({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t22) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t22);
      });
    }
    _callbackAuth(e, t22) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t22);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t22 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t22, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t22, multiCommand: n2, queryList: s2 }) {
      function o2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const o3 = s2[n3];
            o3.udb && typeof o3.udb.setResult == "function" && (t3 ? o3.udb.setResult(t3) : o3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const r2 = this;
      function i2(e2) {
        return r2._callback("error", [e2]), A(I("database", "fail"), e2).then(() => A(I("database", "complete"), e2)).then(() => (o2(null, e2), F(C, { type: U, content: e2 }), Promise.reject(e2)));
      }
      const a2 = A(I("database", "invoke")), u2 = this._uniClient;
      return a2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: c, data: { action: e, command: t22, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: r3, systemInfo: a3 = [] } = e2.result;
        if (a3)
          for (let e3 = 0; e3 < a3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = a3[e3], o3 = console[g === "app" && t4 === "warn" ? "error" : t4] || console.log;
            let r4 = "[System Info]" + n4;
            s4 && (r4 = `${r4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), o3(r4);
          }
        if (t3) {
          return i2(new B({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.code, e2.result.errMsg = e2.result.message, s3 && r3 && (at({ token: s3, tokenExpired: r3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: r3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: r3 }]), F(R, { token: s3, tokenExpired: r3 }));
        const c2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < c2.length; t4++) {
          const { prop: n4, tips: s4 } = c2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return A(I("database", "success"), e3).then(() => A(I("database", "complete"), e3)).then(() => (o2(e3, null), F(C, { type: U, content: e3 }), Promise.resolve(e3)));
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return i2(new B({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  };
  function Et(e) {
    e.database = function(t22) {
      if (t22 && Object.keys(t22).length > 0)
        return e.init(t22).database();
      if (this._database)
        return this._database;
      const n2 = function(e2, t3 = {}) {
        return kt(new e2(t3), { get: (e3, t4) => St("db", t4) ? bt({ $method: t4 }, null, e3) : function() {
          return bt({ $method: t4, $param: Pt(Array.from(arguments)) }, null, e3);
        } });
      }(Ct, { uniClient: e });
      return this._database = n2, n2;
    };
  }
  var Rt = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var Ut = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762";
  var xt = { TOKEN_INVALID_TOKEN_EXPIRED: Ut, TOKEN_INVALID_INVALID_CLIENTID: Rt, TOKEN_INVALID: Rt, TOKEN_INVALID_WRONG_TOKEN: Rt, TOKEN_INVALID_ANONYMOUS_USER: Rt };
  var Lt = { "uni-id-token-expired": Ut, "uni-id-check-token-failed": Rt, "uni-id-token-not-exist": Rt, "uni-id-check-device-feature-failed": Rt };
  function Dt(e, t22) {
    let n2 = "";
    return n2 = e ? `${e}/${t22}` : t22, n2.replace(/^\//, "");
  }
  function Nt(e = [], t22 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      e2.needLogin === true ? n2.push(Dt(t22, e2.path)) : e2.needLogin === false && s2.push(Dt(t22, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function qt(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Ft() {
    return function(e) {
      let t22 = e && e.$page && e.$page.fullPath || "";
      return t22 ? (t22.charAt(0) !== "/" && (t22 = "/" + t22), t22) : t22;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Mt() {
    return qt(Ft());
  }
  function jt(e = "", t22 = {}) {
    if (!e)
      return false;
    if (!(t22 && t22.list && t22.list.length))
      return false;
    const n2 = t22.list, s2 = qt(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  var $t = !!t.uniIdRouter;
  var { loginPage: Kt, routerNeedLogin: Bt, resToLogin: Ht, needLoginPage: Wt, notNeedLoginPage: zt, loginPageInTabBar: Jt } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: o2 = {} } = t) {
    const { loginPage: r2, needLogin: i2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Nt(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t22 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: o3 = [] } = e3, { needLoginPage: r3, notNeedLoginPage: i3 } = Nt(o3, s3);
        t22.push(...r3), n3.push(...i3);
      }), { needLoginPage: t22, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: r2, routerNeedLogin: i2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: jt(r2, o2) };
  }();
  if (Wt.indexOf(Kt) > -1)
    throw new Error(`Login page [${Kt}] should not be "needLogin", please check your pages.json`);
  function Vt(e) {
    const t22 = qt(function(e2) {
      const t3 = Mt(), n2 = e2.charAt(0), s2 = e2.split("?")[0];
      if (n2 === "/")
        return s2;
      const o2 = s2.replace(/^\//, "").split("/"), r2 = t3.split("/");
      r2.pop();
      for (let e3 = 0; e3 < o2.length; e3++) {
        const t4 = o2[e3];
        t4 === ".." ? r2.pop() : t4 !== "." && r2.push(t4);
      }
      return r2[0] === "" && r2.shift(), r2.join("/");
    }(e));
    return !(zt.indexOf(t22) > -1) && (Wt.indexOf(t22) > -1 || Bt.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function Yt({ redirect: e }) {
    const t22 = qt(e), n2 = qt(Kt);
    return Mt() !== n2 && t22 !== n2;
  }
  function Xt({ api: e, redirect: t22 } = {}) {
    if (!t22 || !Yt({ redirect: t22 }))
      return;
    const n2 = function(e2, t3) {
      return e2.charAt(0) !== "/" && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(Kt, t22);
    Jt ? e !== "navigateTo" && e !== "redirectTo" || (e = "switchTab") : e === "switchTab" && (e = "navigateTo"), setTimeout(() => {
      uni[e]({ url: n2 });
    });
  }
  function Gt({ url: e } = {}) {
    const t22 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = it();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Lt[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Lt[e3] };
      }
      return n3;
    }();
    if (Vt(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (D(E).length > 0)
        return setTimeout(() => {
          F(E, n2);
        }, 0), t22.abortLoginPageJump = true, t22;
      t22.autoToLoginPage = true;
    }
    return t22;
  }
  function Qt() {
    !function() {
      const e2 = Ft(), { abortLoginPageJump: t22, autoToLoginPage: n2 } = Gt({ url: e2 });
      t22 || n2 && Xt({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t22 = 0; t22 < e.length; t22++) {
      const n2 = e[t22];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Gt({ url: e2.url });
        return t3 ? e2 : s2 ? (Xt({ api: n2, redirect: e2.url }), false) : e2;
      } });
    }
  }
  function Zt() {
    this.onResponse((e) => {
      const { type: t22, content: n2 } = e;
      let s2 = false;
      switch (t22) {
        case "cloudobject":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in Lt;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in xt;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = D(E);
        $().then(() => {
          const n3 = Ft();
          if (n3 && Yt({ redirect: n3 }))
            return t3.length > 0 ? F(E, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Kt && Xt({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function en(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        N(C, e3);
      }, e2.offResponse = function(e3) {
        q(C, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        N(E, e3);
      }, e2.offNeedLogin = function(e3) {
        q(E, e3);
      }, $t && (k("uni-cloud-status").needLoginInit || (k("uni-cloud-status").needLoginInit = true, $().then(() => {
        Qt.call(e2);
      }), Ht && Zt.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        N(R, e3);
      }, e2.offRefreshToken = function(e3) {
        q(R, e3);
      };
    }(e);
  }
  var tn;
  var nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var sn = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function on() {
    const e = it().token || "", t22 = e.split(".");
    if (!e || t22.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t22[1], decodeURIComponent(tn(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  tn = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !sn.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t22;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, o2 = "", r2 = 0; r2 < e.length; )
      t22 = nn.indexOf(e.charAt(r2++)) << 18 | nn.indexOf(e.charAt(r2++)) << 12 | (n2 = nn.indexOf(e.charAt(r2++))) << 6 | (s2 = nn.indexOf(e.charAt(r2++))), o2 += n2 === 64 ? String.fromCharCode(t22 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255) : String.fromCharCode(t22 >> 16 & 255, t22 >> 8 & 255, 255 & t22);
    return o2;
  } : atob;
  var rn = s(function(e, t22) {
    Object.defineProperty(t22, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function o2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function r2(e2, t3, { onChooseFile: s3, onUploadProgress: o3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, o4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const r3 = t5.tempFiles, i2 = r3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!r3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = r3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, o4 && o4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, o3));
    }
    t22.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? r2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: r3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: r3, extension: i2, success(t5) {
              e4(o2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? r2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: r3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: r3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: r4, height: i3, width: a3 } = t5;
              e4(o2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: r4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : r2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, r3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return r3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(o2(t5));
            }, fail(e5) {
              r3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  });
  var an = n(rn);
  var cn = "manual";
  function un(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t22) => {
          e2.push(this[t22]);
        }), e2;
      }, (e2, t22) => {
        if (this.loadtime === cn)
          return;
        let n2 = false;
        const s2 = [];
        for (let o2 = 2; o2 < e2.length; o2++)
          e2[o2] !== t22[o2] && (s2.push(e2[o2]), n2 = true);
        e2[0] !== t22[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t22) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t22, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: o2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = o2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const r2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = r2, t22 && t22(r2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t22 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t22.action || this.action;
      s2 && (n2 = n2.action(s2));
      const o2 = t22.collection || this.collection;
      n2 = Array.isArray(o2) ? n2.collection(...o2) : n2.collection(o2);
      const r2 = t22.where || this.where;
      r2 && Object.keys(r2).length && (n2 = n2.where(r2));
      const i2 = t22.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t22.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t22.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t22.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t22.distinct !== void 0 ? t22.distinct : this.distinct) === true && (n2 = n2.distinct());
      const l2 = t22.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = t22.pageCurrent !== void 0 ? t22.pageCurrent : this.mixinDatacomPage.current, d2 = t22.pageSize !== void 0 ? t22.pageSize : this.mixinDatacomPage.size, f2 = t22.getcount !== void 0 ? t22.getcount : this.getcount, g2 = t22.gettree !== void 0 ? t22.gettree : this.gettree, p2 = t22.gettreepath !== void 0 ? t22.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y = { limitLevel: t22.limitlevel !== void 0 ? t22.limitlevel : this.limitlevel, startWith: t22.startwith !== void 0 ? t22.startwith : this.startwith };
      return g2 && (m2.getTree = y), p2 && (m2.getTreePath = y), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ln(e) {
    return function(t22, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), typeof t3.secretMethods == "object" && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: o2, errorOptions: r2 } = n2, i2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return function(...s4) {
          return __async(this, null, function* () {
            const o3 = n3 ? n3({ params: s4 }) : {};
            let r3, i3;
            try {
              return yield A(I(t3, "invoke"), __spreadValues({}, o3)), r3 = yield e2(...s4), yield A(I(t3, "success"), __spreadProps(__spreadValues({}, o3), { result: r3 })), r3;
            } catch (e3) {
              throw i3 = e3, yield A(I(t3, "fail"), __spreadProps(__spreadValues({}, o3), { error: i3 })), i3;
            } finally {
              yield A(I(t3, "complete"), i3 ? __spreadProps(__spreadValues({}, o3), { error: i3 }) : __spreadProps(__spreadValues({}, o3), { result: r3 }));
            }
          });
        };
      }({ fn: function s4(...u2) {
        return __async(this, null, function* () {
          let l2;
          i2 && uni.showLoading({ title: o2.title, mask: o2.mask });
          const h2 = { name: t22, type: a, data: { method: c2, params: u2 } };
          typeof n2.secretMethods == "object" && function(e2, t3) {
            const n3 = t3.data.method, s5 = e2.secretMethods[n3];
            s5 && (t3.secret = s5);
          }(n2, h2);
          try {
            l2 = yield e.callFunction(h2);
          } catch (e2) {
            l2 = { result: e2 };
          }
          const { errCode: d2, errMsg: f2, newToken: g2 } = l2.result || {};
          if (i2 && uni.hideLoading(), g2 && g2.token && g2.tokenExpired && (at(g2), F(R, __spreadValues({}, g2))), d2) {
            if (i2)
              if (r2.type === "toast")
                uni.showToast({ title: f2, icon: "none" });
              else {
                if (r2.type !== "modal")
                  throw new Error(`Invalid errorOptions.type: ${r2.type}`);
                {
                  const { confirm: e3 } = yield function() {
                    return __async(this, arguments, function* ({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3 } = {}) {
                      return new Promise((r3, i3) => {
                        uni.showModal({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3, success(e5) {
                          r3(e5);
                        }, fail() {
                          r3({ confirm: false, cancel: true });
                        } });
                      });
                    });
                  }({ title: "\u63D0\u793A", content: f2, showCancel: r2.retry, cancelText: "\u53D6\u6D88", confirmText: r2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                  if (r2.retry && e3)
                    return s4(...u2);
                }
              }
            const e2 = new B({ code: d2, message: f2, requestId: l2.requestId });
            throw e2.detail = l2.result, F(C, { type: L, content: e2 }), e2;
          }
          return F(C, { type: L, content: l2.result }), l2.result;
        });
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t22, methodName: c2, params: e2 };
      } }) });
    };
  }
  function hn(e, t22) {
    return __async(this, null, function* () {
      const n2 = `http://${e}:${t22}/system/ping`;
      try {
        const e2 = yield (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
          V.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
            e3(t4);
          }, fail(e4) {
            t3(e4);
          } }));
        }));
        return !(!e2.data || e2.data.code !== 0);
      } catch (e2) {
        return false;
      }
      var s2;
    });
  }
  function dn(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t22 = Promise.resolve();
    var n2;
    n2 = 1, t22 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t22.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (g === "app") {
        const { osName: e2, osVersion: t3 } = uni.getSystemInfoSync();
        e2 === "ios" && function(e3) {
          if (!e3 || typeof e3 != "string")
            return 0;
          const t4 = e3.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e.__dev__.debugInfo) {
        const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
        return function(e2, t4) {
          return __async(this, null, function* () {
            let n4;
            for (let s3 = 0; s3 < e2.length; s3++) {
              const o2 = e2[s3];
              if (yield hn(o2, t4)) {
                n4 = o2;
                break;
              }
            }
            return { address: n4, port: t4 };
          });
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console[g === "app" ? "error" : "warn"];
      if (t3)
        e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
      else if (e.__dev__.debugInfo) {
        let t4 = "";
        e.__dev__.debugInfo.initialLaunchType === "remote" ? (e.__dev__.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", g === "web" && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), g.indexOf("mp-") === 0 && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ct(), e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  var fn = { tcb: ot, tencent: ot, aliyun: Q, private: lt };
  var gn = new class {
    init(e) {
      let t22 = {};
      const n2 = fn[e.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t22 = n2.init(e), t22.__dev__ = {}, t22.__dev__.debugLog = g === "web" && navigator.userAgent.indexOf("HBuilderX") > 0 || g === "app";
      const s2 = p;
      s2 && !s2.code && (t22.__dev__.debugInfo = s2), dn(t22), t22.reInit = function() {
        dn(this);
      }, _t(t22), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t22), Et(t22), function(e2) {
        e2.getCurrentUserInfo = on, e2.chooseAndUploadFile = an.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return un(e2);
        } }), e2.importObject = ln(e2);
      }(t22);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t22[e2])
          return;
        const n3 = t22[e2];
        t22[e2] = function() {
          return t22.reInit(), n3.apply(t22, Array.from(arguments));
        }, t22[e2] = K(t22[e2], e2).bind(t22);
      }), t22.init = this.init, t22;
    }
  }();
  (() => {
    const e = m;
    let t22 = {};
    if (e && e.length === 1)
      t22 = e[0], gn = gn.init(t22), gn.isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
        gn[e2] = function() {
          return console.error(n2), Promise.reject(new B({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(gn, { get mixinDatacom() {
      return un(gn);
    } }), en(gn), gn.addInterceptor = S, gn.removeInterceptor = P, gn.interceptObject = b, g === "web" && (window.uniCloud = gn);
  })();
  var pn = gn;

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-load-more.js
  var import_vue3 = __toESM(require_vue());
  var en2 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en: en2,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  var _style_02 = { "uni-load-more": { "": { "flexDirection": "row", "height": 40, "alignItems": "center", "justifyContent": "center" } }, "uni-load-more__text": { "": { "fontSize": 14, "marginLeft": 8 } }, "uni-load-more__img": { "": { "width": 24, "height": 24 } }, "uni-load-more__img--nvue": { "": { "color": "#666666" } }, "uni-load-more__img--android": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } }, "uni-load-more__img--ios": { "": { "width": 24, "height": 24, "transform": "rotate(0deg)" } } };
  var platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  var {
    t: t2
  } = initVueI18n(messages);
  var _sfc_main2 = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t2("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t2("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t2("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
      renderWhole: true
    }, [
      !$data.webviewHide && $props.status === "loading" && $props.showIcon ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("loading-indicator", {
        key: 0,
        style: (0, import_vue3.normalizeStyle)({ color: $props.color, width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        animating: true,
        class: "uni-load-more__img uni-load-more__img--nvue"
      }, null, 4)) : (0, import_vue3.createCommentVNode)("v-if", true),
      $props.showText ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
        key: 1,
        class: "uni-load-more__text",
        style: (0, import_vue3.normalizeStyle)({ color: $props.color })
      }, (0, import_vue3.toDisplayString)($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)) : (0, import_vue3.createCommentVNode)("v-if", true)
    ]);
  }
  var __easycom_02 = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_02]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-data-checkbox.js
  var import_vue4 = __toESM(require_vue());
  var _style_03 = { "uni-data-loading": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 36, "paddingLeft": 10, "color": "#999999" } }, "uni-data-checklist": { "": { "position": "relative", "zIndex": 0, "flex": 1 } }, "checklist-group": { ".uni-data-checklist ": { "flexDirection": "row", "flexWrap": "wrap" }, ".uni-data-checklist .is-list": { "flexDirection": "column" } }, "checklist-box": { ".uni-data-checklist .checklist-group ": { "flexDirection": "row", "alignItems": "center", "position": "relative", "marginTop": 5, "marginRight": 25, "marginBottom": 5, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--button": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "transitionProperty": "borderColor", "transitionDuration": 200 }, ".uni-data-checklist .checklist-group .is--button.is-disable": { "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--button.is-checked": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--button.is-checked.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag": { "marginRight": 10, "paddingTop": 5, "paddingRight": 10, "paddingBottom": 5, "paddingLeft": 10, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 3, "backgroundColor": "#f5f5f5" }, ".uni-data-checklist .checklist-group .is--tag.is-disable": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .is--tag.is-checked": { "backgroundColor": "#2979ff", "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .is--list": { "paddingTop": 10, "paddingRight": 15, "paddingBottom": 10, "paddingLeft": 0, "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0 }, ".uni-data-checklist .checklist-group .is--list.is-list-border": { "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#eeeeee" } }, "hidden": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "absolute", "opacity": 0 } }, "checklist-content": { ".uni-data-checklist .checklist-group .checklist-box ": { "flex": 1, "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "checklist-text": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "fontSize": 14, "color": "#666666", "marginLeft": 5, "lineHeight": 14 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag ": { "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "color": "#666666" }, ".uni-data-checklist .checklist-group .checklist-box.is--tag.is-checked ": { "color": "#ffffff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "color": "#999999" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "color": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkobx__list": { ".uni-data-checklist .checklist-group .checklist-box .checklist-content ": { "borderRightWidth": 1, "borderRightColor": "#007aff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#007aff", "borderBottomStyle": "solid", "height": 12, "width": 6, "left": -5, "transformOrigin": "center", "transform": "rotate(45deg)", "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-content ": { "opacity": 1, "borderColor": "#2979ff" } }, "checkbox__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 4, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { "borderColor": "#2979ff", "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { "opacity": 0.4 } }, "checkbox__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .checkbox__inner ": { "position": "absolute", "top": 2, "left": 5, "height": 8, "width": 4, "borderRightWidth": 1, "borderRightColor": "#ffffff", "borderRightStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#ffffff", "borderBottomStyle": "solid", "opacity": 0, "transformOrigin": "center", "transform": "rotate(40deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checkbox__inner ": { "opacity": 1, "transform": "rotate(45deg)" } }, "radio__inner": { ".uni-data-checklist .checklist-group .checklist-box ": { "justifyContent": "center", "alignItems": "center", "position": "relative", "width": 16, "height": 16, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#DCDFE6", "borderRadius": 16, "backgroundColor": "#ffffff", "zIndex": 1 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { "borderColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { "opacity": 0.4 }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { "backgroundColor": "#F2F6FC", "borderColor": "#DCDFE6" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { "borderColor": "#2979ff" } }, "radio__inner-icon": { ".uni-data-checklist .checklist-group .checklist-box .radio__inner ": { "width": 8, "height": 8, "borderRadius": 10, "opacity": 0 }, ".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .radio__inner ": { "opacity": 1, "backgroundColor": "#2979ff" }, ".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .radio__inner ": { "opacity": 1 } }, "@TRANSITION": { "checklist-box": { "property": "borderColor", "duration": 200 } } };
  var _sfc_main3 = {
    name: "uniDataChecklist",
    mixins: [pn.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "\u6682\u65E0\u6570\u636E"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "\u67E5\u770B\u66F4\u591A",
          contentrefresh: "\u52A0\u8F7D\u4E2D",
          contentnomore: "\u6CA1\u6709\u66F4\u591A"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e) {
        const values = e.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      getDataList(value) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value)) {
            value = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value.length > 0) {
              let have = value.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.mode !== "list") {
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        }
        if (this.mode === "tag") {
          styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        styles["background-color"] = item.selected ? selectedColor : "#fff";
        styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        if (!item.selected && item.disabled) {
          styles["background-color"] = "#F2F6FC";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.mode === "tag") {
          styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
        } else {
          styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
        }
        if (!item.selected && item.disabled) {
          styles.color = "#999";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom((0, import_vue4.resolveDynamicComponent)("uni-load-more"), __easycom_02);
    const _component_checkbox = (0, import_vue4.resolveComponent)("checkbox");
    const _component_label = (0, import_vue4.resolveComponent)("label");
    const _component_checkbox_group = (0, import_vue4.resolveComponent)("checkbox-group");
    const _component_radio = (0, import_vue4.resolveComponent)("radio");
    const _component_radio_group = (0, import_vue4.resolveComponent)("radio-group");
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
      class: "uni-data-checklist",
      style: (0, import_vue4.normalizeStyle)({ "margin-top": $data.isTop + "px" }),
      renderWhole: true
    }, [
      !$data.isLocal ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
        key: 0,
        class: "uni-data-loading"
      }, [
        !_ctx.mixinDatacomErrorMessage ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_uni_load_more, {
          key: 0,
          status: "loading",
          iconType: "snow",
          iconSize: 18,
          "content-text": $data.contentText
        }, null, 8, ["content-text"])) : ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("u-text", { key: 1 }, (0, import_vue4.toDisplayString)(_ctx.mixinDatacomErrorMessage), 1))
      ])) : ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(import_vue4.Fragment, { key: 1 }, [
        $props.multiple ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_checkbox_group, {
          key: 0,
          class: (0, import_vue4.normalizeClass)(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
          onChange: $options.chagne
        }, {
          default: (0, import_vue4.withCtx)(() => [
            ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(import_vue4.Fragment, null, (0, import_vue4.renderList)($data.dataList, (item, index) => {
              return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_label, {
                class: (0, import_vue4.normalizeClass)(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                style: (0, import_vue4.normalizeStyle)(item.styleBackgroud),
                key: index
              }, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createVNode)(_component_checkbox, {
                    class: "hidden",
                    hidden: "",
                    disabled: $props.disabled || !!item.disabled,
                    value: item[$props.map.value] + "",
                    checked: item.selected
                  }, null, 8, ["disabled", "value", "checked"]),
                  $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
                    key: 0,
                    class: "checkbox__inner",
                    style: (0, import_vue4.normalizeStyle)(item.styleIcon)
                  }, [
                    (0, import_vue4.createElementVNode)("view", { class: "checkbox__inner-icon" })
                  ], 4)) : (0, import_vue4.createCommentVNode)("v-if", true),
                  (0, import_vue4.createElementVNode)("view", {
                    class: (0, import_vue4.normalizeClass)(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                  }, [
                    (0, import_vue4.createElementVNode)("u-text", {
                      class: "checklist-text",
                      style: (0, import_vue4.normalizeStyle)(item.styleIconText)
                    }, (0, import_vue4.toDisplayString)(item[$props.map.text]), 5),
                    $props.mode === "list" && $props.icon === "right" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
                      key: 0,
                      class: "checkobx__list",
                      style: (0, import_vue4.normalizeStyle)(item.styleBackgroud)
                    }, null, 4)) : (0, import_vue4.createCommentVNode)("v-if", true)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["class", "style"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["class", "onChange"])) : ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_radio_group, {
          key: 1,
          class: (0, import_vue4.normalizeClass)(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
          onChange: $options.chagne
        }, {
          default: (0, import_vue4.withCtx)(() => [
            (0, import_vue4.createCommentVNode)(" "),
            ((0, import_vue4.openBlock)(true), (0, import_vue4.createElementBlock)(import_vue4.Fragment, null, (0, import_vue4.renderList)($data.dataList, (item, index) => {
              return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)(_component_label, {
                class: (0, import_vue4.normalizeClass)(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                style: (0, import_vue4.normalizeStyle)(item.styleBackgroud),
                key: index
              }, {
                default: (0, import_vue4.withCtx)(() => [
                  (0, import_vue4.createVNode)(_component_radio, {
                    class: "hidden",
                    hidden: "",
                    disabled: $props.disabled || item.disabled,
                    value: item[$props.map.value] + "",
                    checked: item.selected
                  }, null, 8, ["disabled", "value", "checked"]),
                  $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
                    key: 0,
                    class: "radio__inner",
                    style: (0, import_vue4.normalizeStyle)(item.styleBackgroud)
                  }, [
                    (0, import_vue4.createElementVNode)("view", {
                      class: "radio__inner-icon",
                      style: (0, import_vue4.normalizeStyle)(item.styleIcon)
                    }, null, 4)
                  ], 4)) : (0, import_vue4.createCommentVNode)("v-if", true),
                  (0, import_vue4.createElementVNode)("view", {
                    class: (0, import_vue4.normalizeClass)(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                  }, [
                    (0, import_vue4.createElementVNode)("u-text", {
                      class: "checklist-text",
                      style: (0, import_vue4.normalizeStyle)(item.styleIconText)
                    }, (0, import_vue4.toDisplayString)(item[$props.map.text]), 5),
                    $props.mode === "list" && $props.icon === "right" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("view", {
                      key: 0,
                      style: (0, import_vue4.normalizeStyle)(item.styleRightIcon),
                      class: "checkobx__list"
                    }, null, 4)) : (0, import_vue4.createCommentVNode)("v-if", true)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["class", "style"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["class", "onChange"]))
      ], 64))
    ], 4);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main3, [["render", _sfc_render3], ["styles", [_style_03]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue"]]);

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-section.js
  var import_vue5 = __toESM(require_vue());
  var _style_04 = { "uni-section": { "": { "backgroundColor": "#ffffff" } }, "uni-section-header": { ".uni-section ": { "position": "relative", "flexDirection": "row", "alignItems": "center", "paddingTop": 12, "paddingRight": 10, "paddingBottom": 12, "paddingLeft": 10, "fontWeight": "normal" } }, "uni-section-header__decoration": { ".uni-section ": { "marginRight": 6, "backgroundColor": "#2979ff" }, ".uni-section .line": { "width": 4, "height": 12, "borderRadius": 10 }, ".uni-section .circle": { "width": 8, "height": 8, "borderTopRightRadius": 50, "borderTopLeftRadius": 50, "borderBottomLeftRadius": 50, "borderBottomRightRadius": 50 }, ".uni-section .square": { "width": 8, "height": 8 } }, "uni-section-header__content": { ".uni-section ": { "flexDirection": "column", "flex": 1, "color": "#333333" } }, "distraction": { ".uni-section .uni-section-header__content ": { "flexDirection": "row", "alignItems": "center" } }, "uni-section-header__content-sub": { ".uni-section ": { "marginTop": 2 } }, "uni-section-header__slot-right": { ".uni-section ": { "fontSize": 14 } }, "uni-section-content": { ".uni-section ": { "fontSize": 14 } } };
  var _sfc_main4 = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
      class: "uni-section",
      renderWhole: true
    }, [
      (0, import_vue5.createElementVNode)("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("view", {
          key: 0,
          class: (0, import_vue5.normalizeClass)(["uni-section-header__decoration", $props.type])
        }, null, 2)) : (0, import_vue5.renderSlot)(_ctx.$slots, "decoration", { key: 1 }),
        (0, import_vue5.createElementVNode)("view", { class: "uni-section-header__content" }, [
          (0, import_vue5.createElementVNode)("u-text", {
            style: (0, import_vue5.normalizeStyle)({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
            class: (0, import_vue5.normalizeClass)(["uni-section__content-title", { "distraction": !$props.subTitle }])
          }, (0, import_vue5.toDisplayString)($props.title), 7),
          $props.subTitle ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("u-text", {
            key: 0,
            style: (0, import_vue5.normalizeStyle)({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
            class: "uni-section-header__content-sub"
          }, (0, import_vue5.toDisplayString)($props.subTitle), 5)) : (0, import_vue5.createCommentVNode)("v-if", true)
        ]),
        (0, import_vue5.createElementVNode)("view", { class: "uni-section-header__slot-right" }, [
          (0, import_vue5.renderSlot)(_ctx.$slots, "right")
        ])
      ]),
      (0, import_vue5.createElementVNode)("view", {
        class: "uni-section-content",
        style: (0, import_vue5.normalizeStyle)({ padding: $options._padding })
      }, [
        (0, import_vue5.renderSlot)(_ctx.$slots, "default")
      ], 4)
    ]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main4, [["render", _sfc_render4], ["styles", [_style_04]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/pages/extUI/radius/radius.js
  var _style_05 = { "header": { "": { "display": "flex", "flexDirection": "row", "flexWrap": "wrap" } }, "margin": { "": { "display": "flex", "height": 200, "marginTop": 10, "marginRight": 10, "marginBottom": 10, "marginLeft": 10, "overflow": "hidden", "borderRadius": 5, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee" } }, "margin-item": { "": { "display": "flex", "flex": 1 } }, "box": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "flex": 1 } }, "actions": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "action-label": { "": { "width": 50, "marginLeft": 10, "marginRight": 10, "fontSize": 12 } } };
  var _sfc_main5 = {
    data() {
      return {
        radiusClass: "uni-radius-lg",
        formData: {
          direction: ["t", "b"],
          size: "lg"
        },
        directionData: [{
          value: "t",
          text: "\u5DE6\u4E0A+\u53F3\u4E0A"
        }, {
          value: "r",
          text: "\u53F3\u4E0A+\u53F3\u4E0B"
        }, {
          value: "b",
          text: "\u5DE6\u4E0B+\u53F3\u4E0B"
        }, {
          value: "l",
          text: "\u53F3\u4E0A+\u5DE6\u4E0B"
        }, {
          value: "tl",
          text: "\u5DE6\u4E0A"
        }, {
          value: "tr",
          text: "\u53F3\u4E0A"
        }, {
          value: "bl",
          text: "\u5DE6\u4E0B"
        }, {
          value: "br",
          text: "\u53F3\u4E0B"
        }],
        sizeData: [{
          value: "0",
          text: "\u65E0"
        }, {
          value: "sm",
          text: "\u5C0F"
        }, {
          value: "lg",
          text: "\u5E38\u89C4"
        }, {
          value: "xl",
          text: "\u5927"
        }, {
          value: "circle",
          text: "\u5706"
        }, {
          value: "pill",
          text: "\u6700\u5927\u5316"
        }]
      };
    },
    onLoad() {
    },
    methods: {
      change(e, type) {
        let {
          direction,
          size
        } = this.formData;
        this.radiusClass = "";
        direction.forEach((v2) => {
          this.radiusClass += `uni-radius-${v2}-${size} `;
        });
      }
    }
  };
  function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-card"), __easycom_0);
    const _component_uni_data_checkbox = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-data-checkbox"), __easycom_1);
    const _component_uni_section = resolveEasycom((0, import_vue6.resolveDynamicComponent)("uni-section"), __easycom_2);
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue6.createElementVNode)("view", { class: "container" }, [
        (0, import_vue6.createVNode)(_component_uni_card, {
          "is-shadow": false,
          "is-full": ""
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "header" }, [
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "\u4F7F\u7528\u8FB9\u6846\u534A\u5F84\u8F85\u52A9\u6837\u5F0F\u5BF9\u5143\u7D20\u5FEB\u901F\u5E94\u7528"),
              (0, import_vue6.createElementVNode)("u-text", null, " "),
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-primary uni-px-3 uni-h6" }, "border-radius"),
              (0, import_vue6.createElementVNode)("u-text", null, " "),
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "\u6837\u5F0F\u3002")
            ]),
            (0, import_vue6.createElementVNode)("view", { class: "uni-mt-5 header" }, [
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "\u89C4\u5219\u4E3A"),
              (0, import_vue6.createElementVNode)("u-text", null, " "),
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "uni-radius-${direction}-${size}")
            ]),
            (0, import_vue6.createElementVNode)("view", { class: "uni-mt-5 header" }, [
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "\u5982\u679C\u9700\u8981\u56DB\u8FB9\uFF0C\u5219\u4E0D\u9700\u8981\u6307\u5B9A"),
              (0, import_vue6.createElementVNode)("u-text", null, " "),
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-primary uni-pl-3 uni-h6" }, "direction")
            ]),
            (0, import_vue6.createElementVNode)("view", { class: "uni-mt-5" }, [
              (0, import_vue6.createElementVNode)("u-text", { class: "uni-h6" }, "\u5404\u503C\u7684\u542B\u4E49\u8BF7\u53C2\u8003\u6587\u6863")
            ])
          ]),
          _: 1
        }),
        (0, import_vue6.createVNode)(_component_uni_section, {
          title: "\u6548\u679C\u5C55\u793A",
          type: "line"
        }, {
          default: (0, import_vue6.withCtx)(() => [
            (0, import_vue6.createElementVNode)("view", { class: "margin" }, [
              (0, import_vue6.createElementVNode)("view", {
                class: (0, import_vue6.normalizeClass)(["box uni-primary-bg uni-ma-5", [$data.radiusClass]])
              }, [
                (0, import_vue6.createElementVNode)("u-text", { class: "uni-white" }, "\u901A\u8FC7\u4E0B\u9762\u7684\u9009\u9879\u63A7\u5236\u5706\u89D2")
              ], 2)
            ]),
            (0, import_vue6.createElementVNode)("view", { class: "actions uni-mt-10" }, [
              (0, import_vue6.createElementVNode)("u-text", { class: "action-label" }, "\u4F4D\u7F6E"),
              (0, import_vue6.createVNode)(_component_uni_data_checkbox, {
                modelValue: $data.formData.direction,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.direction = $event),
                multiple: "",
                localdata: $data.directionData,
                onChange: _cache[1] || (_cache[1] = ($event) => $options.change($event, 1))
              }, null, 8, ["modelValue", "localdata"])
            ]),
            (0, import_vue6.createElementVNode)("view", { class: "actions uni-mt-3 uni-mb-10" }, [
              (0, import_vue6.createElementVNode)("u-text", { class: "action-label" }, "\u5927\u5C0F"),
              (0, import_vue6.createVNode)(_component_uni_data_checkbox, {
                modelValue: $data.formData.size,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.size = $event),
                localdata: $data.sizeData,
                onChange: _cache[3] || (_cache[3] = ($event) => $options.change($event, 2))
              }, null, 8, ["modelValue", "localdata"])
            ])
          ]),
          _: 1
        })
      ])
    ]);
  }
  var radius = /* @__PURE__ */ _export_sfc(_sfc_main5, [["render", _sfc_render5], ["styles", [_style_05]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/radius/radius.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/radius/radius";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    radius.mpType = "page";
    const app = Vue.createPageApp(radius, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...radius.styles || []]));
    app.mount("#root");
  }
})();
