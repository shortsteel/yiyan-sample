require("./../../webpack-require")("./components/navigationBar/navigationBar.js", {
    "./components/navigationBar/navigationBar.js": function(t, e) {
        Component({
            options: {
                multipleSlots: !0,
                addGlobalClass: !0
            },
            properties: {
                extClass: {
                    type: String,
                    value: ""
                },
                background: {
                    type: String,
                    value: "255,255,255",
                    observer: "_showChange"
                },
                backgroundColorTop: {
                    type: String,
                    value: "255, 255, 255",
                    observer: "_showChangeBackgroundColorTop"
                },
                color: {
                    type: String,
                    value: "rgba(0, 0, 0, 1)"
                },
                title: {
                    type: String,
                    value: ""
                },
                searchText: {
                    type: String,
                    value: "点我搜索"
                },
                searchBar: {
                    type: Boolean,
                    value: !1
                },
                back: {
                    type: Boolean,
                    value: !1
                },
                home: {
                    type: Boolean,
                    value: !1
                },
                iconTheme: {
                    type: String,
                    value: "black"
                },
                homeIcon: {
                    type: String,
                    value: ""
                },
                leftBackgroundColor: {
                    type: String,
                    value: ""
                },
                showBgColor: {
                    type: Boolean,
                    value: !1,
                    observer: function(t) {
                        t ? (this.animation.backgroundColor("rgba(".concat(this.data.background, ",.9)")).step(), 
                        this.setData({
                            animations: this.animation.export()
                        }), this.setStyle()) : (this.animation.backgroundColor("rgba(".concat(this.data.background, ",0)")).step(), 
                        this.setData({
                            animations: this.animation.export()
                        }));
                    }
                },
                delta: {
                    type: Number,
                    value: 1
                }
            },
            created: function() {
                this.getSystemInfo(), this.animation = wx.createAnimation({
                    duration: 200,
                    timingFunction: "linear",
                    delay: 0,
                    transformOrigin: "50% 50% 0"
                }), console.log(this.animation, "this.animation");
            },
            attached: function() {
                this.setStyle();
            },
            data: {},
            pageLifetimes: {
                show: function() {
                    getApp().globalSystemInfo.ios && (this.getSystemInfo(), this.setStyle());
                },
                hide: function() {}
            },
            methods: {
                setStyle: function(t) {
                    var e, a = getApp().globalSystemInfo, n = a.statusBarHeight, i = a.navBarHeight, o = a.capsulePosition, r = a.navBarExtendHeight, s = a.ios, h = a.windowWidth, g = this.data, l = g.back, c = g.home, u = g.title, d = h - o.right, p = h - o.left, v = [ "color: " + this.data.color, "height:".concat(i + r, "px"), "padding-top:".concat(n, "px"), "padding-right:".concat(p, "px"), "padding-bottom:".concat(r, "px") ].join(";");
                    e = l && !c || !l && c ? [ "width:".concat(o.width, "px"), "height:".concat(o.height, "px") ].join(";") : l && c || u ? [ "width:".concat(o.width, "px"), "height:".concat(o.height, "px"), "margin-left:".concat(d, "px") ].join(";") : [ "width:auto", "margin-left:0px" ].join(";"), 
                    "created" === t ? this.data = {
                        navigationbarinnerStyle: v,
                        navBarLeft: e,
                        navBarHeight: i,
                        capsulePosition: o,
                        navBarExtendHeight: r,
                        ios: s
                    } : this.setData({
                        navigationbarinnerStyle: v,
                        navBarLeft: e,
                        navBarHeight: i,
                        capsulePosition: o,
                        navBarExtendHeight: r,
                        ios: s
                    });
                },
                _showChange: function(t) {
                    this.setStyle();
                },
                back: function() {
                    this.triggerEvent("back", {
                        delta: this.data.delta
                    });
                },
                home: function() {
                    this.triggerEvent("home", {});
                },
                search: function() {
                    this.triggerEvent("search", {});
                },
                getSystemInfo: function() {
                    var t = getApp();
                    if (t.globalSystemInfo && !t.globalSystemInfo.ios) return t.globalSystemInfo;
                    var e, a = wx.getSystemInfoSync(), n = !!(a.system.toLowerCase().search("ios") + 1);
                    try {
                        if (null === (e = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null)) throw new Error("getMenuButtonBoundingClientRect error");
                        if (!(e.width && e.top && e.left && e.height)) throw new Error("getMenuButtonBoundingClientRect error");
                    } catch (t) {
                        var i = "", o = 96;
                        "android" === a.platform ? (i = 8, o = 96) : "devtools" === a.platform ? i = n ? 5.5 : 7.5 : (i = 4, 
                        o = 88), a.statusBarHeight || (a.statusBarHeight = a.screenHeight - a.windowHeight - 20), 
                        e = {
                            bottom: a.statusBarHeight + i + 32,
                            height: 32,
                            left: a.windowWidth - o - 10,
                            right: a.windowWidth - 10,
                            top: a.statusBarHeight + i,
                            width: o
                        }, console.log("error", t), console.log("rect", e);
                    }
                    var r = "";
                    return a.statusBarHeight ? (r = function() {
                        var t = e.top - a.statusBarHeight;
                        return a.statusBarHeight + 2 * t + e.height;
                    }(), a.navBarExtendHeight = n ? 4 : 0) : (a.statusBarHeight = a.screenHeight - a.windowHeight - 20, 
                    r = 2 * (e.top - a.statusBarHeight) + e.height, a.statusBarHeight = 0, a.navBarExtendHeight = 0), 
                    a.navBarHeight = r, a.capsulePosition = e, a.ios = n, t.globalSystemInfo = a, a;
                }
            }
        });
    }
});