require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/image/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/image/index.js": function(e, t, o) {
        o.r(t);
        var i = o("../node_modules/@vant/weapp/dist/common/utils.js"), s = o("../node_modules/@vant/weapp/dist/common/component.js"), n = o("../node_modules/@vant/weapp/dist/mixins/button.js"), a = o("../node_modules/@vant/weapp/dist/mixins/open-type.js"), d = {
            none: "center",
            fill: "scaleToFill",
            cover: "aspectFill",
            contain: "aspectFit",
            widthFix: "widthFix",
            heightFix: "heightFix"
        };
        Object(s.VantComponent)({
            mixins: [ n.button, a.openType ],
            classes: [ "custom-class", "loading-class", "error-class", "image-class" ],
            props: {
                src: {
                    type: String,
                    observer: function() {
                        this.setData({
                            error: !1,
                            loading: !0
                        });
                    }
                },
                round: Boolean,
                width: {
                    type: null,
                    observer: "setStyle"
                },
                height: {
                    type: null,
                    observer: "setStyle"
                },
                radius: null,
                lazyLoad: Boolean,
                useErrorSlot: Boolean,
                useLoadingSlot: Boolean,
                showMenuByLongpress: Boolean,
                fit: {
                    type: String,
                    value: "fill",
                    observer: "setMode"
                },
                showError: {
                    type: Boolean,
                    value: !0
                },
                showLoading: {
                    type: Boolean,
                    value: !0
                }
            },
            data: {
                error: !1,
                loading: !0,
                viewStyle: ""
            },
            mounted: function() {
                this.setMode(), this.setStyle();
            },
            methods: {
                setMode: function() {
                    this.setData({
                        mode: d[this.data.fit]
                    });
                },
                setStyle: function() {
                    var e = this.data, t = e.width, o = e.height, s = e.radius, n = "";
                    Object(i.isDef)(t) && (n += "width: ".concat(Object(i.addUnit)(t), ";")), Object(i.isDef)(o) && (n += "height: ".concat(Object(i.addUnit)(o), ";")), 
                    Object(i.isDef)(s) && (n += "overflow: hidden;", n += "border-radius: ".concat(Object(i.addUnit)(s), ";")), 
                    this.setData({
                        viewStyle: n
                    });
                },
                onLoad: function(e) {
                    this.setData({
                        loading: !1
                    }), this.$emit("load", e.detail);
                },
                onError: function(e) {
                    this.setData({
                        loading: !1,
                        error: !0
                    }), this.$emit("error", e.detail);
                },
                onClick: function(e) {
                    this.$emit("click", e.detail);
                }
            }
        });
    }
}));