var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/objectSpread2"), a = e(require("../../@babel/runtime/regenerator")), r = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/home1/home.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/home1/home.js": function(e, n, s) {
        s.r(n);
        var o = s("./utils/api/index.js"), i = s("./utils/util.js"), u = s("./utils/pageShare.js"), c = getApp();
        Page({
            data: {
                next_cursor: 0,
                posts: [],
                isReachBottom: !1,
                isLoading: !0
            },
            onLoad: function(e) {
                var t = this;
                return r(a.default.mark(function r() {
                    var n, s, o, u, l;
                    return a.default.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return (n = e.goPath) && Object(i.autoNavigate_)({
                                url: decodeURIComponent(n)
                            }), s = c.systemInfo.isIphoneX, o = wx.getStorageSync("CONFIG"), t.setData({
                                isIphoneX: s,
                                next_cursor: 0,
                                config: o
                            }), a.next = 6, t.getPostList();

                          case 6:
                            u = t.data.page_title, l = void 0 === u ? "首页" : u, wx.setNavigationBarTitle({
                                title: l
                            }), t.addGuideSecond();

                          case 8:
                          case "end":
                            return a.stop();
                        }
                    }, r);
                }))();
            },
            onShow: function() {
                var e = this;
                return r(a.default.mark(function t() {
                    var r;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            (r = e.data.page_title) && wx.setNavigationBarTitle({
                                title: r
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            getPostList: function() {
                var e = this;
                return r(a.default.mark(function r() {
                    var n, s, i, u, c, l;
                    return a.default.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return a.prev = 0, n = e.data, s = n.next_cursor, i = n.isReachBottom, u = {
                                cursor: s
                            }, a.next = 5, o.default.hei.getPostList(u);

                          case 5:
                            c = a.sent, l = i ? e.data.posts.concat(c.posts) : c.posts, e.setData(t(t({}, c), {}, {
                                posts: l,
                                next_cursor: c.next_cursor,
                                isLoading: !1,
                                isReachBottom: !1
                            })), a.next = 13;
                            break;

                          case 10:
                            a.prev = 10, a.t0 = a.catch(0), wx.showModal({
                                title: "温馨提示",
                                content: a.t0.errMsg,
                                showCancel: !1
                            });

                          case 13:
                          case "end":
                            return a.stop();
                        }
                    }, r, null, [ [ 0, 10 ] ]);
                }))();
            },
            onPullDownRefresh: function() {
                var e = this;
                return r(a.default.mark(function t() {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.setData({
                                posts: [],
                                next_cursor: 0,
                                isLoading: !0
                            }), t.next = 3, e.getPostList();

                          case 3:
                            wx.stopPullDownRefresh();

                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            onReachBottom: function() {
                var e = this;
                return r(a.default.mark(function t() {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.data.next_cursor && e.setData({
                                isReachBottom: !0
                            }, e.getPostList);

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            goPage: function(e) {
                return r(a.default.mark(function t() {
                    var r;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            "link" === (r = e.currentTarget.dataset.item).format ? Object(i.autoNavigate_)({
                                url: "/pages/webPages/webPages?src=" + r.format_content.link
                            }) : Object(i.autoNavigate_)({
                                url: "/pages/articleDetail/articleDetail?id=" + r.id
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            addGuideSecond: function() {
                var e = this;
                wx.getStorageSync("ISSHOWGUIDE") || (this.setData({
                    guide_status: !0
                }), setTimeout(function() {
                    e.setData({
                        guide_status: !1
                    }), wx.setStorageSync("ISSHOWGUIDE", !0);
                }, 5e3));
            },
            onShareAppMessage: function() {
                return u.onDefaultShareAppMessage.call(this);
            },
            onShareTimeline: function() {
                return u.onDefaultShareAppTimeline.call(this);
            },
            go: i.go
        });
    }
}));