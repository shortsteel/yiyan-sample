require("./../../webpack-require")("./components/logo/logo.js", Object.assign(require("././../../commons.js").modules, {
    "./components/logo/logo.js": function(o, t, e) {
        e.r(t);
        var s = e("./utils/util.js"), n = e("./constants/index.js");
        Component({
            properties: {
                logoObj: {
                    type: Object,
                    value: {
                        logo: "",
                        copyright_text: ""
                    }
                }
            },
            methods: {
                go: s.go
            },
            attached: function() {
                var o = wx.getStorageSync(n.CONFIG);
                this.setData({
                    config: o
                });
            }
        });
    }
}));