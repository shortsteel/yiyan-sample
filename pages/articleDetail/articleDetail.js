var e = require("../../@babel/runtime/helpers/interopRequireDefault"), r = require("../../@babel/runtime/helpers/defineProperty"), t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"), a = require("../../@babel/runtime/helpers/typeof"), n = e(require("../../@babel/runtime/regenerator")), s = require("../../@babel/runtime/helpers/asyncToGenerator"), i = require("../../@babel/runtime/helpers/objectSpread2");

require("./../../webpack-require")("./pages/articleDetail/articleDetail.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/articleDetail/articleDetail.js": function(e, r, t) {
        t.r(r);
        var a = t("./utils/api/index.js"), o = t("./utils/util.js"), l = t("./utils/pageShare.js"), c = t("./constants/index.js"), u = t("./utils/wxParse/wxParse.js"), p = getApp();
        Page({
            data: {
                isLoading: !0,
                reply: "",
                maxlength: 200,
                isShowPreView: !1
            },
            previewImage2: function(e) {
                wx.previewImage({
                    urls: [ this.data.ilank.site_wx ]
                });
            },
            go: o.go,
            onLoad: function(e) {
                console.log(e);
                var r = p.systemInfo.isIphoneX, t = wx.getStorageSync("CONFIG"), a = wx.getStorageSync("features"), n = wx.getStorageSync(c.USER_KEY), s = p.globalData.themeColor;
                this.setData(i(i({}, e), {}, {
                    isIphoneX: r,
                    config: t,
                    features: a,
                    userInfo: n,
                    themeColor: s
                }));
            },
            onShow: function() {
                var e = this;
                return s(n.default.mark(function r() {
                    var t;
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return r.next = 2, e.getArticleDetail();

                          case 2:
                            t = e.data.page_title, wx.setNavigationBarTitle({
                                title: t
                            });

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            },
            getArticleDetail: function() {
                var e = this;
                return s(n.default.mark(function r() {
                    var t, s, l, c, p, g, d;
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return t = e.data, s = t.id, l = void 0 === s ? "" : s, c = t.name, p = void 0 === c ? "" : c, 
                            r.next = 7, a.default.hei.getPostDetail({
                                id: l,
                                name: p
                            });

                          case 7:
                            g = r.sent, "link" !== (d = g.post).format ? (d.comments.forEach(function(e) {
                                e.formateTime = Object(o.formatTime)(new Date(1e3 * e.timestamp));
                            }), u.wxParse("article_content", "html", d.content, e), e.setData(i(i({}, g), {}, {
                                isLoading: !1
                            }))) : wx.redirectTo({
                                url: "/pages/webPages/webPages?src=" + d.format_content.link
                            });

                          case 10:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            },
            onFavArticle: function() {
                var e = this;
                return s(n.default.mark(function r() {
                    var t, s, i, o, l;
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return r.prev = 0, t = e.data, s = t.post, i = t.formId, o = s.is_faved ? "postUnfav" : "postFav", 
                            l = s.is_faved ? "已取消" : "已点赞", wx.vibrateShort(), s.is_faved = !s.is_faved, e.setData({
                                post: s
                            }), wx.showToast({
                                title: l
                            }), r.next = 9, a.default.hei[o]({
                                post_id: s.id,
                                form_id: i
                            });

                          case 9:
                            r.next = 14;
                            break;

                          case 11:
                            r.prev = 11, r.t0 = r.catch(0), console.log(r.t0);

                          case 14:
                          case "end":
                            return r.stop();
                        }
                    }, r, null, [ [ 0, 11 ] ]);
                }))();
            },
            wxParseTagATap: function(e) {
                var r = e.currentTarget.dataset, t = r.hrefType, a = r.src, n = r.appid, s = "";
                "weapp" !== t && "path" !== t || (s = a, Object(o.autoNavigate_)({
                    url: s
                })), "webview" !== t && "web_view" !== t && t || (s = "/pages/webPages/webPages?src=" + a, 
                Object(o.autoNavigate_)({
                    url: s
                })), "miniprogram" !== t && "mini_program" !== t || wx.navigateToMiniProgram({
                    appId: n,
                    path: a,
                    fail: function(e) {
                        console.log(e), wx.showModal({
                            title: "温馨提示",
                            content: e.errMsg || "",
                            showCancel: !1,
                            cancelText: "取消",
                            cancelColor: "#000000",
                            confirmText: "确定",
                            confirmColor: "#3CC51F"
                        });
                    }
                });
            },
            bindGetUserInfo: function(e) {
                var r = this;
                return s(n.default.mark(function t() {
                    var a, s;
                    return n.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return a = e.currentTarget.dataset.method, t.next = 3, Object(o.getUserProfile)();

                          case 3:
                            s = t.sent, r.setData({
                                current_user: s
                            }, r[a]);

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            onComment: function() {
                var e = this;
                return s(n.default.mark(function r() {
                    var t;
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            t = e.data.post, wx.navigateTo({
                                url: "/pages/articleDetail/comments?id=" + t.id
                            });

                          case 2:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            },
            onYzf: function() {
                var e = this;
                return s(n.default.mark(function r() {
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            e.data.post, wx.navigateTo({
                                url: "/pages/kf/kf"
                            });

                          case 2:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            },
            submit: function(e) {
                var r = this;
                return s(n.default.mark(function t() {
                    var s, i, o, l, c, u, p;
                    return n.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return s = e.detail.form, i = r.data, o = i.post, l = i.post.form.id, t.prev = 1, 
                            wx.showLoading(), t.next = 5, a.default.hei.submitFormData({
                                source_data: o.id,
                                data: s,
                                source_type: "post",
                                form_id: l
                            });

                          case 5:
                            c = t.sent, u = c.times, p = c.count, wx.hideLoading(), wx.showModal({
                                title: "温馨提示",
                                content: "提交成功",
                                showCancel: !1
                            }), r.setData({
                                "post.form.times": u,
                                "post.form.count": p
                            }), t.next = 14;
                            break;

                          case 11:
                            t.prev = 11, t.t0 = t.catch(1), wx.hideLoading(), wx.showModal({
                                title: "温馨提示",
                                content: t.t0.errMsg,
                                showCancel: !1
                            });

                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t, null, [ [ 1, 11 ] ]);
                }))();
            },
            showPoster: function() {
                var e = this.data.isShowPoster;
                this.setData({
                    isShowPoster: !e
                });
            },
            onPullDownRefresh: function() {
                var e = this;
                return s(n.default.mark(function r() {
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return e.setData({
                                isLoading: !0
                            }), r.next = 3, e.getArticleDetail();

                          case 3:
                            wx.stopPullDownRefresh();

                          case 4:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            },
            onShareAppMessage: function() {
                return l.onDefaultShareAppMessage.call(this, {}, "", {
                    key: "/pages/home/home"
                });
            },
            onShareTimeline: function() {
                return l.onDefaultShareAppTimeline.call(this);
            },
            goPage: function(e) {
                return s(n.default.mark(function r() {
                    var t;
                    return n.default.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            "link" === (t = e.currentTarget.dataset.item).format ? Object(o.autoNavigate_)({
                                url: "/pages/webPages/webPages?src=" + t.format_content.link
                            }) : wx.redirectTo({
                                url: "/pages/articleDetail/articleDetail?id=" + t.id
                            });

                          case 2:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                }))();
            }
        });
    },
    "./utils/wxParse/html2json.js": function(e, r, t) {
        var a = "", n = "", s = {}, i = t("./utils/wxParse/wxDiscode.js"), o = t("./utils/wxParse/htmlparser.js"), l = (p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
        p("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), c = p("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), u = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        function p(e) {
            for (var r = {}, t = e.split(","), a = 0; a < t.length; a++) r[t[a]] = !0;
            return r;
        }
        function g(e) {
            var r = [];
            if (0 == a.length || !s) return (c = {
                node: "text"
            }).text = e, [ c ];
            e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
            for (var t = new RegExp("[:]"), i = e.split(t), o = 0; o < i.length; o++) {
                var l = i[o], c = {};
                s[l] ? (c.node = "element", c.tag = "emoji", c.text = s[l], c.baseSrc = n) : (c.node = "text", 
                c.text = l), r.push(c);
            }
            return r;
        }
        p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
        p("wxxxcode-style,script,style,view,scroll-view,block"), e.exports = {
            html2json: function(e, r) {
                e = function(e) {
                    return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
                }(e = function(e) {
                    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
                }(e)), e = i.strDiscode(e);
                var t = [], a = {
                    node: r,
                    nodes: [],
                    images: [],
                    imageUrls: []
                }, n = 0;
                return o(e, {
                    start: function(e, s, o) {
                        var p, g = {
                            node: "element",
                            tag: e
                        };
                        if (0 === t.length ? (g.index = n.toString(), n += 1) : (void 0 === (p = t[0]).nodes && (p.nodes = []), 
                        g.index = p.index + "." + p.nodes.length), l[e] ? g.tagType = "block" : c[e] ? g.tagType = "inline" : u[e] && (g.tagType = "closeSelf"), 
                        0 !== s.length && (g.attr = s.reduce(function(e, r) {
                            var t = r.name, a = r.value;
                            return "class" == t && (g.classStr = a), "style" == t && (g.styleStr = a), a.match(/ /) && (a = a.split(" ")), 
                            e[t] ? Array.isArray(e[t]) ? e[t].push(a) : e[t] = [ e[t], a ] : e[t] = a, e;
                        }, {})), "img" === g.tag) {
                            g.imgIndex = a.images.length;
                            var d = g.attr && g.attr.src || "";
                            "" === d[0] && d.splice(0, 1), d = i.urlToHttpUrl(d, "https"), g.attr && (g.attr.src = d), 
                            g.from = r, a.images.push(g), a.imageUrls.push(d);
                        }
                        if ("font" === g.tag) {
                            var h = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], f = {
                                color: "color",
                                face: "font-family",
                                size: "font-size"
                            };
                            for (var m in g.attr.style || (g.attr.style = []), g.styleStr || (g.styleStr = ""), 
                            f) if (g.attr[m]) {
                                var b = "size" === m ? h[g.attr[m] - 1] : g.attr[m];
                                g.attr.style.push(f[m]), g.attr.style.push(b), g.styleStr += f[m] + ": " + b + ";";
                            }
                        }
                        "source" === g.tag && (a.source = g.attr.src), o ? (void 0 === (p = t[0] || a).nodes && (p.nodes = []), 
                        p.nodes.push(g)) : t.unshift(g);
                    },
                    end: function(e) {
                        var r = t.shift();
                        if (r.tag !== e && console.error("invalid state: mismatch end tag"), "video" === r.tag && a.source && (r.attr.src = a.source, 
                        delete a.source), 0 === t.length) a.nodes.push(r); else {
                            var n = t[0];
                            void 0 === n.nodes && (n.nodes = []), n.nodes.push(r);
                        }
                    },
                    chars: function(e) {
                        var r = {
                            node: "text",
                            text: e,
                            textArray: g(e)
                        };
                        if (0 === t.length) r.index = n.toString(), n += 1, a.nodes.push(r); else {
                            var s = t[0];
                            void 0 === s.nodes && (s.nodes = []), r.index = s.index + "." + s.nodes.length, 
                            s.nodes.push(r);
                        }
                    },
                    comment: function(e) {}
                }), a;
            },
            emojisInit: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", t = arguments.length > 2 ? arguments[2] : void 0;
                a = e, n = r, s = t;
            }
        };
    },
    "./utils/wxParse/htmlparser.js": function(e, r) {
        var t = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, a = /^<\/([-A-Za-z0-9_]+)[^>]*>/, n = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g, s = p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), i = p("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"), o = p("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), l = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"), c = p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), u = p("wxxxcode-style,script,style,view,scroll-view,block");
        function p(e) {
            for (var r = {}, t = e.split(","), a = 0; a < t.length; a++) r[t[a]] = !0;
            return r;
        }
        e.exports = function(e, r) {
            var p, g, d, h = [], f = e;
            for (h.last = function() {
                return this[this.length - 1];
            }; e; ) {
                if (g = !0, h.last() && u[h.last()]) e = e.replace(new RegExp("([\\s\\S]*?)</" + h.last() + "[^>]*>"), function(e, t) {
                    return t = t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2"), r.chars && r.chars(t), 
                    "";
                }), v("", h.last()); else if (0 == e.indexOf("\x3c!--") ? (p = e.indexOf("--\x3e")) >= 0 && (r.comment && r.comment(e.substring(4, p)), 
                e = e.substring(p + 3), g = !1) : 0 == e.indexOf("</") ? (d = e.match(a)) && (e = e.substring(d[0].length), 
                d[0].replace(a, v), g = !1) : 0 == e.indexOf("<") && ((d = e.match(t)) && (e = e.substring(d[0].length), 
                d[0].replace(t, b), g = !1)), g) {
                    p = e.indexOf("<");
                    for (var m = ""; 0 === p; ) m += "<", p = (e = e.substring(1)).indexOf("<");
                    m += p < 0 ? e : e.substring(0, p), e = p < 0 ? "" : e.substring(p), r.chars && r.chars(m);
                }
                if (e == f) throw "Parse Error: " + e;
                f = e;
            }
            function b(e, t, a, u) {
                if (t = t.toLowerCase(), i[t]) for (;h.last() && o[h.last()]; ) v("", h.last());
                if (l[t] && h.last() == t && v("", t), (u = s[t] || !!u) || h.push(t), r.start) {
                    var p = [];
                    a.replace(n, function(e, r) {
                        var t = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : c[r] ? r : "";
                        p.push({
                            name: r,
                            value: t,
                            escaped: t.replace(/(^|[^\\])"/g, '$1\\"')
                        });
                    }), r.start && r.start(t, p, u);
                }
            }
            function v(e, t) {
                if (t) for (t = t.toLowerCase(), a = h.length - 1; a >= 0 && h[a] != t; a--) ; else var a = 0;
                if (a >= 0) {
                    for (var n = h.length - 1; n >= a; n--) r.end && r.end(h[n]);
                    h.length = a;
                }
            }
            v();
        };
    },
    "./utils/wxParse/showdown.js": function(e, r) {
        function t(e) {
            var r = {
                omitExtraWLInCodeBlocks: {
                    defaultValue: !1,
                    describe: "Omit the default extra whiteline added to code blocks",
                    type: "boolean"
                },
                noHeaderId: {
                    defaultValue: !1,
                    describe: "Turn on/off generated header id",
                    type: "boolean"
                },
                prefixHeaderId: {
                    defaultValue: !1,
                    describe: "Specify a prefix to generated header ids",
                    type: "string"
                },
                headerLevelStart: {
                    defaultValue: !1,
                    describe: "The header blocks level start",
                    type: "integer"
                },
                parseImgDimensions: {
                    defaultValue: !1,
                    describe: "Turn on/off image dimension parsing",
                    type: "boolean"
                },
                simplifiedAutoLink: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM autolink style",
                    type: "boolean"
                },
                literalMidWordUnderscores: {
                    defaultValue: !1,
                    describe: "Parse midword underscores as literal underscores",
                    type: "boolean"
                },
                strikethrough: {
                    defaultValue: !1,
                    describe: "Turn on/off strikethrough support",
                    type: "boolean"
                },
                tables: {
                    defaultValue: !1,
                    describe: "Turn on/off tables support",
                    type: "boolean"
                },
                tablesHeaderId: {
                    defaultValue: !1,
                    describe: "Add an id to table headers",
                    type: "boolean"
                },
                ghCodeBlocks: {
                    defaultValue: !0,
                    describe: "Turn on/off GFM fenced code blocks support",
                    type: "boolean"
                },
                tasklists: {
                    defaultValue: !1,
                    describe: "Turn on/off GFM tasklist support",
                    type: "boolean"
                },
                smoothLivePreview: {
                    defaultValue: !1,
                    describe: "Prevents weird effects in live previews due to incomplete input",
                    type: "boolean"
                },
                smartIndentationFix: {
                    defaultValue: !1,
                    description: "Tries to smartly fix identation in es6 strings",
                    type: "boolean"
                }
            };
            if (!1 === e) return JSON.parse(JSON.stringify(r));
            var t = {};
            for (var a in r) r.hasOwnProperty(a) && (t[a] = r[a].defaultValue);
            return t;
        }
        var n = {}, s = {}, i = {}, o = t(!0), l = {
            github: {
                omitExtraWLInCodeBlocks: !0,
                prefixHeaderId: "user-content-",
                simplifiedAutoLink: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0
            },
            vanilla: t(!0)
        };
        function c(e, r) {
            var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension", s = {
                valid: !0,
                error: ""
            };
            n.helper.isArray(e) || (e = [ e ]);
            for (var i = 0; i < e.length; ++i) {
                var o = t + " sub-extension " + i + ": ", l = e[i];
                if ("object" != a(l)) return s.valid = !1, s.error = o + "must be an object, but " + a(l) + " given", 
                s;
                if (!n.helper.isString(l.type)) return s.valid = !1, s.error = o + 'property "type" must be a string, but ' + a(l.type) + " given", 
                s;
                var c = l.type = l.type.toLowerCase();
                if ("language" === c && (c = l.type = "lang"), "html" === c && (c = l.type = "output"), 
                "lang" !== c && "output" !== c && "listener" !== c) return s.valid = !1, s.error = o + "type " + c + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', 
                s;
                if ("listener" === c) {
                    if (n.helper.isUndefined(l.listeners)) return s.valid = !1, s.error = o + '. Extensions of type "listener" must have a property called "listeners"', 
                    s;
                } else if (n.helper.isUndefined(l.filter) && n.helper.isUndefined(l.regex)) return s.valid = !1, 
                s.error = o + c + ' extensions must define either a "regex" property or a "filter" method', 
                s;
                if (l.listeners) {
                    if ("object" != a(l.listeners)) return s.valid = !1, s.error = o + '"listeners" property must be an object but ' + a(l.listeners) + " given", 
                    s;
                    for (var u in l.listeners) if (l.listeners.hasOwnProperty(u) && "function" != typeof l.listeners[u]) return s.valid = !1, 
                    s.error = o + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + u + " must be a function but " + a(l.listeners[u]) + " given", 
                    s;
                }
                if (l.filter) {
                    if ("function" != typeof l.filter) return s.valid = !1, s.error = o + '"filter" must be a function, but ' + a(l.filter) + " given", 
                    s;
                } else if (l.regex) {
                    if (n.helper.isString(l.regex) && (l.regex = new RegExp(l.regex, "g")), !(l.regex instanceof RegExp)) return s.valid = !1, 
                    s.error = o + '"regex" property must either be a string or a RegExp object, but ' + a(l.regex) + " given", 
                    s;
                    if (n.helper.isUndefined(l.replace)) return s.valid = !1, s.error = o + '"regex" extensions must implement a replace string or function', 
                    s;
                }
            }
            return s;
        }
        function u(e, r) {
            return "~E" + r.charCodeAt(0) + "E";
        }
        n.helper = {}, n.extensions = {}, n.setOption = function(e, r) {
            return o[e] = r, this;
        }, n.getOption = function(e) {
            return o[e];
        }, n.getOptions = function() {
            return o;
        }, n.resetOptions = function() {
            o = t(!0);
        }, n.setFlavor = function(e) {
            if (l.hasOwnProperty(e)) {
                var r = l[e];
                for (var t in r) r.hasOwnProperty(t) && (o[t] = r[t]);
            }
        }, n.getDefaultOptions = function(e) {
            return t(e);
        }, n.subParser = function(e, r) {
            if (n.helper.isString(e)) {
                if (void 0 === r) {
                    if (s.hasOwnProperty(e)) return s[e];
                    throw Error("SubParser named " + e + " not registered!");
                }
                s[e] = r;
            }
        }, n.extension = function(e, r) {
            if (!n.helper.isString(e)) throw Error("Extension 'name' must be a string");
            if (e = n.helper.stdExtName(e), n.helper.isUndefined(r)) {
                if (!i.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
                return i[e];
            }
            "function" == typeof r && (r = r()), n.helper.isArray(r) || (r = [ r ]);
            var t = c(r, e);
            if (!t.valid) throw Error(t.error);
            i[e] = r;
        }, n.getAllExtensions = function() {
            return i;
        }, n.removeExtension = function(e) {
            delete i[e];
        }, n.resetExtensions = function() {
            i = {};
        }, n.validateExtension = function(e) {
            var r = c(e, null);
            return !!r.valid || (console.warn(r.error), !1);
        }, n.hasOwnProperty("helper") || (n.helper = {}), n.helper.isString = function(e) {
            return "string" == typeof e || e instanceof String;
        }, n.helper.isFunction = function(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }, n.helper.forEach = function(e, r) {
            if ("function" == typeof e.forEach) e.forEach(r); else for (var t = 0; t < e.length; t++) r(e[t], t, e);
        }, n.helper.isArray = function(e) {
            return e.constructor === Array;
        }, n.helper.isUndefined = function(e) {
            return void 0 === e;
        }, n.helper.stdExtName = function(e) {
            return e.replace(/[_-]||\s/g, "").toLowerCase();
        }, n.helper.escapeCharactersCallback = u, n.helper.escapeCharacters = function(e, r, t) {
            var a = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])";
            t && (a = "\\\\" + a);
            var n = new RegExp(a, "g");
            return e.replace(n, u);
        };
        var p = function(e, r, t, a) {
            var n, s, i, o, l, c = a || "", u = c.indexOf("g") > -1, p = new RegExp(r + "|" + t, "g" + c.replace(/g/g, "")), g = new RegExp(r, c.replace(/g/g, "")), d = [];
            do {
                for (n = 0; i = p.exec(e); ) if (g.test(i[0])) n++ || (o = (s = p.lastIndex) - i[0].length); else if (n && !--n) {
                    l = i.index + i[0].length;
                    var h = {
                        left: {
                            start: o,
                            end: s
                        },
                        match: {
                            start: s,
                            end: i.index
                        },
                        right: {
                            start: i.index,
                            end: l
                        },
                        wholeMatch: {
                            start: o,
                            end: l
                        }
                    };
                    if (d.push(h), !u) return d;
                }
            } while (n && (p.lastIndex = s));
            return d;
        };
        n.helper.matchRecursiveRegExp = function(e, r, t, a) {
            for (var n = p(e, r, t, a), s = [], i = 0; i < n.length; ++i) s.push([ e.slice(n[i].wholeMatch.start, n[i].wholeMatch.end), e.slice(n[i].match.start, n[i].match.end), e.slice(n[i].left.start, n[i].left.end), e.slice(n[i].right.start, n[i].right.end) ]);
            return s;
        }, n.helper.replaceRecursiveRegExp = function(e, r, t, a, s) {
            if (!n.helper.isFunction(r)) {
                var i = r;
                r = function() {
                    return i;
                };
            }
            var o = p(e, t, a, s), l = e, c = o.length;
            if (c > 0) {
                var u = [];
                0 !== o[0].wholeMatch.start && u.push(e.slice(0, o[0].wholeMatch.start));
                for (var g = 0; g < c; ++g) u.push(r(e.slice(o[g].wholeMatch.start, o[g].wholeMatch.end), e.slice(o[g].match.start, o[g].match.end), e.slice(o[g].left.start, o[g].left.end), e.slice(o[g].right.start, o[g].right.end))), 
                g < c - 1 && u.push(e.slice(o[g].wholeMatch.end, o[g + 1].wholeMatch.start));
                o[c - 1].wholeMatch.end < e.length && u.push(e.slice(o[c - 1].wholeMatch.end)), 
                l = u.join("");
            }
            return l;
        }, n.helper.isUndefined(console) && (console = {
            warn: function(e) {
                alert(e);
            },
            log: function(e) {
                alert(e);
            },
            error: function(e) {
                throw e;
            }
        }), n.Converter = function(e) {
            var r = {}, t = [], s = [], u = {};
            function p(e, r) {
                if (r = r || null, n.helper.isString(e)) {
                    if (r = e = n.helper.stdExtName(e), n.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), 
                    void function(e, r) {
                        "function" == typeof e && (e = e(new n.Converter())), n.helper.isArray(e) || (e = [ e ]);
                        var a = c(e, r);
                        if (!a.valid) throw Error(a.error);
                        for (var i = 0; i < e.length; ++i) switch (e[i].type) {
                          case "lang":
                            t.push(e[i]);
                            break;

                          case "output":
                            s.push(e[i]);
                            break;

                          default:
                            throw Error("Extension loader error: Type unrecognized!!!");
                        }
                    }(n.extensions[e], e);
                    if (n.helper.isUndefined(i[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                    e = i[e];
                }
                "function" == typeof e && (e = e()), n.helper.isArray(e) || (e = [ e ]);
                var a = c(e, r);
                if (!a.valid) throw Error(a.error);
                for (var o = 0; o < e.length; ++o) {
                    switch (e[o].type) {
                      case "lang":
                        t.push(e[o]);
                        break;

                      case "output":
                        s.push(e[o]);
                    }
                    if (e[o].hasOwnProperty(u)) for (var l in e[o].listeners) e[o].listeners.hasOwnProperty(l) && g(l, e[o].listeners[l]);
                }
            }
            function g(e, r) {
                if (!n.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + a(e) + " given");
                if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + a(r) + " given");
                u.hasOwnProperty(e) || (u[e] = []), u[e].push(r);
            }
            !function() {
                for (var t in e = e || {}, o) o.hasOwnProperty(t) && (r[t] = o[t]);
                if ("object" != a(e)) throw Error("Converter expects the passed parameter to be an object, but " + a(e) + " was passed instead.");
                for (var s in e) e.hasOwnProperty(s) && (r[s] = e[s]);
                r.extensions && n.helper.forEach(r.extensions, p);
            }(), this._dispatch = function(e, r, t, a) {
                if (u.hasOwnProperty(e)) for (var n = 0; n < u[e].length; ++n) {
                    var s = u[e][n](e, r, this, t, a);
                    s && void 0 !== s && (r = s);
                }
                return r;
            }, this.listen = function(e, r) {
                return g(e, r), this;
            }, this.makeHtml = function(e) {
                if (!e) return e;
                var a = {
                    gHtmlBlocks: [],
                    gHtmlMdBlocks: [],
                    gHtmlSpans: [],
                    gUrls: {},
                    gTitles: {},
                    gDimensions: {},
                    gListLevel: 0,
                    hashLinkCounts: {},
                    langExtensions: t,
                    outputModifiers: s,
                    converter: this,
                    ghCodeBlocks: []
                };
                return e = (e = (e = (e = e.replace(/~/g, "~T")).replace(/\$/g, "~D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n"), 
                r.smartIndentationFix && (e = function(e) {
                    var r = e.match(/^\s*/)[0].length, t = new RegExp("^\\s{0," + r + "}", "gm");
                    return e.replace(t, "");
                }(e)), e = e, e = n.subParser("detab")(e, r, a), e = n.subParser("stripBlankLines")(e, r, a), 
                n.helper.forEach(t, function(t) {
                    e = n.subParser("runExtension")(t, e, r, a);
                }), e = n.subParser("hashPreCodeTags")(e, r, a), e = n.subParser("githubCodeBlocks")(e, r, a), 
                e = n.subParser("hashHTMLBlocks")(e, r, a), e = n.subParser("hashHTMLSpans")(e, r, a), 
                e = n.subParser("stripLinkDefinitions")(e, r, a), e = n.subParser("blockGamut")(e, r, a), 
                e = n.subParser("unhashHTMLSpans")(e, r, a), e = (e = (e = n.subParser("unescapeSpecialChars")(e, r, a)).replace(/~D/g, "$$")).replace(/~T/g, "~"), 
                n.helper.forEach(s, function(t) {
                    e = n.subParser("runExtension")(t, e, r, a);
                }), e;
            }, this.setOption = function(e, t) {
                r[e] = t;
            }, this.getOption = function(e) {
                return r[e];
            }, this.getOptions = function() {
                return r;
            }, this.addExtension = function(e, r) {
                p(e, r = r || null);
            }, this.useExtension = function(e) {
                p(e);
            }, this.setFlavor = function(e) {
                if (l.hasOwnProperty(e)) {
                    var t = l[e];
                    for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
                }
            }, this.removeExtension = function(e) {
                n.helper.isArray(e) || (e = [ e ]);
                for (var r = 0; r < e.length; ++r) {
                    for (var a = e[r], i = 0; i < t.length; ++i) t[i] === a && t[i].splice(i, 1);
                    for (;0 < s.length; ++i) s[0] === a && s[0].splice(i, 1);
                }
            }, this.getAllExtensions = function() {
                return {
                    language: t,
                    output: s
                };
            };
        }, n.subParser("anchors", function(e, r, t) {
            var a = function(e, r, a, s, i, o, l, c) {
                n.helper.isUndefined(c) && (c = ""), e = r;
                var u = a, p = s.toLowerCase(), g = i, d = c;
                if (!g) if (p || (p = u.toLowerCase().replace(/ ?\n/g, " ")), g = "#" + p, n.helper.isUndefined(t.gUrls[p])) {
                    if (!(e.search(/\(\s*\)$/m) > -1)) return e;
                    g = "";
                } else g = t.gUrls[p], n.helper.isUndefined(t.gTitles[p]) || (d = t.gTitles[p]);
                var h = '<a href="' + (g = n.helper.escapeCharacters(g, "*_", !1)) + '"';
                return "" !== d && null !== d && (d = d.replace(/"/g, "&quot;"), h += ' title="' + (d = n.helper.escapeCharacters(d, "*_", !1)) + '"'), 
                h += ">" + u + "</a>";
            };
            return e = (e = (e = (e = t.converter._dispatch("anchors.before", e, r, t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g, a)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, a)).replace(/(\[([^\[\]]+)])()()()()()/g, a), 
            t.converter._dispatch("anchors.after", e, r, t);
        }), n.subParser("autoLinks", function(e, r, t) {
            function a(e, r) {
                var t = r;
                return /^www\./i.test(r) && (r = r.replace(/^www\./i, "http://www.")), '<a href="' + r + '">' + t + "</a>";
            }
            function s(e, r) {
                var t = n.subParser("unescapeSpecialChars")(r);
                return n.subParser("encodeEmailAddress")(t);
            }
            return e = (e = (e = t.converter._dispatch("autoLinks.before", e, r, t)).replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi, a)).replace(/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, s), 
            r.simplifiedAutoLink && (e = (e = e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi, a)).replace(/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi, s)), 
            t.converter._dispatch("autoLinks.after", e, r, t);
        }), n.subParser("blockGamut", function(e, r, t) {
            e = t.converter._dispatch("blockGamut.before", e, r, t), e = n.subParser("blockQuotes")(e, r, t), 
            e = n.subParser("headers")(e, r, t);
            var a = n.subParser("hashBlock")("<hr />", r, t);
            return e = (e = (e = e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, a)).replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, a)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, a), 
            e = n.subParser("lists")(e, r, t), e = n.subParser("codeBlocks")(e, r, t), e = n.subParser("tables")(e, r, t), 
            e = n.subParser("hashHTMLBlocks")(e, r, t), e = n.subParser("paragraphs")(e, r, t), 
            t.converter._dispatch("blockGamut.after", e, r, t);
        }), n.subParser("blockQuotes", function(e, r, t) {
            return e = (e = t.converter._dispatch("blockQuotes.before", e, r, t)).replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(e, a) {
                var s = a;
                return s = (s = (s = s.replace(/^[ \t]*>[ \t]?/gm, "~0")).replace(/~0/g, "")).replace(/^[ \t]+$/gm, ""), 
                s = n.subParser("githubCodeBlocks")(s, r, t), s = (s = (s = n.subParser("blockGamut")(s, r, t)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
                    var t = r;
                    return t = (t = t.replace(/^ {2}/gm, "~0")).replace(/~0/g, "");
                }), n.subParser("hashBlock")("<blockquote>\n" + s + "\n</blockquote>", r, t);
            }), t.converter._dispatch("blockQuotes.after", e, r, t);
        }), n.subParser("codeBlocks", function(e, r, t) {
            return e = t.converter._dispatch("codeBlocks.before", e, r, t), e = (e = (e += "~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(e, a, s) {
                var i = a, o = s, l = "\n";
                return i = n.subParser("outdent")(i), i = n.subParser("encodeCode")(i), i = (i = (i = n.subParser("detab")(i)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), 
                r.omitExtraWLInCodeBlocks && (l = ""), i = "<pre><code>" + i + l + "</code></pre>", 
                n.subParser("hashBlock")(i, r, t) + o;
            })).replace(/~0/, ""), t.converter._dispatch("codeBlocks.after", e, r, t);
        }), n.subParser("codeSpans", function(e, r, t) {
            return void 0 === (e = t.converter._dispatch("codeSpans.before", e, r, t)) && (e = ""), 
            e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, t, a) {
                var s = a;
                return s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), r + "<code>" + (s = n.subParser("encodeCode")(s)) + "</code>";
            }), t.converter._dispatch("codeSpans.after", e, r, t);
        }), n.subParser("detab", function(e) {
            return (e = (e = (e = (e = e.replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "~A~B")).replace(/~B(.+?)~A/g, function(e, r) {
                for (var t = r, a = 4 - t.length % 4, n = 0; n < a; n++) t += " ";
                return t;
            })).replace(/~A/g, "    ")).replace(/~B/g, "");
        }), n.subParser("encodeAmpsAndAngles", function(e) {
            return (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?\$!])/gi, "&lt;");
        }), n.subParser("encodeBackslashEscapes", function(e) {
            return (e = e.replace(/\\(\\)/g, n.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+-.!])/g, n.helper.escapeCharactersCallback);
        }), n.subParser("encodeCode", function(e) {
            return e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), 
            n.helper.escapeCharacters(e, "*_{}[]\\", !1);
        }), n.subParser("encodeEmailAddress", function(e) {
            var r = [ function(e) {
                return "&#" + e.charCodeAt(0) + ";";
            }, function(e) {
                return "&#x" + e.charCodeAt(0).toString(16) + ";";
            }, function(e) {
                return e;
            } ];
            return (e = '<a href="' + (e = (e = "mailto:" + e).replace(/./g, function(e) {
                if ("@" === e) e = r[Math.floor(2 * Math.random())](e); else if (":" !== e) {
                    var t = Math.random();
                    e = t > .9 ? r[2](e) : t > .45 ? r[1](e) : r[0](e);
                }
                return e;
            })) + '">' + e + "</a>").replace(/">.+:/g, '">');
        }), n.subParser("escapeSpecialCharsWithinTagAttributes", function(e) {
            return e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi, function(e) {
                var r = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
                return r = n.helper.escapeCharacters(r, "\\`*_", !1);
            });
        }), n.subParser("githubCodeBlocks", function(e, r, t) {
            return r.ghCodeBlocks ? (e = t.converter._dispatch("githubCodeBlocks.before", e, r, t), 
            e = (e = (e += "~0").replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(e, a, s) {
                var i = r.omitExtraWLInCodeBlocks ? "" : "\n";
                return s = n.subParser("encodeCode")(s), s = "<pre><code" + (a ? ' class="' + a + " language-" + a + '"' : "") + ">" + (s = (s = (s = n.subParser("detab")(s)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + i + "</code></pre>", 
                s = n.subParser("hashBlock")(s, r, t), "\n\n~G" + (t.ghCodeBlocks.push({
                    text: e,
                    codeblock: s
                }) - 1) + "G\n\n";
            })).replace(/~0/, ""), t.converter._dispatch("githubCodeBlocks.after", e, r, t)) : e;
        }), n.subParser("hashBlock", function(e, r, t) {
            return e = e.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n";
        }), n.subParser("hashElement", function(e, r, t) {
            return function(e, r) {
                var a = r;
                return a = (a = (a = a.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), 
                a = "\n\n~K" + (t.gHtmlBlocks.push(a) - 1) + "K\n\n";
            };
        }), n.subParser("hashHTMLBlocks", function(e, r, t) {
            for (var a = [ "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p" ], s = function(e, r, a, n) {
                var s = e;
                return -1 !== a.search(/\bmarkdown\b/) && (s = a + t.converter.makeHtml(r) + n), 
                "\n\n~K" + (t.gHtmlBlocks.push(s) - 1) + "K\n\n";
            }, i = 0; i < a.length; ++i) e = n.helper.replaceRecursiveRegExp(e, s, "^(?: |\\t){0,3}<" + a[i] + "\\b[^>]*>", "</" + a[i] + ">", "gim");
            return (e = (e = e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, n.subParser("hashElement")(e, r, t))).replace(/(<!--[\s\S]*?-->)/g, n.subParser("hashElement")(e, r, t))).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, n.subParser("hashElement")(e, r, t));
        }), n.subParser("hashHTMLSpans", function(e, r, t) {
            for (var a = n.helper.matchRecursiveRegExp(e, "<code\\b[^>]*>", "</code>", "gi"), s = 0; s < a.length; ++s) e = e.replace(a[s][0], "~L" + (t.gHtmlSpans.push(a[s][0]) - 1) + "L");
            return e;
        }), n.subParser("unhashHTMLSpans", function(e, r, t) {
            for (var a = 0; a < t.gHtmlSpans.length; ++a) e = e.replace("~L" + a + "L", t.gHtmlSpans[a]);
            return e;
        }), n.subParser("hashPreCodeTags", function(e, r, t) {
            return n.helper.replaceRecursiveRegExp(e, function(e, r, a, s) {
                var i = a + n.subParser("encodeCode")(r) + s;
                return "\n\n~G" + (t.ghCodeBlocks.push({
                    text: e,
                    codeblock: i
                }) - 1) + "G\n\n";
            }, "^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^(?: |\\t){0,3}</code>\\s*</pre>", "gim");
        }), n.subParser("headers", function(e, r, t) {
            e = t.converter._dispatch("headers.before", e, r, t);
            var a = r.prefixHeaderId, s = isNaN(parseInt(r.headerLevelStart)) ? 1 : parseInt(r.headerLevelStart), i = r.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, o = r.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
            function l(e) {
                var r, s = e.replace(/[^\w]/g, "").toLowerCase();
                return t.hashLinkCounts[s] ? r = s + "-" + t.hashLinkCounts[s]++ : (r = s, t.hashLinkCounts[s] = 1), 
                !0 === a && (a = "section"), n.helper.isString(a) ? a + r : r;
            }
            return e = (e = (e = e.replace(i, function(e, a) {
                var i = n.subParser("spanGamut")(a, r, t), o = r.noHeaderId ? "" : ' id="' + l(a) + '"', c = "<h" + s + o + ">" + i + "</h" + s + ">";
                return n.subParser("hashBlock")(c, r, t);
            })).replace(o, function(e, a) {
                var i = n.subParser("spanGamut")(a, r, t), o = r.noHeaderId ? "" : ' id="' + l(a) + '"', c = s + 1, u = "<h" + c + o + ">" + i + "</h" + c + ">";
                return n.subParser("hashBlock")(u, r, t);
            })).replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm, function(e, a, i) {
                var o = n.subParser("spanGamut")(i, r, t), c = r.noHeaderId ? "" : ' id="' + l(i) + '"', u = s - 1 + a.length, p = "<h" + u + c + ">" + o + "</h" + u + ">";
                return n.subParser("hashBlock")(p, r, t);
            }), t.converter._dispatch("headers.after", e, r, t);
        }), n.subParser("images", function(e, r, t) {
            function a(e, r, a, s, i, o, l, c) {
                var u = t.gUrls, p = t.gTitles, g = t.gDimensions;
                if (a = a.toLowerCase(), c || (c = ""), "" === s || null === s) {
                    if ("" !== a && null !== a || (a = r.toLowerCase().replace(/ ?\n/g, " ")), s = "#" + a, 
                    n.helper.isUndefined(u[a])) return e;
                    s = u[a], n.helper.isUndefined(p[a]) || (c = p[a]), n.helper.isUndefined(g[a]) || (i = g[a].width, 
                    o = g[a].height);
                }
                r = r.replace(/"/g, "&quot;"), r = n.helper.escapeCharacters(r, "*_", !1);
                var d = '<img src="' + (s = n.helper.escapeCharacters(s, "*_", !1)) + '" alt="' + r + '"';
                return c && (c = c.replace(/"/g, "&quot;"), d += ' title="' + (c = n.helper.escapeCharacters(c, "*_", !1)) + '"'), 
                i && o && (d += ' width="' + (i = "*" === i ? "auto" : i) + '"', d += ' height="' + (o = "*" === o ? "auto" : o) + '"'), 
                d += " />";
            }
            return e = (e = (e = t.converter._dispatch("images.before", e, r, t)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g, a)).replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g, a), 
            t.converter._dispatch("images.after", e, r, t);
        }), n.subParser("italicsAndBold", function(e, r, t) {
            return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = (e = e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm, "$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm, "$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g, "<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>") : (e = e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), 
            t.converter._dispatch("italicsAndBold.after", e, r, t);
        }), n.subParser("lists", function(e, r, t) {
            function a(e, a) {
                t.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
                var s = /\n[ \t]*\n(?!~0)/.test(e += "~0");
                return e = (e = e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(e, a, i, o, l, c, u) {
                    u = u && "" !== u.trim();
                    var p = n.subParser("outdent")(l, r, t), g = "";
                    return c && r.tasklists && (g = ' class="task-list-item" style="list-style-type: none;"', 
                    p = p.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                        var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                        return u && (e += " checked"), e += ">";
                    })), a || p.search(/\n{2,}/) > -1 ? (p = n.subParser("githubCodeBlocks")(p, r, t), 
                    p = n.subParser("blockGamut")(p, r, t)) : (p = (p = n.subParser("lists")(p, r, t)).replace(/\n$/, ""), 
                    p = s ? n.subParser("paragraphs")(p, r, t) : n.subParser("spanGamut")(p, r, t)), 
                    p = "\n<li" + g + ">" + p + "</li>\n";
                })).replace(/~0/g, ""), t.gListLevel--, a && (e = e.replace(/\s+$/, "")), e;
            }
            function s(e, r, t) {
                var n = "ul" === r ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, s = [], i = "";
                if (-1 !== e.search(n)) {
                    !function e(s) {
                        var o = s.search(n);
                        -1 !== o ? (i += "\n\n<" + r + ">" + a(s.slice(0, o), !!t) + "</" + r + ">\n\n", 
                        n = "ul" == (r = "ul" === r ? "ol" : "ul") ? /^ {0,2}\d+\.[ \t]/gm : /^ {0,2}[*+-][ \t]/gm, 
                        e(s.slice(o))) : i += "\n\n<" + r + ">" + a(s, !!t) + "</" + r + ">\n\n";
                    }(e);
                    for (var o = 0; o < s.length; ++o) ;
                } else i = "\n\n<" + r + ">" + a(e, !!t) + "</" + r + ">\n\n";
                return i;
            }
            e = t.converter._dispatch("lists.before", e, r, t), e += "~0";
            var i = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
            return t.gListLevel ? e = e.replace(i, function(e, r, t) {
                return s(r, t.search(/[*+-]/g) > -1 ? "ul" : "ol", !0);
            }) : (i = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, 
            e = e.replace(i, function(e, r, t, a) {
                return s(t, a.search(/[*+-]/g) > -1 ? "ul" : "ol");
            })), e = e.replace(/~0/, ""), t.converter._dispatch("lists.after", e, r, t);
        }), n.subParser("outdent", function(e) {
            return (e = e.replace(/^(\t|[ ]{1,4})/gm, "~0")).replace(/~0/g, "");
        }), n.subParser("paragraphs", function(e, r, t) {
            for (var a = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), s = [], i = a.length, o = 0; o < i; o++) {
                var l = a[o];
                l.search(/~(K|G)(\d+)\1/g) >= 0 || (l = (l = n.subParser("spanGamut")(l, r, t)).replace(/^([ \t]*)/g, "<p>"), 
                l += "</p>"), s.push(l);
            }
            for (i = s.length, o = 0; o < i; o++) {
                for (var c = "", u = s[o], p = !1; u.search(/~(K|G)(\d+)\1/) >= 0; ) {
                    var g = RegExp.$1, d = RegExp.$2;
                    c = (c = "K" === g ? t.gHtmlBlocks[d] : p ? n.subParser("encodeCode")(t.ghCodeBlocks[d].text) : t.ghCodeBlocks[d].codeblock).replace(/\$/g, "$$$$"), 
                    u = u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (p = !0);
                }
                s[o] = u;
            }
            return e = (e = (e = s.join("\n\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), 
            t.converter._dispatch("paragraphs.after", e, r, t);
        }), n.subParser("runExtension", function(e, r, t, a) {
            if (e.filter) r = e.filter(r, a.converter, t); else if (e.regex) {
                var n = e.regex;
                n instanceof RegExp || (n = new RegExp(n, "g")), r = r.replace(n, e.replace);
            }
            return r;
        }), n.subParser("spanGamut", function(e, r, t) {
            return e = t.converter._dispatch("spanGamut.before", e, r, t), e = n.subParser("codeSpans")(e, r, t), 
            e = n.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = n.subParser("encodeBackslashEscapes")(e, r, t), 
            e = n.subParser("images")(e, r, t), e = n.subParser("anchors")(e, r, t), e = n.subParser("autoLinks")(e, r, t), 
            e = n.subParser("encodeAmpsAndAngles")(e, r, t), e = n.subParser("italicsAndBold")(e, r, t), 
            e = (e = n.subParser("strikethrough")(e, r, t)).replace(/  +\n/g, " <br />\n"), 
            t.converter._dispatch("spanGamut.after", e, r, t);
        }), n.subParser("strikethrough", function(e, r, t) {
            return r.strikethrough && (e = (e = t.converter._dispatch("strikethrough.before", e, r, t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g, "<del>$1</del>"), 
            e = t.converter._dispatch("strikethrough.after", e, r, t)), e;
        }), n.subParser("stripBlankLines", function(e) {
            return e.replace(/^[ \t]+$/gm, "");
        }), n.subParser("stripLinkDefinitions", function(e, r, t) {
            return (e = (e += "~0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm, function(e, a, s, i, o, l, c) {
                return a = a.toLowerCase(), t.gUrls[a] = n.subParser("encodeAmpsAndAngles")(s), 
                l ? l + c : (c && (t.gTitles[a] = c.replace(/"|'/g, "&quot;")), r.parseImgDimensions && i && o && (t.gDimensions[a] = {
                    width: i,
                    height: o
                }), "");
            })).replace(/~0/, "");
        }), n.subParser("tables", function(e, r, t) {
            if (!r.tables) return e;
            function a(e, a) {
                var s = "";
                return e = e.trim(), r.tableHeaderId && (s = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), 
                "<th" + s + a + ">" + (e = n.subParser("spanGamut")(e, r, t)) + "</th>\n";
            }
            return e = (e = t.converter._dispatch("tables.before", e, r, t)).replace(/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm, function(e) {
                var s, i = e.split("\n");
                for (s = 0; s < i.length; ++s) /^[ \t]{0,3}\|/.test(i[s]) && (i[s] = i[s].replace(/^[ \t]{0,3}\|/, "")), 
                /\|[ \t]*$/.test(i[s]) && (i[s] = i[s].replace(/\|[ \t]*$/, ""));
                var o, l, c = i[0].split("|").map(function(e) {
                    return e.trim();
                }), u = i[1].split("|").map(function(e) {
                    return e.trim();
                }), p = [], g = [], d = [], h = [];
                for (i.shift(), i.shift(), s = 0; s < i.length; ++s) "" !== i[s].trim() && p.push(i[s].split("|").map(function(e) {
                    return e.trim();
                }));
                if (c.length < u.length) return e;
                for (s = 0; s < u.length; ++s) d.push((o = u[s], /^:[ \t]*--*$/.test(o) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(o) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(o) ? ' style="text-align:center;"' : ""));
                for (s = 0; s < c.length; ++s) n.helper.isUndefined(d[s]) && (d[s] = ""), g.push(a(c[s], d[s]));
                for (s = 0; s < p.length; ++s) {
                    for (var f = [], m = 0; m < g.length; ++m) n.helper.isUndefined(p[s][m]), f.push((l = p[s][m], 
                    "<td" + d[m] + ">" + n.subParser("spanGamut")(l, r, t) + "</td>\n"));
                    h.push(f);
                }
                return function(e, r) {
                    for (var t = "<table>\n<thead>\n<tr>\n", a = e.length, n = 0; n < a; ++n) t += e[n];
                    for (t += "</tr>\n</thead>\n<tbody>\n", n = 0; n < r.length; ++n) {
                        t += "<tr>\n";
                        for (var s = 0; s < a; ++s) t += r[n][s];
                        t += "</tr>\n";
                    }
                    return t += "</tbody>\n</table>\n";
                }(g, h);
            }), t.converter._dispatch("tables.after", e, r, t);
        }), n.subParser("unescapeSpecialChars", function(e) {
            return e.replace(/~E(\d+)E/g, function(e, r) {
                var t = parseInt(r);
                return String.fromCharCode(t);
            });
        }), e.exports = n;
    },
    "./utils/wxParse/wxDiscode.js": function(e, r) {
        e.exports = {
            strDiscode: function(e) {
                return function(e) {
                    return (e = (e = e.replace(/\r\n/g, "")).replace(/\n/g, "")).replace(/code/g, "wxxxcode-style");
                }(e = function(e) {
                    return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&OElig;/g, "Œ")).replace(/&oelig;/g, "œ")).replace(/&Scaron;/g, "Š")).replace(/&scaron;/g, "š")).replace(/&Yuml;/g, "Ÿ")).replace(/&fnof;/g, "ƒ")).replace(/&circ;/g, "ˆ")).replace(/&tilde;/g, "˜")).replace(/&ensp;/g, "")).replace(/&emsp;/g, "")).replace(/&thinsp;/g, "")).replace(/&zwnj;/g, "")).replace(/&zwj;/g, "")).replace(/&lrm;/g, "")).replace(/&rlm;/g, "")).replace(/&ndash;/g, "–")).replace(/&mdash;/g, "—")).replace(/&lsquo;/g, "‘")).replace(/&rsquo;/g, "’")).replace(/&sbquo;/g, "‚")).replace(/&ldquo;/g, "“")).replace(/&rdquo;/g, "”")).replace(/&bdquo;/g, "„")).replace(/&dagger;/g, "†")).replace(/&Dagger;/g, "‡")).replace(/&bull;/g, "•")).replace(/&hellip;/g, "…")).replace(/&permil;/g, "‰")).replace(/&prime;/g, "′")).replace(/&Prime;/g, "″")).replace(/&lsaquo;/g, "‹")).replace(/&rsaquo;/g, "›")).replace(/&oline;/g, "‾")).replace(/&euro;/g, "€")).replace(/&trade;/g, "™")).replace(/&larr;/g, "←")).replace(/&uarr;/g, "↑")).replace(/&rarr;/g, "→")).replace(/&darr;/g, "↓")).replace(/&harr;/g, "↔")).replace(/&crarr;/g, "↵")).replace(/&lceil;/g, "⌈")).replace(/&rceil;/g, "⌉")).replace(/&lfloor;/g, "⌊")).replace(/&rfloor;/g, "⌋")).replace(/&loz;/g, "◊")).replace(/&spades;/g, "♠")).replace(/&clubs;/g, "♣")).replace(/&hearts;/g, "♥")).replace(/&diams;/g, "♦")).replace(/&#39;/g, "'");
                }(e = function(e) {
                    return (e = (e = (e = (e = (e = e.replace(/&nbsp;/g, " ")).replace(/&quot;/g, "'")).replace(/&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&#8226;/g, "•");
                }(e = function(e) {
                    return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&Alpha;/g, "Α")).replace(/&Beta;/g, "Β")).replace(/&Gamma;/g, "Γ")).replace(/&Delta;/g, "Δ")).replace(/&Epsilon;/g, "Ε")).replace(/&Zeta;/g, "Ζ")).replace(/&Eta;/g, "Η")).replace(/&Theta;/g, "Θ")).replace(/&Iota;/g, "Ι")).replace(/&Kappa;/g, "Κ")).replace(/&Lambda;/g, "Λ")).replace(/&Mu;/g, "Μ")).replace(/&Nu;/g, "Ν")).replace(/&Xi;/g, "Ν")).replace(/&Omicron;/g, "Ο")).replace(/&Pi;/g, "Π")).replace(/&Rho;/g, "Ρ")).replace(/&Sigma;/g, "Σ")).replace(/&Tau;/g, "Τ")).replace(/&Upsilon;/g, "Υ")).replace(/&Phi;/g, "Φ")).replace(/&Chi;/g, "Χ")).replace(/&Psi;/g, "Ψ")).replace(/&Omega;/g, "Ω")).replace(/&alpha;/g, "α")).replace(/&beta;/g, "β")).replace(/&gamma;/g, "γ")).replace(/&delta;/g, "δ")).replace(/&epsilon;/g, "ε")).replace(/&zeta;/g, "ζ")).replace(/&eta;/g, "η")).replace(/&theta;/g, "θ")).replace(/&iota;/g, "ι")).replace(/&kappa;/g, "κ")).replace(/&lambda;/g, "λ")).replace(/&mu;/g, "μ")).replace(/&nu;/g, "ν")).replace(/&xi;/g, "ξ")).replace(/&omicron;/g, "ο")).replace(/&pi;/g, "π")).replace(/&rho;/g, "ρ")).replace(/&sigmaf;/g, "ς")).replace(/&sigma;/g, "σ")).replace(/&tau;/g, "τ")).replace(/&upsilon;/g, "υ")).replace(/&phi;/g, "φ")).replace(/&chi;/g, "χ")).replace(/&psi;/g, "ψ")).replace(/&omega;/g, "ω")).replace(/&thetasym;/g, "ϑ")).replace(/&upsih;/g, "ϒ")).replace(/&piv;/g, "ϖ")).replace(/&middot;/g, "·");
                }(e = function(e) {
                    return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/&forall;/g, "∀")).replace(/&part;/g, "∂")).replace(/&exists;/g, "∃")).replace(/&empty;/g, "∅")).replace(/&nabla;/g, "∇")).replace(/&isin;/g, "∈")).replace(/&notin;/g, "∉")).replace(/&ni;/g, "∋")).replace(/&prod;/g, "∏")).replace(/&sum;/g, "∑")).replace(/&minus;/g, "−")).replace(/&lowast;/g, "∗")).replace(/&radic;/g, "√")).replace(/&prop;/g, "∝")).replace(/&infin;/g, "∞")).replace(/&ang;/g, "∠")).replace(/&and;/g, "∧")).replace(/&or;/g, "∨")).replace(/&cap;/g, "∩")).replace(/&cap;/g, "∪")).replace(/&int;/g, "∫")).replace(/&there4;/g, "∴")).replace(/&sim;/g, "∼")).replace(/&cong;/g, "≅")).replace(/&asymp;/g, "≈")).replace(/&ne;/g, "≠")).replace(/&le;/g, "≤")).replace(/&ge;/g, "≥")).replace(/&sub;/g, "⊂")).replace(/&sup;/g, "⊃")).replace(/&nsub;/g, "⊄")).replace(/&sube;/g, "⊆")).replace(/&supe;/g, "⊇")).replace(/&oplus;/g, "⊕")).replace(/&otimes;/g, "⊗")).replace(/&perp;/g, "⊥")).replace(/&sdot;/g, "⋅");
                }(e)))));
            },
            urlToHttpUrl: function(e, r) {
                return new RegExp("^//").test(e) && (e = r + ":" + e), e;
            }
        };
    },
    "./utils/wxParse/wxParse.js": function(e, a, n) {
        var s = n("./utils/wxParse/showdown.js"), i = n("./utils/wxParse/html2json.js"), o = 0, l = 0;
        function c(e) {
            console.log(e);
            var r = e.target.dataset.src, t = e.target.dataset.from, a = e.target.dataset.preview;
            void 0 !== t && t.length > 0 && "disabled" !== a && wx.previewImage({
                current: r,
                urls: this.data[t].imageUrls
            });
        }
        function u(e) {
            var a = e.target.dataset.from, n = e.target.dataset.idx;
            void 0 !== a && a.length > 0 && function(e, a, n, s) {
                var i, c = n.data[s];
                if (c && 0 != c.images.length) {
                    var u, p = c.images, g = function(e, r, t, a) {
                        var n, s = 0, i = 0, c = {}, u = t.data[a].view.imagePadding;
                        return l, e > (n = o - 2 * u) ? (i = (s = n) * r / e, c.imageWidth = s, c.imageheight = i) : (c.imageWidth = e, 
                        c.imageheight = r), c;
                    }(e.detail.width, e.detail.height, n, s), d = p[a].index, h = "" + s, f = t(d.split("."));
                    try {
                        for (f.s(); !(u = f.n()).done; ) {
                            var m = u.value;
                            h += ".nodes[".concat(m, "]");
                        }
                    } catch (e) {
                        f.e(e);
                    } finally {
                        f.f();
                    }
                    var b = h + ".width", v = h + ".height";
                    n.setData((r(i = {}, b, g.imageWidth), r(i, v, g.imageheight), i));
                }
            }(e, n, this, a);
        }
        wx.getSystemInfo({
            success: function(e) {
                o = e.windowWidth, l = e.windowHeight;
            }
        }), e.exports = {
            wxParse: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wxParseData", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html", t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '<div class="color:red;">数据不能为空</div>', a = arguments.length > 3 ? arguments[3] : void 0, n = arguments.length > 4 ? arguments[4] : void 0, o = a, l = {};
                if ("html" == r) l = i.html2json(t, e); else if ("md" == r || "markdown" == r) {
                    var p = new s.Converter().makeHtml(t);
                    l = i.html2json(p, e);
                }
                l.view = {}, l.view.imagePadding = 0, void 0 !== n && (l.view.imagePadding = n);
                var g = {};
                g[e] = l, o.setData(g), o.wxParseImgLoad || (o.wxParseImgLoad = u), o.wxParseImgTap || (o.wxParseImgTap = c);
            },
            wxParseTemArray: function(e, r, t, a) {
                for (var n = [], s = a.data, i = null, o = 0; o < t; o++) {
                    var l = s[r + o].nodes;
                    n.push(l);
                }
                e = e || "wxParseTemArray", (i = JSON.parse('{"' + e + '":""}'))[e] = n, a.setData(i);
            },
            emojisInit: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", t = arguments.length > 2 ? arguments[2] : void 0;
                i.emojisInit(e, r, t);
            }
        };
    }
}));