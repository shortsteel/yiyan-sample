var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/toConsumableArray"), r = require("../../@babel/runtime/helpers/objectSpread2"), i = require("../../@babel/runtime/helpers/classCallCheck"), n = require("../../@babel/runtime/helpers/createClass"), s = e(require("../../@babel/runtime/regenerator")), a = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./components/poster/index.js", Object.assign(require("././../../commons.js").modules, {
    "./components/poster/index.js": function(e, t, r) {
        r.r(t);
        var i = r("./components/poster/poster.js"), n = r("./utils/wxProxy.js"), o = r("./utils/util.js");
        Component({
            properties: {
                show: {
                    type: Boolean,
                    value: !1
                },
                poster: {
                    type: Object,
                    value: {}
                },
                user: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                palette: {},
                imagePath: ""
            },
            attached: function() {
                var e = this;
                return a(s.default.mark(function t() {
                    var r, n, a, o, u;
                    return s.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            r = e.data, n = r.poster, a = r.user, wx.showLoading({
                                title: "绘制图片中..."
                            }), o = {
                                qrcode_url: n.wxacode
                            }, u = new i.default(Object.assign(n, o), a).init(), e.setData({
                                palette: u
                            });

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            detached: function() {
                this.setData({
                    palette: {},
                    imagePath: ""
                });
            },
            methods: {
                closePoster: function() {
                    this.triggerEvent("closePoster");
                },
                onImgOK: function(e) {
                    var t = e.detail.path;
                    console.log(t, "-----------------"), this.setData({
                        imagePath: t
                    }), wx.hideLoading();
                },
                saveImage: function() {
                    var e = this;
                    return a(s.default.mark(function t() {
                        var r, i;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r = e.data.imagePath, t.next = 3, Object(o.auth)({
                                    scope: "scope.writePhotosAlbum",
                                    ctx: e,
                                    isFatherControl: !0
                                });

                              case 3:
                                if (!t.sent) {
                                    t.next = 11;
                                    break;
                                }
                                return t.next = 6, n.default.saveImageToPhotosAlbum({
                                    filePath: r
                                });

                              case 6:
                                return t.next = 8, n.default.showModal({
                                    title: "温馨提示",
                                    content: "保存成功，快去分享吧",
                                    showCancel: !1
                                });

                              case 8:
                                i = t.sent, i.confirm && e.closePoster();

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        });
    },
    "./components/poster/poster.js": function(e, s, a) {
        a.r(s), a.d(s, "default", function() {
            return u;
        });
        var o = a("./utils/util.js"), u = function() {
            function e(t, n) {
                i(this, e), this.data = r(r({}, t), {}, {
                    user: n
                }), this.posterPainter = {}, this.posterPainterViews = [];
            }
            return n(e, [ {
                key: "init",
                value: function() {
                    this.posterPainter = this.initBase();
                    var e = [].concat(t(this.initHeader()), t(this.initContent()), t(this.initUserInfo()), t(this.initQrcode()));
                    return this.posterPainter.views = e, this.posterPainter;
                }
            }, {
                key: "initBase",
                value: function() {
                    return {
                        width: "600rpx",
                        height: "1050rpx"
                    };
                }
            }, {
                key: "initHeader",
                value: function() {
                    var e = this.data.poster;
                    return [ {
                        type: "image",
                        url: Object(o.imgToHttps)(e),
                        css: {
                            width: "600rpx",
                            height: "800rpx"
                        }
                    } ];
                }
            }, {
                key: "initContent",
                value: function() {
                    return [ {
                        type: "text",
                        text: this.data.title,
                        css: {
                            width: "540rpx",
                            bottom: "194rpx",
                            left: "30rpx",
                            fontSize: "32rpx",
                            maxLines: 2,
                            background: "#fff",
                            lineHeight: "40rpx",
                            color: "#000000"
                        }
                    }, {
                        type: "rect",
                        css: {
                            width: "540rpx",
                            height: "1rpx",
                            color: "#ccc",
                            left: "30rpx",
                            bottom: "180rpx"
                        }
                    } ];
                }
            }, {
                key: "initUserInfo",
                value: function() {
                    var e = this.data.user;
                    return [ {
                        type: "image",
                        url: Object(o.imgToHttps)(e.avatarurl),
                        css: {
                            bottom: "100rpx",
                            left: "180rpx",
                            width: "40rpx",
                            height: "40rpx",
                            borderRadius: "20rpx"
                        }
                    }, {
                        id: "nickname-id",
                        type: "text",
                        text: e.nickname,
                        css: {
                            bottom: "110rpx",
                            left: "230rpx",
                            width: "160rpx",
                            height: "40rpx",
                            fontSize: "22rpx",
                            maxLines: 1,
                            color: "#000000"
                        }
                    }, {
                        type: "text",
                        text: "正在读这篇文章",
                        css: {
                            bottom: "110rpx",
                            left: [ "240rpx", "nickname-id" ],
                            fontSize: "24rpx",
                            color: "#707070"
                        }
                    }, {
                        type: "text",
                        text: "长按识别小程序码，阅读全文",
                        css: {
                            bottom: "50rpx",
                            left: "180rpx",
                            fontSize: "24rpx",
                            color: "#707070"
                        }
                    } ];
                }
            }, {
                key: "initQrcode",
                value: function() {
                    var e = this.data.qrcode_url;
                    return [ {
                        type: "image",
                        url: Object(o.imgToHttps)(e),
                        css: {
                            bottom: "30rpx",
                            left: "30rpx",
                            width: "120rpx",
                            height: "120rpx"
                        }
                    } ];
                }
            } ]), e;
        }();
    }
}));