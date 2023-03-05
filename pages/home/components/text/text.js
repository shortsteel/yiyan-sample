require("./../../../../webpack-require")("./pages/home/components/text/text.js", {
    "./pages/home/components/text/text.js": function(e, t) {
        var a = getApp();
        Component({
            properties: {
                textMessage: {
                    type: Object,
                    value: {},
                    observer: function(e) {
                        if (e) {
                            var t = e.content, a = e.setting, s = e.title, n = e.type, o = e.id;
                            this.setData({
                                content: t,
                                setting: a,
                                title: s,
                                type: n,
                                id: o
                            });
                        }
                    }
                },
                size: {
                    type: Number,
                    value: 11
                },
                second: {
                    type: Number,
                    value: 0
                },
                userInfo: {
                    type: Object,
                    value: {}
                }
            },
            attached: function() {
                var e = a.globalData.tabbarPages;
                this.setData({
                    tabbarPages: e
                });
            }
        });
    }
});