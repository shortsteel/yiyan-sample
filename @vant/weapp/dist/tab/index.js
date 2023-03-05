require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/tab/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/tab/index.js": function(e, t, a) {
        a.r(t);
        var n = a("../node_modules/@vant/weapp/dist/common/component.js");
        Object(n.VantComponent)({
            relation: {
                name: "tabs",
                type: "ancestor",
                current: "tab"
            },
            props: {
                dot: {
                    type: Boolean,
                    observer: "update"
                },
                info: {
                    type: null,
                    observer: "update"
                },
                title: {
                    type: String,
                    observer: "update"
                },
                disabled: {
                    type: Boolean,
                    observer: "update"
                },
                titleStyle: {
                    type: String,
                    observer: "update"
                },
                name: {
                    type: [ Number, String ],
                    value: ""
                }
            },
            data: {
                active: !1
            },
            methods: {
                getComputedName: function() {
                    return "" !== this.data.name ? this.data.name : this.index;
                },
                updateRender: function(e, t) {
                    var a = t.data;
                    this.inited = this.inited || e, this.setData({
                        active: e,
                        shouldRender: this.inited || !a.lazyRender,
                        shouldShow: e || a.animated
                    });
                },
                update: function() {
                    this.parent && this.parent.updateTabs();
                }
            }
        });
    }
}));