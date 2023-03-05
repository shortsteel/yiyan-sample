require("./../../../../webpack-require")("./pages/home/components/slider/slider.js", {
    "./pages/home/components/slider/slider.js": function(e, t) {
        var a = getApp();
        Component({
            properties: {
                slide: {
                    type: Object,
                    value: {},
                    observer: function(e) {
                        if (e) {
                            var t = e.content, a = e.setting, s = e.title, r = e.type, i = e.id;
                            this.setData({
                                content: t,
                                setting: a,
                                title: s,
                                type: r,
                                id: i
                            });
                        }
                    }
                },
                userInfo: {
                    type: Object,
                    value: {}
                },
                themeColor: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                swiperCurrent: 0
            },
            attached: function() {
                var e = a.globalData.tabbarPages;
                this.setData({
                    tabbarPages: e
                });
            },
            methods: {
                swiperChange: function(e) {
                    this.setData({
                        swiperCurrent: e.detail.current
                    });
                },
                showContactModal: function(e) {
                    this.triggerEvent("showContactModal", e, {
                        bubbles: !0
                    });
                }
            }
        });
    }
});