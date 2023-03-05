var e = require("../../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../../@babel/runtime/regenerator")), t = require("../../../../@babel/runtime/helpers/asyncToGenerator");

require("./../../../../webpack-require")("./pages/home/components/coupons/coupons.js", Object.assign(require("././../../../../commons.js").modules, {
    "./pages/home/components/coupons/coupons.js": function(n, o, r) {
        r.r(o);
        var a = r("./utils/api/index.js"), s = r("./utils/wxp.js"), u = r("./utils/util.js");
        getApp(), Component({
            properties: {
                coupon: {
                    type: Object,
                    value: {},
                    observer: function(e) {
                        if (console.log("newVal10", e), e) {
                            var t = e.content, n = e.setting, o = e.title, r = e.type, a = e.id;
                            this.setData({
                                content: t,
                                setting: n,
                                title: o,
                                type: r,
                                id: a
                            });
                        }
                    }
                },
                config: {
                    type: Object,
                    value: {}
                },
                globalData: {
                    type: Object,
                    value: {}
                },
                userCoupon: {
                    type: Array,
                    value: [],
                    observer: function(e) {
                        e && 0 !== e.length && this.setData({
                            "content.coupons": e
                        });
                    }
                }
            },
            methods: {
                bindGetUserInfo: function(n) {
                    var o = this;
                    return t(e.default.mark(function t() {
                        var r, a, s;
                        return e.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (console.log(n), r = n.detail, a = r.encryptedData, !(s = r.iv) || !a) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 5, Object(u.getAgainUserForInvalid)({
                                    encryptedData: a,
                                    iv: s
                                });

                              case 5:
                                o.onCouponsClick(n), e.next = 9;
                                break;

                              case 8:
                                wx.showModal({
                                    title: "温馨提示",
                                    content: "需授权后操作",
                                    showCancel: !1
                                });

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, t);
                    }))();
                },
                onCouponsClick: function(n) {
                    var o = this;
                    return t(e.default.mark(function t() {
                        var r, a, s, u, c;
                        return e.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (console.log("ev221", n), r = n.currentTarget.dataset, a = r.id, s = r.index, 
                                u = r.status, c = r.title, 2 !== Number(u)) {
                                    e.next = 7;
                                    break;
                                }
                                return e.next = 5, o.onReceiveCoupon(a, s);

                              case 5:
                                e.next = 10;
                                break;

                              case 7:
                                if (4 === Number(u)) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt("return");

                              case 9:
                                wx.navigateTo({
                                    url: "/pages/couponProducts/couponProducts?couponId=".concat(a, "&couponTitle=").concat(c)
                                });

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, t);
                    }))();
                },
                onReceiveCoupon: function(n, o) {
                    var r = this;
                    return t(e.default.mark(function t() {
                        var u;
                        return e.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (u = r.data.content.coupons, e.t0 = u[o].stock_qty, !e.t0) {
                                    e.next = 9;
                                    break;
                                }
                                return e.next = 5, a.default.hei.receiveCoupon({
                                    coupon_id: n
                                });

                              case 5:
                                Object(s.showToast)({
                                    title: "领取成功"
                                }), u[o].status = 4, console.log(u), r.setData({
                                    "content.coupons": u
                                });

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, t);
                    }))();
                }
            }
        });
    }
}));