require("./../../../webpack-require")("./pages/me/orderStatus/orderStatus.js", {
    "./pages/me/orderStatus/orderStatus.js": function(e, t) {
        Component({
            properties: {
                title: {
                    type: String,
                    value: "orderStatus Component"
                }
            }
        });
    }
});