import { f as formatAppLog, r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as __easycom_2 } from "../../../uni-section.js";
import { openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, toDisplayString, resolveComponent, withModifiers, createVNode, withCtx, Fragment, renderList, resolveDynamicComponent, createTextVNode } from "vue";
import { i as initVueI18n } from "../../../uni-i18n.es.js";
import { _ as _export_sfc } from "../../../plugin-vue_export-helper.js";
var calendar$1 = {
  lunarInfo: [
    19416,
    19168,
    42352,
    21717,
    53856,
    55632,
    91476,
    22176,
    39632,
    21970,
    19168,
    42422,
    42192,
    53840,
    119381,
    46400,
    54944,
    44450,
    38320,
    84343,
    18800,
    42160,
    46261,
    27216,
    27968,
    109396,
    11104,
    38256,
    21234,
    18800,
    25958,
    54432,
    59984,
    28309,
    23248,
    11104,
    100067,
    37600,
    116951,
    51536,
    54432,
    120998,
    46416,
    22176,
    107956,
    9680,
    37584,
    53938,
    43344,
    46423,
    27808,
    46416,
    86869,
    19872,
    42416,
    83315,
    21168,
    43432,
    59728,
    27296,
    44710,
    43856,
    19296,
    43748,
    42352,
    21088,
    62051,
    55632,
    23383,
    22176,
    38608,
    19925,
    19152,
    42192,
    54484,
    53840,
    54616,
    46400,
    46752,
    103846,
    38320,
    18864,
    43380,
    42160,
    45690,
    27216,
    27968,
    44870,
    43872,
    38256,
    19189,
    18800,
    25776,
    29859,
    59984,
    27480,
    23232,
    43872,
    38613,
    37600,
    51552,
    55636,
    54432,
    55888,
    30034,
    22176,
    43959,
    9680,
    37584,
    51893,
    43344,
    46240,
    47780,
    44368,
    21977,
    19360,
    42416,
    86390,
    21168,
    43312,
    31060,
    27296,
    44368,
    23378,
    19296,
    42726,
    42208,
    53856,
    60005,
    54576,
    23200,
    30371,
    38608,
    19195,
    19152,
    42192,
    118966,
    53840,
    54560,
    56645,
    46496,
    22224,
    21938,
    18864,
    42359,
    42160,
    43600,
    111189,
    27936,
    44448,
    84835,
    37744,
    18936,
    18800,
    25776,
    92326,
    59984,
    27424,
    108228,
    43744,
    41696,
    53987,
    51552,
    54615,
    54432,
    55888,
    23893,
    22176,
    42704,
    21972,
    21200,
    43448,
    43344,
    46240,
    46758,
    44368,
    21920,
    43940,
    42416,
    21168,
    45683,
    26928,
    29495,
    27296,
    44368,
    84821,
    19296,
    42352,
    21732,
    53600,
    59752,
    54560,
    55968,
    92838,
    22224,
    19168,
    43476,
    41680,
    53584,
    62034,
    54560
  ],
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],
  sTermInfo: [
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "9778397bd19801ec9210c965cc920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd197c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bcf97c3598082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd19801ec9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bd07f1487f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b97bd197c36c9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b70c9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "977837f0e37f149b0723b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0723b06bd",
    "7f07e7f0e37f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e37f14998083b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14898082b0723b02d5",
    "7f07e7f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66aa89801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e26665b66a449801e9808297c35",
    "665f67f0e37f1489801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722"
  ],
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
  lYearDays: function(y) {
    var i;
    var sum = 348;
    for (i = 32768; i > 8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },
  leapMonth: function(y) {
    return this.lunarInfo[y - 1900] & 15;
  },
  leapDays: function(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 65536 ? 30 : 29;
    }
    return 0;
  },
  monthDays: function(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    return this.lunarInfo[y - 1900] & 65536 >> m ? 30 : 29;
  },
  solarDays: function(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    var ms = m - 1;
    if (ms == 1) {
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },
  toGanZhiYear: function(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0)
      ganKey = 10;
    if (zhiKey == 0)
      zhiKey = 12;
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },
  toAstro: function(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7";
  },
  toGanZhi: function(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },
  getTerm: function(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _info = [
      parseInt("0x" + _table.substr(0, 5)).toString(),
      parseInt("0x" + _table.substr(5, 5)).toString(),
      parseInt("0x" + _table.substr(10, 5)).toString(),
      parseInt("0x" + _table.substr(15, 5)).toString(),
      parseInt("0x" + _table.substr(20, 5)).toString(),
      parseInt("0x" + _table.substr(25, 5)).toString()
    ];
    var _calday = [
      _info[0].substr(0, 1),
      _info[0].substr(1, 2),
      _info[0].substr(3, 1),
      _info[0].substr(4, 2),
      _info[1].substr(0, 1),
      _info[1].substr(1, 2),
      _info[1].substr(3, 1),
      _info[1].substr(4, 2),
      _info[2].substr(0, 1),
      _info[2].substr(1, 2),
      _info[2].substr(3, 1),
      _info[2].substr(4, 2),
      _info[3].substr(0, 1),
      _info[3].substr(1, 2),
      _info[3].substr(3, 1),
      _info[3].substr(4, 2),
      _info[4].substr(0, 1),
      _info[4].substr(1, 2),
      _info[4].substr(3, 1),
      _info[4].substr(4, 2),
      _info[5].substr(0, 1),
      _info[5].substr(1, 2),
      _info[5].substr(3, 1),
      _info[5].substr(4, 2)
    ];
    return parseInt(_calday[n - 1]);
  },
  toChinaMonth: function(m) {
    if (m > 12 || m < 1) {
      return -1;
    }
    var s = this.nStr3[m - 1];
    s += "\u6708";
    return s;
  },
  toChinaDay: function(d) {
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;
      case 20:
        s = "\u4E8C\u5341";
        break;
      case 30:
        s = "\u4E09\u5341";
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return s;
  },
  getAnimal: function(y) {
    return this.Animals[(y - 4) % 12];
  },
  solar2lunar: function(y, m, d) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;
    var leap = 0;
    var temp = 0;
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    if (nWeek == 0) {
      nWeek = 7;
    }
    var year = i;
    var leap = this.leapMonth(i);
    var isLeap = false;
    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year);
      } else {
        temp = this.monthDays(year, i);
      }
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    var month = i;
    var day = offset + 1;
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);
    var firstNode = this.getTerm(y, m * 2 - 1);
    var secondNode = this.getTerm(y, m * 2);
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    var astro = this.toAstro(m, d);
    return { "lYear": year, "lMonth": month, "lDay": day, "Animal": this.getAnimal(year), "IMonthCn": (isLeap ? "\u95F0" : "") + this.toChinaMonth(month), "IDayCn": this.toChinaDay(day), "cYear": y, "cMonth": m, "cDay": d, "gzYear": gzY, "gzMonth": gzM, "gzDay": gzD, "isToday": isToday, "isLeap": isLeap, "nWeek": nWeek, "ncWeek": "\u661F\u671F" + cWeek, "isTerm": isTerm, "Term": Term, "astro": astro };
  },
  lunar2solar: function(y, m, d, isLeapMonth) {
    var isLeapMonth = !!isLeapMonth;
    var leapMonth = this.leapMonth(y);
    this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {
      return -1;
    }
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    var day = this.monthDays(y, m);
    var _day = day;
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    }
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    if (isLeapMonth) {
      offset += day;
    }
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 864e5 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  }
};
class Calendar {
  constructor({
    date,
    selected,
    startDate,
    endDate,
    range
  } = {}) {
    this.date = this.getDate(new Date());
    this.selected = selected || [];
    this.startDate = startDate;
    this.endDate = endDate;
    this.range = range;
    this.cleanMultipleStatus();
    this.weeks = {};
  }
  setDate(date) {
    this.selectDate = this.getDate(date);
    this._getWeek(this.selectDate.fullDate);
  }
  cleanMultipleStatus() {
    this.multipleStatus = {
      before: "",
      after: "",
      data: []
    };
  }
  resetSatrtDate(startDate) {
    this.startDate = startDate;
  }
  resetEndDate(endDate) {
    this.endDate = endDate;
  }
  getDate(date, AddDayCount = 0, str = "day") {
    if (!date) {
      date = new Date();
    }
    if (typeof date !== "object") {
      date = date.replace(/-/g, "/");
    }
    const dd = new Date(date);
    switch (str) {
      case "day":
        dd.setDate(dd.getDate() + AddDayCount);
        break;
      case "month":
        if (dd.getDate() === 31) {
          dd.setDate(dd.getDate() + AddDayCount);
        } else {
          dd.setMonth(dd.getMonth() + AddDayCount);
        }
        break;
      case "year":
        dd.setFullYear(dd.getFullYear() + AddDayCount);
        break;
    }
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return {
      fullDate: y + "-" + m + "-" + d,
      year: y,
      month: m,
      date: d,
      day: dd.getDay()
    };
  }
  _getLastMonthDays(firstDay, full) {
    let dateArr = [];
    for (let i = firstDay; i > 0; i--) {
      const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
      dateArr.push({
        date: beforeDate,
        month: full.month - 1,
        lunar: this.getlunar(full.year, full.month - 1, beforeDate),
        disable: true
      });
    }
    return dateArr;
  }
  _currentMonthDys(dateData, full) {
    let dateArr = [];
    let fullDate = this.date.fullDate;
    for (let i = 1; i <= dateData; i++) {
      let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
      let isDay = fullDate === nowDate;
      let info = this.selected && this.selected.find((item) => {
        if (this.dateEqual(nowDate, item.date)) {
          return item;
        }
      });
      let disableBefore = true;
      let disableAfter = true;
      if (this.startDate) {
        disableBefore = this.dateCompare(this.startDate, nowDate);
      }
      if (this.endDate) {
        disableAfter = this.dateCompare(nowDate, this.endDate);
      }
      let multiples = this.multipleStatus.data;
      let checked = false;
      let multiplesStatus = -1;
      if (this.range) {
        if (multiples) {
          multiplesStatus = multiples.findIndex((item) => {
            return this.dateEqual(item, nowDate);
          });
        }
        if (multiplesStatus !== -1) {
          checked = true;
        }
      }
      let data = {
        fullDate: nowDate,
        year: full.year,
        date: i,
        multiple: this.range ? checked : false,
        beforeMultiple: this.dateEqual(this.multipleStatus.before, nowDate),
        afterMultiple: this.dateEqual(this.multipleStatus.after, nowDate),
        month: full.month,
        lunar: this.getlunar(full.year, full.month, i),
        disable: !(disableBefore && disableAfter),
        isDay
      };
      if (info) {
        data.extraInfo = info;
      }
      dateArr.push(data);
    }
    return dateArr;
  }
  _getNextMonthDays(surplus, full) {
    let dateArr = [];
    for (let i = 1; i < surplus + 1; i++) {
      dateArr.push({
        date: i,
        month: Number(full.month) + 1,
        lunar: this.getlunar(full.year, Number(full.month) + 1, i),
        disable: true
      });
    }
    return dateArr;
  }
  getInfo(date) {
    if (!date) {
      date = new Date();
    }
    const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
    return dateInfo;
  }
  dateCompare(startDate, endDate) {
    startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
    endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
    if (startDate <= endDate) {
      return true;
    } else {
      return false;
    }
  }
  dateEqual(before, after) {
    before = new Date(before.replace("-", "/").replace("-", "/"));
    after = new Date(after.replace("-", "/").replace("-", "/"));
    if (before.getTime() - after.getTime() === 0) {
      return true;
    } else {
      return false;
    }
  }
  geDateAll(begin, end) {
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    db.setFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = new Date();
    de.setFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
    for (var k = unixDb; k <= unixDe; ) {
      k = k + 24 * 60 * 60 * 1e3;
      arr.push(this.getDate(new Date(parseInt(k))).fullDate);
    }
    return arr;
  }
  getlunar(year, month, date) {
    return calendar$1.solar2lunar(year, month, date);
  }
  setSelectInfo(data, value) {
    this.selected = value;
    this._getWeek(data);
  }
  setMultiple(fullDate) {
    let {
      before,
      after
    } = this.multipleStatus;
    if (!this.range)
      return;
    if (before && after) {
      this.multipleStatus.before = "";
      this.multipleStatus.after = "";
      this.multipleStatus.data = [];
    } else {
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
    }
    this._getWeek(fullDate);
  }
  _getWeek(dateData) {
    const {
      fullDate,
      year,
      month,
      date,
      day
    } = this.getDate(dateData);
    let firstDay = new Date(year, month - 1, 1).getDay();
    let currentDay = new Date(year, month, 0).getDate();
    let dates = {
      lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
      currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
      nextMonthDays: [],
      weeks: []
    };
    let canlender = [];
    const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
    dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
    canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
    let weeks = {};
    for (let i = 0; i < canlender.length; i++) {
      if (i % 7 === 0) {
        weeks[parseInt(i / 7)] = new Array(7);
      }
      weeks[parseInt(i / 7)][i % 7] = canlender[i];
    }
    this.canlender = canlender;
    this.weeks = weeks;
  }
}
var en = {
  "uni-calender.ok": "ok",
  "uni-calender.cancel": "cancel",
  "uni-calender.today": "today",
  "uni-calender.MON": "MON",
  "uni-calender.TUE": "TUE",
  "uni-calender.WED": "WED",
  "uni-calender.THU": "THU",
  "uni-calender.FRI": "FRI",
  "uni-calender.SAT": "SAT",
  "uni-calender.SUN": "SUN"
};
var zhHans = {
  "uni-calender.ok": "\u786E\u5B9A",
  "uni-calender.cancel": "\u53D6\u6D88",
  "uni-calender.today": "\u4ECA\u65E5",
  "uni-calender.SUN": "\u65E5",
  "uni-calender.MON": "\u4E00",
  "uni-calender.TUE": "\u4E8C",
  "uni-calender.WED": "\u4E09",
  "uni-calender.THU": "\u56DB",
  "uni-calender.FRI": "\u4E94",
  "uni-calender.SAT": "\u516D"
};
var zhHant = {
  "uni-calender.ok": "\u78BA\u5B9A",
  "uni-calender.cancel": "\u53D6\u6D88",
  "uni-calender.today": "\u4ECA\u65E5",
  "uni-calender.SUN": "\u65E5",
  "uni-calender.MON": "\u4E00",
  "uni-calender.TUE": "\u4E8C",
  "uni-calender.WED": "\u4E09",
  "uni-calender.THU": "\u56DB",
  "uni-calender.FRI": "\u4E94",
  "uni-calender.SAT": "\u516D"
};
var messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
var _style_0$2 = { "uni-calendar-item__weeks-box": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center" } }, "uni-calendar-item__weeks-box-text": { "": { "fontSize": 14, "color": "#333333" } }, "uni-calendar-item__weeks-lunar-text": { "": { "fontSize": 12, "color": "#333333" } }, "uni-calendar-item__weeks-box-item": { "": { "position": "relative", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": "100rpx", "height": "100rpx" } }, "uni-calendar-item__weeks-box-circle": { "": { "position": "absolute", "top": 5, "right": 5, "width": 8, "height": 8, "borderRadius": 8, "backgroundColor": "#dd524d" } }, "uni-calendar-item--disable": { "": { "backgroundColor": "rgba(249,249,249,0.3)", "color": "#c0c0c0" } }, "uni-calendar-item--isDay-text": { "": { "color": "#007aff" } }, "uni-calendar-item--isDay": { "": { "backgroundColor": "#007aff", "opacity": 0.8, "color": "#ffffff" } }, "uni-calendar-item--extra": { "": { "color": "#dd524d", "opacity": 0.8 } }, "uni-calendar-item--checked": { "": { "backgroundColor": "#007aff", "color": "#ffffff", "opacity": 0.8 } }, "uni-calendar-item--multiple": { "": { "backgroundColor": "#007aff", "color": "#ffffff", "opacity": 0.8 } }, "uni-calendar-item--before-checked": { "": { "backgroundColor": "#ff5a5f", "color": "#ffffff" } }, "uni-calendar-item--after-checked": { "": { "backgroundColor": "#ff5a5f", "color": "#ffffff" } } };
const { t: t$1 } = initVueI18n(messages);
const _sfc_main$2 = {
  emits: ["change"],
  props: {
    weeks: {
      type: Object,
      default() {
        return {};
      }
    },
    calendar: {
      type: Object,
      default: () => {
        return {};
      }
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    todayText() {
      return t$1("uni-calender.today");
    }
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass(["uni-calendar-item__weeks-box", {
      "uni-calendar-item--disable": $props.weeks.disable,
      "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
      "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
      "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
      "uni-calendar-item--multiple": $props.weeks.multiple,
      "uni-calendar-item--after-checked": $props.weeks.afterMultiple
    }]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
    renderWhole: true
  }, [
    createElementVNode("view", { class: "uni-calendar-item__weeks-box-item" }, [
      $props.selected && $props.weeks.extraInfo ? (openBlock(), createElementBlock("u-text", {
        key: 0,
        class: "uni-calendar-item__weeks-box-circle"
      })) : createCommentVNode("v-if", true),
      createElementVNode("u-text", {
        class: normalizeClass(["uni-calendar-item__weeks-box-text", {
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, toDisplayString($props.weeks.date), 3),
      !$props.lunar && !$props.weeks.extraInfo && $props.weeks.isDay ? (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: normalizeClass(["uni-calendar-item__weeks-lunar-text", {
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple
        }])
      }, toDisplayString($options.todayText), 3)) : createCommentVNode("v-if", true),
      $props.lunar && !$props.weeks.extraInfo ? (openBlock(), createElementBlock("u-text", {
        key: 2,
        class: normalizeClass(["uni-calendar-item__weeks-lunar-text", {
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, toDisplayString($props.weeks.isDay ? $options.todayText : $props.weeks.lunar.IDayCn === "\u521D\u4E00" ? $props.weeks.lunar.IMonthCn : $props.weeks.lunar.IDayCn), 3)) : createCommentVNode("v-if", true),
      $props.weeks.extraInfo && $props.weeks.extraInfo.info ? (openBlock(), createElementBlock("u-text", {
        key: 3,
        class: normalizeClass(["uni-calendar-item__weeks-lunar-text", {
          "uni-calendar-item--extra": $props.weeks.extraInfo.info,
          "uni-calendar-item--isDay-text": $props.weeks.isDay,
          "uni-calendar-item--isDay": $props.calendar.fullDate === $props.weeks.fullDate && $props.weeks.isDay,
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && !$props.weeks.isDay,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, toDisplayString($props.weeks.extraInfo.info), 3)) : createCommentVNode("v-if", true)
    ])
  ], 2);
}
var calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-calendar/components/uni-calendar/uni-calendar-item.vue"]]);
var _style_0$1 = { "uni-calendar": { "": { "flexDirection": "column" } }, "uni-calendar__mask": { "": { "position": "fixed", "bottom": 0, "top": 0, "left": 0, "right": 0, "backgroundColor": "rgba(0,0,0,0.4)", "transitionProperty": "opacity", "transitionDuration": 300, "opacity": 0 } }, "uni-calendar--mask-show": { "": { "opacity": 1 } }, "uni-calendar--fixed": { "": { "position": "fixed", "bottom": 0, "left": 0, "right": 0, "transitionProperty": "transform", "transitionDuration": 300, "transform": "translateY(460px)" } }, "uni-calendar--ani-show": { "": { "transform": "translateY(0)" } }, "uni-calendar__content": { "": { "backgroundColor": "#ffffff" } }, "uni-calendar__header": { "": { "position": "relative", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 50, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-calendar--fixed-top": { "": { "flexDirection": "row", "justifyContent": "space-between", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-calendar--fixed-width": { "": { "width": 50 } }, "uni-calendar__backtoday": { "": { "position": "absolute", "right": 0, "top": "25rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 10, "height": 25, "lineHeight": 25, "fontSize": 12, "borderTopLeftRadius": 25, "borderBottomLeftRadius": 25, "color": "#333333", "backgroundColor": "#f1f1f1" } }, "uni-calendar__header-text": { "": { "textAlign": "center", "width": 100, "fontSize": 14, "color": "#333333" } }, "uni-calendar__header-btn-box": { "": { "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "width": 50, "height": 50 } }, "uni-calendar__header-btn": { "": { "width": 10, "height": 10, "borderLeftColor": "#808080", "borderLeftStyle": "solid", "borderLeftWidth": 2, "borderTopColor": "#555555", "borderTopStyle": "solid", "borderTopWidth": 2 } }, "uni-calendar--left": { "": { "transform": "rotate(-45deg)" } }, "uni-calendar--right": { "": { "transform": "rotate(135deg)" } }, "uni-calendar__weeks": { "": { "position": "relative", "flexDirection": "row" } }, "uni-calendar__weeks-item": { "": { "flex": 1 } }, "uni-calendar__weeks-day": { "": { "flex": 1, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "height": 45, "borderBottomColor": "#F5F5F5", "borderBottomStyle": "solid", "borderBottomWidth": 1 } }, "uni-calendar__weeks-day-text": { "": { "fontSize": 14 } }, "uni-calendar__box": { "": { "position": "relative" } }, "uni-calendar__box-bg": { "": { "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0 } }, "uni-calendar__box-bg-text": { "": { "fontSize": 200, "fontWeight": "bold", "color": "#999999", "opacity": 0.1, "textAlign": "center" } }, "@TRANSITION": { "uni-calendar__mask": { "property": "opacity", "duration": 300 }, "uni-calendar--fixed": { "property": "transform", "duration": 300 } } };
const { t } = initVueI18n(messages);
const _sfc_main$1 = {
  components: {
    calendarItem
  },
  emits: ["close", "confirm", "change", "monthSwitch"],
  props: {
    date: {
      type: String,
      default: ""
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    lunar: {
      type: Boolean,
      default: false
    },
    startDate: {
      type: String,
      default: ""
    },
    endDate: {
      type: String,
      default: ""
    },
    range: {
      type: Boolean,
      default: false
    },
    insert: {
      type: Boolean,
      default: true
    },
    showMonth: {
      type: Boolean,
      default: true
    },
    clearDate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      weeks: [],
      calendar: {},
      nowDate: "",
      aniMaskShow: false
    };
  },
  computed: {
    okText() {
      return t("uni-calender.ok");
    },
    cancelText() {
      return t("uni-calender.cancel");
    },
    todayText() {
      return t("uni-calender.today");
    },
    monText() {
      return t("uni-calender.MON");
    },
    TUEText() {
      return t("uni-calender.TUE");
    },
    WEDText() {
      return t("uni-calender.WED");
    },
    THUText() {
      return t("uni-calender.THU");
    },
    FRIText() {
      return t("uni-calender.FRI");
    },
    SATText() {
      return t("uni-calender.SAT");
    },
    SUNText() {
      return t("uni-calender.SUN");
    }
  },
  watch: {
    date(newVal) {
      this.init(newVal);
    },
    startDate(val) {
      this.cale.resetSatrtDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    endDate(val) {
      this.cale.resetEndDate(val);
      this.cale.setDate(this.nowDate.fullDate);
      this.weeks = this.cale.weeks;
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
      this.weeks = this.cale.weeks;
    }
  },
  created() {
    this.cale = new Calendar({
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range
    });
    this.init(this.date);
  },
  methods: {
    clean() {
    },
    bindDateChange(e) {
      const value = e.detail.value + "-1";
      formatAppLog("log", "at uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue:220", this.cale.getDate(value));
      this.init(value);
    },
    init(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.calendar = this.cale.getInfo(date);
    },
    open() {
      if (this.clearDate && !this.insert) {
        this.cale.cleanMultipleStatus();
        this.init(this.date);
      }
      this.show = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.aniMaskShow = true;
        }, 50);
      });
    },
    close() {
      this.aniMaskShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false;
          this.$emit("close");
        }, 300);
      });
    },
    confirm() {
      this.setEmit("confirm");
      this.close();
    },
    change() {
      if (!this.insert)
        return;
      this.setEmit("change");
    },
    monthSwitch() {
      let {
        year,
        month
      } = this.nowDate;
      this.$emit("monthSwitch", {
        year,
        month: Number(month)
      });
    },
    setEmit(name) {
      let {
        year,
        month,
        date,
        fullDate,
        lunar,
        extraInfo
      } = this.calendar;
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {}
      });
    },
    choiceDate(weeks) {
      if (weeks.disable)
        return;
      this.calendar = weeks;
      this.cale.setMultiple(this.calendar.fullDate);
      this.weeks = this.cale.weeks;
      this.change();
    },
    backtoday() {
      formatAppLog("log", "at uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue:327", this.cale.getDate(new Date()).fullDate);
      let date = this.cale.getDate(new Date()).fullDate;
      this.init(date);
      this.change();
    },
    pre() {
      const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
      this.setDate(preDate);
      this.monthSwitch();
    },
    next() {
      const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
      this.setDate(nextDate);
      this.monthSwitch();
    },
    setDate(date) {
      this.cale.setDate(date);
      this.weeks = this.cale.weeks;
      this.nowDate = this.cale.getInfo(date);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_picker = resolveComponent("picker");
  const _component_calendar_item = resolveComponent("calendar-item");
  return openBlock(), createElementBlock("view", {
    class: "uni-calendar",
    renderWhole: true
  }, [
    !$props.insert && $data.show ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clean && $options.clean(...args))
    }, null, 2)) : createCommentVNode("v-if", true),
    $props.insert || $data.show ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow }])
    }, [
      !$props.insert ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-calendar__header uni-calendar--fixed-top"
      }, [
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.close && $options.close(...args))
        }, [
          createElementVNode("u-text", { class: "uni-calendar__header-text uni-calendar--fixed-width" }, toDisplayString($options.cancelText), 1)
        ]),
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
        }, [
          createElementVNode("u-text", { class: "uni-calendar__header-text uni-calendar--fixed-width" }, toDisplayString($options.okText), 1)
        ])
      ])) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "uni-calendar__header" }, [
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
        }, [
          createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
        ]),
        createVNode(_component_picker, {
          mode: "date",
          value: $props.date,
          fields: "month",
          onChange: $options.bindDateChange
        }, {
          default: withCtx(() => [
            createElementVNode("u-text", { class: "uni-calendar__header-text" }, toDisplayString(($data.nowDate.year || "") + " / " + ($data.nowDate.month || "")), 1)
          ]),
          _: 1
        }, 8, ["value", "onChange"]),
        createElementVNode("view", {
          class: "uni-calendar__header-btn-box",
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
        }, [
          createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
        ]),
        createElementVNode("u-text", {
          class: "uni-calendar__backtoday",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.backtoday && $options.backtoday(...args))
        }, toDisplayString($options.todayText), 1)
      ]),
      createElementVNode("view", { class: "uni-calendar__box" }, [
        $props.showMonth ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-calendar__box-bg"
        }, [
          createElementVNode("u-text", { class: "uni-calendar__box-bg-text" }, toDisplayString($data.nowDate.month), 1)
        ])) : createCommentVNode("v-if", true),
        createElementVNode("view", { class: "uni-calendar__weeks" }, [
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.SUNText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.monText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.TUEText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.WEDText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.THUText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.FRIText), 1)
          ]),
          createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
            createElementVNode("u-text", { class: "uni-calendar__weeks-day-text" }, toDisplayString($options.SATText), 1)
          ])
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.weeks, (item, weekIndex) => {
          return openBlock(), createElementBlock("view", {
            class: "uni-calendar__weeks",
            key: weekIndex
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(item, (weeks, weeksIndex) => {
              return openBlock(), createElementBlock("view", {
                class: "uni-calendar__weeks-item",
                key: weeksIndex
              }, [
                createVNode(_component_calendar_item, {
                  class: "uni-calendar-item--hook",
                  weeks,
                  calendar: $data.calendar,
                  selected: $props.selected,
                  lunar: $props.lunar,
                  onChange: $options.choiceDate
                }, null, 8, ["weeks", "calendar", "selected", "lunar", "onChange"])
              ]);
            }), 128))
          ]);
        }), 128))
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ]);
}
var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue"]]);
var _style_0 = { "example-body": { "": { "flexDirection": "row" } }, "calendar-button": { "": { "flex": 1, "fontWeight": "bold", "fontSize": "32rpx" } } };
function getDate(date, AddDayCount = 0) {
  if (!date) {
    date = new Date();
  }
  if (typeof date !== "object") {
    date = date.replace(/-/g, "/");
  }
  const dd = new Date(date);
  dd.setDate(dd.getDate() + AddDayCount);
  const y = dd.getFullYear();
  const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return {
    fullDate: y + "-" + m + "-" + d,
    year: y,
    month: m,
    date: d,
    day: dd.getDay()
  };
}
const _sfc_main = {
  components: {},
  data() {
    return {
      showCalendar: false,
      info: {
        lunar: true,
        range: true,
        insert: false,
        selected: []
      }
    };
  },
  onReady() {
    this.$nextTick(() => {
      this.showCalendar = true;
    });
    setTimeout(() => {
      this.info.date = getDate(new Date(), -30).fullDate;
      this.info.startDate = getDate(new Date(), -60).fullDate;
      this.info.endDate = getDate(new Date(), 30).fullDate;
      this.info.selected = [
        {
          date: getDate(new Date(), -3).fullDate,
          info: "\u6253\u5361"
        },
        {
          date: getDate(new Date(), -2).fullDate,
          info: "\u7B7E\u5230",
          data: {
            custom: "\u81EA\u5B9A\u4E49\u4FE1\u606F",
            name: "\u81EA\u5B9A\u4E49\u6D88\u606F\u5934"
          }
        },
        {
          date: getDate(new Date(), -1).fullDate,
          info: "\u5DF2\u6253\u5361"
        }
      ];
    }, 2e3);
  },
  methods: {
    open() {
      this.$refs.calendar.open();
    },
    close() {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:90", "\u5F39\u7A97\u5173\u95ED");
    },
    change(e) {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:93", "change \u8FD4\u56DE:", e);
      if (this.info.selected.length > 5)
        return;
      this.info.selected.push({
        date: e.fulldate,
        info: "\u6253\u5361"
      });
    },
    confirm(e) {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:102", "confirm \u8FD4\u56DE:", e);
    },
    monthSwitch(e) {
      formatAppLog("log", "at pages/extUI/calendar/calendar.nvue:105", "monthSwitchs \u8FD4\u56DE:", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_section = resolveEasycom(resolveDynamicComponent("uni-section"), __easycom_2);
  const _component_uni_calendar = resolveEasycom(resolveDynamicComponent("uni-calendar"), __easycom_1);
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    $data.showCalendar ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "calendar-content"
    }, [
      createElementVNode("u-text", { class: "example-info" }, "\u65E5\u5386\u7EC4\u4EF6\u53EF\u4EE5\u67E5\u770B\u65E5\u671F\uFF0C\u9009\u62E9\u4EFB\u610F\u8303\u56F4\u5185\u7684\u65E5\u671F\uFF0C\u6253\u70B9\u64CD\u4F5C\u3002\u5E38\u7528\u573A\u666F\u5982\uFF1A\u9152\u5E97\u65E5\u671F\u9884\u8BA2\u3001\u706B\u8F66\u673A\u7968\u9009\u62E9\u8D2D\u4E70\u65E5\u671F\u3001\u4E0A\u4E0B\u73ED\u6253\u5361\u7B49\u3002"),
      createVNode(_component_uni_section, {
        title: "\u63D2\u5165\u6A21\u5F0F",
        type: "line"
      }),
      createElementVNode("view", null, [
        createCommentVNode(" \u63D2\u5165\u6A21\u5F0F "),
        createVNode(_component_uni_calendar, {
          class: "uni-calendar--hook",
          selected: $data.info.selected,
          showMonth: false,
          onChange: $options.change,
          onMonthSwitch: $options.monthSwitch
        }, null, 8, ["selected", "onChange", "onMonthSwitch"])
      ]),
      createVNode(_component_uni_section, {
        class: "hideOnPc",
        title: "\u5F39\u51FA\u6A21\u5F0F",
        type: "line"
      }),
      createElementVNode("view", { class: "example-body hideOnPc" }, [
        createVNode(_component_button, {
          class: "calendar-button",
          type: "button",
          onClick: $options.open
        }, {
          default: withCtx(() => [
            createTextVNode("\u6253\u5F00\u65E5\u5386")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      createVNode(_component_uni_calendar, {
        ref: "calendar",
        class: "uni-calendar--hook",
        "clear-date": true,
        date: $data.info.date,
        insert: $data.info.insert,
        lunar: $data.info.lunar,
        startDate: $data.info.startDate,
        endDate: $data.info.endDate,
        range: $data.info.range,
        onConfirm: $options.confirm,
        onClose: $options.close
      }, null, 8, ["date", "insert", "lunar", "startDate", "endDate", "range", "onConfirm", "onClose"])
    ])) : createCommentVNode("v-if", true)
  ]);
}
var calendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/clement.lin.local/Documents/HBuilderProjects/test1/pages/extUI/calendar/calendar.nvue"]]);
export { calendar as default };
