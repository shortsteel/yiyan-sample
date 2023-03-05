require("./../../webpack-require")("./components/productNavigationBar/productNavigationBar.js", Object.assign(require("././../../commons.js").modules, {
    "./components/productNavigationBar/productNavigationBar.js": function(t, e, o) {
        o.r(e);
        var a = o("./constants/index.js"), i = o("./utils/util.js"), n = getApp();
        Component({
            properties: {
                navType: {
                    type: String,
                    value: ""
                },
                showSearchBox: {
                    type: Boolean,
                    vaule: !0
                },
                title: {
                    type: String,
                    value: ""
                },
                showBgColor: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                barLeftStyle: "",
                barCenterStyle: ""
            },
            lifetimes: {
                attached: function() {
                    this.getConfigData(), this.getChildComponent();
                }
            },
            pageLifetimes: {
                show: function() {
                    this.setData({
                        globalData: n.globalData
                    });
                }
            },
            methods: {
                go: i.go,
                getConfigData: function() {
                    var t = wx.getStorageSync(a.CONFIG), e = n.globalData, o = e.themeColor, r = e.themeColor.backgroundColor, g = Object(i.colorRgb)(r);
                    this.setData({
                        globalData: n.globalData,
                        config: t,
                        themeColor: o,
                        backgroundRgb: g
                    });
                },
                getChildComponent: function() {
                    var t = getApp().globalSystemInfo, e = t.windowWidth, o = t.capsulePosition, a = e - o.right, i = [ "width:".concat(o.width, "px"), "height:".concat(o.height, "px"), "margin-left:".concat(a, "px") ].join(";"), n = "height:".concat(o.height, "px");
                    this.setData({
                        barLeftStyle: i,
                        barCenterStyle: n
                    });
                }
            }
        });
    }
}));