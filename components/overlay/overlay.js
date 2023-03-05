require("./../../webpack-require")("./components/overlay/overlay.js", {
    "./components/overlay/overlay.js": function(e, o) {
        Component({
            options: {
                multipleSlots: !0
            },
            properties: {
                bgImg: {
                    type: String,
                    value: ""
                },
                isOverlay: {
                    type: Boolean,
                    value: !1
                },
                height: {
                    type: Number,
                    value: 900
                },
                blur: {
                    type: Number,
                    value: 5
                }
            }
        });
    }
});