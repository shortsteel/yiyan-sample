var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./pages/creationContent/creationContent.js", Object.assign(require("././../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/dialog/dialog.js": function(e, t, a) {
        a.r(t);
        var n = [], r = {
            show: !1,
            title: "",
            width: null,
            theme: "default",
            message: "",
            zIndex: 100,
            overlay: !0,
            selector: "#van-dialog",
            className: "",
            asyncClose: !1,
            transition: "scale",
            customStyle: "",
            messageAlign: "",
            overlayStyle: "",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            showConfirmButton: !0,
            showCancelButton: !1,
            closeOnClickOverlay: !1,
            confirmButtonOpenType: ""
        }, s = Object.assign({}, r), i = function(e) {
            return e = Object.assign(Object.assign({}, s), e), new Promise(function(t, a) {
                var r = (e.context || function() {
                    var e = getCurrentPages();
                    return e[e.length - 1];
                }()).selectComponent(e.selector);
                delete e.context, delete e.selector, r ? (r.setData(Object.assign({
                    onCancel: a,
                    onConfirm: t
                }, e)), wx.nextTick(function() {
                    r.setData({
                        show: !0
                    });
                }), n.push(r)) : console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确");
            });
        };
        i.alert = function(e) {
            return i(e);
        }, i.confirm = function(e) {
            return i(Object.assign({
                showCancelButton: !0
            }, e));
        }, i.close = function() {
            n.forEach(function(e) {
                e.close();
            }), n = [];
        }, i.stopLoading = function() {
            n.forEach(function(e) {
                e.stopLoading();
            });
        }, i.currentOptions = s, i.defaultOptions = r, i.setDefaultOptions = function(e) {
            s = Object.assign(Object.assign({}, s), e), i.currentOptions = s;
        }, i.resetDefaultOptions = function() {
            s = Object.assign({}, r), i.currentOptions = s;
        }, i.resetDefaultOptions(), t.default = i;
    },
    "./pages/creationContent/creationContent.js": function(a, n, r) {
        r.r(n);
        var s = r("./utils/api/index.js"), i = (r("./utils/util.js"), r("./utils/pageShare.js"), 
        r("./utils/wxProxy.js")), o = r("../node_modules/@vant/weapp/dist/dialog/dialog.js");
        Page({
            data: {
                title: "",
                status: [ {
                    name: "发布",
                    value: "publish"
                }, {
                    name: "草稿",
                    value: "draft"
                } ],
                categories: [],
                currrentCategoryIndex: 0,
                currentStatusIndex: 0,
                gallery: {
                    text: "",
                    images: []
                },
                images: [ {
                    image: "",
                    text: ""
                } ],
                fileList: [],
                show: !1,
                isLoading: !0
            },
            onLoad: function(a) {
                var n = this;
                return t(e.default.mark(function t() {
                    var r, i, o, u, c, l, f, d, g, p, m, h, x, v, w, C;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = a.id, i = void 0 === r ? "" : r, o = a.name, u = void 0 === o ? "" : o, 
                            c = a.type, getApp(), l = wx.getStorageSync("CONFIG"), e.next = 5, s.default.hei.getMe();

                          case 5:
                            if (f = e.sent, d = f.current_user, n.setData({
                                categories: l.categories || [],
                                type: c,
                                user: d
                            }), !i && !u) {
                                e.next = 19;
                                break;
                            }
                            return e.next = 10, s.default.hei.getPostDetail({
                                id: i,
                                name: u
                            });

                          case 10:
                            g = e.sent, p = g.post, console.log(p), m = n.data, h = m.status, x = m.categories, 
                            v = h.findIndex(function(e) {
                                return e.value === p.status;
                            }), w = 0, p.category && p.category.length && (w = x.findIndex(function(e) {
                                return e.id === p.category[0].id;
                            })), "gallery" === p.format && p.format_content && (C = p.format_content.gallery.map(function(e) {
                                return {
                                    url: e.raw
                                };
                            }), n.setData({
                                fileList: C,
                                gallery: {
                                    text: p.format_content.text,
                                    images: p.format_content.gallery
                                }
                            })), "image" === p.format && n.setData({
                                images: p.format_content.images
                            }), n.setData({
                                title: p.title,
                                currentStatusIndex: v,
                                currrentCategoryIndex: w,
                                id: i,
                                isLoading: !1
                            }), e.next = 20;
                            break;

                          case 19:
                            n.setData({
                                isLoading: !1
                            });

                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            createArticle: function() {
                var a = this;
                return t(e.default.mark(function t() {
                    var n, r, i, u, c, l, f, d, g, p, m, h, x, v;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = a.data, r = n.categories, i = n.currrentCategoryIndex, u = n.title, c = n.type, 
                            l = n.status, f = n.currentStatusIndex, d = n.fileList, g = n.gallery, p = n.id, 
                            u || o.default.alert({
                                title: "温馨提示",
                                message: "标题不能为空"
                            }).then(function() {}), m = p ? "updateArticle" : "createArticle", h = d.map(function(e) {
                                return e.url;
                            }), e.next = 6, s.default.hei[m]({
                                title: u,
                                status: l[f].value,
                                format: c,
                                images: h,
                                category_ids: [ r[i].id ],
                                text: g.text,
                                post_id: p
                            });

                          case 6:
                            x = e.sent, v = x.errmsg, wx.showModal({
                                title: "温馨提示",
                                content: v,
                                showCancel: !1,
                                cancelText: "取消",
                                cancelColor: "#000000",
                                confirmText: "确定",
                                confirmColor: "#3CC51F",
                                success: function(e) {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                },
                                fail: function() {},
                                complete: function() {}
                            });

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            afterRead: function(a) {
                var n = this;
                return t(e.default.mark(function r() {
                    var i;
                    return e.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            i = a.detail.file, console.log(i, "file"), i.forEach(function() {
                                var a = t(e.default.mark(function t(a) {
                                    var r, i, o, u;
                                    return e.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.next = 2, s.default.hei.upload({
                                                filePath: a.url
                                            });

                                          case 2:
                                            r = e.sent, i = JSON.parse(r), o = i.url, (u = n.data.fileList).push({
                                                url: o
                                            }), n.setData({
                                                fileList: u
                                            });

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, t);
                                }));
                                return function(e) {
                                    return a.apply(this, arguments);
                                };
                            }());

                          case 2:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            },
            deleteFileList: function(a) {
                var n = this;
                return t(e.default.mark(function t() {
                    var r, s;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            r = a.detail.index, (s = n.data.fileList).splice(r, 1), n.setData({
                                fileList: s
                            });

                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            },
            editorInput: function(e) {
                console.log(e);
            },
            valueChange: function(e) {
                var t = e.detail.value;
                this.setData({
                    "gallery.text": t
                });
            },
            titleChange: function(e) {
                var t = e.detail;
                this.setData({
                    title: t
                });
            },
            bindCategoryChange: function(e) {
                console.log(e, "ee");
                var t = e.detail.value;
                this.setData({
                    currrentCategoryIndex: Number(t)
                });
            },
            bindStatusChange: function(e) {
                var t = e.detail.value;
                this.setData({
                    currentStatusIndex: Number(t)
                });
            },
            AddGalleryCard: function() {
                var e = this.data.images;
                e.push({
                    image: "",
                    text: ""
                }), this.setData({
                    images: e
                });
            },
            deleteGalleryCard: function(e) {
                var t = e.currentTarget.dataset.index, a = this.data.images;
                a.splice(t, 1), this.setData({
                    images: a
                });
            },
            openPopupText: function(e) {
                var t = e.currentTarget.dataset.index, a = this.data.images;
                this.setData({
                    show: !0,
                    currentPopupText: a[t] && a[t].text,
                    currentPopupIndex: t
                });
                var n = this;
                setTimeout(function() {
                    n.setData({
                        focus: !0
                    });
                }, 150);
            },
            closePopupText: function(e) {
                this.setData({
                    show: !1
                });
            },
            uploadImg: function(a) {
                var n = this;
                return t(e.default.mark(function t() {
                    var r, o, u, c, l, f, d;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return r = n.data.images, o = a.currentTarget.dataset.index, e.next = 4, i.default.chooseImage({
                                count: 1
                            });

                          case 4:
                            return u = e.sent, c = u.tempFilePaths, e.prev = 6, e.next = 9, s.default.hei.upload({
                                filePath: c[0]
                            });

                          case 9:
                            l = e.sent, f = JSON.parse(l), d = f.url, r[o].raw = d, n.setData({
                                images: r
                            }), e.next = 18;
                            break;

                          case 15:
                            e.prev = 15, e.t0 = e.catch(6), wx.showModal({
                                title: "温馨提示",
                                content: e.t0.errMsg,
                                showCancel: !1
                            });

                          case 18:
                          case "end":
                            return e.stop();
                        }
                    }, t, null, [ [ 6, 15 ] ]);
                }))();
            },
            imageValueChange: function(e) {
                var t = e.detail.value, a = (e.currentTarget.dataset.index, this.data), n = a.images;
                return n[a.currentPopupIndex].text = t, this.setData({
                    currentPopupText: t,
                    images: n
                }), t;
            },
            createGalleryArticle: function() {
                var a = this;
                return t(e.default.mark(function t() {
                    var n, r, i, u, c, l, f, d, g, p, m, h, x;
                    return e.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = a.data, r = n.categories, i = n.currrentCategoryIndex, u = n.title, c = n.type, 
                            l = n.status, f = n.currentStatusIndex, n.fileList, n.gallery, d = n.id, g = n.images, 
                            u || o.default.alert({
                                title: "温馨提示",
                                message: "标题不能为空"
                            }).then(function() {}), p = d ? "updateArticle" : "createArticle", m = g.map(function(e) {
                                return {
                                    image: e.raw,
                                    text: e.text
                                };
                            }), e.next = 6, s.default.hei[p]({
                                title: u,
                                status: l[f].value,
                                format: c,
                                images: m,
                                category_ids: r[i].id,
                                post_id: d
                            });

                          case 6:
                            h = e.sent, x = h.errmsg, wx.showModal({
                                title: "温馨提示",
                                content: x,
                                showCancel: !1,
                                cancelText: "取消",
                                cancelColor: "#000000",
                                confirmText: "确定",
                                confirmColor: "#3CC51F",
                                success: function(e) {},
                                fail: function() {},
                                complete: function() {}
                            });

                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, t);
                }))();
            }
        });
    }
}));