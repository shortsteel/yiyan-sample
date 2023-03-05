require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/transition/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/transition/index.js": function(e, s, n) {
        n.r(s);
        var t = n("../node_modules/@vant/weapp/dist/common/component.js"), a = n("../node_modules/@vant/weapp/dist/mixins/transition.js");
        Object(t.VantComponent)({
            classes: [ "enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class" ],
            mixins: [ Object(a.transition)(!0) ]
        });
    }
}));