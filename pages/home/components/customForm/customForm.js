require("./../../../../webpack-require")("./pages/home/components/customForm/customForm.js", {
    "./pages/home/components/customForm/customForm.js": function(t, e) {
        Component({
            properties: {
                form: {
                    type: Object,
                    value: {},
                    observer: function(t) {
                        if (t) {
                            var e = t.content, o = t.setting, s = t.title;
                            console.log(t, "666666666666"), this.setData({
                                content: e,
                                setting: o,
                                title: s
                            });
                        }
                    }
                }
            },
            methods: {
                submitFormData: function(t) {
                    var e = t.detail.form;
                    this.triggerEvent("submitFormData", {
                        form: e
                    });
                }
            }
        });
    }
});