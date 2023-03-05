require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/overlay/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/overlay/index.js": function(e, o, n) {
        n.r(o);
        var t = n("../node_modules/@vant/weapp/dist/common/component.js");
        Object(t.VantComponent)({
            props: {
                show: Boolean,
                customStyle: String,
                duration: {
                    type: null,
                    value: 300
                },
                zIndex: {
                    type: Number,
                    value: 1
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                },
                noop: function() {}
            }
        });
    }
}));