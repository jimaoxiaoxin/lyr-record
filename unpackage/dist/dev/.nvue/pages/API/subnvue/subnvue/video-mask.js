import { openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString } from "vue";
import { _ as _export_sfc } from "../../../../plugin-vue_export-helper.js";
var _style_0 = { "wrapper": { "": { "position": "relative", "flex": 1, "backgroundColor": "rgba(0,0,0,0)" } }, "list": { "": { "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "rgba(0,0,0,0.7)" } }, "cell": { "": { "paddingTop": "10rpx", "paddingRight": 0, "paddingBottom": "10rpx", "paddingLeft": 0, "flexDirection": "row", "flexWrap": "nowrap" } }, "name": { "": { "flex": 0, "fontSize": "20rpx", "marginRight": "20rpx", "color": "#FF5A5F" } }, "content": { "": { "flex": 1, "fontSize": "20rpx", "color": "#F4F5F6" } } };
const _sfc_main = {
  data() {
    return {
      lists: [],
      interval: null,
      yourTexts: [
        {
          name: "\u5B66\u5458A",
          content: "\u8001\u5E08\u8BB2\u7684\u771F\u597D"
        },
        {
          name: "\u5B66\u5458B",
          content: "uni-app\u503C\u5F97\u5B66\u4E60"
        },
        {
          name: "\u5B66\u5458C",
          content: "\u8001\u5E08\uFF0C\u8FD8\u6709\u5B9E\u6218\u4F8B\u5B50\u5417\uFF1F"
        },
        {
          name: "\u5B66\u5458D",
          content: "\u8001\u5E08\uFF0C\u8BF7\u95EE\u662F\u4E0D\u662F\u8981\u5148\u5B66\u4F1Avue\u624D\u80FD\u5B66uni-app\uFF1F"
        },
        {
          name: "\u5B66\u5458E",
          content: "\u53D7\u6559\u4E86\uFF0Cuni-app\u592A\u725B\u4E86"
        }
      ]
    };
  },
  created() {
    uni.$on("play-video", (data) => {
      if (data.status === "open") {
        this.addItem();
      } else {
        this.closeItem();
      }
    });
  },
  beforeDestroy() {
    uni.$off("play-video");
    this.closeItem();
  },
  methods: {
    addItem() {
      const vm = this;
      vm.lists = [{
        name: "\u5B66\u5458E",
        content: "\u53D7\u6559\u4E86\uFF0Cuni-app\u592A\u725B\u4E86"
      }];
      const dom = weex.requireModule("dom");
      vm.interval = setInterval(() => {
        if (vm.lists.length > 15) {
          vm.lists.unshift();
        }
        vm.lists.push({
          name: vm.yourTexts[vm.lists.length % 4].name,
          content: vm.yourTexts[vm.lists.length % 4].content
        });
        if (vm.lists.length > 5) {
          vm.$nextTick(() => {
            if (vm.$refs["item" + (vm.lists.length - 1)]) {
              dom.scrollToElement(vm.$refs["item" + (vm.lists.length - 1)][0]);
            }
          });
        }
      }, 3500);
    },
    closeItem() {
      if (this.interval)
        clearInterval(this.interval);
    }
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
    createElementVNode("div", { class: "wrapper" }, [
      createElementVNode("list", { class: "list" }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.lists, (item, index) => {
          return openBlock(), createElementBlock("cell", {
            key: index,
            ref_for: true,
            ref: "item" + index,
            class: "cell"
          }, [
            createElementVNode("u-text", { class: "name" }, toDisplayString(item.name) + ":", 1),
            createElementVNode("u-text", { class: "content" }, toDisplayString(item.content), 1)
          ]);
        }), 128))
      ])
    ])
  ]);
}
var videoMask = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/API/subnvue/subnvue/video-mask.nvue"]]);
export { videoMask as default };
