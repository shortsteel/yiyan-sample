var t = require("../../@babel/runtime/helpers/toConsumableArray"), e = require("../../@babel/runtime/helpers/typeof"), i = require("../../@babel/runtime/helpers/createForOfIteratorHelper"), s = require("../../@babel/runtime/helpers/classCallCheck"), r = require("../../@babel/runtime/helpers/createClass");

require("./../../webpack-require")("./components/painter/painter.js", {
    "./components/painter/lib/downloader.js": function(t, a, o) {
        o.r(a), o.d(a, "default", function() {
            return l;
        });
        var n = o("./components/painter/lib/util.js"), c = 6291456, h = {}, l = function() {
            function t() {
                s(this, t), getApp().PAINTER_MAX_LRU_SPACE && (c = getApp().PAINTER_MAX_LRU_SPACE), 
                wx.getStorage({
                    key: "savedFiles",
                    success: function(t) {
                        t.data && (h = t.data);
                    }
                });
            }
            return r(t, [ {
                key: "download",
                value: function(t) {
                    return new Promise(function(e, i) {
                        if (t && n.isValidUrl(t)) {
                            var s = function(t) {
                                if (h[t]) return h[t].time = new Date().getTime(), wx.setStorage({
                                    key: "savedFiles",
                                    data: h
                                }), h[t];
                            }(t);
                            s ? wx.getSavedFileInfo({
                                filePath: s.path,
                                success: function(t) {
                                    e(s.path);
                                },
                                fail: function(s) {
                                    console.error("the file is broken, redownload it, " + JSON.stringify(s)), f(t).then(function(t) {
                                        e(t);
                                    }, function() {
                                        i();
                                    });
                                }
                            }) : f(t).then(function(t) {
                                e(t);
                            }, function() {
                                i();
                            });
                        } else e(t);
                    });
                }
            } ]), t;
        }();
        function f(t) {
            return new Promise(function(e, s) {
                wx.downloadFile({
                    url: t,
                    success: function(r) {
                        if (200 !== r.statusCode) return console.error("downloadFile ".concat(t, " failed res.statusCode is not 200")), 
                        void s();
                        var a = r.tempFilePath;
                        wx.getFileInfo({
                            filePath: a,
                            success: function(s) {
                                var r = s.size;
                                (function(t) {
                                    return t > c ? Promise.reject() : new Promise(function(e, s) {
                                        var r = h.totalSize ? h.totalSize : 0;
                                        if (t + r <= c) e(); else {
                                            var a = [], o = JSON.parse(JSON.stringify(h));
                                            delete o.totalSize;
                                            var n, l = Object.keys(o).sort(function(t, e) {
                                                return o[t].time - o[e].time;
                                            }), f = i(l);
                                            try {
                                                for (f.s(); !(n = f.n()).done; ) {
                                                    var d = n.value;
                                                    if (r -= h[d].size, a.push(h[d].path), delete h[d], r + t < c) break;
                                                }
                                            } catch (t) {
                                                f.e(t);
                                            } finally {
                                                f.f();
                                            }
                                            h.totalSize = r, wx.setStorage({
                                                key: "savedFiles",
                                                data: h,
                                                success: function() {
                                                    a.length > 0 && u(a), e();
                                                },
                                                fail: function(t) {
                                                    console.error("doLru setStorage failed, " + JSON.stringify(t)), s();
                                                }
                                            });
                                        }
                                    });
                                })(r).then(function() {
                                    (function(t, e, i) {
                                        return new Promise(function(s, r) {
                                            wx.saveFile({
                                                tempFilePath: i,
                                                success: function(i) {
                                                    var r = h.totalSize ? h.totalSize : 0;
                                                    h[t] = {}, h[t].path = i.savedFilePath, h[t].time = new Date().getTime(), h[t].size = e, 
                                                    h.totalSize = e + r, wx.setStorage({
                                                        key: "savedFiles",
                                                        data: h
                                                    }), s(i.savedFilePath);
                                                },
                                                fail: function(e) {
                                                    console.error("saveFile ".concat(t, " failed, then we delete all files, ").concat(JSON.stringify(e))), 
                                                    s(i), wx.removeStorage({
                                                        key: "savedFiles",
                                                        success: function() {
                                                            wx.getSavedFileList({
                                                                success: function(t) {
                                                                    u(t.fileList);
                                                                },
                                                                fail: function(t) {
                                                                    console.error("getSavedFileList failed, " + JSON.stringify(t));
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                    })(t, r, a).then(function(t) {
                                        e(t);
                                    });
                                }, function() {
                                    e(a);
                                });
                            },
                            fail: function(t) {
                                console.error("getFileInfo ".concat(r.tempFilePath, " failed, ").concat(JSON.stringify(t))), 
                                e(r.tempFilePath);
                            }
                        });
                    },
                    fail: function(t) {
                        console.error("downloadFile failed, ".concat(JSON.stringify(t), " ")), s();
                    }
                });
            });
        }
        function u(t) {
            var s, r = i(t);
            try {
                var a = function() {
                    var t = s.value, i = t;
                    "object" == e(t) && (i = t.filePath), wx.removeSavedFile({
                        filePath: i,
                        fail: function(e) {
                            console.error("removeSavedFile ".concat(t, " failed, ").concat(JSON.stringify(e)));
                        }
                    });
                };
                for (r.s(); !(s = r.n()).done; ) a();
            } catch (t) {
                r.e(t);
            } finally {
                r.f();
            }
        }
    },
    "./components/painter/lib/gradient.js": function(t, e) {
        !function() {
            var e = {
                isGradient: function(t) {
                    return !(!t || !t.startsWith("linear") && !t.startsWith("radial"));
                },
                doGradient: function(t, e, i, r) {
                    t.startsWith("linear") ? function(t, e, i, r) {
                        for (var a = function(t, e, i) {
                            var s, r = t.match(/([-]?\d{1,3})deg/);
                            switch (r && r[1] ? parseFloat(r[1]) : 0) {
                              case 0:
                                s = [ 0, -i / 2, 0, i / 2 ];
                                break;

                              case 90:
                                s = [ e / 2, 0, -e / 2, 0 ];
                                break;

                              case -90:
                                s = [ -e / 2, 0, e / 2, 0 ];
                                break;

                              case 180:
                                s = [ 0, i / 2, 0, -i / 2 ];
                                break;

                              case -180:
                                s = [ 0, -i / 2, 0, i / 2 ];
                                break;

                              default:
                                var a = 0, o = 0, n = 0, c = 0;
                                r[1] > 0 && r[1] < 90 ? (n = -(a = e / 2 - (e / 2 * Math.tan((90 - r[1]) * Math.PI * 2 / 360) - i / 2) * Math.sin(2 * (90 - r[1]) * Math.PI * 2 / 360) / 2), 
                                o = -(c = Math.tan((90 - r[1]) * Math.PI * 2 / 360) * a)) : r[1] > -180 && r[1] < -90 ? (n = -(a = -e / 2 + (e / 2 * Math.tan((90 - r[1]) * Math.PI * 2 / 360) - i / 2) * Math.sin(2 * (90 - r[1]) * Math.PI * 2 / 360) / 2), 
                                o = -(c = Math.tan((90 - r[1]) * Math.PI * 2 / 360) * a)) : r[1] > 90 && r[1] < 180 ? (n = -(a = e / 2 + (-e / 2 * Math.tan((90 - r[1]) * Math.PI * 2 / 360) - i / 2) * Math.sin(2 * (90 - r[1]) * Math.PI * 2 / 360) / 2), 
                                o = -(c = Math.tan((90 - r[1]) * Math.PI * 2 / 360) * a)) : (n = -(a = -e / 2 - (-e / 2 * Math.tan((90 - r[1]) * Math.PI * 2 / 360) - i / 2) * Math.sin(2 * (90 - r[1]) * Math.PI * 2 / 360) / 2), 
                                o = -(c = Math.tan((90 - r[1]) * Math.PI * 2 / 360) * a)), s = [ a, o, n, c ];
                            }
                            return s;
                        }(i, t, e), o = r.createLinearGradient(a[0], a[1], a[2], a[3]), n = i.match(/linear-gradient\((.+)\)/)[1], c = s(n.substring(n.indexOf(",") + 1)), h = 0; h < c.colors.length; h++) o.addColorStop(c.percents[h], c.colors[h]);
                        r.fillStyle = o;
                    }(e, i, t, r) : t.startsWith("radial") && function(t, e, i, r) {
                        for (var a = s(i.match(/radial-gradient\((.+)\)/)[1]), o = r.createCircularGradient(0, 0, t < e ? e / 2 : t / 2), n = 0; n < a.colors.length; n++) o.addColorStop(a.percents[n], a.colors[n]);
                        r.fillStyle = o;
                    }(e, i, t, r);
                }
            };
            function s(t) {
                var e, s = t.substring(0, t.length - 1).split("%,"), r = [], a = [], o = i(s);
                try {
                    for (o.s(); !(e = o.n()).done; ) {
                        var n = e.value;
                        r.push(n.substring(0, n.lastIndexOf(" ")).trim()), a.push(n.substring(n.lastIndexOf(" "), n.length) / 100);
                    }
                } catch (t) {
                    o.e(t);
                } finally {
                    o.f();
                }
                return {
                    colors: r,
                    percents: a
                };
            }
            t.exports = {
                api: e
            };
        }();
    },
    "./components/painter/lib/pen.js": function(e, a, o) {
        o.r(a), o.d(a, "default", function() {
            return h;
        });
        var n = o("./components/painter/lib/qrcode.js"), c = o("./components/painter/lib/gradient.js"), h = function() {
            function e(t, i) {
                s(this, e), this.ctx = t, this.data = i, this.globalWidth = {}, this.globalHeight = {};
            }
            return r(e, [ {
                key: "paint",
                value: function(t) {
                    this.style = {
                        width: this.data.width.toPx(),
                        height: this.data.height.toPx()
                    }, this._background();
                    var e, s = i(this.data.views);
                    try {
                        for (s.s(); !(e = s.n()).done; ) {
                            var r = e.value;
                            this._drawAbsolute(r);
                        }
                    } catch (t) {
                        s.e(t);
                    } finally {
                        s.f();
                    }
                    this.ctx.draw(!1, function() {
                        t();
                    });
                }
            }, {
                key: "_background",
                value: function() {
                    this.ctx.save();
                    var t = this.style, e = t.width, i = t.height, s = this.data.background;
                    this.ctx.translate(e / 2, i / 2), this._doClip(this.data.borderRadius, e, i), s ? s.startsWith("#") || s.startsWith("rgba") || "transparent" === s.toLowerCase() ? (this.ctx.fillStyle = s, 
                    this.ctx.fillRect(-e / 2, -i / 2, e, i)) : c.api.isGradient(s) ? (c.api.doGradient(s, e, i, this.ctx), 
                    this.ctx.fillRect(-e / 2, -i / 2, e, i)) : this.ctx.drawImage(s, -e / 2, -i / 2, e, i) : (this.ctx.fillStyle = "#fff", 
                    this.ctx.fillRect(-e / 2, -i / 2, e, i)), this.ctx.restore();
                }
            }, {
                key: "_drawAbsolute",
                value: function(e) {
                    switch (e.css && e.css.length && (e.css = Object.assign.apply(Object, t(e.css))), 
                    e.type) {
                      case "image":
                        this._drawAbsImage(e);
                        break;

                      case "text":
                        this._fillAbsText(e);
                        break;

                      case "rect":
                        this._drawAbsRect(e);
                        break;

                      case "qrcode":
                        this._drawQRCode(e);
                    }
                }
            }, {
                key: "_doClip",
                value: function(t, e, i) {
                    if (t && e && i) {
                        var s = Math.min(t.toPx(), e / 2, i / 2);
                        this.ctx.globalAlpha = 0, this.ctx.fillStyle = "white", this.ctx.beginPath(), this.ctx.arc(-e / 2 + s, -i / 2 + s, s, 1 * Math.PI, 1.5 * Math.PI), 
                        this.ctx.lineTo(e / 2 - s, -i / 2), this.ctx.arc(e / 2 - s, -i / 2 + s, s, 1.5 * Math.PI, 2 * Math.PI), 
                        this.ctx.lineTo(e / 2, i / 2 - s), this.ctx.arc(e / 2 - s, i / 2 - s, s, 0, .5 * Math.PI), 
                        this.ctx.lineTo(-e / 2 + s, i / 2), this.ctx.arc(-e / 2 + s, i / 2 - s, s, .5 * Math.PI, 1 * Math.PI), 
                        this.ctx.closePath(), this.ctx.fill(), getApp().systemInfo && getApp().systemInfo.version <= "6.6.6" && "ios" === getApp().systemInfo.platform || this.ctx.clip(), 
                        this.ctx.globalAlpha = 1;
                    }
                }
            }, {
                key: "_doBorder",
                value: function(t, e, i) {
                    if (t.css) {
                        var s = t.css, r = s.borderRadius, a = s.borderWidth, o = s.borderColor;
                        if (a) {
                            var n;
                            this.ctx.save(), this._preProcess(t, !0), n = r ? Math.min(r.toPx(), e / 2, i / 2) : 0;
                            var c = a.toPx();
                            this.ctx.lineWidth = c, this.ctx.strokeStyle = o || "black", this.ctx.beginPath(), 
                            this.ctx.arc(-e / 2 + n, -i / 2 + n, n + c / 2, 1 * Math.PI, 1.5 * Math.PI), this.ctx.lineTo(e / 2 - n, -i / 2 - c / 2), 
                            this.ctx.arc(e / 2 - n, -i / 2 + n, n + c / 2, 1.5 * Math.PI, 2 * Math.PI), this.ctx.lineTo(e / 2 + c / 2, i / 2 - n), 
                            this.ctx.arc(e / 2 - n, i / 2 - n, n + c / 2, 0, .5 * Math.PI), this.ctx.lineTo(-e / 2 + n, i / 2 + c / 2), 
                            this.ctx.arc(-e / 2 + n, i / 2 - n, n + c / 2, .5 * Math.PI, 1 * Math.PI), this.ctx.closePath(), 
                            this.ctx.stroke(), this.ctx.restore();
                        }
                    }
                }
            }, {
                key: "_preProcess",
                value: function(t, e) {
                    var i, s, r, a, o = 0;
                    switch (t.type) {
                      case "text":
                        for (var n = t.text.split("\n"), c = 0; c < n.length; ++c) "" === n[c] && (n[c] = " ");
                        var h = "bold" === t.css.fontWeight ? "bold" : "normal";
                        t.css.fontSize = t.css.fontSize ? t.css.fontSize : "20rpx", this.ctx.font = "normal ".concat(h, " ").concat(t.css.fontSize.toPx(), "px ").concat(t.css.fontFamily ? t.css.fontFamily : "sans-serif");
                        for (var l = 0, f = [], u = 0; u < n.length; ++u) {
                            var d = this.ctx.measureText(n[u]).width, g = t.css.width ? t.css.width.toPx() : d, x = Math.ceil(d / g);
                            o = g > o ? g : o, l += x, f[u] = x;
                        }
                        l = t.css.maxLines < l ? t.css.maxLines : l;
                        var p = t.css.lineHeight ? t.css.lineHeight.toPx() : t.css.fontSize.toPx();
                        i = p * l, s = {
                            lines: l,
                            lineHeight: p,
                            textArray: n,
                            linesArray: f
                        };
                        break;

                      case "image":
                        var v = getApp().systemInfo.pixelRatio ? getApp().systemInfo.pixelRatio : 2;
                        t.css && (t.css.width || (t.css.width = "auto"), t.css.height || (t.css.height = "auto")), 
                        !t.css || "auto" === t.css.width && "auto" === t.css.height ? (o = Math.round(t.sWidth / v), 
                        i = Math.round(t.sHeight / v)) : "auto" === t.css.width ? (i = t.css.height.toPx(), 
                        o = t.sWidth / t.sHeight * i) : "auto" === t.css.height ? (o = t.css.width.toPx(), 
                        i = t.sHeight / t.sWidth * o) : (o = t.css.width.toPx(), i = t.css.height.toPx());
                        break;

                      default:
                        if (!t.css.width || !t.css.height) return void console.error("You should set width and height");
                        o = t.css.width.toPx(), i = t.css.height.toPx();
                    }
                    if (t.css && t.css.right) if ("string" == typeof t.css.right) r = this.style.width - t.css.right.toPx(!0); else {
                        var P = t.css.right;
                        r = this.style.width - P[0].toPx(!0) - this.globalWidth[P[1]] * (P[2] || 1);
                    } else if (t.css && t.css.left) if ("string" == typeof t.css.left) r = t.css.left.toPx(!0); else {
                        var b = t.css.left;
                        r = b[0].toPx(!0) + this.globalWidth[b[1]] * (b[2] || 1);
                    } else r = 0;
                    if (t.css && t.css.bottom) a = this.style.height - i - t.css.bottom.toPx(!0); else if (t.css && t.css.top) if ("string" == typeof t.css.top) a = t.css.top.toPx(!0); else {
                        var m = t.css.top;
                        a = m[0].toPx(!0) + this.globalHeight[m[1]] * (m[2] || 1);
                    } else a = 0;
                    var w = t.css && t.css.rotate ? this._getAngle(t.css.rotate) : 0;
                    switch (t.css && t.css.align ? t.css.align : t.css && t.css.right ? "right" : "left") {
                      case "center":
                        this.ctx.translate(r, a + i / 2);
                        break;

                      case "right":
                        this.ctx.translate(r - o / 2, a + i / 2);
                        break;

                      default:
                        this.ctx.translate(r + o / 2, a + i / 2);
                    }
                    return this.ctx.rotate(w), !e && t.css && t.css.borderRadius && "rect" !== t.type && this._doClip(t.css.borderRadius, o, i), 
                    this._doShadow(t), t.id && (this.globalWidth[t.id] = o, this.globalHeight[t.id] = i), 
                    {
                        width: o,
                        height: i,
                        x: r,
                        y: a,
                        extra: s
                    };
                }
            }, {
                key: "_doBackground",
                value: function(t) {
                    this.ctx.save();
                    var e = this._preProcess(t, !0), i = e.width, s = e.height, r = t.css, a = r.background, o = r.padding, n = [ 0, 0, 0, 0 ];
                    if (o) {
                        var h = o.split(/\s+/);
                        if (1 === h.length) {
                            var l = h[0].toPx();
                            n = [ l, l, l, l ];
                        }
                        if (2 === h.length) {
                            var f = h[0].toPx(), u = h[1].toPx();
                            n = [ f, u, f, u ];
                        }
                        if (3 === h.length) {
                            var d = h[0].toPx(), g = h[1].toPx();
                            n = [ d, g, h[2].toPx(), g ];
                        }
                        4 === h.length && (n = [ h[0].toPx(), h[1].toPx(), h[2].toPx(), h[3].toPx() ]);
                    }
                    var x = i + n[1] + n[3], p = s + n[0] + n[2];
                    this._doClip(t.css.borderRadius, x, p), c.api.isGradient(a) ? c.api.doGradient(a, x, p, this.ctx) : this.ctx.fillStyle = a, 
                    this.ctx.fillRect(-x / 2, -p / 2, x, p), this.ctx.restore();
                }
            }, {
                key: "_drawQRCode",
                value: function(t) {
                    this.ctx.save();
                    var e = this._preProcess(t), i = e.width, s = e.height;
                    n.api.draw(t.content, this.ctx, -i / 2, -s / 2, i, s, t.css.background, t.css.color), 
                    this.ctx.restore(), this._doBorder(t, i, s);
                }
            }, {
                key: "_drawAbsImage",
                value: function(t) {
                    if (t.url) {
                        this.ctx.save();
                        var e = this._preProcess(t), i = e.width, s = e.height, r = t.sWidth, a = t.sHeight, o = 0, n = 0, c = i / s;
                        c >= t.sWidth / t.sHeight ? (a = r / c, n = Math.round((t.sHeight - a) / 2)) : (r = a * c, 
                        o = Math.round((t.sWidth - r) / 2)), t.css && "scaleToFill" === t.css.mode ? this.ctx.drawImage(t.url, -i / 2, -s / 2, i, s) : this.ctx.drawImage(t.url, o, n, r, a, -i / 2, -s / 2, i, s), 
                        this.ctx.restore(), this._doBorder(t, i, s);
                    }
                }
            }, {
                key: "_fillAbsText",
                value: function(t) {
                    if (t.text) {
                        t.css.background && this._doBackground(t), this.ctx.save();
                        var e = this._preProcess(t, t.css.background && t.css.borderRadius), i = e.width, s = e.height, r = e.extra;
                        this.ctx.fillStyle = t.css.color || "black";
                        var a = r.lines, o = r.lineHeight, n = r.textArray, c = r.linesArray;
                        if (t.id) {
                            for (var h = 0, l = 0; l < n.length; ++l) h = this.ctx.measureText(n[l]).width > h ? this.ctx.measureText(n[l]).width : h;
                            this.globalWidth[t.id] = i ? h < i ? h : i : h;
                        }
                        for (var f = 0, u = 0; u < n.length; ++u) for (var d = Math.round(n[u].length / c[u]), g = 0, x = 0, p = 0; p < c[u] && !(f >= a); ++p) {
                            x = d;
                            for (var v = void 0, P = n[u].substr(g, x), b = this.ctx.measureText(P).width; g + x <= n[u].length && (i - b > t.css.fontSize.toPx() || b > i); ) {
                                if (b < i) P = n[u].substr(g, ++x); else {
                                    if (P.length <= 1) break;
                                    P = n[u].substr(g, --x);
                                }
                                b = this.ctx.measureText(P).width;
                            }
                            if (g += P.length, f === a - 1 && (u < n.length - 1 || g < n[u].length)) {
                                for (;this.ctx.measureText(P + "...").width > i && !(P.length <= 1); ) P = P.substring(0, P.length - 1);
                                P += "...", b = this.ctx.measureText(P).width;
                            }
                            switch (this.ctx.setTextAlign(t.css.textAlign ? t.css.textAlign : "left"), t.css.textAlign) {
                              case "center":
                                v = 0;
                                break;

                              case "right":
                                v = i / 2;
                                break;

                              default:
                                v = -i / 2;
                            }
                            var m = -s / 2 + (0 === f ? t.css.fontSize.toPx() : t.css.fontSize.toPx() + f * o);
                            f++, "stroke" === t.css.textStyle ? this.ctx.strokeText(P, v, m, b) : this.ctx.fillText(P, v, m, b);
                            var w = t.css.fontSize.toPx();
                            t.css.textDecoration && (this.ctx.beginPath(), /\bunderline\b/.test(t.css.textDecoration) && (this.ctx.moveTo(v, m), 
                            this.ctx.lineTo(v + b, m)), /\boverline\b/.test(t.css.textDecoration) && (this.ctx.moveTo(v, m - w), 
                            this.ctx.lineTo(v + b, m - w)), /\bline-through\b/.test(t.css.textDecoration) && (this.ctx.moveTo(v, m - w / 3), 
                            this.ctx.lineTo(v + b, m - w / 3)), this.ctx.closePath(), this.ctx.strokeStyle = t.css.color, 
                            this.ctx.stroke());
                        }
                        this.ctx.restore(), this._doBorder(t, i, s);
                    }
                }
            }, {
                key: "_drawAbsRect",
                value: function(t) {
                    this.ctx.save();
                    var e = this._preProcess(t), i = e.width, s = e.height;
                    c.api.isGradient(t.css.color) ? c.api.doGradient(t.css.color, i, s, this.ctx) : this.ctx.fillStyle = t.css.color;
                    var r = t.css.borderRadius, a = r ? Math.min(r.toPx(), i / 2, s / 2) : 0;
                    this.ctx.beginPath(), this.ctx.arc(-i / 2 + a, -s / 2 + a, a, 1 * Math.PI, 1.5 * Math.PI), 
                    this.ctx.lineTo(i / 2 - a, -s / 2), this.ctx.arc(i / 2 - a, -s / 2 + a, a, 1.5 * Math.PI, 2 * Math.PI), 
                    this.ctx.lineTo(i / 2, s / 2 - a), this.ctx.arc(i / 2 - a, s / 2 - a, a, 0, .5 * Math.PI), 
                    this.ctx.lineTo(-i / 2 + a, s / 2), this.ctx.arc(-i / 2 + a, s / 2 - a, a, .5 * Math.PI, 1 * Math.PI), 
                    this.ctx.closePath(), this.ctx.fill(), this.ctx.restore(), this._doBorder(t, i, s);
                }
            }, {
                key: "_doShadow",
                value: function(t) {
                    if (t.css && t.css.shadow) {
                        var e = t.css.shadow.replace(/,\s+/g, ",").split(" ");
                        e.length > 4 ? console.error("shadow don't spread option") : (this.ctx.shadowOffsetX = parseInt(e[0], 10), 
                        this.ctx.shadowOffsetY = parseInt(e[1], 10), this.ctx.shadowBlur = parseInt(e[2], 10), 
                        this.ctx.shadowColor = e[3]);
                    }
                }
            }, {
                key: "_getAngle",
                value: function(t) {
                    return Number(t) * Math.PI / 180;
                }
            } ]), e;
        }();
    },
    "./components/painter/lib/qrcode.js": function(t, e) {
        !function() {
            var e, i, s, r, a, o, n = [ 0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28 ], c = [ 3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177 ], h = [ 30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107 ], l = [ 1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30 ], f = [ 255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175 ], u = [ 1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0 ], d = [], g = [], x = [], p = [], v = [], P = 2;
            function b(t, e) {
                var i;
                t > e && (i = t, t = e, e = i), i = e, i *= e, i += e, i >>= 1, p[i += t] = 1;
            }
            function m(t, e) {
                var s;
                for (x[t + i * e] = 1, s = -2; s < 2; s++) x[t + s + i * (e - 2)] = 1, x[t - 2 + i * (e + s + 1)] = 1, 
                x[t + 2 + i * (e + s)] = 1, x[t + s + 1 + i * (e + 2)] = 1;
                for (s = 0; s < 2; s++) b(t - 1, e + s), b(t + 1, e - s), b(t - s, e - 1), b(t + s, e + 1);
            }
            function w(t) {
                for (;t >= 255; ) t = ((t -= 255) >> 8) + (255 & t);
                return t;
            }
            var y = [];
            function I(t, e, i, s) {
                var r, a, o;
                for (r = 0; r < s; r++) d[i + r] = 0;
                for (r = 0; r < e; r++) {
                    if (255 != (o = f[d[t + r] ^ d[i]])) for (a = 1; a < s; a++) d[i + a - 1] = d[i + a] ^ u[w(o + y[s - a])]; else for (a = i; a < i + s; a++) d[a] = d[a + 1];
                    d[i + s - 1] = 255 == o ? 0 : u[w(o + y[0])];
                }
            }
            function S(t, e) {
                var i;
                return t > e && (i = t, t = e, e = i), i = e, i += e * e, i >>= 1, p[i += t];
            }
            function k(t) {
                var e, s, r, a;
                switch (t) {
                  case 0:
                    for (s = 0; s < i; s++) for (e = 0; e < i; e++) e + s & 1 || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 1:
                    for (s = 0; s < i; s++) for (e = 0; e < i; e++) 1 & s || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 2:
                    for (s = 0; s < i; s++) for (r = 0, e = 0; e < i; e++, r++) 3 == r && (r = 0), r || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 3:
                    for (a = 0, s = 0; s < i; s++, a++) for (3 == a && (a = 0), r = a, e = 0; e < i; e++, 
                    r++) 3 == r && (r = 0), r || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 4:
                    for (s = 0; s < i; s++) for (r = 0, a = s >> 1 & 1, e = 0; e < i; e++, r++) 3 == r && (r = 0, 
                    a = !a), a || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 5:
                    for (a = 0, s = 0; s < i; s++, a++) for (3 == a && (a = 0), r = 0, e = 0; e < i; e++, 
                    r++) 3 == r && (r = 0), (e & s & 1) + !(!r | !a) || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 6:
                    for (a = 0, s = 0; s < i; s++, a++) for (3 == a && (a = 0), r = 0, e = 0; e < i; e++, 
                    r++) 3 == r && (r = 0), (e & s & 1) + (r && r == a) & 1 || S(e, s) || (x[e + s * i] ^= 1);
                    break;

                  case 7:
                    for (a = 0, s = 0; s < i; s++, a++) for (3 == a && (a = 0), r = 0, e = 0; e < i; e++, 
                    r++) 3 == r && (r = 0), (r && r == a) + (e + s & 1) & 1 || S(e, s) || (x[e + s * i] ^= 1);
                }
            }
            function M(t) {
                var e, i = 0;
                for (e = 0; e <= t; e++) v[e] >= 5 && (i += 3 + v[e] - 5);
                for (e = 3; e < t - 1; e += 2) v[e - 2] == v[e + 2] && v[e + 2] == v[e - 1] && v[e - 1] == v[e + 1] && 3 * v[e - 1] == v[e] && (0 == v[e - 3] || e + 3 > t || 3 * v[e - 3] >= 4 * v[e] || 3 * v[e + 3] >= 4 * v[e]) && (i += 40);
                return i;
            }
            function A() {
                var t, e, s, r, a, o = 0, n = 0;
                for (e = 0; e < i - 1; e++) for (t = 0; t < i - 1; t++) (x[t + i * e] && x[t + 1 + i * e] && x[t + i * (e + 1)] && x[t + 1 + i * (e + 1)] || !(x[t + i * e] || x[t + 1 + i * e] || x[t + i * (e + 1)] || x[t + 1 + i * (e + 1)])) && (o += 3);
                for (e = 0; e < i; e++) {
                    for (v[0] = 0, s = r = t = 0; t < i; t++) (a = x[t + i * e]) == r ? v[s]++ : v[++s] = 1, 
                    n += (r = a) ? 1 : -1;
                    o += M(s);
                }
                n < 0 && (n = -n);
                var c = n, h = 0;
                for (c += c << 2, c <<= 1; c > i * i; ) c -= i * i, h++;
                for (o += 10 * h, t = 0; t < i; t++) {
                    for (v[0] = 0, s = r = e = 0; e < i; e++) (a = x[t + i * e]) == r ? v[s]++ : v[++s] = 1, 
                    r = a;
                    o += M(s);
                }
                return o;
            }
            var T = null, _ = {
                get ecclevel() {
                    return P;
                },
                set ecclevel(t) {
                    P = t;
                },
                get size() {
                    return _size;
                },
                set size(t) {
                    _size = t;
                },
                get canvas() {
                    return T;
                },
                set canvas(t) {
                    T = t;
                },
                getFrame: function(t) {
                    return function(t) {
                        var v, M, T, _, C, F, W, O;
                        _ = t.length, e = 0;
                        do {
                            if (e++, T = 4 * (P - 1) + 16 * (e - 1), s = l[T++], r = l[T++], a = l[T++], o = l[T], 
                            _ <= (T = a * (s + r) + r - 3 + (e <= 9))) break;
                        } while (e < 40);
                        for (i = 17 + 4 * e, C = a + (a + o) * (s + r) + r, _ = 0; _ < C; _++) g[_] = 0;
                        for (d = t.slice(0), _ = 0; _ < i * i; _++) x[_] = 0;
                        for (_ = 0; _ < (i * (i + 1) + 1) / 2; _++) p[_] = 0;
                        for (_ = 0; _ < 3; _++) {
                            for (T = 0, M = 0, 1 == _ && (T = i - 7), 2 == _ && (M = i - 7), x[M + 3 + i * (T + 3)] = 1, 
                            v = 0; v < 6; v++) x[M + v + i * T] = 1, x[M + i * (T + v + 1)] = 1, x[M + 6 + i * (T + v)] = 1, 
                            x[M + v + 1 + i * (T + 6)] = 1;
                            for (v = 1; v < 5; v++) b(M + v, T + 1), b(M + 1, T + v + 1), b(M + 5, T + v), b(M + v + 1, T + 5);
                            for (v = 2; v < 4; v++) x[M + v + i * (T + 2)] = 1, x[M + 2 + i * (T + v + 1)] = 1, 
                            x[M + 4 + i * (T + v)] = 1, x[M + v + 1 + i * (T + 4)] = 1;
                        }
                        if (e > 1) for (_ = n[e], M = i - 7; ;) {
                            for (v = i - 7; v > _ - 3 && (m(v, M), !(v < _)); ) v -= _;
                            if (M <= _ + 9) break;
                            m(6, M -= _), m(M, 6);
                        }
                        for (x[8 + i * (i - 8)] = 1, M = 0; M < 7; M++) b(7, M), b(i - 8, M), b(7, M + i - 7);
                        for (v = 0; v < 8; v++) b(v, 7), b(v + i - 8, 7), b(v, i - 8);
                        for (v = 0; v < 9; v++) b(v, 8);
                        for (v = 0; v < 8; v++) b(v + i - 8, 8), b(8, v);
                        for (M = 0; M < 7; M++) b(8, M + i - 7);
                        for (v = 0; v < i - 14; v++) 1 & v ? (b(8 + v, 6), b(6, 8 + v)) : (x[8 + v + 6 * i] = 1, 
                        x[6 + i * (8 + v)] = 1);
                        if (e > 6) for (_ = c[e - 7], T = 17, v = 0; v < 6; v++) for (M = 0; M < 3; M++, 
                        T--) 1 & (T > 11 ? e >> T - 12 : _ >> T) ? (x[5 - v + i * (2 - M + i - 11)] = 1, 
                        x[2 - M + i - 11 + i * (5 - v)] = 1) : (b(5 - v, 2 - M + i - 11), b(2 - M + i - 11, 5 - v));
                        for (M = 0; M < i; M++) for (v = 0; v <= M; v++) x[v + i * M] && b(v, M);
                        for (C = d.length, F = 0; F < C; F++) g[F] = d.charCodeAt(F);
                        if (d = g.slice(0), C >= (v = a * (s + r) + r) - 2 && (C = v - 2, e > 9 && C--), 
                        F = C, e > 9) {
                            for (d[F + 2] = 0, d[F + 3] = 0; F--; ) _ = d[F], d[F + 3] |= 255 & _ << 4, d[F + 2] = _ >> 4;
                            d[2] |= 255 & C << 4, d[1] = C >> 4, d[0] = 64 | C >> 12;
                        } else {
                            for (d[F + 1] = 0, d[F + 2] = 0; F--; ) _ = d[F], d[F + 2] |= 255 & _ << 4, d[F + 1] = _ >> 4;
                            d[1] |= 255 & C << 4, d[0] = 64 | C >> 4;
                        }
                        for (F = C + 3 - (e < 10); F < v; ) d[F++] = 236, d[F++] = 17;
                        for (y[0] = 1, F = 0; F < o; F++) {
                            for (y[F + 1] = 1, W = F; W > 0; W--) y[W] = y[W] ? y[W - 1] ^ u[w(f[y[W]] + F)] : y[W - 1];
                            y[0] = u[w(f[y[0]] + F)];
                        }
                        for (F = 0; F <= o; F++) y[F] = f[y[F]];
                        for (T = v, M = 0, F = 0; F < s; F++) I(M, a, T, o), M += a, T += o;
                        for (F = 0; F < r; F++) I(M, a + 1, T, o), M += a + 1, T += o;
                        for (M = 0, F = 0; F < a; F++) {
                            for (W = 0; W < s; W++) g[M++] = d[F + W * a];
                            for (W = 0; W < r; W++) g[M++] = d[s * a + F + W * (a + 1)];
                        }
                        for (W = 0; W < r; W++) g[M++] = d[s * a + F + W * (a + 1)];
                        for (F = 0; F < o; F++) for (W = 0; W < s + r; W++) g[M++] = d[v + F + W * o];
                        for (d = g, v = M = i - 1, T = C = 1, O = (a + o) * (s + r) + r, F = 0; F < O; F++) for (_ = d[F], 
                        W = 0; W < 8; W++, _ <<= 1) {
                            128 & _ && (x[v + i * M] = 1);
                            do {
                                C ? v-- : (v++, T ? 0 != M ? M-- : (T = !T, 6 == (v -= 2) && (v--, M = 9)) : M != i - 1 ? M++ : (T = !T, 
                                6 == (v -= 2) && (v--, M -= 8))), C = !C;
                            } while (S(v, M));
                        }
                        for (d = x.slice(0), _ = 0, M = 3e4, T = 0; T < 8 && (k(T), (v = A()) < M && (M = v, 
                        _ = T), 7 != _); T++) x = d.slice(0);
                        for (_ != T && k(_), M = h[_ + (P - 1 << 3)], T = 0; T < 8; T++, M >>= 1) 1 & M && (x[i - 1 - T + 8 * i] = 1, 
                        T < 6 ? x[8 + i * T] = 1 : x[8 + i * (T + 1)] = 1);
                        for (T = 0; T < 7; T++, M >>= 1) 1 & M && (x[8 + i * (i - 7 + T)] = 1, T ? x[6 - T + 8 * i] = 1 : x[7 + 8 * i] = 1);
                        return x;
                    }(t);
                },
                utf16to8: function(t) {
                    var e, i, s, r;
                    for (e = "", s = t.length, i = 0; i < s; i++) (r = t.charCodeAt(i)) >= 1 && r <= 127 ? e += t.charAt(i) : r > 2047 ? (e += String.fromCharCode(224 | r >> 12 & 15), 
                    e += String.fromCharCode(128 | r >> 6 & 63), e += String.fromCharCode(128 | r >> 0 & 63)) : (e += String.fromCharCode(192 | r >> 6 & 31), 
                    e += String.fromCharCode(128 | r >> 0 & 63));
                    return e;
                },
                draw: function(t, e, s, r, a, o, n, c, h, l) {
                    if (P = l || P, e) {
                        var f = Math.min(a, o);
                        t = this.utf16to8(t);
                        var u = this.getFrame(t), d = f / i;
                        n && (e.setFillStyle(n), e.fillRect(s, r, a, a)), e.setFillStyle(c || "black");
                        for (var g = 0; g < i; g++) for (var x = 0; x < i; x++) u[x * i + g] && e.fillRect(s + d * g, r + d * x, d, d);
                    } else console.warn("No canvas provided to draw QR code in!");
                }
            };
            t.exports = {
                api: _
            };
        }();
    },
    "./components/painter/lib/util.js": function(t, i) {
        t.exports = {
            isValidUrl: function(t) {
                return /(ht|f)tp(s?):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(t);
            },
            equal: function t(i, s) {
                if (i === s) return !0;
                if (i && s && "object" == e(i) && "object" == e(s)) {
                    var r, a, o, n = Array.isArray(i), c = Array.isArray(s);
                    if (n && c) {
                        if ((a = i.length) != s.length) return !1;
                        for (r = a; 0 != r--; ) if (!t(i[r], s[r])) return !1;
                        return !0;
                    }
                    if (n != c) return !1;
                    var h = i instanceof Date, l = s instanceof Date;
                    if (h != l) return !1;
                    if (h && l) return i.getTime() == s.getTime();
                    var f = i instanceof RegExp, u = s instanceof RegExp;
                    if (f != u) return !1;
                    if (f && u) return i.toString() == s.toString();
                    var d = Object.keys(i);
                    if ((a = d.length) !== Object.keys(s).length) return !1;
                    for (r = a; 0 != r--; ) if (!Object.prototype.hasOwnProperty.call(s, d[r])) return !1;
                    for (r = a; 0 != r--; ) if (!t(i[o = d[r]], s[o])) return !1;
                    return !0;
                }
                return i != i && s != s;
            }
        };
    },
    "./components/painter/painter.js": function(t, e, s) {
        s.r(e);
        var r = s("./components/painter/lib/pen.js"), a = s("./components/painter/lib/downloader.js"), o = s("./components/painter/lib/util.js"), n = new a.default();
        function c(t, e) {
            String.prototype.toPx = function(i) {
                var s = (i ? /^-?[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g : /^[0-9]+([.]{1}[0-9]+){0,1}(rpx|px)$/g).exec(this);
                if (!this || !s) return console.error("The size: ".concat(this, " is illegal")), 
                0;
                var r = s[2], a = parseFloat(this), o = 0;
                return "rpx" === r ? o = Math.round(a * t * (e || 1)) : "px" === r && (o = Math.round(a * (e || 1))), 
                o;
            };
        }
        Component({
            canvasWidthInPx: 0,
            canvasHeightInPx: 0,
            paintCount: 0,
            properties: {
                customStyle: {
                    type: String
                },
                palette: {
                    type: Object,
                    observer: function(t, e) {
                        this.isNeedRefresh(t, e) && (this.paintCount = 0, this.startPaint());
                    }
                },
                widthPixels: {
                    type: Number,
                    value: 0
                },
                dirty: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                picURL: "",
                showCanvas: !0,
                painterStyle: ""
            },
            methods: {
                isEmpty: function(t) {
                    for (var e in t) return !1;
                    return !0;
                },
                isNeedRefresh: function(t, e) {
                    return !(!t || this.isEmpty(t) || this.data.dirty && o.equal(t, e));
                },
                startPaint: function() {
                    var t = this;
                    if (!this.isEmpty(this.properties.palette)) {
                        if (!getApp().systemInfo || !getApp().systemInfo.screenWidth) try {
                            getApp().systemInfo = wx.getSystemInfoSync();
                        } catch (i) {
                            var e = "Painter get system info failed, " + JSON.stringify(i);
                            return that.triggerEvent("imgErr", {
                                error: e
                            }), void console.error(e);
                        }
                        var i = getApp().systemInfo.screenWidth / 750;
                        c(i, 1), this.downloadImages().then(function(e) {
                            var s = e.width, a = e.height;
                            if (s && a) {
                                t.canvasWidthInPx = s.toPx(), t.properties.widthPixels && (c(i, t.properties.widthPixels / t.canvasWidthInPx), 
                                t.canvasWidthInPx = t.properties.widthPixels), t.canvasHeightInPx = a.toPx(), t.setData({
                                    painterStyle: "width:".concat(t.canvasWidthInPx, "px;height:").concat(t.canvasHeightInPx, "px;")
                                });
                                var o = wx.createCanvasContext("k-canvas", t);
                                new r.default(o, e).paint(function() {
                                    t.saveImgToLocal();
                                });
                            } else console.error("You should set width and height correctly for painter, width: ".concat(s, ", height: ").concat(a));
                        });
                    }
                },
                downloadImages: function() {
                    var t = this;
                    return new Promise(function(e, s) {
                        var r = 0, a = 0, o = JSON.parse(JSON.stringify(t.properties.palette));
                        if (o.background && (r++, n.download(o.background).then(function(t) {
                            o.background = t, a++, r === a && e(o);
                        }, function() {
                            a++, r === a && e(o);
                        })), o.views) {
                            var c, h = i(o.views);
                            try {
                                var l = function() {
                                    var t = c.value;
                                    t && "image" === t.type && t.url && (r++, n.download(t.url).then(function(i) {
                                        t.url = i, wx.getImageInfo({
                                            src: t.url,
                                            success: function(e) {
                                                t.sWidth = e.width, t.sHeight = e.height;
                                            },
                                            fail: function(e) {
                                                t.url = "", console.error("getImageInfo ".concat(t.url, " failed, ").concat(JSON.stringify(e)));
                                            },
                                            complete: function() {
                                                a++, r === a && e(o);
                                            }
                                        });
                                    }, function() {
                                        a++, r === a && e(o);
                                    }));
                                };
                                for (h.s(); !(c = h.n()).done; ) l();
                            } catch (t) {
                                h.e(t);
                            } finally {
                                h.f();
                            }
                        }
                        0 === r && e(o);
                    });
                },
                saveImgToLocal: function() {
                    var t = this, e = this;
                    setTimeout(function() {
                        wx.canvasToTempFilePath({
                            canvasId: "k-canvas",
                            destWidth: e.canvasWidthInPx,
                            destHeight: e.canvasHeightInPx,
                            success: function(t) {
                                e.getImageInfo(t.tempFilePath);
                            },
                            fail: function(t) {
                                console.error("canvasToTempFilePath failed, " + JSON.stringify(t)), e.triggerEvent("imgErr", {
                                    error: t
                                });
                            }
                        }, t);
                    }, 300);
                },
                getImageInfo: function(t) {
                    var e = this;
                    wx.getImageInfo({
                        src: t,
                        success: function(i) {
                            if (e.paintCount > 5) {
                                var s = "The result is always fault, even we tried 5 times";
                                return console.error(s), void e.triggerEvent("imgErr", {
                                    error: s
                                });
                            }
                            Math.abs((i.width * e.canvasHeightInPx - e.canvasWidthInPx * i.height) / (i.height * e.canvasHeightInPx)) < .01 ? e.triggerEvent("imgOK", {
                                path: t
                            }) : e.startPaint(), e.paintCount++;
                        },
                        fail: function(t) {
                            console.error("getImageInfo failed, " + JSON.stringify(t)), e.triggerEvent("imgErr", {
                                error: t
                            });
                        }
                    });
                }
            }
        });
    }
});