var e = require("../../../@babel/runtime/helpers/interopRequireDefault")(require("../../../@babel/runtime/regenerator")), t = require("../../../@babel/runtime/helpers/objectSpread2"), r = require("../../../@babel/runtime/helpers/asyncToGenerator");

require("./../../../webpack-require")("./pages/me/favList/favList.js", Object.assign(require("././../../../commons.js").modules, {
    "./pages/me/favList/favList.js": function(s, a, n) {
        n.r(a);
        var o = n("./utils/api/index.js"), u = n("./utils/util.js"), i = n("./utils/pageShare.js"), c = getApp();
        Page({
            data: {
                next_cursor: 0,
                posts: [],
                isReachBottom: !1,
                isLoading: !0
            },
            go: u.go,
            onLoad: function(s) {
                var a = this;
                return r(e.default.mark(function r() {
                    var n;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            console.log(s), n = c.systemInfo.isIphoneX, a.setData(t({
                                isIphoneX: n,
                                next_cursor: 0
                            }, s));

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            onShow: function() {
                var t = this;
                return r(e.default.mark(function r() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, t.getPostList();

                          case 2:
                            t.data.page_title, wx.setNavigationBarTitle({
                                title: "我的点赞"
                            });

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            getPostList: function() {
                var s = this;
                return r(e.default.mark(function r() {
                    var a, n, u, i, c, f;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return a = s.data, n = a.next_cursor, u = a.isReachBottom, i = {
                                cursor: n
                            }, e.next = 4, o.default.hei.getFavList(i);

                          case 4:
                            c = e.sent, f = u ? s.data.posts.concat(c.posts) : c.posts, s.setData(t(t({}, c), {}, {
                                posts: f,
                                next_cursor: c.next_cursor,
                                isLoading: !1,
                                isReachBottom: !1
                            }));

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            onPullDownRefresh: function() {
                var t = this;
                return r(e.default.mark(function r() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.setData({
                                posts: [],
                                next_cursor: 0,
                                isLoading: !0
                            }), e.next = 3, t.getPostList();

                          case 3:
                            wx.stopPullDownRefresh();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            onReachBottom: function() {
                var t = this;
                return r(e.default.mark(function r() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.data.next_cursor && t.setData({
                                isReachBottom: !0
                            }, t.getPostList);

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                }))();
            },
            onShareAppMessage: i.onDefaultShareAppMessage
        });
    }
}));