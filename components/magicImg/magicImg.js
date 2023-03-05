require("./../../webpack-require")("./components/magicImg/magicImg.js", Object.assign(require("././../../commons.js").modules, {
    "./components/magicImg/magicImg.js": function(t, a, e) {
        e.r(a);
        var o = e("./constants/index.js"), n = getApp();
        Component({
            properties: {
                isMarginTopZero: {
                    type: Boolean,
                    value: !1
                },
                magicImgData: {
                    type: Object,
                    value: {},
                    observer: function(t) {
                        "2-2" === t.layout && (t.flex = [ 2, 1 ]), "2-3" === t.layout && (t.flex = [ 1, 2 ]), 
                        "1" !== t.layout.charAt(t.layout.length - 1) && "2-2" !== t.layout && "2-3" !== t.layout || (t.defineType = "oneLine", 
                        t.eachNum = Number(t.layout.charAt(0))), this.setData({
                            magicImgData: t
                        });
                    }
                },
                tplStyle: {
                    type: String,
                    value: "default"
                }
            },
            attached: function() {
                var t = n.globalData.tabbarPages, a = wx.getStorageSync(o.USER_KEY);
                this.setData({
                    userInfo: a,
                    tabbarPages: t
                });
            },
            methods: {
                onModal: function(t) {
                    this.setData({
                        contactModal: {
                            isFatherControl: !1,
                            title: "温馨提示",
                            isShowModal: !0,
                            body: t.currentTarget.dataset.tips,
                            type: "button",
                            userInfo: this.data.userInfo,
                            buttonData: {
                                opentype: "contact"
                            }
                        }
                    }), console.log(this.data.contactModal);
                },
                miniFail: function(t) {
                    console.log(t);
                }
            }
        });
    }
}));