require("./../../webpack-require")("./components/categoryList/index.js", Object.assign(require("././../../commons.js").modules, {
    "./components/categoryList/index.js": function(e, t, a) {
        a.r(t), a("./utils/api/index.js");
        var s = getApp();
        Component({
            properties: {
                categories: {
                    type: Array,
                    value: []
                },
                categoryListStyle: {
                    type: String,
                    value: ""
                }
            },
            attached: function() {
                var e = s.globalData.tabbarPages;
                this.setData({
                    tabbarPages: e
                });
            },
            methods: {
                onClick: function(e) {
                    console.log(e.detail.value);
                }
            }
        });
    }
}));