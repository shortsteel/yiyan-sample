require("./../../webpack-require")("./pages/errorPage/errorPage.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/errorPage/errorPage.js": function(e, a, o) {
        o.r(a);
        var r = o("./utils/util.js"), t = o("./constants/index.js");
        Page({
            data: {
                title: "500"
            },
            onLoad: function(e) {
                console.log(e);
                var a = wx.getStorageSync(t.CONFIG);
                this.setData({
                    config: a
                });
            },
            navigateToHome: function() {
                Object(r.autoNavigate)("/pages/home/home");
            }
        });
    }
}));