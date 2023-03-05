require("./../../../../webpack-require")("./pages/home/components/nav/nav.js", {
    "./pages/home/components/nav/nav.js": function(t, e) {
        var a = getApp();
        Component({
            properties: {
                nav: {
                    type: Object,
                    value: {},
                    observer: function(t) {
                        if (t) {
                            var e = t.content, a = t.setting, n = t.title, o = t.type, s = t.id;
                            this.setData({
                                content: e,
                                setting: a,
                                title: n,
                                type: o,
                                id: s
                            });
                        }
                    }
                }
            },
            attached: function() {
                var t = a.globalData.tabbarPages;
                this.setData({
                    tabbarPages: t
                });
            },
            methods: {
                showContactModal: function(t) {
                    this.triggerEvent("showContactModal", t, {
                        bubbles: !0
                    });
                }
            }
        });
    }
});