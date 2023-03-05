require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/icon/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/icon/index.js": function(n, e, o) {
        o.r(e);
        var i = o("../node_modules/@vant/weapp/dist/common/component.js");
        Object(i.VantComponent)({
            props: {
                dot: Boolean,
                info: null,
                size: null,
                color: String,
                customStyle: String,
                classPrefix: {
                    type: String,
                    value: "van-icon"
                },
                name: String
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            }
        });
    }
}));