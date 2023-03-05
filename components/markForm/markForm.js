var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"), r = e(require("../../@babel/runtime/regenerator")), a = require("../../@babel/runtime/helpers/asyncToGenerator");

require("./../../webpack-require")("./components/markForm/markForm.js", Object.assign(require("././../../commons.js").modules, {
    "./components/markForm/markForm.js": function(e, n, o) {
        o.r(n);
        var u = o("./utils/wxp.js"), s = o("./utils/api/index.js"), i = o("./utils/util.js"), l = getApp();
        Component({
            properties: {
                form: {
                    type: Array,
                    value: []
                },
                onlyShow: {
                    type: Boolean,
                    value: !1
                },
                showSubmitBtn: {
                    type: Boolean,
                    value: !0
                }
            },
            observers: {
                "form, onlyShow": function(e, t) {
                    if (e) {
                        var r = e;
                        t && (r = e.filter(function(e) {
                            return e.value;
                        })), this.setData({
                            showForm: r
                        });
                    }
                }
            },
            data: {
                themeColor: l.globalData.themeColor || {},
                showForm: []
            },
            methods: {
                onFormFocus: function(e) {
                    var t = e.type, r = e.currentTarget.dataset.name, a = this.data.form.find(function(e) {
                        return e.name === r;
                    }), n = !1;
                    "textarea" !== a.type && "text" !== a.type && ("focus" === t && (n = !0), this.triggerEvent("change-form-focus", {
                        isFocused: n
                    }, {
                        bubbles: !0,
                        composed: !0
                    }));
                },
                onFormChange: function(e) {
                    var t = e.detail, r = e.currentTarget.dataset.name, a = this.data.form, n = a.findIndex(function(e) {
                        return e.name === r;
                    });
                    "select" === a[n].type ? t = a[n].options[t.value] : t.value && (t = t.value), a[n].value = t, 
                    this.setData({
                        form: a
                    });
                },
                onUpload: function(e) {
                    var t = this;
                    return a(r.default.mark(function a() {
                        var n, o, i, l, c, m, f, d, h, p;
                        return r.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return n = e.currentTarget.dataset.name, o = t.data.form, i = o.findIndex(function(e) {
                                    return e.name === n;
                                }), r.next = 3, Object(u.chooseImage)({
                                    count: 1
                                });

                              case 3:
                                return l = r.sent, c = l.tempFilePaths, r.prev = 5, r.next = 8, s.default.hei.upload({
                                    filePath: c[0]
                                });

                              case 8:
                                m = r.sent, f = JSON.parse(m), d = f.url, h = f.errcode, p = f.errmsg, h ? wx.showModal({
                                    title: "温馨提示",
                                    content: p,
                                    showCancel: !1
                                }) : (o[i].value = d, t.setData({
                                    form: o
                                })), r.next = 19;
                                break;

                              case 16:
                                r.prev = 16, r.t0 = r.catch(5), console.log(r.t0);

                              case 19:
                              case "end":
                                return r.stop();
                            }
                        }, a, null, [ [ 5, 16 ] ]);
                    }))();
                },
                onAfterRead: function(e) {
                    var t = this;
                    return a(r.default.mark(function a() {
                        var n, o, u, i, l, c, m;
                        return r.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return console.log("e", e), n = e.detail.file, o = e.currentTarget.dataset.name, 
                                u = t.data.form, i = u.findIndex(function(e) {
                                    return e.name === o;
                                }), r.prev = 2, r.next = 5, s.default.hei.upload({
                                    filePath: n.url || n.path
                                });

                              case 5:
                                l = r.sent, c = JSON.parse(l), m = c.url, u[i].value = [ {
                                    url: m
                                } ], t.setData({
                                    form: u
                                }), r.next = 13;
                                break;

                              case 10:
                                r.prev = 10, r.t0 = r.catch(2), wx.showModal({
                                    title: "温馨提示",
                                    content: r.t0.errmsg || r.t0.errMsg,
                                    showCancel: !1
                                });

                              case 13:
                              case "end":
                                return r.stop();
                            }
                        }, a, null, [ [ 2, 10 ] ]);
                    }))();
                },
                onFileDelete: function(e) {
                    var t = e.currentTarget.dataset.name, r = this.data.form, a = r.findIndex(function(e) {
                        return e.name === t;
                    });
                    r[a].value = "", this.setData({
                        form: r
                    });
                },
                previewImg: function(e) {
                    var t = e.currentTarget.dataset.url;
                    wx.previewImage({
                        urls: [ t ]
                    });
                },
                handleValidate: function() {
                    var e, r = this.data.form, a = "", n = t(r);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var o = e.value, u = o.name, s = o.value, l = o.required, c = o.type;
                            s ? "phone_number" !== c || Object(i.checkPhone)(s) ? "email" !== c || Object(i.checkEmail)(s) ? "id_number" !== c || Object(i.checkIdNameNum)(s) || (a = "请输入18位数的身份证号码") : a = "请输入正确的邮箱格式" : a = "请输入正确的手机格式" : l && (a = "请输入" + u);
                        }
                    } catch (e) {
                        n.e(e);
                    } finally {
                        n.f();
                    }
                    return a ? function() {
                        throw wx.showToast({
                            title: a,
                            icon: "none"
                        }), new Error(a);
                    }() : r;
                },
                submit: function() {
                    var e = this.handleValidate();
                    this.triggerEvent("submit", {
                        form: e
                    });
                }
            }
        });
    }
}));