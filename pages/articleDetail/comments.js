var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/defineProperty"), a = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), r = require("../../@babel/runtime/helpers/objectSpread2");

require("./../../webpack-require")("./pages/articleDetail/comments.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/articleDetail/comments.js": function(e, o, s) {
        s.r(o);
        var i = s("./utils/api/index.js"), c = (s("./utils/wxProxy.js"), s("./utils/util.js")), u = s("./utils/pageShare.js");
        Page({
            data: {
                comment: "",
                replyParentId: null,
                placeholder: "写评论...",
                isShowInputBox: !1,
                keyboardHeight: 400
            },
            onLoad: function(e) {
                var t = this;
                console.log(e), this.setData(r({}, e), this.getArticleDetail), wx.onKeyboardHeightChange(function(e) {
                    console.log(e.height), t.setData({
                        keyboardHeight: e.height
                    });
                });
            },
            go: c.go,
            goPage: function(e) {
                return n(a.default.mark(function t() {
                    var n;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            "link" === (n = e.currentTarget.dataset.item).format ? Object(c.autoNavigate_)({
                                url: "/pages/webPages/webPages?src=" + n.format_content.link
                            }) : Object(c.autoNavigate_)({
                                url: "/pages/articleDetail/articleDetail?id=" + n.id
                            });

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            bindGetUserInfo: function(e) {
                var t = this;
                return n(a.default.mark(function n() {
                    var r, o;
                    return a.default.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return r = e.currentTarget.dataset.method, a.next = 3, Object(c.getUserProfile)();

                          case 3:
                            o = a.sent, t.setData({
                                current_user: o
                            }, t[r]);

                          case 5:
                          case "end":
                            return a.stop();
                        }
                    }, n);
                }))();
            },
            onDiggComment: function(e) {
                var r = this;
                return n(a.default.mark(function n() {
                    var o, s, c, u, l, d, h, m, g, p, f, w;
                    return a.default.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return a.prev = 0, s = e.currentTarget.dataset, c = s.index, u = s.childIndex, l = s.commentId, 
                            d = s.isDigged, h = d ? "undiggComment" : "diggComment", a.next = 5, i.default.hei[h]({
                                comment_id: l
                            });

                          case 5:
                            m = a.sent, g = m.comment, p = g.is_digged, f = g.digg_count, w = u >= 0 ? "comments[".concat(c, "].children[").concat(u, "]") : "comments[".concat(c, "]"), 
                            r.setData((t(o = {}, w + ".is_digged", p), t(o, w + ".digg_count", f), o)), a.next = 16;
                            break;

                          case 13:
                            a.prev = 13, a.t0 = a.catch(0), console.log(a.t0);

                          case 16:
                          case "end":
                            return a.stop();
                        }
                    }, n, null, [ [ 0, 13 ] ]);
                }))();
            },
            getArticleDetail: function() {
                var e = this;
                return n(a.default.mark(function t() {
                    var n, o, s, c, u, l, d, h;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, wx.showLoading({
                                title: "加载中",
                                mask: !0
                            }), n = e.data, o = n.id, s = void 0 === o ? "" : o, c = n.name, u = void 0 === c ? "" : c, 
                            t.next = 9, i.default.hei.getPostDetail({
                                id: s,
                                name: u
                            });

                          case 9:
                            l = t.sent, d = l.post.comments, e.setData(r(r({}, l), {}, {
                                comments: d
                            })), h = e.data.page_title, wx.setNavigationBarTitle({
                                title: h
                            }), wx.hideLoading(), t.next = 19;
                            break;

                          case 16:
                            t.prev = 16, t.t0 = t.catch(0), console.log(t.t0), wx.hideLoading();

                          case 19:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 0, 16 ] ]);
                }))();
            },
            showInputBox: function() {
                var e = this.data.isShowInputBox;
                this.setData({
                    isShowInputBox: !e
                });
            },
            onComment: function() {
                this.setData({
                    placeholder: "说两句吧"
                }, this.showInputBox);
                var e = this;
                setTimeout(function() {
                    e.setData({
                        focus: !0
                    });
                }, 200);
            },
            onReply: function(e) {
                console.log(e);
                var t = e.currentTarget.dataset, a = t.replyParentId, n = t.replyUser;
                this.setData({
                    replyParentId: a,
                    placeholder: "回复" + n
                }, this.showInputBox);
                var r = this;
                setTimeout(function() {
                    r.setData({
                        focus: !0
                    });
                }, 100);
            },
            onChangeInput: function(e) {
                console.log(e);
                var t = e.detail.value;
                this.setData({
                    comment: t
                });
            },
            onSubmit: function() {
                var e = this;
                return n(a.default.mark(function t() {
                    var n, r, o, s, u;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (t.prev = 0, n = e.data, r = n.id, o = n.comment, s = n.replyParentId, o) {
                                t.next = 4;
                                break;
                            }
                            return t.abrupt("return", void wx.showToast({
                                title: "评论内容不能为空",
                                icon: "none"
                            }));

                          case 4:
                            return wx.showLoading({
                                title: "请求中...",
                                mask: !0
                            }), u = {
                                post_id: r,
                                comment: o
                            }, s && (u.parent = s), t.next = 9, i.default.hei.postComment(u);

                          case 9:
                            return e.setData({
                                comment: "",
                                replyParentId: null,
                                isShowInputBox: !1
                            }), wx.hideLoading(), wx.showToast({
                                title: "评论成功！",
                                icon: "success"
                            }), t.next = 14, Object(c.subscribeMessage)([ {
                                key: "comment_reply_notice"
                            }, {
                                key: "comment_selected_notice"
                            }, {
                                key: "comment_sticky_notice"
                            } ]);

                          case 14:
                            e.getArticleDetail(), t.next = 20;
                            break;

                          case 17:
                            t.prev = 17, t.t0 = t.catch(0), wx.hideLoading(), wx.showModal({
                                title: "温馨提示",
                                content: t.t0.errMsg,
                                showCancel: !1
                            });

                          case 20:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 0, 17 ] ]);
                }))();
            },
            showPoster: function() {
                var e = this.data.isShowPoster;
                this.setData({
                    isShowPoster: !e
                });
            },
            onShareAppMessage: u.onDefaultShareAppMessage
        });
    }
}));