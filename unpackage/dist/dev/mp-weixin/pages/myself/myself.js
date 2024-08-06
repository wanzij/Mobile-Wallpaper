"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: "860aaed2-0-" + i0,
        b: "860aaed2-1-" + i0,
        c: item.index
      };
    }),
    b: common_vendor.p({
      type: "download-filled",
      size: "25",
      color: "#20b000"
    }),
    c: common_vendor.p({
      type: "forward",
      size: "20",
      color: "#aaa"
    }),
    d: common_vendor.f(2, (item, k0, i0) => {
      return {
        a: "860aaed2-2-" + i0,
        b: "860aaed2-3-" + i0,
        c: item.index
      };
    }),
    e: common_vendor.p({
      type: "download-filled",
      size: "25",
      color: "#20b000"
    }),
    f: common_vendor.p({
      type: "forward",
      size: "20",
      color: "#aaa"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-860aaed2"], ["__file", "C:/Users/12767/Documents/HBuilderProjects/手机壁纸项目/pages/myself/myself.vue"]]);
wx.createPage(MiniProgramPage);
