var e = require("@babel/runtime/helpers/interopRequireDefault")(require("@babel/runtime/regenerator")), t = require("@babel/runtime/helpers/asyncToGenerator");

require("./utils/baidu/mtj-wx-sdk.js");

App.host = "https://lix.rich.cm/", require("./webpack-require")("./app.js", Object.assign(require("././commons.js").modules, {
    "./app.js": function(n, o, r) {
        r.r(o);
        var a = r("./utils/wxProxy.js"), i = r("./utils/event.js"), s = r("./utils/api/index.js"), c = r("./constants/index.js");
        App({
            onLaunch: function() {
                wx.onError(function(e) {
                    console.log(e, "onError");
                });
                var e = wx.getSystemInfoSync(), t = e.windowWidth, n = e.windowHeight, o = e.pixelRatio, r = e.screenWidth, a = e.model, i = void 0 === a ? "" : a;
                this.systemInfo = {
                    windowWidth: t,
                    windowHeight: n,
                    ratio: o,
                    screenWidth: r,
                    isIphoneX: i.indexOf("iPhone X") >= 0,
                    isIphone5: i.indexOf("iPhone 5") >= 0
                };
                var s = {};
                try {
                    s = wx.getExtConfigSync() || {};
                } catch (t) {
                    console.log("e", t);
                }
                console.log(s, "extConfig");
                var l = s, u = l.primaryColor, d = void 0 === u ? "#fff" : u, p = l.secondaryColor, f = void 0 === p ? "#B1CA50" : p, g = l.cartIndex, h = void 0 === g ? -1 : g, m = l.partner, v = void 0 === m ? {} : m, w = l.styleType, x = void 0 === w ? "default" : w, y = l.templateType, b = void 0 === y ? "default" : y, j = l.vip, C = void 0 === j ? {} : j, S = l.authorizer, k = l.currency, E = void 0 === k ? "CNY" : k, _ = l.backgroundColor, U = void 0 === _ ? "#111" : _, q = l.tabbarPages, R = void 0 === q ? {} : q, D = l.navigationBarTextStyle, I = void 0 === D ? "white" : D;
                this.globalData = Object.assign(this.globalData, {
                    themeColor: {
                        primaryColor: d,
                        secondaryColor: f,
                        backgroundColor: U,
                        navigationBarTextStyle: I
                    },
                    cartIndex: h,
                    partner: v,
                    tplStyle: x,
                    defineTypeGlobal: b,
                    vip: C,
                    authorizer: S,
                    currency: E,
                    currency_sign: "￥",
                    CURRENCY: c.CURRENCY,
                    tabbarPages: R
                });
                var P = wx.getStorageSync("features");
                P.primary_color && (this.globalData.themeColor.primaryColor = P.primary_color);
            },
            onShow: function() {
                var n = this;
                return t(e.default.mark(function t() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, a.default.checkSession();

                          case 3:
                            e.next = 9;
                            break;

                          case 5:
                            return e.prev = 5, e.t0 = e.catch(0), e.next = 9, n.silentLogin();

                          case 9:
                            n.config();

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, t, null, [ [ 0, 5 ] ]);
                }))();
            },
            onHide: function() {
                var n = this;
                return t(e.default.mark(function t() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            wx.setStorageSync("host", ""), n.config();

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            config: function() {
                var n = this;
                return t(e.default.mark(function t() {
                    var o, r;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, s.default.hei.getConfig();

                          case 2:
                            o = e.sent, wx.setStorageSync("CONFIG", o), o.minishop && ((r = requirePlugin("mini-shop-plugin")).initHomePath("/pages/home/home"), 
                            r.initApp(n, wx));

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            silentLogin: function() {
                return t(e.default.mark(function t() {
                    var n, o, r, i, l, u, d;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, a.default.login();

                          case 2:
                            return n = e.sent, o = n.code, e.next = 6, s.default.hei.silentLogin({
                                code: o
                            });

                          case 6:
                            r = e.sent, i = r.user, l = r.access_token, u = r.expired_in, d = 1e3 * u + Date.now(), 
                            wx.setStorageSync(c.USER_KEY, i), wx.setStorageSync(c.TOKEN_KEY, l), wx.setStorageSync(c.EXPIRED_KEY, d);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            updateApp: function() {
                var e = wx.getUpdateManager();
                e && (e.onCheckForUpdate(function(e) {
                    console.log("hasUpdate", e.hasUpdate);
                }), e.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，重启后立刻应用",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && e.applyUpdate();
                        }
                    });
                }), e.onUpdateFailed(function() {
                    console.log("新版本下载失败");
                }));
            },
            globalData: {
                vendor: "",
                currentOrder: {
                    items: []
                },
                orderDetail: {
                    items: []
                },
                bindWebApiWhite: [ "api/mag.shop.extra.json", "api/module/page.json", "api/mag.product.list.json", "api/mag.product.get.json", "api/mag.article.get.json", "api/mag.article.list.json", "api/mag.affiliate.bind.json", "api/mag.affiliate.browse.record.json" ]
            },
            event: new i.default()
        });
    },
    "./utils/event.js": function(e, t, n) {
        n.r(t);
        var o = n("../node_modules/peanut-all/lib/index.js");
        t.default = o.event;
    }
})), wx.loadFontFace({
    family: "van-icon",
    source: 'url("https://img.yzcdn.cn/vant/vant-icon-96970a.woff2")',
    success: console.log
}), wx.loadFontFace({
    family: "ilank_rich",
    source: 'url("https://at.alicdn.com/t/font_2642462_698ya1vm7og.woff2?t=1642738825398")',
    success: console.log
});