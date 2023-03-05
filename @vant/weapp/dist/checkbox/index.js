require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/checkbox/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/checkbox/index.js": function(e, a, t) {
        t.r(a);
        var n = t("../node_modules/@vant/weapp/dist/common/component.js");
        function i(e, a) {
            e.$emit("input", a), e.$emit("change", a);
        }
        Object(n.VantComponent)({
            field: !0,
            relation: {
                name: "checkbox-group",
                type: "ancestor",
                current: "checkbox"
            },
            classes: [ "icon-class", "label-class" ],
            props: {
                value: Boolean,
                disabled: Boolean,
                useIconSlot: Boolean,
                checkedColor: String,
                labelPosition: String,
                labelDisabled: Boolean,
                shape: {
                    type: String,
                    value: "round"
                },
                iconSize: {
                    type: null,
                    value: 20
                }
            },
            data: {
                parentDisabled: !1
            },
            methods: {
                emitChange: function(e) {
                    this.parent ? this.setParentValue(this.parent, e) : i(this, e);
                },
                toggle: function() {
                    var e = this.data, a = e.parentDisabled, t = e.disabled, n = e.value;
                    t || a || this.emitChange(!n);
                },
                onClickLabel: function() {
                    var e = this.data, a = e.labelDisabled, t = e.parentDisabled, n = e.disabled, i = e.value;
                    n || a || t || this.emitChange(!i);
                },
                setParentValue: function(e, a) {
                    var t = e.data.value.slice(), n = this.data.name, s = e.data.max;
                    if (a) {
                        if (s && t.length >= s) return;
                        -1 === t.indexOf(n) && (t.push(n), i(e, t));
                    } else {
                        var o = t.indexOf(n);
                        -1 !== o && (t.splice(o, 1), i(e, t));
                    }
                }
            }
        });
    }
}));