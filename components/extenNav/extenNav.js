require("./../../webpack-require")("./components/extenNav/extenNav.js", Object.assign(require("././../../commons.js").modules, {
    "./components/extenNav/extenNav.js": function(e, t, n) {
        n.r(t);
        var o = n("./constants/index.js"), a = getApp();
        Component({
            properties: {
                item: {
                    type: Object,
                    value: {}
                },
                eventHandlingWithOuter: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                config: {},
                tabbarPages: {}
            },
            options: {
                multipleSlots: !0
            },
            ready: function() {
                var e = wx.getStorageSync(o.USER_KEY), t = wx.getStorageSync(o.CONFIG), n = a.globalData.tabbarPages;
                this.setData({
                    tabbarPages: n,
                    userInfo: e,
                    config: t
                });
            },
            methods: {
                onCustomService: function(e) {
                    var t = this.data, n = t.config, o = t.eventHandlingWithOuter, a = e.currentTarget.dataset.tips;
                    if (o) this.triggerEvent("onCustomService", e); else if (n.contact && "work_weixin" === n.contact.type) this.setData({
                        customServiceModal: !0
                    }); else if (n.contact && "weixin_custom_service" === n.contact.type) {
                        var i = n.contact, r = i.corp_id, s = i.url;
                        wx.openCustomerServiceChat({
                            extInfo: {
                                url: s
                            },
                            corpId: r
                        });
                    } else this.setData({
                        contactModal: {
                            isFatherControl: !1,
                            title: "温馨提示",
                            isShowModal: !0,
                            body: a,
                            type: "button",
                            userInfo: this.data.userInfo,
                            buttonData: {
                                opentype: "contact"
                            }
                        }
                    });
                },
                call: function(e) {
                    var t = e.currentTarget.dataset.phone;
                    wx.makePhoneCall({
                        phoneNumber: t
                    });
                },
                top: function() {
                    wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 600
                    });
                },
                runChannel: function(e) {
                    var t = e.currentTarget.dataset, n = t.type, o = t.finder, a = t.feedId;
                    switch (n) {
                      case "userprofile":
                        wx.openChannelsUserProfile({
                            finderUserName: o,
                            fail: function(e) {
                                console.log("跳转失败", e);
                            }
                        });
                        break;

                      case "activity":
                        wx.openChannelsActivity({
                            finderUserName: o,
                            feedId: a,
                            fail: function(e) {
                                console.log("跳转失败", e);
                            }
                        });
                        break;

                      case "live":
                        wx.openChannelsLive({
                            finderUserName: o,
                            fail: function(e) {
                                console.log("跳转失败", e);
                            }
                        });
                        break;

                      case "live_notice":
                        wx.getChannelsLiveNoticeInfo({
                            finderUserName: o,
                            success: function(e) {
                                var t = e.noticeId;
                                wx.reserveChannelsLive({
                                    noticeId: t
                                });
                            },
                            fail: function(e) {
                                var t = e.err_code;
                                1 === Number(t) ? wx.showModal({
                                    title: "提示",
                                    content: "当前没有可预约的直播",
                                    showCancel: !1
                                }) : console.log(e);
                            }
                        });
                    }
                }
            }
        });
    }
}));