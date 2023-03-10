require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/radio/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/radio/index.js": function(e, a, n) {
        n.r(a);
        var i = n("../node_modules/@vant/weapp/dist/common/component.js");
        Object(i.VantComponent)({
            field: !0,
            relation: {
                name: "radio-group",
                type: "ancestor",
                current: "radio"
            },
            classes: [ "icon-class", "label-class" ],
            props: {
                name: null,
                value: null,
                disabled: Boolean,
                useIconSlot: Boolean,
                checkedColor: String,
                labelPosition: {
                    type: String,
                    value: "right"
                },
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
            methods: {
                emitChange: function(e) {
                    var a = this.parent || this;
                    a.$emit("input", e), a.$emit("change", e);
                },
                onChange: function() {
                    this.data.disabled || this.emitChange(this.data.name);
                },
                onClickLabel: function() {
                    var e = this.data, a = e.disabled, n = e.labelDisabled, i = e.name;
                    a || n || this.emitChange(i);
                }
            }
        });
    }
}));