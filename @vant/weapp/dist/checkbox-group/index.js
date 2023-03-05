require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/checkbox-group/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/checkbox-group/index.js": function(e, n, t) {
        t.r(n);
        var a = t("../node_modules/@vant/weapp/dist/common/component.js");
        Object(a.VantComponent)({
            field: !0,
            relation: {
                name: "checkbox",
                type: "descendant",
                current: "checkbox-group",
                linked: function(e) {
                    this.updateChild(e);
                }
            },
            props: {
                max: Number,
                value: {
                    type: Array,
                    observer: "updateChildren"
                },
                disabled: {
                    type: Boolean,
                    observer: "updateChildren"
                }
            },
            methods: {
                updateChildren: function() {
                    var e = this;
                    (this.children || []).forEach(function(n) {
                        return e.updateChild(n);
                    });
                },
                updateChild: function(e) {
                    var n = this.data, t = n.value, a = n.disabled;
                    e.setData({
                        value: -1 !== t.indexOf(e.data.name),
                        parentDisabled: a
                    });
                }
            }
        });
    }
}));