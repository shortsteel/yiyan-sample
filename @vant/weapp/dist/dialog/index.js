var n = require("../../../../@babel/runtime/helpers/defineProperty");

require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/dialog/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/common/color.js": function(n, e, t) {
        t.r(e), t.d(e, "RED", function() {
            return o;
        }), t.d(e, "BLUE", function() {
            return i;
        }), t.d(e, "WHITE", function() {
            return a;
        }), t.d(e, "GREEN", function() {
            return s;
        }), t.d(e, "ORANGE", function() {
            return l;
        }), t.d(e, "GRAY", function() {
            return r;
        }), t.d(e, "GRAY_DARK", function() {
            return c;
        });
        var o = "#ee0a24", i = "#1989fa", a = "#fff", s = "#07c160", l = "#ff976a", r = "#323233", c = "#969799";
    },
    "../node_modules/@vant/weapp/dist/dialog/index.js": function(e, t, o) {
        o.r(t);
        var i = o("../node_modules/@vant/weapp/dist/common/component.js"), a = o("../node_modules/@vant/weapp/dist/mixins/button.js"), s = o("../node_modules/@vant/weapp/dist/mixins/open-type.js"), l = o("../node_modules/@vant/weapp/dist/common/color.js");
        Object(i.VantComponent)({
            mixins: [ a.button, s.openType ],
            props: {
                show: {
                    type: Boolean,
                    observer: function(n) {
                        !n && this.stopLoading();
                    }
                },
                title: String,
                message: String,
                theme: {
                    type: String,
                    value: "default"
                },
                useSlot: Boolean,
                className: String,
                customStyle: String,
                asyncClose: Boolean,
                messageAlign: String,
                overlayStyle: String,
                useTitleSlot: Boolean,
                showCancelButton: Boolean,
                closeOnClickOverlay: Boolean,
                confirmButtonOpenType: String,
                width: null,
                zIndex: {
                    type: Number,
                    value: 2e3
                },
                confirmButtonText: {
                    type: String,
                    value: "确认"
                },
                cancelButtonText: {
                    type: String,
                    value: "取消"
                },
                confirmButtonColor: {
                    type: String,
                    value: l.RED
                },
                cancelButtonColor: {
                    type: String,
                    value: l.GRAY
                },
                showConfirmButton: {
                    type: Boolean,
                    value: !0
                },
                overlay: {
                    type: Boolean,
                    value: !0
                },
                transition: {
                    type: String,
                    value: "scale"
                }
            },
            data: {
                loading: {
                    confirm: !1,
                    cancel: !1
                }
            },
            methods: {
                onConfirm: function() {
                    this.handleAction("confirm");
                },
                onCancel: function() {
                    this.handleAction("cancel");
                },
                onClickOverlay: function() {
                    this.onClose("overlay");
                },
                handleAction: function(e) {
                    this.data.asyncClose && this.setData(n({}, "loading." + e, !0)), this.onClose(e);
                },
                close: function() {
                    this.setData({
                        show: !1
                    });
                },
                stopLoading: function() {
                    this.setData({
                        loading: {
                            confirm: !1,
                            cancel: !1
                        }
                    });
                },
                onClose: function(n) {
                    this.data.asyncClose || this.close(), this.$emit("close", n), this.$emit(n, {
                        dialog: this
                    });
                    var e = this.data["confirm" === n ? "onConfirm" : "onCancel"];
                    e && e(this);
                }
            }
        });
    }
}));