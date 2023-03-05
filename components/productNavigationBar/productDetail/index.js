require("./../../../webpack-require")("./components/productNavigationBar/productDetail/index.js", Object.assign(require("././../../../commons.js").modules, {
    "./components/productNavigationBar/productDetail/index.js": function(t, e, a) {
        a.r(e);
        var o = a("./constants/index.js"), n = a("./utils/util.js");
        Component({
            properties: {
                showBgColor: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                isShowMenu: !1,
                workContact: !1,
                menuList: [ {
                    icon: "wap-home-o",
                    text: "返回首页",
                    handle: "goHome"
                }, {
                    icon: "shopping-cart-o",
                    text: "购物车",
                    handle: "goCart"
                }, {
                    icon: "star-o",
                    text: "联系客服",
                    handle: "findHelp"
                }, {
                    icon: "search",
                    text: "搜索商品",
                    handle: "goSearch"
                } ],
                config: {},
                showContact: !1
            },
            lifetimes: {
                attached: function() {
                    var t = wx.getStorageSync(o.CONFIG), e = t.contact && "work_weixin" === t.contact.type;
                    this.setData({
                        workContact: e,
                        config: t
                    });
                }
            },
            methods: {
                handlerGoback: function() {
                    wx.navigateBack();
                },
                handlerShowMenu: function() {
                    var t = this.data.isShowMenu;
                    this.setData({
                        isShowMenu: !t
                    });
                },
                handleMenuItem: function(t) {
                    var e = t.currentTarget.dataset.method;
                    if ("goHome" === e) {
                        Object(n.autoNavigate_)({
                            url: "/pages/home/home"
                        });
                    } else if ("goCart" === e) {
                        Object(n.autoNavigate_)({
                            url: "/pages/cart/cart"
                        });
                    } else if ("findHelp" === e) this.setData({
                        showContact: !0
                    }); else if ("goSearch" === e) {
                        Object(n.autoNavigate_)({
                            url: "/pages/search/search"
                        });
                    }
                }
            }
        });
    }
}));