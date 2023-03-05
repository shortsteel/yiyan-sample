require("./../../webpack-require")("./components/articleCard/articleCard.js", Object.assign(require("././../../commons.js").modules, {
    "./components/articleCard/articleCard.js": function(e, t, r) {
        r.r(t);
        var i = r("./utils/util.js");
        Component({
            properties: {
                article: {
                    type: Object,
                    value: {},
                    observer: function(e) {
                        e.formateTime = Object(i.formatTime)(new Date(1e3 * (e.timestamp_modified ? e.timestamp_modified : e.timestamp))), 
                        e.formateDate = e.formateTime.substr(0, 10), this.setData({
                            article: e
                        });
                    }
                },
                type: {
                    type: String,
                    value: "default",
                    observer: function(e) {
                        console.log(e), this.setData({
                            type: e
                        });
                    }
                }
            },
            methods: {
                go: i.go
            }
        });
    }
}));