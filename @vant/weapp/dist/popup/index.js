require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/popup/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/popup/index.js": function(e, o, t) {
        t.r(o);
        var s = t("../node_modules/@vant/weapp/dist/common/component.js"), n = t("../node_modules/@vant/weapp/dist/mixins/transition.js");
        Object(s.VantComponent)({
            classes: [ "enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class", "close-icon-class" ],
            mixins: [ Object(n.transition)(!1) ],
            props: {
                round: Boolean,
                closeable: Boolean,
                customStyle: String,
                overlayStyle: String,
                transition: {
                    type: String,
                    observer: "observeClass"
                },
                zIndex: {
                    type: Number,
                    value: 100
                },
                overlay: {
                    type: Boolean,
                    value: !0
                },
                closeIcon: {
                    type: String,
                    value: "cross"
                },
                closeIconPosition: {
                    type: String,
                    value: "top-right"
                },
                closeOnClickOverlay: {
                    type: Boolean,
                    value: !0
                },
                position: {
                    type: String,
                    value: "center",
                    observer: "observeClass"
                },
                safeAreaInsetBottom: {
                    type: Boolean,
                    value: !0
                },
                safeAreaInsetTop: {
                    type: Boolean,
                    value: !1
                }
            },
            created: function() {
                this.observeClass();
            },
            methods: {
                onClickCloseIcon: function() {
                    this.$emit("close");
                },
                onClickOverlay: function() {
                    this.$emit("click-overlay"), this.data.closeOnClickOverlay && this.$emit("close");
                },
                observeClass: function() {
                    var e = this.data, o = e.transition, t = e.position, s = e.duration, n = {
                        name: o || t
                    };
                    "none" === o ? (n.duration = 0, this.originDuration = s) : null != this.originDuration && (n.duration = this.originDuration), 
                    this.setData(n);
                }
            }
        });
    }
}));