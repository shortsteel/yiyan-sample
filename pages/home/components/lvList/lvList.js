require("./../../../../webpack-require")("./pages/home/components/lvList/lvList.js", {
    "./pages/home/components/lvList/lvList.js": function(t, e) {
        var a = getApp();
        Component({
            properties: {
                lvObj: {
                    type: Object,
                    value: {},
                    observer: function(t) {
                        if (t) {
                            var e = t.content, a = t.setting, o = t.title, n = t.type, s = t.id;
                            this.setData({
                                content: e,
                                setting: a,
                                title: o,
                                type: n,
                                id: s
                            });
                        }
                    }
                }
            },
            data: {
                themeColor: {},
                lvStatusText: {
                    101: "进行中",
                    102: "未开始",
                    103: "已结束"
                },
                lvBtnText: {
                    101: "马上围观",
                    102: "先去订阅",
                    103: "去看回放"
                }
            },
            attached: function() {
                var t = a.globalData, e = t.tabbarPages, o = t.themeColor;
                this.setData({
                    tabbarPages: e,
                    themeColor: o
                });
            },
            methods: {
                onClickBtn: function(t) {
                    var e = t.currentTarget.dataset, a = e.status, o = e.id;
                    console.log("status", a);
                    var n = {
                        101: "视频",
                        102: "精彩预告",
                        103: "精彩回放"
                    }, s = "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=" + o;
                    wx.navigateTo({
                        url: s,
                        fail: function(t) {
                            console.log(t), wx.showToast({
                                title: "查看".concat(n[a], "失败"),
                                icon: "none"
                            });
                        }
                    });
                }
            }
        });
    }
});