var e = require("../../../../@babel/runtime/helpers/slicedToArray");

require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/sticky/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/mixins/page-scroll.js": function(e, t, n) {
        function o() {
            var e = getCurrentPages();
            return e[e.length - 1] || {};
        }
        function r(e) {
            var t = o().vanPageScroller;
            (void 0 === t ? [] : t).forEach(function(t) {
                "function" == typeof t && t(e);
            });
        }
        n.r(t), n.d(t, "pageScrollMixin", function() {
            return i;
        });
        var i = function(e) {
            return Behavior({
                attached: function() {
                    var t = o();
                    Array.isArray(t.vanPageScroller) ? t.vanPageScroller.push(e.bind(this)) : t.vanPageScroller = "function" == typeof t.onPageScroll ? [ t.onPageScroll.bind(t), e.bind(this) ] : [ e.bind(this) ], 
                    t.onPageScroll = r;
                },
                detached: function() {
                    var t = o();
                    t.vanPageScroller = (t.vanPageScroller || []).filter(function(t) {
                        return t !== e;
                    });
                }
            });
        };
    },
    "../node_modules/@vant/weapp/dist/sticky/index.js": function(t, n, o) {
        o.r(n);
        var r = o("../node_modules/@vant/weapp/dist/common/component.js"), i = o("../node_modules/@vant/weapp/dist/mixins/page-scroll.js");
        Object(r.VantComponent)({
            props: {
                zIndex: {
                    type: Number,
                    value: 99
                },
                offsetTop: {
                    type: Number,
                    value: 0,
                    observer: "onScroll"
                },
                disabled: {
                    type: Boolean,
                    observer: "onScroll"
                },
                container: {
                    type: null,
                    observer: "onScroll"
                },
                scrollTop: {
                    type: null,
                    observer: function(e) {
                        this.onScroll({
                            scrollTop: e
                        });
                    }
                }
            },
            mixins: [ Object(i.pageScrollMixin)(function(e) {
                null == this.data.scrollTop && this.onScroll(e);
            }) ],
            data: {
                height: 0,
                fixed: !1,
                transform: 0
            },
            mounted: function() {
                this.onScroll();
            },
            methods: {
                onScroll: function() {
                    var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = n.scrollTop, r = this.data, i = r.container, a = r.offsetTop, s = r.disabled;
                    s ? this.setDataAfterDiff({
                        fixed: !1,
                        transform: 0
                    }) : (this.scrollTop = o || this.scrollTop, "function" != typeof i ? this.getRect(".van-sticky").then(function(e) {
                        a >= e.top ? (t.setDataAfterDiff({
                            fixed: !0,
                            height: e.height
                        }), t.transform = 0) : t.setDataAfterDiff({
                            fixed: !1
                        });
                    }) : Promise.all([ this.getRect(".van-sticky"), this.getContainerRect() ]).then(function(n) {
                        var o = e(n, 2), r = o[0], i = o[1];
                        a + r.height > i.height + i.top ? t.setDataAfterDiff({
                            fixed: !1,
                            transform: i.height - r.height
                        }) : a >= r.top ? t.setDataAfterDiff({
                            fixed: !0,
                            height: r.height,
                            transform: 0
                        }) : t.setDataAfterDiff({
                            fixed: !1,
                            transform: 0
                        });
                    }));
                },
                setDataAfterDiff: function(e) {
                    var t = this;
                    wx.nextTick(function() {
                        var n = Object.keys(e).reduce(function(n, o) {
                            return e[o] !== t.data[o] && (n[o] = e[o]), n;
                        }, {});
                        t.setData(n), t.$emit("scroll", {
                            scrollTop: t.scrollTop,
                            isFixed: e.fixed || t.data.fixed
                        });
                    });
                },
                getContainerRect: function() {
                    var e = this.data.container();
                    return new Promise(function(t) {
                        return e.boundingClientRect(t).exec();
                    });
                }
            }
        });
    }
}));