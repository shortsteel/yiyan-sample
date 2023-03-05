require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/cell/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/cell/index.js": function(e, i, n) {
        n.r(i);
        var l = n("../node_modules/@vant/weapp/dist/mixins/link.js"), t = n("../node_modules/@vant/weapp/dist/common/component.js");
        Object(t.VantComponent)({
            classes: [ "title-class", "label-class", "value-class", "right-icon-class", "hover-class" ],
            mixins: [ l.link ],
            props: {
                title: null,
                value: null,
                icon: String,
                size: String,
                label: String,
                center: Boolean,
                isLink: Boolean,
                required: Boolean,
                clickable: Boolean,
                titleWidth: String,
                customStyle: String,
                arrowDirection: String,
                useLabelSlot: Boolean,
                border: {
                    type: Boolean,
                    value: !0
                },
                titleStyle: String
            },
            methods: {
                onClick: function(e) {
                    this.$emit("click", e.detail), this.jumpLink();
                }
            }
        });
    }
}));