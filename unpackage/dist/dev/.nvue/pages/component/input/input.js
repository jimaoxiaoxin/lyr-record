import { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, normalizeClass } from "vue";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
var _style_0 = { "nvue-page-root": { "": { "backgroundColor": "#F8F8F8", "paddingBottom": 20 } }, "page-title": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": "35rpx", "paddingRight": "35rpx", "paddingBottom": "35rpx", "paddingLeft": "35rpx" } }, "page-title__wrapper": { "": { "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20, "borderBottomColor": "#D8D8D8", "borderBottomWidth": 1 } }, "page-title__text": { "": { "fontSize": 16, "height": 48, "lineHeight": 48, "color": "#BEBEBE" } }, "title": { "": { "paddingTop": 5, "paddingRight": 13, "paddingBottom": 5, "paddingLeft": 13 } }, "uni-form-item__title": { "": { "fontSize": 16, "lineHeight": 24 } }, "uni-input-wrapper": { "": { "paddingTop": 8, "paddingRight": 13, "paddingBottom": 8, "paddingLeft": 13, "flexDirection": "row", "flexWrap": "nowrap", "backgroundColor": "#FFFFFF" } }, "uni-input": { "": { "height": 28, "lineHeight": 28, "fontSize": 15, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "flex": 1, "backgroundColor": "#FFFFFF" } }, "uni-icon": { "": { "fontFamily": "uniicons", "fontSize": 24, "fontWeight": "normal", "fontStyle": "normal", "width": 24, "height": 24, "lineHeight": 24, "color": "#999999" } }, "uni-eye-active": { "": { "color": "#007AFF" } } };
const _sfc_main = {
  data() {
    return {
      title: "input",
      focus: false,
      inputValue: "",
      showClearIcon: false,
      inputClearValue: "",
      changeValue: "",
      showPassword: true,
      src: "../../../static/eye-1.png",
      platform: "",
      isNvue: false
    };
  },
  methods: {
    onKeyInput: function(event) {
      this.inputValue = event.detail.value;
    },
    replaceInput: function(event) {
      var value = event.detail.value;
      if (value === "11") {
        this.changeValue = "2";
      }
    },
    hideKeyboard: function(event) {
      if (event.detail.value === "123") {
        uni.hideKeyboard();
      }
    },
    clearInput: function(event) {
      this.inputClearValue = event.detail.value;
      if (event.detail.value.length > 0) {
        this.showClearIcon = true;
      } else {
        this.showClearIcon = false;
      }
    },
    clearIcon: function() {
      this.inputClearValue = "";
      this.showClearIcon = false;
    },
    changePassword: function() {
      this.showPassword = !this.showPassword;
    },
    onFocus() {
      this.$mp.page.$getAppWebview().setStyle({
        softinputNavBar: "none"
      });
    },
    onBlur() {
      this.$mp.page.$getAppWebview().setStyle({
        softinputNavBar: "auto"
      });
    }
  },
  onLoad() {
    this.platform = uni.getSystemInfoSync().platform;
    this.isNvue = true;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "nvue-page-root" }, [
      createElementVNode("view", { class: "page-title" }, [
        createElementVNode("view", { class: "page-title__wrapper" }, [
          createElementVNode("u-text", { class: "page-title__text" }, toDisplayString($data.title), 1)
        ])
      ]),
      createElementVNode("view", { class: "uni-common-mt" }, [
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u53EF\u81EA\u52A8\u805A\u7126\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              focus: "",
              placeholder: "\u81EA\u52A8\u83B7\u5F97\u7126\u70B9"
            })
          ])
        ]),
        $data.platform === "ios" && !$data.isNvue ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-form-item uni-column"
        }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u9690\u85CF iOS \u8F6F\u952E\u76D8\u4E0A\u7684\u5BFC\u822A\u6761")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholder: "\u89E6\u6478\u5176\u4ED6\u5730\u65B9\u6536\u8D77\u952E\u76D8",
              onFocus: _cache[0] || (_cache[0] = (...args) => $options.onFocus && $options.onFocus(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => $options.onBlur && $options.onBlur(...args))
            }, null, 32)
          ])
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u641C\u7D22")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              confirmType: "search",
              placeholder: "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u641C\u7D22"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u53D1\u9001")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              confirmType: "send",
              placeholder: "\u952E\u76D8\u53F3\u4E0B\u89D2\u6309\u94AE\u663E\u793A\u4E3A\u53D1\u9001"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u6700\u5927\u8F93\u5165\u957F\u5EA6\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              maxlength: "10",
              placeholder: "\u6700\u5927\u8F93\u5165\u957F\u5EA6\u4E3A10"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u5B9E\u65F6\u83B7\u53D6\u8F93\u5165\u503C\uFF1A" + toDisplayString($data.inputValue), 1)
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.onKeyInput && $options.onKeyInput(...args)),
              placeholder: "\u8F93\u5165\u540C\u6B65\u5230view\u4E2D"
            }, null, 32)
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u8F93\u5165\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              onInput: [
                _cache[3] || (_cache[3] = (...args) => $options.replaceInput && $options.replaceInput(...args)),
                _cache[4] || (_cache[4] = ($event) => $data.changeValue = $event.detail.value)
              ],
              modelValue: $data.changeValue,
              placeholder: "\u8FDE\u7EED\u7684\u4E24\u4E2A1\u4F1A\u53D8\u62102"
            }, null, 40, ["modelValue"])
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u952E\u76D8\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              ref: "input1",
              onInput: _cache[5] || (_cache[5] = (...args) => $options.hideKeyboard && $options.hideKeyboard(...args)),
              placeholder: "\u8F93\u5165123\u81EA\u52A8\u6536\u8D77\u952E\u76D8"
            }, null, 544)
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u6570\u5B57\u8F93\u5165\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              type: "number",
              placeholder: "\u8FD9\u662F\u4E00\u4E2A\u6570\u5B57\u8F93\u5165\u6846"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u5BC6\u7801\u8F93\u5165\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              password: "",
              type: "text",
              placeholder: "\u8FD9\u662F\u4E00\u4E2A\u5BC6\u7801\u8F93\u5165\u6846"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u5E26\u5C0F\u6570\u70B9\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              type: "digit",
              placeholder: "\u5E26\u5C0F\u6570\u70B9\u7684\u6570\u5B57\u952E\u76D8"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              type: "idcard",
              placeholder: "\u8EAB\u4EFD\u8BC1\u8F93\u5165\u952E\u76D8"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u63A7\u5236\u5360\u4F4D\u7B26\u989C\u8272\u7684 input")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholderStyle: "color:#F76260",
              placeholder: "\u5360\u4F4D\u7B26\u5B57\u4F53\u662F\u7EA2\u8272\u7684"
            })
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u5E26\u6E05\u9664\u6309\u94AE\u7684\u8F93\u5165\u6846")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholder: "\u5E26\u6E05\u9664\u6309\u94AE\u7684\u8F93\u5165\u6846",
              value: $data.inputClearValue,
              onInput: _cache[6] || (_cache[6] = (...args) => $options.clearInput && $options.clearInput(...args))
            }, null, 40, ["value"]),
            $data.showClearIcon ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-icon",
              onClick: _cache[7] || (_cache[7] = (...args) => $options.clearIcon && $options.clearIcon(...args))
            }, "\uE434")) : createCommentVNode("v-if", true)
          ])
        ]),
        createElementVNode("view", { class: "uni-form-item uni-column" }, [
          createElementVNode("view", { class: "title" }, [
            createElementVNode("u-text", { class: "uni-form-item__title" }, "\u53EF\u67E5\u770B\u5BC6\u7801\u7684\u8F93\u5165\u6846")
          ]),
          createElementVNode("view", { class: "uni-input-wrapper" }, [
            createElementVNode("u-input", {
              class: "uni-input",
              placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
              password: $data.showPassword
            }, null, 8, ["password"]),
            createElementVNode("u-text", {
              class: normalizeClass(["uni-icon", [!$data.showPassword ? "uni-eye-active" : ""]]),
              onClick: _cache[8] || (_cache[8] = (...args) => $options.changePassword && $options.changePassword(...args))
            }, "\uE568", 2)
          ])
        ])
      ])
    ])
  ]);
}
var input = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/component/input/input.nvue"]]);
export { input as default };
