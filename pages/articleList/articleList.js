var t = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), e = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/articleList/articleList.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/articleList/articleList.js": function(r, i, n) {
        n.r(i);
        var o = n("./utils/api/index.js"), s = n("./utils/util.js"), c = n("./utils/pageShare.js"), u = getApp();
        Page({
            data: {
                next_cursor: 0,
                posts: [],
                isReachBottom: !1,
                isLoading: !0,
                categories: []
            },
            go: s.go,
            onLoad: function(r) {
                var i = this;
                return a(t.default.mark(function a() {
                    var n, o, s, c, d, l, g, h, v, p, f, m;
                    return t.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return console.log(r), n = r.category_id, o = void 0 === n ? "" : n, s = r.categoryParent, 
                            void 0 === s ? "" : s, c = r.orderby, void 0 === c ? "" : c, d = u.systemInfo.isIphoneX, 
                            l = wx.getStorageSync("CONFIG"), i.setData(e({
                                isIphoneX: d,
                                next_cursor: 0,
                                config: l
                            }, r)), t.next = 5, i.getPostList();

                          case 5:
                            g = i.data.categories, h = [], v = [], p = "", g.length <= 1 ? (h = g[0] && g[0].children, 
                            p = g[0] && g[0].id) : h = g, h && h.forEach(function(t) {
                                v.push({
                                    text: t.name,
                                    value: t.id
                                });
                            }), v.unshift({
                                text: "全部",
                                value: p
                            }), -1 === (f = v.findIndex(function(t) {
                                return t.value === Number(o);
                            })) && (f = 0), m = i.data.page_title, wx.setNavigationBarTitle({
                                title: 0 != i.data.categories.length ? i.data.categories[0].name : m
                            }), i.setData({
                                globalData: u.globalData,
                                navbarListData: v,
                                activeIndex: f,
                                isInit: !1
                            });

                          case 12:
                          case "end":
                            return t.stop();
                        }
                    }, a);
                }))();
            },
            goPage: function(e) {
                return a(t.default.mark(function a() {
                    var r;
                    return t.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            "link" === (r = e.currentTarget.dataset.item).format ? Object(s.autoNavigate_)({
                                url: "/pages/webPages/webPages?src=" + r.format_content.link
                            }) : Object(s.autoNavigate_)({
                                url: "/pages/articleDetail/articleDetail?id=" + r.id
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, a);
                }))();
            },
            getPostList: function() {
                var r = this;
                return a(t.default.mark(function a() {
                    var i, n, s, c, u, d, l, g, h, v, p, f, m, x, _, b, L, y, w, D, P, I, j, T, k, q, R, S, X, B, N, O, A;
                    return t.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return i = r.data, n = i.next_cursor, s = i.isReachBottom, c = i.author, u = void 0 === c ? 0 : c, 
                            d = i.category_id, l = void 0 === d ? 0 : d, g = i.category_name, h = void 0 === g ? "" : g, 
                            v = i.cat, p = void 0 === v ? "" : v, f = i.author_name, m = void 0 === f ? "" : f, 
                            x = i.tag, _ = void 0 === x ? "" : x, b = i.tag_id, L = void 0 === b ? "" : b, y = i.year, 
                            w = void 0 === y ? "" : y, D = i.monthnum, P = void 0 === D ? "" : D, I = i.day, 
                            j = void 0 === I ? "" : I, T = i.taxonomy, k = void 0 === T ? "" : T, q = i.term, 
                            R = void 0 === q ? "" : q, S = i.term_id, X = void 0 === S ? "" : S, B = i.paged, 
                            N = {
                                cursor: n,
                                cat: p,
                                author_name: m,
                                tag: _,
                                author: u,
                                category_id: l,
                                category_name: h,
                                tag_id: L,
                                year: w,
                                monthnum: P,
                                day: j,
                                taxonomy: k,
                                term: R,
                                term_id: X,
                                paged: void 0 === B ? "" : B
                            }, t.next = 4, o.default.hei.getPostList(N);

                          case 4:
                            O = t.sent, A = s ? r.data.posts.concat(O.posts) : O.posts, r.setData(e(e({}, O), {}, {
                                posts: A,
                                next_cursor: O.next_cursor,
                                isLoading: !1,
                                isReachBottom: !1
                            }));

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, a);
                }))();
            },
            onPullDownRefresh: function() {
                var e = this;
                return a(t.default.mark(function a() {
                    return t.default.wrap(function(t) {
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
                    }, a);
                }))();
            },
            onReachBottom: function() {
                var e = this;
                return a(t.default.mark(function a() {
                    return t.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.data.next_cursor && e.setData({
                                isReachBottom: !0
                            }, e.getPostList);

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, a);
                }))();
            },
            onShareAppMessage: function() {
                var t = this;
                return {
                    title: t.data.share_title,
                    path: "pages/articleList/articleList?category_id=" + t.data.current_category.id,
                    imageUrl: t.data.share_image
                };
            },
            onShareTimeline: function() {
                return c.onDefaultShareAppTimeline.call(this);
            },
            changeNavbarList: function(t) {
                var e = t.detail, a = e.index, r = e.value;
                wx.setNavigationBarTitle({
                    title: this.data.categories[0].name
                }), this.setData({
                    posts: [],
                    category_id: r,
                    activeIndex: a,
                    isLoading: !0,
                    current_page: 1,
                    next_cursor: 0
                }), this.getPostList();
            },
            onTouchStart: function(t) {
                this.data.clineX = t.touches[0].clientX;
            },
            onTouchEnd: function(t) {
                var e = this.data.activeIndex;
                t.changedTouches[0].clientX - this.data.clineX < -120 && this.moveIndex(e + 1), 
                t.changedTouches[0].clientX - this.data.clineX > 120 && this.moveIndex(e - 1);
            },
            moveIndex: function(t) {
                var e = t, a = this.data.navbarListData, r = a.length, i = a.last;
                e < 0 || (t > (void 0 === i ? r - 1 : i) && (e = 0), this.setData({
                    posts: [],
                    category_id: a[e].value,
                    activeIndex: e,
                    isLoading: !0,
                    current_page: 1
                }), this.getPostList());
            }
        });
    }
}));