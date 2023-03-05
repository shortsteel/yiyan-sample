require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/divider/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/divider/index.js": function(e, t, o) {
        o.r(t);
        var n = o("../node_modules/@vant/weapp/dist/common/component.js");
        Object(n.VantComponent)({
            props: {
                dashed: {
                    type: Boolean,
                    value: !1
                },
                hairline: {
                    type: Boolean,
                    value: !1
                },
                contentPosition: {
                    type: String,
                    value: ""
                },
                fontSize: {
                    type: Number,
                    value: ""
                },
                borderColor: {
                    type: String,
                    value: ""
                },
                textColor: {
                    type: String,
                    value: ""
                },
                customStyle: {
                    type: String,
                    value: ""
                }
            }
        });
    }
}));