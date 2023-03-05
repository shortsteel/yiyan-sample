var t = require("../../../../@babel/runtime/helpers/slicedToArray");

require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/tabs/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/mixins/touch.js": function(t, e, i) {
        i.r(e), i.d(e, "touch", function() {
            return n;
        });
        var n = Behavior({
            methods: {
                resetTouchStatus: function() {
                    this.direction = "", this.deltaX = 0, this.deltaY = 0, this.offsetX = 0, this.offsetY = 0;
                },
                touchStart: function(t) {
                    this.resetTouchStatus();
                    var e = t.touches[0];
                    this.startX = e.clientX, this.startY = e.clientY;
                },
                touchMove: function(t) {
                    var e, i, n = t.touches[0];
                    this.deltaX = n.clientX - this.startX, this.deltaY = n.clientY - this.startY, this.offsetX = Math.abs(this.deltaX), 
                    this.offsetY = Math.abs(this.deltaY), this.direction = this.direction || ((e = this.offsetX) > (i = this.offsetY) && e > 10 ? "horizontal" : i > e && i > 10 ? "vertical" : "");
                }
            }
        });
    },
    "../node_modules/@vant/weapp/dist/tabs/index.js": function(e, i, n) {
        n.r(i);
        var a = n("../node_modules/@vant/weapp/dist/common/component.js"), s = n("../node_modules/@vant/weapp/dist/mixins/touch.js"), r = n("../node_modules/@vant/weapp/dist/common/utils.js");
        Object(a.VantComponent)({
            mixins: [ s.touch ],
            classes: [ "nav-class", "tab-class", "tab-active-class", "line-class" ],
            relation: {
                name: "tab",
                type: "descendant",
                current: "tabs",
                linked: function(t) {
                    t.index = this.children.length - 1, this.updateTabs();
                },
                unlinked: function() {
                    this.children = this.children.map(function(t, e) {
                        return t.index = e, t;
                    }), this.updateTabs();
                }
            },
            props: {
                sticky: Boolean,
                border: Boolean,
                swipeable: Boolean,
                titleActiveColor: String,
                titleInactiveColor: String,
                color: String,
                animated: {
                    type: Boolean,
                    observer: function() {
                        var t = this;
                        this.children.forEach(function(e, i) {
                            return e.updateRender(i === t.data.currentIndex, t);
                        });
                    }
                },
                lineWidth: {
                    type: [ String, Number ],
                    value: 40,
                    observer: "setLine"
                },
                lineHeight: {
                    type: [ String, Number ],
                    value: -1
                },
                active: {
                    type: [ String, Number ],
                    value: 0,
                    observer: function(t) {
                        t !== this.getCurrentName() && this.setCurrentIndexByName(t);
                    }
                },
                type: {
                    type: String,
                    value: "line"
                },
                ellipsis: {
                    type: Boolean,
                    value: !0
                },
                duration: {
                    type: Number,
                    value: .3
                },
                zIndex: {
                    type: Number,
                    value: 1
                },
                swipeThreshold: {
                    type: Number,
                    value: 5,
                    observer: function(t) {
                        this.setData({
                            scrollable: this.children.length > t || !this.data.ellipsis
                        });
                    }
                },
                offsetTop: {
                    type: Number,
                    value: 0
                },
                lazyRender: {
                    type: Boolean,
                    value: !0
                }
            },
            data: {
                tabs: [],
                lineStyle: "",
                scrollLeft: 0,
                scrollable: !1,
                trackStyle: "",
                currentIndex: 0,
                container: null,
                skipTransition: !0,
                lineOffsetLeft: 0
            },
            mounted: function() {
                var t = this;
                wx.nextTick(function() {
                    t.setLine(!0), t.scrollIntoView();
                });
            },
            methods: {
                updateContainer: function() {
                    var t = this;
                    this.setData({
                        container: function() {
                            return t.createSelectorQuery().select(".van-tabs");
                        }
                    });
                },
                updateTabs: function() {
                    var t = this.children, e = void 0 === t ? [] : t, i = this.data;
                    this.setData({
                        tabs: e.map(function(t) {
                            return t.data;
                        }),
                        scrollable: this.children.length > i.swipeThreshold || !i.ellipsis
                    }), this.setCurrentIndexByName(this.getCurrentName() || i.active);
                },
                trigger: function(t, e) {
                    var i = this.data.currentIndex, n = e || this.children[i];
                    Object(r.isDef)(n) && this.$emit(t, {
                        index: n.index,
                        name: n.getComputedName(),
                        title: n.data.title
                    });
                },
                onTap: function(t) {
                    var e = this, i = t.currentTarget.dataset.index, n = this.children[i];
                    n.data.disabled ? this.trigger("disabled", n) : (this.setCurrentIndex(i), wx.nextTick(function() {
                        e.trigger("click");
                    }));
                },
                setCurrentIndexByName: function(t) {
                    var e = this.children, i = (void 0 === e ? [] : e).filter(function(e) {
                        return e.getComputedName() === t;
                    });
                    i.length && this.setCurrentIndex(i[0].index);
                },
                setCurrentIndex: function(t) {
                    var e = this, i = this.data, n = this.children, a = void 0 === n ? [] : n;
                    if (!(!Object(r.isDef)(t) || t >= a.length || t < 0) && (a.forEach(function(i, n) {
                        var a = n === t;
                        a === i.data.active && i.inited || i.updateRender(a, e);
                    }), t !== i.currentIndex)) {
                        var s = null !== i.currentIndex;
                        this.setData({
                            currentIndex: t
                        }), wx.nextTick(function() {
                            e.setLine(), e.scrollIntoView(), e.updateContainer(), e.trigger("input"), s && e.trigger("change");
                        });
                    }
                },
                getCurrentName: function() {
                    var t = this.children[this.data.currentIndex];
                    if (t) return t.getComputedName();
                },
                setLine: function() {
                    var e = this, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if ("line" === this.data.type) {
                        var n = this.data, a = n.currentIndex, s = n.ellipsis;
                        Promise.all([ r.getAllRect.call(this, ".van-tab"), r.getRect.call(this, ".van-tabs__line") ]).then(function(n) {
                            var r = t(n, 2), o = r[0], l = void 0 === o ? [] : o, c = r[1], u = l[a];
                            if (null != u) {
                                var h = l.slice(0, a).reduce(function(t, e) {
                                    return t + e.width;
                                }, 0);
                                h += (u.width - c.width) / 2 + (s ? 0 : 8), e.setData({
                                    lineOffsetLeft: h,
                                    skipTransition: i
                                });
                            }
                        });
                    }
                },
                scrollIntoView: function() {
                    var e = this, i = this.data, n = i.currentIndex;
                    i.scrollable && Promise.all([ r.getAllRect.call(this, ".van-tab"), r.getRect.call(this, ".van-tabs__nav") ]).then(function(i) {
                        var a = t(i, 2), s = a[0], r = a[1], o = s[n], l = s.slice(0, n).reduce(function(t, e) {
                            return t + e.width;
                        }, 0);
                        e.setData({
                            scrollLeft: l - (r.width - o.width) / 2
                        });
                    });
                },
                onTouchScroll: function(t) {
                    this.$emit("scroll", t.detail);
                },
                onTouchStart: function(t) {
                    this.data.swipeable && this.touchStart(t);
                },
                onTouchMove: function(t) {
                    this.data.swipeable && this.touchMove(t);
                },
                onTouchEnd: function() {
                    if (this.data.swipeable) {
                        var t = this.direction, e = this.deltaX, i = this.offsetX;
                        if ("horizontal" === t && i >= 50) {
                            var n = this.getAvaiableTab(e);
                            -1 !== n && this.setCurrentIndex(n);
                        }
                    }
                },
                getAvaiableTab: function(t) {
                    for (var e = this.data, i = e.tabs, n = e.currentIndex, a = t > 0 ? -1 : 1, s = a; n + s < i.length && n + s >= 0; s += a) {
                        var r = n + s;
                        if (r >= 0 && r < i.length && i[r] && !i[r].disabled) return r;
                    }
                    return -1;
                }
            }
        });
    }
}));