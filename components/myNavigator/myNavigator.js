require("./../../webpack-require")("./components/myNavigator/myNavigator.js", Object.assign(require("././../../commons.js").modules, {
    "./components/myNavigator/myNavigator.js": function(e, t, o) {
        o.r(t);
        var i = o("./utils/api/index.js");
        Component({
            properties: {
                navigator: {
                    type: Object,
                    value: {}
                },
                defineObj: {
                    type: Object,
                    value: {}
                },
                defineType: {
                    type: String,
                    value: "define"
                },
                url: {
                    type: String,
                    value: ""
                }
            },
            data: {},
            methods: {
                onTap: function() {
                    console.log("erere");
                },
                submitFormId: function(e) {
                    var t = e.detail.formId;
                    i.default.hei.submitFormId({
                        form_id: t
                    }).then(function() {
                        console.log("formId发送成功", t);
                    }), this.data.url && wx.navigateTo({
                        url: this.data.url
                    });
                }
            }
        });
    }
}));