require("./../../webpack-require")("./components/loading/index.js", {
    "./components/loading/index.js": function(e, n) {
        Component({
            properties: {
                isLoading: {
                    type: Boolean,
                    value: !1
                },
                paddingTop: {
                    type: String,
                    value: "80"
                }
            }
        });
    }
});