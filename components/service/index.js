require("./../../webpack-require")("./components/service/index.js", Object.assign(require("././../../commons.js").modules, {
    "./components/service/index.js": function(t, e, o) {
        o.r(e);
        var n = o("./constants/index.js");
        getApp(), Component({
            options: {
                styleIsolation: "apply-shared"
            },
            properties: {
                options: {
                    type: Array,
                    value: []
                }
            },
            attached: function() {
                var t = wx.getStorageSync(n.CONFIG), e = wx.getStorageSync(n.USER_KEY);
                this.setData({
                    config: t,
                    userInfo: e
                });
            },
            methods: {
                call: function(t) {
                    wx.makePhoneCall({
                        phoneNumber: t.currentTarget.dataset.phone
                    });
                },
                onCustomService: function(t) {
                    var e = this.data.config;
                    if (e.contact && "work_weixin" === e.contact.type) {
                        this.setData({
                            customServiceModal: !0
                        });
                    } else console.log(t, "100528"), this.setData({
                        contactModal: {
                            isFatherControl: !1,
                            title: "温馨提示",
                            isShowModal: !0,
                            body: t.detail.tips,
                            type: "button",
                            userInfo: this.data.userInfo,
                            buttonData: {
                                opentype: "contact"
                            }
                        }
                    });
                }
            }
        });
    }
}));