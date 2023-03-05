require("./../../../../webpack-require")("./pages/home/components/articleList/articleList.js", Object.assign(require("././../../../../commons.js").modules, {
    "./pages/home/components/articleList/articleList.js": function(t, e, o) {
        o.r(e);
        var a = o("./utils/util.js"), s = getApp();
        Component({
            properties: {
                articleList: {
                    type: Object,
                    value: {},
                    observer: function(t) {
                        if (console.log(t, "ddd"), t) {
                            var e = t.content, o = t.setting, a = t.title, s = t.type, i = t.id;
                            this.setData({
                                content: e,
                                setting: o,
                                title: a,
                                type: s,
                                id: i
                            });
                        }
                    }
                },
                posts: {
                    type: Array,
                    value: [],
                    observer: function(t) {
                        if (t && t.length) {
                            var e = this.data, o = e.posts, a = e.isLastModule;
                            e.content;
                            console.log(o, a, "0000000"), a && this.setData({
                                content: o
                            });
                        }
                    }
                },
                themeColor: {
                    type: Object,
                    value: {}
                },
                isShowMore: {
                    type: Boolean,
                    value: !0
                },
                isLastModule: {
                    type: Boolean,
                    value: !1
                }
            },
            attached: function() {
                var t = s.globalData, e = t.themeColor, o = (t.partner, t.tabbarPages, wx.getStorageSync("CONFIG"));
                this.setData({
                    themeColor: e,
                    config: o
                });
            },
            methods: {
                goMore: function() {
                    var t = this.data.setting, e = t.category_id, o = void 0 === e ? "" : e, s = t.orderby, i = void 0 === s ? "" : s;
                    Object(a.autoNavigate_)({
                        url: "/pages/articleList/articleList?categoryId=" + o + "&orderby=" + i
                    });
                },
                go: a.go
            }
        });
    }
}));