require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/goods-action/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/goods-action/index.js": function(e, t, n) {
        n.r(t);
        var o = n("../node_modules/@vant/weapp/dist/common/component.js");
        Object(o.VantComponent)({
            relation: {
                type: "descendant",
                name: "goods-action-button",
                current: "goods-action",
                linked: function() {
                    this.updateStyle();
                },
                unlinked: function() {
                    this.updateStyle();
                },
                linkChanged: function() {
                    this.updateStyle();
                }
            },
            props: {
                safeAreaInsetBottom: {
                    type: Boolean,
                    value: !0
                }
            },
            methods: {
                updateStyle: function() {
                    var e = this;
                    wx.nextTick(function() {
                        e.children.forEach(function(e) {
                            e.updateStyle();
                        });
                    });
                }
            }
        });
    }
}));