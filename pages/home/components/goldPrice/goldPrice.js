require("./../../../../webpack-require")("./pages/home/components/goldPrice/goldPrice.js", {
    "./pages/home/components/goldPrice/goldPrice.js": function(e, t) {
        Component({
            properties: {
                goldData: {
                    type: Object,
                    value: {}
                }
            },
            data: {
                gold: {
                    type: Object,
                    value: {}
                },
                setting: {
                    type: Object,
                    value: {}
                }
            },
            observers: {
                goldData: function(e) {
                    var t = e.content, o = e.setting;
                    this.setData({
                        gold: t,
                        setting: o
                    });
                }
            }
        });
    }
});