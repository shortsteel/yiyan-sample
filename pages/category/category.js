var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/objectSpread2"), t = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/category/category.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/category/category.js": function(a, n, i) {
        i.r(n);
        var s = i("./utils/api/index.js"), u = i("./utils/util.js"), o = i("./utils/pageShare.js");
        getApp(), Page({
            data: {
                isLoading: !0
            },
            go: u.go,
            onLoad: function() {
                var a = this;
                return t(e.default.mark(function t() {
                    var n, i;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, s.default.hei.getCategory();

                          case 2:
                            n = e.sent, i = n.page_title, wx.setNavigationBarTitle({
                                title: i
                            }), a.setData(r(r({}, n), {}, {
                                isLoading: !1
                            }));

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            onPullDownRefresh: function() {
                var r = this;
                return t(e.default.mark(function t() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r.setData({
                                isLoading: !0
                            }), e.next = 3, r.onLoad();

                          case 3:
                            wx.stopPullDownRefresh();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            onShareAppMessage: o.onDefaultShareAppMessage,
            onShareTimeline: function() {
                return o.onDefaultShareAppTimeline.call(this);
            }
        });
    }
}));