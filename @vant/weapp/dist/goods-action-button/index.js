require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/goods-action-button/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/goods-action-button/index.js": function(n, t, e) {
        e.r(t);
        var o = e("../node_modules/@vant/weapp/dist/common/component.js"), i = e("../node_modules/@vant/weapp/dist/mixins/link.js"), s = e("../node_modules/@vant/weapp/dist/mixins/button.js"), a = e("../node_modules/@vant/weapp/dist/mixins/open-type.js");
        Object(o.VantComponent)({
            mixins: [ i.link, s.button, a.openType ],
            relation: {
                type: "ancestor",
                name: "goods-action",
                current: "goods-action-button"
            },
            props: {
                text: String,
                color: String,
                loading: Boolean,
                disabled: Boolean,
                plain: Boolean,
                type: {
                    type: String,
                    value: "danger"
                }
            },
            methods: {
                onClick: function(n) {
                    this.$emit("click", n.detail), this.jumpLink();
                },
                updateStyle: function() {
                    if (null != this.parent) {
                        var n = this.parent.children, t = void 0 === n ? [] : n, e = t.length, o = t.indexOf(this);
                        this.setData({
                            isFirst: 0 === o,
                            isLast: o === e - 1
                        });
                    }
                }
            }
        });
    }
}));