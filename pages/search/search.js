var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/search/search.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/search/search.js": function(r, s, n) {
        n.r(s);
        var o = n("./utils/api/index.js"), c = n("./constants/index.js"), i = n("./utils/wxProxy.js"), u = n("./utils/util.js");
        Page({
            data: {
                searchKeys: [],
                searchKey: "",
                posts: [],
                currentPage: 1,
                totalPages: 1,
                isSearch: !1,
                isLoading: !0
            },
            getPostList: function() {
                var r = this;
                return a(e.default.mark(function a() {
                    var s, n, c, i, u, h, f, l;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return s = r.data, n = s.currentPage, c = s.searchKey, i = void 0 === c ? "" : c, 
                            u = s.isReachBottom, h = {
                                paged: n,
                                s: i
                            }, e.next = 4, o.default.hei.getPostList(h);

                          case 4:
                            f = e.sent, l = u ? r.data.posts.concat(f.posts) : f.posts, r.setData(t(t({}, f), {}, {
                                posts: l,
                                currentPage: f.current_page,
                                totalPages: f.total_pages,
                                isLoading: !1,
                                isReachBottom: !1
                            }));

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            onLoad: function() {
                var e = wx.getStorageSync(c.SEARCH_KEY) || [];
                this.setData({
                    searchKeys: e
                });
            },
            onInput: function(e) {
                var t = e.detail.value;
                this.setData({
                    searchKey: t
                });
            },
            onSearch: function(t) {
                var r = this;
                return a(e.default.mark(function a() {
                    var s, n, o, i;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            s = t.isHistroy, n = r.data, o = n.searchKeys, (i = n.searchKey) ? (r.setData({
                                isSearch: !0,
                                currentPage: 1,
                                isLoading: !0
                            }), !s && i && (o.find(function(e) {
                                return i === e;
                            }) || (o.unshift(i), wx.setStorageSync(c.SEARCH_KEY, o), r.setData({
                                searchKeys: o
                            }))), r.getPostList()) : wx.showToast({
                                title: "请输入关键字",
                                icon: "none"
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            onSearchKeyClick: function(e) {
                var t = e.currentTarget.dataset.search;
                this.setData({
                    searchKey: t
                }), this.onSearch({
                    isHistroy: !0
                });
            },
            onClearSearch: function() {
                this.setData({
                    searchKey: ""
                });
            },
            onClearHistory: function() {
                var t = this;
                return a(e.default.mark(function a() {
                    var r;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, i.default.showModal({
                                title: "温馨提示",
                                content: "确认清空历史？"
                            });

                          case 2:
                            r = e.sent, r.confirm && (t.setData({
                                searchKeys: []
                            }), wx.setStorageSync(c.SEARCH_KEY, []));

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            onReachBottom: function() {
                var t = this;
                return a(e.default.mark(function a() {
                    var r, s, n;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            r = t.data, s = r.currentPage, n = r.totalPages, s >= n || t.setData({
                                currentPage: s + 1,
                                isReachBottom: !0
                            }, t.getPostList);

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            go: u.go
        });
    }
}));