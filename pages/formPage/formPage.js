var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/formPage/formPage.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/formPage/formPage.js": function(r, a, n) {
        n.r(a);
        var i = n("./utils/api/index.js");
        getApp(), Page({
            onLoad: function(r) {
                var a = this;
                return t(e.default.mark(function t() {
                    var n, o, s;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = r.id, o = void 0 === n ? "" : n, e.next = 4, i.default.hei.getFormData({
                                id: o
                            });

                          case 4:
                            s = e.sent, a.setData({
                                formData: s,
                                id: o
                            });

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            submit: function(r) {
                var a = this;
                return t(e.default.mark(function t() {
                    var n, o, s, u, c;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = r.detail.form, o = a.data.id, e.prev = 1, wx.showLoading(), e.next = 5, 
                            i.default.hei.submitFormData({
                                data: n,
                                form_id: o
                            });

                          case 5:
                            s = e.sent, u = s.times, c = s.count, wx.hideLoading(), wx.showModal({
                                title: "温馨提示",
                                content: "提交成功",
                                showCancel: !1
                            }), a.setData({
                                "formData.times": u,
                                "formData.count": c
                            }), e.next = 14;
                            break;

                          case 11:
                            e.prev = 11, e.t0 = e.catch(1), wx.hideLoading(), wx.showModal({
                                title: "温馨提示",
                                content: e.t0.errMsg,
                                showCancel: !1
                            });

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, t, null, [ [ 1, 11 ] ]);
                }))();
            }
        });
    }
}));