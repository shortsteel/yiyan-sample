require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/goods-action-icon/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/goods-action-icon/index.js": function(n, o, e) {
        e.r(o);
        var i = e("../node_modules/@vant/weapp/dist/common/component.js"), s = e("../node_modules/@vant/weapp/dist/mixins/button.js"), t = e("../node_modules/@vant/weapp/dist/mixins/link.js"), d = e("../node_modules/@vant/weapp/dist/mixins/open-type.js");
        Object(i.VantComponent)({
            classes: [ "icon-class", "text-class" ],
            mixins: [ t.link, s.button, d.openType ],
            props: {
                text: String,
                dot: Boolean,
                info: String,
                icon: String,
                disabled: Boolean,
                loading: Boolean
            },
            methods: {
                onClick: function(n) {
                    this.$emit("click", n.detail), this.jumpLink();
                }
            }
        });
    }
}));