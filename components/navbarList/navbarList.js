require("./../../webpack-require")("./components/navbarList/navbarList.js", {
    "./components/navbarList/navbarList.js": function(e, t) {
        var a = getApp();
        Component({
            properties: {
                navbarListData: {
                    type: Array,
                    value: []
                },
                themeColor: {
                    type: Object,
                    value: {}
                },
                template: {
                    type: String,
                    value: "default"
                },
                activeIndex: {
                    type: Number,
                    value: 0,
                    observer: function(e) {
                        this.setData({
                            toView: "tab" + e
                        });
                    }
                },
                top: {
                    type: String,
                    value: "",
                    observer: function(e) {
                        console.log(e);
                    }
                },
                position: {
                    type: String,
                    value: "",
                    observer: function(e) {
                        console.log(e);
                    }
                },
                customStyle: {
                    type: String,
                    value: ""
                }
            },
            data: {
                isShowPopup: !1,
                selectedPopupIndex: 0
            },
            attached: function() {
                this.setData({
                    themeColor: a.globalData.themeColor
                });
            },
            methods: {
                changeActive: function(e) {
                    console.log(e, "--ev");
                    var t = this.data.navbarListData, a = void 0 !== e.detail.index ? e.detail.index : e.currentTarget.dataset.index, o = t[a] && t[a].value;
                    this.setData({
                        activeIndex: a,
                        toView: "tab" + a,
                        isShowPopup: !1
                    }), this.triggerEvent("changeNavbarList", {
                        index: a,
                        value: o
                    }, {
                        bubbles: !0
                    });
                },
                onShowPopup: function() {
                    var e = this.data, t = e.isShowPopup, a = e.activeIndex;
                    this.setData({
                        isShowPopup: !t,
                        selectedPopupIndex: a
                    });
                }
            }
        });
    }
});