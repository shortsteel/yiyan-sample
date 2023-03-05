require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/picker-column/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/picker-column/index.js": function(t, e, n) {
        n.r(e);
        var s = n("../node_modules/@vant/weapp/dist/common/component.js"), i = n("../node_modules/@vant/weapp/dist/common/utils.js");
        Object(s.VantComponent)({
            classes: [ "active-class" ],
            props: {
                valueKey: String,
                className: String,
                itemHeight: Number,
                visibleItemCount: Number,
                initialOptions: {
                    type: Array,
                    value: []
                },
                defaultIndex: {
                    type: Number,
                    value: 0,
                    observer: function(t) {
                        this.setIndex(t);
                    }
                }
            },
            data: {
                startY: 0,
                offset: 0,
                duration: 0,
                startOffset: 0,
                options: [],
                currentIndex: 0
            },
            created: function() {
                var t = this, e = this.data, n = e.defaultIndex, s = e.initialOptions;
                this.set({
                    currentIndex: n,
                    options: s
                }).then(function() {
                    t.setIndex(n);
                });
            },
            methods: {
                getCount: function() {
                    return this.data.options.length;
                },
                onTouchStart: function(t) {
                    this.setData({
                        startY: t.touches[0].clientY,
                        startOffset: this.data.offset,
                        duration: 0
                    });
                },
                onTouchMove: function(t) {
                    var e = this.data, n = t.touches[0].clientY - e.startY;
                    this.setData({
                        offset: Object(i.range)(e.startOffset + n, -this.getCount() * e.itemHeight, e.itemHeight)
                    });
                },
                onTouchEnd: function() {
                    var t = this.data;
                    if (t.offset !== t.startOffset) {
                        this.setData({
                            duration: 200
                        });
                        var e = Object(i.range)(Math.round(-t.offset / t.itemHeight), 0, this.getCount() - 1);
                        this.setIndex(e, !0);
                    }
                },
                onClickItem: function(t) {
                    var e = t.currentTarget.dataset.index;
                    this.setIndex(e, !0);
                },
                adjustIndex: function(t) {
                    for (var e = this.data, n = this.getCount(), s = t = Object(i.range)(t, 0, n); s < n; s++) if (!this.isDisabled(e.options[s])) return s;
                    for (var a = t - 1; a >= 0; a--) if (!this.isDisabled(e.options[a])) return a;
                },
                isDisabled: function(t) {
                    return Object(i.isObj)(t) && t.disabled;
                },
                getOptionText: function(t) {
                    var e = this.data;
                    return Object(i.isObj)(t) && e.valueKey in t ? t[e.valueKey] : t;
                },
                setIndex: function(t, e) {
                    var n = this, s = this.data, i = -(t = this.adjustIndex(t) || 0) * s.itemHeight;
                    return t !== s.currentIndex ? this.set({
                        offset: i,
                        currentIndex: t
                    }).then(function() {
                        e && n.$emit("change", t);
                    }) : this.set({
                        offset: i
                    });
                },
                setValue: function(t) {
                    for (var e = this.data.options, n = 0; n < e.length; n++) if (this.getOptionText(e[n]) === t) return this.setIndex(n);
                    return Promise.resolve();
                },
                getValue: function() {
                    var t = this.data;
                    return t.options[t.currentIndex];
                }
            }
        });
    }
}));