require("./../../../../webpack-require")("./pages/home/components/textList/textList.js", {
    "./pages/home/components/textList/textList.js": function(t, e) {
        Component({
            properties: {
                textList: {
                    type: Object,
                    value: {},
                    observer: function(t) {
                        if (t) {
                            var e = t.content, s = t.setting, o = t.title, i = t.type, n = t.id;
                            this.setData({
                                content: e,
                                setting: s,
                                title: o,
                                type: i,
                                id: n
                            });
                        }
                    }
                },
                userInfo: {
                    type: Object,
                    value: {}
                }
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