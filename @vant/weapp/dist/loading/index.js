require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/loading/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/loading/index.js": function(e, n, t) {
        t.r(n);
        var o = t("../node_modules/@vant/weapp/dist/common/component.js");
        Object(o.VantComponent)({
            props: {
                color: String,
                vertical: Boolean,
                type: {
                    type: String,
                    value: "circular"
                },
                size: String,
                textSize: String
            },
            data: {
                array12: Array.from({
                    length: 12
                })
            }
        });
    }
}));