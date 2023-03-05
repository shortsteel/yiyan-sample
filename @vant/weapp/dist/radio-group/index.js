require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/radio-group/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/radio-group/index.js": function(e, d, a) {
        a.r(d);
        var t = a("../node_modules/@vant/weapp/dist/common/component.js");
        Object(t.VantComponent)({
            field: !0,
            relation: {
                name: "radio",
                type: "descendant",
                current: "radio-group",
                linked: function(e) {
                    this.updateChild(e);
                }
            },
            props: {
                value: {
                    type: null,
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
                    (this.children || []).forEach(function(d) {
                        return e.updateChild(d);
                    });
                },
                updateChild: function(e) {
                    var d = this.data, a = d.value, t = d.disabled;
                    e.setData({
                        value: a,
                        disabled: t || e.data.disabled
                    });
                }
            }
        });
    }
}));