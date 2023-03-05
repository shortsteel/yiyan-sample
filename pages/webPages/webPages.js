var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/webPages/webPages.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/webPages/webPages.js": function(r, a, s) {
        s.r(a);
        var n = s("./utils/util.js"), i = (s("./utils/pageShare.js"), s("./utils/wxProxy.js")), o = s("./utils/api/index.js");
        getApp(), Page({
            data: {},
            onLoad: function(r) {
                var a = this;
                return t(e.default.mark(function t() {
                    var s, c, u, l, d, p, g, w;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (s = r.src, c = r.scene, u = wx.getStorageSync("features"), !c) {
                                e.next = 42;
                                break;
                            }
                            if (c = decodeURIComponent(c), l = Object(n.parseScene)(c), console.log(l, "query"), 
                            l.id && wx.redirectTo({
                                url: "/pages/productDetail/productDetail?id=" + l.id
                            }), l.gid && wx.redirectTo({
                                url: "/pages/orderDetail/orderDetail?grouponId=" + l.gid
                            }), l.c && wx.redirectTo({
                                url: "/pages/crowd/crowdProgress/crowdProgress?crowd_pay_no=" + l.c
                            }), l.o && wx.redirectTo({
                                url: "/pages/orderDetail/orderDetail?id=" + l.o
                            }), !l.signup || !u.weapp_signup) {
                                e.next = 21;
                                break;
                            }
                            return e.prev = 6, e.next = 9, o.default.hei.getWeappQrcode({
                                scene: l.signup
                            });

                          case 9:
                            return d = e.sent, p = d.code, e.next = 13, i.default.showModal({
                                title: "温馨提示",
                                content: "您的验证码是：" + p,
                                showCancel: !1
                            });

                          case 13:
                            g = e.sent, g.confirm && wx.switchTab({
                                url: "/pages/home/home"
                            }), e.next = 21;
                            break;

                          case 18:
                            e.prev = 18, e.t0 = e.catch(6), wx.showModal({
                                title: "温馨提示",
                                content: e.t0.errMsg,
                                showCancel: !1
                            });

                          case 21:
                            if (!l.bind) {
                                e.next = 40;
                                break;
                            }
                            return e.next = 24, i.default.showModal({
                                title: "温馨提示",
                                content: "确定绑定？"
                            });

                          case 24:
                            if (w = e.sent, !w.confirm) {
                                e.next = 39;
                                break;
                            }
                            return e.prev = 27, e.next = 30, o.default.hei.bindQrcode({
                                scene: l.bind
                            });

                          case 30:
                            if (e.t1 = e.sent.errcode, e.t2 = 0 === e.t1, !e.t2) {
                                e.next = 34;
                                break;
                            }
                            wx.showToast({
                                title: "绑定成功！"
                            });

                          case 34:
                            e.next = 39;
                            break;

                          case 36:
                            e.prev = 36, e.t3 = e.catch(27), wx.showModal({
                                title: "温馨提示",
                                content: e.t3.errMsg,
                                showCancel: !1
                            });

                          case 39:
                            wx.switchTab({
                                url: "/pages/home/home"
                            });

                          case 40:
                            e.next = 43;
                            break;

                          case 42:
                            a.setData({
                                src: s
                            });

                          case 43:
                          case "end":
                            return e.stop();
                        }
                    }, t, null, [ [ 6, 18 ], [ 27, 36 ] ]);
                }))();
            },
            onShareAppMessage: function(e) {
                var t = this.data.shareimg;
                return {
                    title: this.data.title,
                    imageUrl: t
                };
            },
            bindmessage: function(e) {
                var t = e.detail.data.pop();
                this.setData({
                    title: t.title,
                    shareimg: t.shareimg
                });
            }
        });
    }
}));