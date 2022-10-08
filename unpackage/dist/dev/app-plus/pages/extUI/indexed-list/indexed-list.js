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

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-app.es.js
  var import_vue = __toESM(require_vue());
  Object.freeze({});
  Object.freeze([]);
  var isString = (val) => typeof val === "string";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-icons.js
  var import_vue2 = __toESM(require_vue());

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/plugin-vue_export-helper.js
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/uni-icons.js
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var iconUrl = "/uni_modules/uni-icons/components/uni-icons/uniicons.ttf";
  var _style_0 = { "uni-icons": { "": { "fontFamily": "uniicons", "textDecoration": "none", "textAlign": "center" } } };
  var getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  var domModule = weex.requireModule("dom");
  domModule.addRule("fontFace", {
    "fontFamily": "uniicons",
    "src": "url('" + iconUrl + "')"
  });
  var _sfc_main = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("u-text", {
      style: (0, import_vue2.normalizeStyle)({ color: $props.color, "font-size": $options.iconSize }),
      class: "uni-icons",
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, (0, import_vue2.toDisplayString)($options.unicode), 5);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);

  // ../../../../../../Users/clement.lin.local/Documents/HBuilderProjects/test1/unpackage/dist/dev/.nvue/pages/extUI/indexed-list/indexed-list.js
  var import_vue3 = __toESM(require_vue());
  var _style_0$1 = { "uni-indexed-list__list": { "": { "backgroundColor": "#ffffff", "flexDirection": "column", "borderTopStyle": "solid", "borderTopWidth": 1, "borderTopColor": "#DEDEDE" } }, "uni-indexed-list__item": { "": { "fontSize": 14, "flex": 1, "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-indexed-list__item-container": { "": { "paddingLeft": 15, "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "uni-indexed-list__item-border": { "": { "flex": 1, "position": "relative", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "height": 50, "paddingTop": 25, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 0, "borderBottomStyle": "solid", "borderBottomWidth": 1, "borderBottomColor": "#DEDEDE" } }, "uni-indexed-list__item-border--last": { "": { "borderBottomWidth": 0 } }, "uni-indexed-list__item-content": { "": { "flex": 1, "fontSize": 14, "color": "#191919" } }, "uni-indexed-list": { "": { "flexDirection": "row" } }, "uni-indexed-list__title-wrapper": { "": { "backgroundColor": "#f7f7f7" } }, "uni-indexed-list__title": { "": { "paddingTop": 6, "paddingRight": 12, "paddingBottom": 6, "paddingLeft": 12, "lineHeight": 24, "fontSize": 16, "fontWeight": "500" } } };
  var _sfc_main$2 = {
    name: "UniIndexedList",
    emits: ["itemClick"],
    props: {
      loaded: {
        type: Boolean,
        default: false
      },
      idx: {
        type: Number,
        default: 0
      },
      list: {
        type: Object,
        default() {
          return {};
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(idx, index) {
        this.$emit("itemClick", {
          idx,
          index
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-icons"), __easycom_1);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", { renderWhole: true }, [
      $props.loaded || $props.list.itemIndex < 15 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 0,
        class: "uni-indexed-list__title-wrapper"
      }, [
        $props.list.items && $props.list.items.length > 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("u-text", {
          key: 0,
          class: "uni-indexed-list__title"
        }, (0, import_vue3.toDisplayString)($props.list.key), 1)) : (0, import_vue3.createCommentVNode)("v-if", true)
      ])) : (0, import_vue3.createCommentVNode)("v-if", true),
      ($props.loaded || $props.list.itemIndex < 15) && $props.list.items && $props.list.items.length > 0 ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 1,
        class: "uni-indexed-list__list"
      }, [
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(import_vue3.Fragment, null, (0, import_vue3.renderList)($props.list.items, (item, index) => {
          return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
            key: index,
            class: "uni-indexed-list__item",
            hoverClass: "uni-indexed-list__item--hover"
          }, [
            (0, import_vue3.createElementVNode)("view", {
              class: "uni-indexed-list__item-container",
              onClick: ($event) => $options.onClick($props.idx, index)
            }, [
              (0, import_vue3.createElementVNode)("view", {
                class: (0, import_vue3.normalizeClass)(["uni-indexed-list__item-border", { "uni-indexed-list__item-border--last": index === $props.list.items.length - 1 }])
              }, [
                $props.showSelect ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
                  key: 0,
                  style: { "margin-right": "20rpx" }
                }, [
                  (0, import_vue3.createVNode)(_component_uni_icons, {
                    type: item.checked ? "checkbox-filled" : "circle",
                    color: item.checked ? "#007aff" : "#C0C0C0",
                    size: "24"
                  }, null, 8, ["type", "color"])
                ])) : (0, import_vue3.createCommentVNode)("v-if", true),
                (0, import_vue3.createElementVNode)("u-text", { class: "uni-indexed-list__item-content" }, (0, import_vue3.toDisplayString)(item.name), 1)
              ], 2)
            ], 8, ["onClick"])
          ]);
        }), 128))
      ])) : (0, import_vue3.createCommentVNode)("v-if", true)
    ]);
  }
  var indexedListItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$1]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list-item.vue"]]);
  var _style_02 = { "uni-indexed-list": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "flexDirection": "row" } }, "uni-indexed-list__scroll": { "": { "flex": 1 } }, "uni-indexed-list__menu": { "": { "width": 24, "flexDirection": "column" } }, "uni-indexed-list__menu-item": { "": { "flex": 1, "alignItems": "center", "justifyContent": "center" } }, "uni-indexed-list__menu-text": { "": { "fontSize": 12, "textAlign": "center", "color": "#aaaaaa" } }, "uni-indexed-list__menu-text--active": { "": { "borderRadius": 16, "width": 16, "height": 16, "lineHeight": 16, "backgroundColor": "#007aff", "color": "#ffffff" } }, "uni-indexed-list__alert-wrapper": { "": { "position": "absolute", "left": 0, "top": 0, "right": 0, "bottom": 0, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "uni-indexed-list__alert": { "": { "width": 80, "height": 80, "borderRadius": 80, "textAlign": "center", "lineHeight": 80, "fontSize": 35, "color": "#ffffff", "backgroundColor": "rgba(0,0,0,0.5)" } } };
  var dom = weex.requireModule("dom");
  function throttle(func, delay) {
    var prev = Date.now();
    return function() {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    };
  }
  function touchMove(e) {
    let pageY = e.touches[0].pageY;
    let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
    if (this.touchmoveIndex === index) {
      return false;
    }
    let item = this.lists[index];
    if (item) {
      dom.scrollToElement(this.$refs["uni-indexed-list-" + index][0], {
        animated: false
      });
      this.touchmoveIndex = index;
    }
  }
  var throttleTouchMove = throttle(touchMove, 40);
  var _sfc_main$1 = {
    name: "UniIndexedList",
    components: {
      indexedListItem
    },
    emits: ["click"],
    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lists: [],
        winHeight: 0,
        itemHeight: 0,
        winOffsetY: 0,
        touchmove: false,
        touchmoveIndex: -1,
        scrollViewId: "",
        touchmovable: true,
        loaded: false,
        isPC: false
      };
    },
    watch: {
      options: {
        handler: function() {
          this.setList();
        },
        deep: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.setList();
      }, 50);
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    },
    methods: {
      setList() {
        this.lists = [];
        this.options.forEach((value, index) => {
          if (value.data.length === 0) {
            return;
          }
          let indexBefore = index;
          let items = value.data.map((item) => {
            let obj = {};
            obj["key"] = value.letter;
            obj["name"] = item;
            obj["itemIndex"] = index;
            index++;
            obj.checked = item.checked ? item.checked : false;
            return obj;
          });
          this.lists.push({
            title: value.letter,
            key: value.letter,
            items,
            itemIndex: indexBefore
          });
        });
        dom.getComponentRect(this.$refs["list"], (res) => {
          this.winOffsetY = res.size.top;
          this.winHeight = res.size.height;
          this.itemHeight = this.winHeight / this.lists.length;
        });
      },
      touchStart(e) {
        this.touchmove = true;
        let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
        let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
        let item = this.lists[index];
        if (item) {
          this.scrollViewId = "uni-indexed-list-" + index;
          this.touchmoveIndex = index;
          dom.scrollToElement(this.$refs["uni-indexed-list-" + index][0], {
            animated: false
          });
        }
      },
      touchMove(e) {
        throttleTouchMove.call(this, e);
      },
      touchEnd() {
        this.touchmove = false;
      },
      mousedown(e) {
        if (!this.isPC)
          return;
        this.touchStart(e);
      },
      mousemove(e) {
        if (!this.isPC)
          return;
        this.touchMove(e);
      },
      mouseleave(e) {
        if (!this.isPC)
          return;
        this.touchEnd(e);
      },
      onClick(e) {
        let {
          idx,
          index
        } = e;
        let obj = {};
        for (let key in this.lists[idx].items[index]) {
          obj[key] = this.lists[idx].items[index][key];
        }
        let select = [];
        if (this.showSelect) {
          this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked;
          this.lists.forEach((value, idx2) => {
            value.items.forEach((item, index2) => {
              if (item.checked) {
                let obj2 = {};
                for (let key in this.lists[idx2].items[index2]) {
                  obj2[key] = this.lists[idx2].items[index2][key];
                }
                select.push(obj2);
              }
            });
          });
        }
        this.$emit("click", {
          item: obj,
          select
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_indexed_list_item = (0, import_vue3.resolveComponent)("indexed-list-item");
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
      class: "uni-indexed-list",
      ref: "list",
      id: "list",
      renderWhole: true
    }, [
      (0, import_vue3.createElementVNode)("list", {
        class: "uni-indexed-list__scroll",
        scrollable: "true",
        showScrollbar: "false"
      }, [
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(import_vue3.Fragment, null, (0, import_vue3.renderList)($data.lists, (list, idx) => {
          return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("cell", {
            key: idx,
            ref_for: true,
            ref: "uni-indexed-list-" + idx
          }, [
            (0, import_vue3.createVNode)(_component_indexed_list_item, {
              list,
              loaded: $data.loaded,
              idx,
              showSelect: $props.showSelect,
              onItemClick: $options.onClick
            }, null, 8, ["list", "loaded", "idx", "showSelect", "onItemClick"])
          ]);
        }), 128))
      ]),
      (0, import_vue3.createElementVNode)("view", {
        class: "uni-indexed-list__menu",
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchStart && $options.touchStart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = (0, import_vue3.withModifiers)((...args) => $options.touchMove && $options.touchMove(...args), ["stop", "prevent"])),
        onTouchend: _cache[2] || (_cache[2] = (...args) => $options.touchEnd && $options.touchEnd(...args)),
        onMousedown: _cache[3] || (_cache[3] = (0, import_vue3.withModifiers)((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
        onMousemove: _cache[4] || (_cache[4] = (0, import_vue3.withModifiers)((...args) => $options.mousemove && $options.mousemove(...args), ["stop", "prevent"])),
        onMouseleave: _cache[5] || (_cache[5] = (0, import_vue3.withModifiers)((...args) => $options.mouseleave && $options.mouseleave(...args), ["stop"]))
      }, [
        ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(import_vue3.Fragment, null, (0, import_vue3.renderList)($data.lists, (list, key) => {
          return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
            key,
            class: (0, import_vue3.normalizeClass)(["uni-indexed-list__menu-item", $data.touchmoveIndex == key ? "uni-indexed-list__menu--active" : ""])
          }, [
            (0, import_vue3.createElementVNode)("u-text", {
              class: (0, import_vue3.normalizeClass)(["uni-indexed-list__menu-text", $data.touchmoveIndex == key ? "uni-indexed-list__menu-text--active" : ""])
            }, (0, import_vue3.toDisplayString)(list.key), 3)
          ], 2);
        }), 128))
      ], 32),
      $data.touchmove ? ((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("view", {
        key: 0,
        class: "uni-indexed-list__alert-wrapper"
      }, [
        (0, import_vue3.createElementVNode)("u-text", { class: "uni-indexed-list__alert" }, (0, import_vue3.toDisplayString)($data.lists[$data.touchmoveIndex].key), 1)
      ])) : (0, import_vue3.createCommentVNode)("v-if", true)
    ], 512);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_02]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.vue"]]);
  var airport = {
    "list": [{
      "letter": "A",
      "data": [
        "\u963F\u514B\u82CF\u673A\u573A",
        "\u963F\u62C9\u5C71\u53E3\u673A\u573A",
        "\u963F\u52D2\u6CF0\u673A\u573A",
        "\u963F\u91CC\u6606\u838E\u673A\u573A",
        "\u5B89\u5E86\u5929\u67F1\u5C71\u673A\u573A",
        "\u6FB3\u95E8\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "B",
      "data": [
        "\u4FDD\u5C71\u673A\u573A",
        "\u5305\u5934\u673A\u573A",
        "\u5317\u6D77\u798F\u6210\u673A\u573A",
        "\u5317\u4EAC\u5357\u82D1\u673A\u573A",
        "\u5317\u4EAC\u9996\u90FD\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "C",
      "data": [
        "\u957F\u767D\u5C71\u673A\u573A",
        "\u957F\u6625\u9F99\u5609\u56FD\u9645\u673A\u573A",
        "\u5E38\u5FB7\u6843\u82B1\u6E90\u673A\u573A",
        "\u660C\u90FD\u90A6\u8FBE\u673A\u573A",
        "\u957F\u6C99\u9EC4\u82B1\u56FD\u9645\u673A\u573A",
        "\u957F\u6CBB\u738B\u6751\u673A\u573A",
        "\u5E38\u5DDE\u5954\u725B\u673A\u573A",
        "\u6210\u90FD\u53CC\u6D41\u56FD\u9645\u673A\u573A",
        "\u8D64\u5CF0\u673A\u573A"
      ]
    }, {
      "letter": "D",
      "data": [
        "\u5927\u7406\u673A\u573A",
        "\u5927\u8FDE\u5468\u6C34\u5B50\u56FD\u9645\u673A\u573A",
        "\u5927\u5E86\u8428\u5C14\u56FE\u673A\u573A",
        "\u5927\u540C\u4E1C\u738B\u5E84\u673A\u573A",
        "\u8FBE\u5DDE\u6CB3\u5E02\u673A\u573A",
        "\u4E39\u4E1C\u6D6A\u5934\u673A\u573A",
        "\u5FB7\u5B8F\u8292\u5E02\u673A\u573A",
        "\u8FEA\u5E86\u9999\u683C\u91CC\u62C9\u673A\u573A",
        "\u4E1C\u8425\u673A\u573A",
        "\u6566\u714C\u673A\u573A"
      ]
    }, {
      "letter": "E",
      "data": [
        "\u9102\u5C14\u591A\u65AF\u673A\u573A",
        "\u6069\u65BD\u8BB8\u5BB6\u576A\u673A\u573A",
        "\u4E8C\u8FDE\u6D69\u7279\u8D5B\u4E4C\u82CF\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "F",
      "data": [
        "\u961C\u9633\u897F\u5173\u673A\u573A",
        "\u798F\u5DDE\u957F\u4E50\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "G",
      "data": [
        "\u8D63\u5DDE\u9EC4\u91D1\u673A\u573A",
        "\u683C\u5C14\u6728\u673A\u573A",
        "\u56FA\u539F\u516D\u76D8\u5C71\u673A\u573A",
        "\u5E7F\u5143\u76D8\u9F99\u673A\u573A",
        "\u5E7F\u5DDE\u767D\u4E91\u56FD\u9645\u673A\u573A",
        "\u6842\u6797\u4E24\u6C5F\u56FD\u9645\u673A\u573A",
        "\u8D35\u9633\u9F99\u6D1E\u5821\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "H",
      "data": [
        "\u54C8\u5C14\u6EE8\u592A\u5E73\u56FD\u9645\u673A\u573A",
        "\u54C8\u5BC6\u673A\u573A",
        "\u6D77\u53E3\u7F8E\u5170\u56FD\u9645\u673A\u573A",
        "\u6D77\u62C9\u5C14\u4E1C\u5C71\u56FD\u9645\u673A\u573A",
        "\u90AF\u90F8\u673A\u573A",
        "\u6C49\u4E2D\u673A\u573A",
        "\u676D\u5DDE\u8427\u5C71\u56FD\u9645\u673A\u573A",
        "\u5408\u80A5\u9A86\u5C97\u56FD\u9645\u673A\u573A",
        "\u548C\u7530\u673A\u573A",
        "\u9ED1\u6CB3\u673A\u573A",
        "\u547C\u548C\u6D69\u7279\u767D\u5854\u56FD\u9645\u673A\u573A",
        "\u6DEE\u5B89\u6D9F\u6C34\u673A\u573A",
        "\u9EC4\u5C71\u5C6F\u6EAA\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "I",
      "data": []
    }, {
      "letter": "J",
      "data": [
        "\u6D4E\u5357\u9065\u5899\u56FD\u9645\u673A\u573A",
        "\u6D4E\u5B81\u66F2\u961C\u673A\u573A",
        "\u9E21\u897F\u5174\u51EF\u6E56\u673A\u573A",
        "\u4F73\u6728\u65AF\u4E1C\u90CA\u673A\u573A",
        "\u5609\u5CEA\u5173\u673A\u573A",
        "\u9526\u5DDE\u5C0F\u5CAD\u5B50\u673A\u573A",
        "\u666F\u5FB7\u9547\u673A\u573A",
        "\u4E95\u5188\u5C71\u673A\u573A",
        "\u4E5D\u6C5F\u5E90\u5C71\u673A\u573A",
        "\u4E5D\u5BE8\u9EC4\u9F99\u673A\u573A"
      ]
    }, {
      "letter": "K",
      "data": [
        "\u5580\u4EC0\u673A\u573A",
        "\u514B\u62C9\u739B\u4F9D\u673A\u573A",
        "\u5E93\u8F66\u9F9F\u5179\u673A\u573A",
        "\u5E93\u5C14\u52D2\u673A\u573A",
        "\u6606\u660E\u5DEB\u5BB6\u575D\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "L",
      "data": [
        "\u62C9\u8428\u8D21\u560E\u673A\u573A",
        "\u5170\u5DDE\u4E2D\u5DDD\u673A\u573A",
        "\u4E3D\u6C5F\u4E09\u4E49\u673A\u573A",
        "\u9ECE\u5E73\u673A\u573A",
        "\u8FDE\u4E91\u6E2F\u767D\u5854\u57E0\u673A\u573A",
        "\u4E34\u6CA7\u673A\u573A",
        "\u4E34\u6C82\u673A\u573A",
        "\u6797\u829D\u7C73\u6797\u673A\u573A",
        "\u67F3\u5DDE\u767D\u83B2\u673A\u573A",
        "\u9F99\u5CA9\u51A0\u8C78\u5C71\u673A\u573A",
        "\u6CF8\u5DDE\u84DD\u7530\u673A\u573A",
        "\u6D1B\u9633\u5317\u90CA\u673A\u573A"
      ]
    }, {
      "letter": "M",
      "data": [
        "\u6EE1\u6D32\u91CC\u897F\u90CA\u673A\u573A",
        "\u7EF5\u9633\u5357\u90CA\u673A\u573A",
        "\u6F20\u6CB3\u53E4\u83B2\u673A\u573A",
        "\u7261\u4E39\u6C5F\u6D77\u6D6A\u673A\u573A"
      ]
    }, {
      "letter": "N",
      "data": [
        "\u5357\u660C\u660C\u5317\u56FD\u9645\u673A\u573A",
        "\u5357\u5145\u9AD8\u576A\u673A\u573A",
        "\u5357\u4EAC\u7984\u53E3\u56FD\u9645\u673A\u573A",
        "\u5357\u5B81\u5434\u5729\u673A\u573A",
        "\u5357\u901A\u5174\u4E1C\u673A\u573A",
        "\u5357\u9633\u59DC\u8425\u673A\u573A",
        "\u5B81\u6CE2\u680E\u793E\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "O",
      "data": []
    }, {
      "letter": "P",
      "data": [
        "\u666E\u6D31\u601D\u8305\u673A\u573A"
      ]
    }, {
      "letter": "Q",
      "data": [
        "\u9F50\u9F50\u54C8\u5C14\u4E09\u5BB6\u5B50\u673A\u573A",
        "\u79E6\u7687\u5C9B\u5C71\u6D77\u5173\u673A\u573A",
        "\u9752\u5C9B\u6D41\u4EAD\u56FD\u9645\u673A\u573A",
        "\u8862\u5DDE\u673A\u573A",
        "\u6CC9\u5DDE\u664B\u6C5F\u673A\u573A"
      ]
    }, {
      "letter": "R",
      "data": [
        "\u65E5\u5580\u5219\u548C\u5E73\u673A\u573A"
      ]
    }, {
      "letter": "S",
      "data": [
        "\u4E09\u4E9A\u51E4\u51F0\u56FD\u9645\u673A\u573A",
        "\u6C55\u5934\u5916\u7802\u673A\u573A",
        "\u4E0A\u6D77\u8679\u6865\u56FD\u9645\u673A\u573A",
        "\u4E0A\u6D77\u6D66\u4E1C\u56FD\u9645\u673A\u573A",
        "\u6DF1\u5733\u5B9D\u5B89\u56FD\u9645\u673A\u573A",
        "\u6C88\u9633\u6843\u4ED9\u56FD\u9645\u673A\u573A",
        "\u77F3\u5BB6\u5E84\u6B63\u5B9A\u56FD\u9645\u673A\u573A",
        "\u82CF\u5357\u7855\u653E\u56FD\u9645\u673A\u573A"
      ]
    }, {
      "letter": "T",
      "data": [
        "\u5854\u57CE\u673A\u573A",
        "\u592A\u539F\u6B66\u5BBF\u56FD\u9645\u673A\u573A",
        "\u53F0\u5DDE\u8DEF\u6865\u673A\u573A (\u9EC4\u5CA9\u673A\u573A)",
        "\u5510\u5C71\u4E09\u5973\u6CB3\u673A\u573A",
        "\u817E\u51B2\u9A7C\u5CF0\u673A\u573A",
        "\u5929\u6D25\u6EE8\u6D77\u56FD\u9645\u673A\u573A",
        "\u901A\u8FBD\u673A\u573A",
        "\u94DC\u4EC1\u51E4\u51F0\u673A\u573A"
      ]
    }, {
      "letter": "U",
      "data": []
    }, {
      "letter": "V",
      "data": []
    }, {
      "letter": "W",
      "data": [
        "\u4E07\u5DDE\u4E94\u6865\u673A\u573A",
        "\u6F4D\u574A\u673A\u573A",
        "\u5A01\u6D77\u5927\u6C34\u6CCA\u673A\u573A",
        "\u6587\u5C71\u666E\u8005\u9ED1\u673A\u573A",
        "\u6E29\u5DDE\u6C38\u5F3A\u56FD\u9645\u673A\u573A",
        "\u4E4C\u6D77\u673A\u573A",
        "\u6B66\u6C49\u5929\u6CB3\u56FD\u9645\u673A\u573A",
        "\u4E4C\u5170\u6D69\u7279\u673A\u573A",
        "\u4E4C\u9C81\u6728\u9F50\u5730\u7A9D\u5821\u56FD\u9645\u673A\u573A",
        "\u6B66\u5937\u5C71\u673A\u573A",
        "\u68A7\u5DDE\u957F\u6D32\u5C9B\u673A\u573A"
      ]
    }, {
      "letter": "X",
      "data": [
        "\u897F\u5B89\u54B8\u9633\u56FD\u9645\u673A\u573A",
        "\u897F\u660C\u9752\u5C71\u673A\u573A",
        "\u9521\u6797\u6D69\u7279\u673A\u573A",
        "\u897F\u5B81\u66F9\u5BB6\u5821\u673A\u573A",
        "\u897F\u53CC\u7248\u7EB3\u560E\u6D12\u673A\u573A",
        "\u53A6\u95E8\u9AD8\u5D0E\u56FD\u9645\u673A\u573A",
        "\u9999\u6E2F\u56FD\u9645\u673A\u573A",
        "\u8944\u9633\u5218\u96C6\u673A\u573A",
        "\u5174\u4E49\u673A\u573A",
        "\u5F90\u5DDE\u89C2\u97F3\u673A\u573A"
      ]
    }, {
      "letter": "Y",
      "data": [
        "\u5EF6\u5B89\u4E8C\u5341\u91CC\u5821\u673A\u573A",
        "\u76D0\u57CE\u673A\u573A",
        "\u5EF6\u5409\u671D\u9633\u5DDD\u673A\u573A",
        "\u70DF\u53F0\u83B1\u5C71\u56FD\u9645\u673A\u573A",
        "\u5B9C\u5BBE\u83DC\u575D\u673A\u573A",
        "\u5B9C\u660C\u4E09\u5CE1\u673A\u573A",
        "\u4F0A\u6625\u6797\u90FD\u673A\u573A",
        "\u4F0A\u5B81\u673A\u573A",
        "\u4E49\u4E4C\u673A\u573A",
        "\u94F6\u5DDD\u6CB3\u4E1C\u673A\u573A",
        "\u6C38\u5DDE\u96F6\u9675\u673A\u573A",
        "\u6986\u6797\u6986\u9633\u673A\u573A",
        "\u7389\u6811\u5DF4\u5858\u673A\u573A",
        "\u8FD0\u57CE\u5F20\u5B5D\u673A\u573A"
      ]
    }, {
      "letter": "Z",
      "data": [
        "\u6E5B\u6C5F\u673A\u573A",
        "\u662D\u901A\u673A\u573A",
        "\u90D1\u5DDE\u65B0\u90D1\u56FD\u9645\u673A\u573A",
        "\u82B7\u6C5F\u673A\u573A",
        "\u91CD\u5E86\u6C5F\u5317\u56FD\u9645\u673A\u573A",
        "\u4E2D\u536B\u9999\u5C71\u673A\u573A",
        "\u821F\u5C71\u6731\u5BB6\u5C16\u673A\u573A",
        "\u73E0\u6D77\u4E09\u7076\u673A\u573A"
      ]
    }]
  };
  var _sfc_main2 = {
    components: {},
    data() {
      return {
        list: airport.list
      };
    },
    methods: {
      bindClick(e) {
        formatAppLog("log", "at pages/extUI/indexed-list/indexed-list.nvue:16", "\u70B9\u51FBitem\uFF0C\u8FD4\u56DE\u6570\u636E" + JSON.stringify(e));
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_indexed_list = resolveEasycom((0, import_vue3.resolveDynamicComponent)("uni-indexed-list"), __easycom_0);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue3.createVNode)(_component_uni_indexed_list, {
        options: $data.list,
        "show-select": true,
        onClick: $options.bindClick
      }, null, 8, ["options", "onClick"])
    ]);
  }
  var indexedList = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/indexed-list/indexed-list.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/extUI/indexed-list/indexed-list";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    indexedList.mpType = "page";
    const app = Vue.createPageApp(indexedList, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...indexedList.styles || []]));
    app.mount("#root");
  }
})();
