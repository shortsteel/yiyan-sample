require("./../../../../webpack-require")("./pages/home/components/cube/cube.js", {
    "./pages/home/components/cube/cube.js": function(e, t) {
        Component({
            properties: {
                cube: {
                    type: Object,
                    value: {},
                    observer: function(e) {
                        if (e) {
                            var t = e.setting, o = {
                                images: e.content,
                                height: t.height,
                                layout: t.layout,
                                mode: t.mode,
                                spacing: t.spacing
                            };
                            this.setData({
                                magicImgData: o,
                                setting: t
                            });
                        }
                    }
                }
            }
        });
    }
});