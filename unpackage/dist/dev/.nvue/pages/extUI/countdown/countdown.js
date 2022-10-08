import { _ as __easycom_0 } from "../../../uni-card.js";
import { openBlock, createElementBlock, normalizeStyle, toDisplayString, createCommentVNode, createElementVNode, resolveDynamicComponent, createVNode, withCtx } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { i as initVueI18n } from "../../../uni-i18n.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
var en = {
  "uni-countdown.day": "day",
  "uni-countdown.h": "h",
  "uni-countdown.m": "m",
  "uni-countdown.s": "s"
};
var zhHans = {
  "uni-countdown.day": "\u5929",
  "uni-countdown.h": "\u65F6",
  "uni-countdown.m": "\u5206",
  "uni-countdown.s": "\u79D2"
};
var zhHant = {
  "uni-countdown.day": "\u5929",
  "uni-countdown.h": "\u6642",
  "uni-countdown.m": "\u5206",
  "uni-countdown.s": "\u79D2"
};
var messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
var _style_0 = { "uni-countdown": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "flex-start", "alignItems": "center" } }, "uni-countdown__splitor": { "": { "marginTop": 0, "marginRight": 2, "marginBottom": 0, "marginLeft": 2, "fontSize": 14, "color": "#333333" } }, "uni-countdown__number": { "": { "borderRadius": 3, "textAlign": "center", "fontSize": 14 } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$1 = {
  name: "UniCountdown",
  emits: ["timeup"],
  props: {
    showDay: {
      type: Boolean,
      default: true
    },
    showColon: {
      type: Boolean,
      default: true
    },
    start: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333"
    },
    fontSize: {
      type: Number,
      default: 14
    },
    splitorColor: {
      type: String,
      default: "#333"
    },
    day: {
      type: Number,
      default: 0
    },
    hour: {
      type: Number,
      default: 0
    },
    minute: {
      type: Number,
      default: 0
    },
    second: {
      type: Number,
      default: 0
    },
    timestamp: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      timer: null,
      syncFlag: false,
      d: "00",
      h: "00",
      i: "00",
      s: "00",
      leftTime: 0,
      seconds: 0
    };
  },
  computed: {
    dayText() {
      return t("uni-countdown.day");
    },
    hourText(val) {
      return t("uni-countdown.h");
    },
    minuteText(val) {
      return t("uni-countdown.m");
    },
    secondText(val) {
      return t("uni-countdown.s");
    },
    timeStyle() {
      const {
        color,
        backgroundColor,
        fontSize
      } = this;
      return {
        color,
        backgroundColor,
        fontSize: `${fontSize}px`,
        width: `${fontSize * 22 / 14}px`,
        lineHeight: `${fontSize * 20 / 14}px`,
        borderRadius: `${fontSize * 3 / 14}px`
      };
    },
    splitorStyle() {
      const { splitorColor, fontSize, backgroundColor } = this;
      return {
        color: splitorColor,
        fontSize: `${fontSize * 12 / 14}px`,
        margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
      };
    }
  },
  watch: {
    day(val) {
      this.changeFlag();
    },
    hour(val) {
      this.changeFlag();
    },
    minute(val) {
      this.changeFlag();
    },
    second(val) {
      this.changeFlag();
    },
    start: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal) {
          this.startData();
        } else {
          if (!oldVal)
            return;
          clearInterval(this.timer);
        }
      }
    }
  },
  created: function(e) {
    this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
    this.countDown();
  },
  unmounted() {
    clearInterval(this.timer);
  },
  methods: {
    toSeconds(timestamp, day, hours, minutes, seconds) {
      if (timestamp) {
        return timestamp - parseInt(new Date().getTime() / 1e3, 10);
      }
      return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
    },
    timeUp() {
      clearInterval(this.timer);
      this.$emit("timeup");
    },
    countDown() {
      let seconds = this.seconds;
      let [day, hour, minute, second] = [0, 0, 0, 0];
      if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24));
        hour = Math.floor(seconds / (60 * 60)) - day * 24;
        minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
        second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
      } else {
        this.timeUp();
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      this.d = day;
      this.h = hour;
      this.i = minute;
      this.s = second;
    },
    startData() {
      this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
      if (this.seconds <= 0) {
        this.seconds = this.toSeconds(0, 0, 0, 0, 0);
        this.countDown();
        return;
      }
      clearInterval(this.timer);
      this.countDown();
      this.timer = setInterval(() => {
        this.seconds--;
        if (this.seconds < 0) {
          this.timeUp();
          return;
        }
        this.countDown();
      }, 1e3);
    },
    update() {
      this.startData();
    },
    changeFlag() {
      if (!this.syncFlag) {
        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
        this.startData();
        this.syncFlag = true;
      }
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-countdown",
    renderWhole: true
  }, [
    $props.showDay ? (openBlock(), createElementBlock("u-text", {
      key: 0,
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.d), 5)) : createCommentVNode("v-if", true),
    $props.showDay ? (openBlock(), createElementBlock("u-text", {
      key: 1,
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($options.dayText), 5)) : createCommentVNode("v-if", true),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.h), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($props.showColon ? ":" : $options.hourText), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.i), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($props.showColon ? ":" : $options.minuteText), 5),
    createElementVNode("u-text", {
      style: normalizeStyle([$options.timeStyle]),
      class: "uni-countdown__number"
    }, toDisplayString($data.s), 5),
    !$props.showColon ? (openBlock(), createElementBlock("u-text", {
      key: 2,
      style: normalizeStyle([$options.splitorStyle]),
      class: "uni-countdown__splitor"
    }, toDisplayString($options.secondText), 5)) : createCommentVNode("v-if", true)
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue"]]);
const _sfc_main = {
  components: {},
  data() {
    return {
      testHour: 1,
      testMinute: 0,
      testSecond: 0,
      start: false,
      timeupSecond: 10
    };
  },
  mounted() {
    setTimeout(() => {
      this.testHour = 1;
      this.testMinute = 1;
      this.testSecond = 0;
      this.start = true;
    }, 3e3);
    setTimeout(() => {
      this.start = false;
    }, 1e4);
  },
  methods: {
    timeup() {
      uni.showToast({
        title: "\u65F6\u95F4\u5230"
      });
      this.timeupSecond = 29;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_card = resolveEasycom(resolveDynamicComponent("uni-card"), __easycom_0);
  const _component_uni_countdown = resolveEasycom(resolveDynamicComponent("uni-countdown"), __easycom_1);
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createVNode(_component_uni_card, { "is-full": "" }, {
        default: withCtx(() => [
          createElementVNode("u-text", { class: "uni-h6" }, "\u5012\u8BA1\u65F6\u7EC4\u4EF6\u4E3B\u8981\u7528\u4E8E\u4FC3\u9500\u5546\u54C1\u5269\u4F59\u65F6\u95F4\uFF0C\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7B49\u5F85\u65F6\u95F4\u7B49\u573A\u666F")
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4E00\u822C\u7528\u6CD5",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            day: 1,
            hour: 1,
            minute: 12,
            second: 40
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4E0D\u663E\u793A\u5929\u6570",
        subTitle: "\u8BBE\u7F6E show-day = false \u4E0D\u663E\u793A\u5929",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "show-day": false,
            hour: 12,
            minute: 12,
            second: 12
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u6587\u5B57\u5206\u9694\u7B26",
        subTitle: "\u8BBE\u7F6E show-colon \u5C5E\u6027\u8BBE\u7F6E\u5206\u9694\u7B26\u6837\u5F0F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            minute: 30,
            second: 0,
            "show-colon": false
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4FEE\u6539\u989C\u8272",
        subTitle: "\u8BBE\u7F6E color \\ background \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u989C\u8272",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            day: 1,
            hour: 2,
            minute: 30,
            second: 0,
            color: "#FFFFFF",
            "background-color": "#007AFF"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4FEE\u6539\u5B57\u4F53\u5927\u5C0F",
        subTitle: "\u8BBE\u7F6E font-size \u5C5E\u6027\u8BBE\u7F6E\u7EC4\u4EF6\u5927\u5C0F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "font-size": 30,
            day: 1,
            hour: 2,
            minute: 30,
            second: 0
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u4FEE\u6539\u989C\u8272 + \u5B57\u4F53\u5927\u5C0F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "font-size": 30,
            day: 1,
            hour: 2,
            minute: 30,
            second: 0,
            color: "#FFFFFF",
            "background-color": "#007AFF"
          })
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u81EA\u7531\u63A7\u5236\u5F00\u59CB/\u6682\u505C",
        subTitle: "\u8BBE\u7F6E start \u5C5E\u6027\u63A7\u5236\u662F\u5426\u81EA\u52A8\u5F00\u542F",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            start: $data.start,
            day: 1,
            hour: 1,
            minute: 12,
            second: 40
          }, null, 8, ["start"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u5012\u8BA1\u65F6\u56DE\u8C03\u4E8B\u4EF6",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "show-day": false,
            second: $data.timeupSecond,
            onTimeup: $options.timeup
          }, null, 8, ["second", "onTimeup"])
        ]),
        _: 1
      }),
      createVNode(_component_uni_section, {
        title: "\u52A8\u6001\u8D4B\u503C",
        type: "line",
        padding: ""
      }, {
        default: withCtx(() => [
          createVNode(_component_uni_countdown, {
            "show-day": false,
            hour: $data.testHour,
            minute: $data.testMinute,
            second: $data.testSecond
          }, null, 8, ["hour", "minute", "second"])
        ]),
        _: 1
      })
    ])
  ]);
}
var countdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/countdown/countdown.nvue"]]);
export { countdown as default };
