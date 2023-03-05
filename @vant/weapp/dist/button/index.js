require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/button/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/button/index.js": function(n, e, t) {
        t.r(e);
        var o = t("../node_modules/@vant/weapp/dist/common/component.js"), a = t("../node_modules/@vant/weapp/dist/mixins/button.js"), i = t("../node_modules/@vant/weapp/dist/mixins/open-type.js"), s = t("../node_modules/@vant/weapp/dist/common/version.js"), r = [ a.button, i.openType ];
        Object(s.canIUseFormFieldButton)() && r.push("wx://form-field-button"), Object(o.VantComponent)({
            mixins: r,
            classes: [ "hover-class", "loading-class" ],
            data: {
                baseStyle: ""
            },
            props: {
                formType: String,
                icon: String,
                classPrefix: {
                    type: String,
                    value: "van-icon"
                },
                plain: Boolean,
                block: Boolean,
                round: Boolean,
                square: Boolean,
                loading: Boolean,
                hairline: Boolean,
                disabled: Boolean,
                loadingText: String,
                customStyle: String,
                loadingType: {
                    type: String,
                    value: "circular"
                },
                type: {
                    type: String,
                    value: "default"
                },
                dataset: null,
                size: {
                    type: String,
                    value: "normal"
                },
                loadingSize: {
                    type: String,
                    value: "20px"
                },
                color: {
                    type: String,
                    observer: function(n) {
                        var e = "";
                        n && (e += "color: ".concat(this.data.plain ? n : "white", ";"), this.data.plain || (e += "background: ".concat(n, ";")), 
                        -1 !== n.indexOf("gradient") ? e += "border: 0;" : e += "border-color: ".concat(n, ";")), 
                        e !== this.data.baseStyle && this.setData({
                            baseStyle: e
                        });
                    }
                }
            },
            methods: {
                onClick: function() {
                    this.data.loading || this.$emit("click");
                },
                noop: function() {}
            }
        });
    },
    "../node_modules/@vant/weapp/dist/common/version.js": function(n, e, t) {
        t.r(e), t.d(e, "canIUseModel", function() {
            return i;
        }), t.d(e, "canIUseFormFieldButton", function() {
            return s;
        });
        var o = t("../node_modules/@vant/weapp/dist/common/utils.js");
        function a(n, e) {
            n = n.split("."), e = e.split(".");
            for (var t = Math.max(n.length, e.length); n.length < t; ) n.push("0");
            for (;e.length < t; ) e.push("0");
            for (var o = 0; o < t; o++) {
                var a = parseInt(n[o], 10), i = parseInt(e[o], 10);
                if (a > i) return 1;
                if (a < i) return -1;
            }
            return 0;
        }
        function i() {
            return a(Object(o.getSystemInfoSync)().SDKVersion, "2.9.3") >= 0;
        }
        function s() {
            return a(Object(o.getSystemInfoSync)().SDKVersion, "2.10.3") >= 0;
        }
    }
}));