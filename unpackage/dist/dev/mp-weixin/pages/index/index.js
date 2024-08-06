"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_biao_ti2 = common_vendor.resolveComponent("biao-ti");
  const _easycom_bi_zhi2 = common_vendor.resolveComponent("bi-zhi");
  (_easycom_uni_icons2 + _easycom_biao_ti2 + _easycom_bi_zhi2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_biao_ti = () => "../../components/biao-ti/biao-ti.js";
const _easycom_bi_zhi = () => "../../components/bi-zhi/bi-zhi.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_biao_ti + _easycom_bi_zhi)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.f(3, (item, k0, i0) => {
      return {};
    }),
    b: common_assets._imports_0,
    c: common_vendor.p({
      type: "sound-filled",
      size: "25",
      color: "rgb(70,173,141)"
    }),
    d: common_vendor.p({
      type: "forward",
      size: "20"
    }),
    e: common_vendor.p({
      type: "calendar",
      size: "20",
      color: "rgb(70,173,141)"
    }),
    f: common_assets._imports_1,
    g: common_assets._imports_1,
    h: common_assets._imports_1,
    i: common_assets._imports_1,
    j: common_assets._imports_1,
    k: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
    l: common_vendor.f(8, (item, index, i0) => {
      return {
        a: item.index,
        b: "1cf27b2a-5-" + i0
      };
    }),
    m: common_vendor.p({
      isMore: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/12767/Documents/HBuilderProjects/手机壁纸项目/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
