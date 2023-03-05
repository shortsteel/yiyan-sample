require("./../../../webpack-require")("./pages/articleDetail/formatContent/formatContent.js", {
    "./pages/articleDetail/formatContent/formatContent.js": function(e, t) {
        Component({
            properties: {
                type: {
                    type: String,
                    value: ""
                },
                content: {
                    type: Object,
                    value: {}
                },
                author: {
                    type: Object,
                    value: {}
                }
            },
            methods: {
                previewImage: function(e) {
                    var t = [], a = this.data, r = a.content, i = a.type, n = e.currentTarget.dataset, o = n.index, l = n.url.split("gif");
                    if (console.log(l), l.length > 1) {
                        var s = r.gallery ? r.gallery[o].thumbnail : r.images[o].thumbnail;
                        this.setData({
                            gifUrl: s,
                            isShowPreView: !0
                        });
                    } else "gallery" === i && r.gallery.forEach(function(e) {
                        t.push(e.image);
                    }), "image" === i && r.images.forEach(function(e) {
                        t.push(e.image);
                    }), wx.previewImage({
                        urls: t,
                        current: t[o]
                    });
                },
                wxParseImgTap: function() {
                    this.setData({
                        isShowPreView: !0
                    });
                }
            }
        });
    }
});