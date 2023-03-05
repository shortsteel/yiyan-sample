var e = require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")), t = require("../../@babel/runtime/helpers/asyncToGenerator"), o = require("../../@babel/runtime/helpers/objectSpread2");

require("./../../webpack-require")("./components/myModal/myModal.js", Object.assign(require("././../../commons.js").modules, {
    "./components/myModal/myModal.js": function(n, r, a) {
        a.r(r);
        var i = a("./utils/util.js");
        getApp(), Component({
            properties: {
                modal: {
                    type: Object,
                    value: {},
                    observer: function(e) {
                        var t = this;
                        if (e) {
                            var n = this.data.defineModal;
                            this.setData({
                                defineModal: o(o({}, n), e)
                            }, function() {
                                console.log(t.data.defineModal);
                            });
                        }
                    }
                }
            },
            data: {
                defineModal: {
                    title: "温馨提示",
                    body: "",
                    isShowCanel: !0,
                    type: "button",
                    navigateData: {},
                    buttonData: {},
                    confirmText: "确定",
                    cancelText: "取消",
                    isShowModal: !1,
                    isFatherControl: !1,
                    bodyStyle: ""
                }
            },
            methods: {
                onCancel: function() {
                    console.log("console"), this.data.defineModal.isFatherControl ? this.triggerEvent("onCancel", {}, {
                        bubbles: !0
                    }) : this.setData({
                        "defineModal.isShowModal": !1
                    });
                },
                onConfirm: function(o) {
                    var n = this;
                    return t(e.default.mark(function t() {
                        return e.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.data.defineModal.isFatherControl ? n.triggerEvent("onConfirm", {}, {
                                    bubbles: !0
                                }) : n.setData({
                                    "defineModal.isShowModal": !1
                                });

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, t);
                    }))();
                },
                bindGetUserInfo: function(o) {
                    var n = this;
                    return t(e.default.mark(function t() {
                        var o;
                        return e.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(i.getUserProfile)();

                              case 2:
                                o = e.sent, console.log(o, "user"), n.triggerEvent("onSaveUserInfo", {
                                    user: o
                                }, {
                                    bubbles: !0
                                });

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, t);
                    }))();
                },
                touchmove: function() {
                    console.log("点击穿透阻止");
                }
            }
        });
    }
}));