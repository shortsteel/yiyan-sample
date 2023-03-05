require("./../../../../webpack-require")("./pages/home/components/searchBox/searchBox.js", Object.assign(require("././../../../../commons.js").modules, {
    "./pages/home/components/searchBox/searchBox.js": function(e, a, t) {
        t.r(a);
        var o = t("./constants/index.js");
        Component({
            properties: {
                total: {
                    type: String,
                    value: ""
                },
                themeColor: {
                    type: Object,
                    value: {}
                },
                globalData: {
                    type: Object,
                    value: {}
                },
                onlySearchBox: {
                    type: Boolean,
                    value: !0
                }
            },
            data: {
                config: {},
                currentStore: {},
                value: ""
            },
            lifetimes: {
                attached: function() {
                    var e = wx.getStorageSync(o.CONFIG);
                    this.setData({
                        config: e
                    });
                }
            },
            methods: {
                inputChangeHandle: function(e) {
                    var a = e.detail.value;
                    this.setData({
                        value: a
                    });
                },
                runToSearch: function() {
                    wx.navigateTo({
                        url: "/pages/search/search?key=" + this.data.value
                    });
                }
            }
        });
    }
}));