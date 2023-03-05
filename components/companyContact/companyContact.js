require("./../../webpack-require")("./components/companyContact/companyContact.js", {
    "./components/companyContact/companyContact.js": function(e, o) {
        Component({
            properties: {
                plugid: {
                    type: String,
                    value: ""
                },
                show: {
                    type: Boolean,
                    value: !1
                }
            },
            methods: {
                onClose: function() {
                    this.setData({
                        show: !1
                    });
                },
                startmessage: function() {
                    wx.showLoading();
                },
                completemessage: function(e) {
                    var o = e.detail, t = o.errcode, a = o.name, n = void 0 === a ? "" : a, s = o.headurl, c = void 0 === s ? "" : s, i = !1, r = !1, p = !1, d = "", l = "", m = "";
                    wx.hideLoading(), console.log("errcode", t), 0 === t ? (i = !0, l = n, m = c) : -3006 === t ? (i = !0, 
                    p = !0, l = n, m = c) : (r = !0, d = {
                        "-3002": "获取插件配置信息失败",
                        "-3004": "用户信息授权失败",
                        "-3005": "客服消息发送失败",
                        "-3006": "发送的客服人员已经和当前用户是好友关系",
                        "-3008": "当前配置没有客服人员"
                    }[t] || ""), this.setData({
                        showSuccess: i,
                        showFail: r,
                        failTip: d,
                        hasFrend: p,
                        serviceName: l,
                        serviceHeadurl: m
                    });
                }
            }
        });
    }
});