var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/objectSpread2"), a = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/creationList/creationList.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/creationList/creationList.js": function(r, n, o) {
        o.r(n);
        var s = o("./utils/api/index.js"), i = o("./utils/util.js");
        o("./utils/pageShare.js");
        var u = getApp();
        Page({
            data: {
                next_cursor: 0,
                posts: [],
                isReachBottom: !1,
                isLoading: !0,
                show: !1,
                actions: [ {
                    name: "相册",
                    type: "gallery"
                }, {
                    name: "图集",
                    type: "image"
                } ]
            },
            go: i.go,
            onLoad: function(r) {
                var n = this;
                return a(e.default.mark(function a() {
                    var o, i, c, l;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return console.log(r), o = u.systemInfo.isIphoneX, e.next = 4, s.default.hei.getMe();

                          case 4:
                            return i = e.sent, c = i.current_user, n.setData(t({
                                isIphoneX: o,
                                next_cursor: 0,
                                user: c
                            }, r)), e.next = 9, n.getCreationList();

                          case 9:
                            l = n.data.page_title, wx.setNavigationBarTitle({
                                title: l
                            });

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            getCreationList: function() {
                var r = this;
                return a(e.default.mark(function a() {
                    var n, o, i, u, c, l, p, d, f, g, h, m;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = r.data, o = n.next_cursor, i = n.isReachBottom, u = n.author, c = void 0 === u ? 0 : u, 
                            l = n.category_id, p = void 0 === l ? 0 : l, d = n.category_name, f = void 0 === d ? "" : d, 
                            g = {
                                cursor: o
                            }, c && (g.author = c), p && (g.category_id = p), f && (g.category_name = f), e.next = 5, 
                            s.default.hei.getCreationList(g);

                          case 5:
                            h = e.sent, m = i ? r.data.posts.concat(h.posts) : h.posts, r.setData(t(t({}, h), {}, {
                                posts: m,
                                next_cursor: h.next_cursor,
                                isLoading: !1,
                                isReachBottom: !1
                            }));

                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            onPullDownRefresh: function() {
                var t = this;
                return a(e.default.mark(function a() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.setData({
                                posts: [],
                                next_cursor: 0,
                                isLoading: !0
                            }), e.next = 3, t.getCreationList();

                          case 3:
                            wx.stopPullDownRefresh();

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            onReachBottom: function() {
                var t = this;
                return a(e.default.mark(function a() {
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.data.next_cursor && t.setData({
                                isReachBottom: !0
                            }, t.getCreationList);

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, a);
                }))();
            },
            openActionSheet: function() {
                this.setData({
                    show: !0
                });
            },
            closeActionSheet: function() {
                this.setData({
                    show: !1
                });
            },
            onSelect: function(e) {
                console.log(e);
                var t = e.detail.type;
                Object(i.autoNavigate_)({
                    url: "/pages/creationContent/creationContent?type=" + t
                });
            },
            goPage: function(e) {
                var t = e.currentTarget.dataset.item;
                t.editable ? wx.navigateTo({
                    url: "/pages/creationContent/creationContent?id=" + t.id + "&type=" + t.format
                }) : wx.showToast({
                    title: "无法编辑",
                    icon: "none",
                    image: "",
                    duration: 1500,
                    mask: !1
                });
            }
        });
    }
}));