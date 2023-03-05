var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/me/me.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/me/me.js": function(t, n, a) {
        a.r(n);
        var s = a("./utils/util.js"), u = a("./utils/api/index.js"), i = a("./constants/index.js");
        Page({
            data: {
                user: {},
                logoObj: {},
                PLATFFORM_ENV: i.PLATFFORM_ENV
            },
            go: s.go,
            onShow: function() {
                var t = this;
                return r(e.default.mark(function r() {
                    var n, a, s, i;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, u.default.hei.getMe();

                          case 2:
                            n = e.sent, a = n.current_user, s = wx.getStorageSync("CONFIG"), i = wx.getStorageSync("features"), 
                            t.setData({
                                user: a,
                                config: s,
                                features: i
                            });

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            bindGetUserInfo: function() {
                var t = this;
                return r(e.default.mark(function r() {
                    var n;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, Object(s.getUserProfile)();

                          case 2:
                            n = e.sent, t.setData({
                                user: n
                            });

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            clearStorage: function() {
                return r(e.default.mark(function r() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            wx.clearStorageSync(), wx.showToast({
                                title: "清除成功"
                            }), setTimeout(function() {
                                wx.reLaunch({
                                    url: "/pages/me/me"
                                });
                            }, 400);

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            }
        });
    }
}));