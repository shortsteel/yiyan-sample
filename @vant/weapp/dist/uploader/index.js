require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/uploader/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/uploader/index.js": function(e, t, i) {
        i.r(t);
        var a = i("../node_modules/@vant/weapp/dist/common/component.js"), n = i("../node_modules/@vant/weapp/dist/uploader/utils.js"), s = i("../node_modules/@vant/weapp/dist/uploader/shared.js"), o = i("../node_modules/@vant/weapp/dist/common/validator.js");
        Object(a.VantComponent)({
            props: Object.assign(Object.assign({
                disabled: Boolean,
                multiple: Boolean,
                uploadText: String,
                useBeforeRead: Boolean,
                afterRead: null,
                beforeRead: null,
                previewSize: {
                    type: null,
                    value: 80
                },
                name: {
                    type: [ Number, String ],
                    value: ""
                },
                accept: {
                    type: String,
                    value: "image"
                },
                fileList: {
                    type: Array,
                    value: [],
                    observer: "formatFileList"
                },
                maxSize: {
                    type: Number,
                    value: Number.MAX_VALUE
                },
                maxCount: {
                    type: Number,
                    value: 100
                },
                deletable: {
                    type: Boolean,
                    value: !0
                },
                showUpload: {
                    type: Boolean,
                    value: !0
                },
                previewImage: {
                    type: Boolean,
                    value: !0
                },
                previewFullImage: {
                    type: Boolean,
                    value: !0
                },
                imageFit: {
                    type: String,
                    value: "scaleToFill"
                },
                uploadIcon: {
                    type: String,
                    value: "photograph"
                }
            }, s.chooseImageProps), s.chooseVideoProps),
            data: {
                lists: [],
                isInCount: !0
            },
            methods: {
                formatFileList: function() {
                    var e = this.data, t = e.fileList, i = void 0 === t ? [] : t, a = e.maxCount, s = i.map(function(e) {
                        return Object.assign(Object.assign({}, e), {
                            isImage: Object(n.isImageFile)(e),
                            isVideo: Object(n.isVideoFile)(e),
                            deletable: !Object(o.isBoolean)(e.deletable) || e.deletable
                        });
                    });
                    this.setData({
                        lists: s,
                        isInCount: s.length < a
                    });
                },
                getDetail: function(e) {
                    return {
                        name: this.data.name,
                        index: null == e ? this.data.fileList.length : e
                    };
                },
                startUpload: function() {
                    var e = this, t = this.data, i = t.maxCount, a = t.multiple, s = t.lists;
                    t.disabled || Object(n.chooseFile)(Object.assign(Object.assign({}, this.data), {
                        maxCount: i - s.length
                    })).then(function(t) {
                        e.onBeforeRead(a ? t : t[0]);
                    }).catch(function(t) {
                        e.$emit("error", t);
                    });
                },
                onBeforeRead: function(e) {
                    var t = this, i = this.data, a = i.beforeRead, n = i.useBeforeRead, s = !0;
                    "function" == typeof a && (s = a(e, this.getDetail())), n && (s = new Promise(function(i, a) {
                        t.$emit("before-read", Object.assign(Object.assign({
                            file: e
                        }, t.getDetail()), {
                            callback: function(e) {
                                e ? i() : a();
                            }
                        }));
                    })), s && (Object(o.isPromise)(s) ? s.then(function(i) {
                        return t.onAfterRead(i || e);
                    }) : this.onAfterRead(e));
                },
                onAfterRead: function(e) {
                    var t = this.data, i = t.maxSize, a = t.afterRead;
                    (Array.isArray(e) ? e.some(function(e) {
                        return e.size > i;
                    }) : e.size > i) ? this.$emit("oversize", Object.assign({
                        file: e
                    }, this.getDetail())) : ("function" == typeof a && a(e, this.getDetail()), this.$emit("after-read", Object.assign({
                        file: e
                    }, this.getDetail())));
                },
                deleteItem: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.$emit("delete", Object.assign(Object.assign({}, this.getDetail(t)), {
                        file: this.data.fileList[t]
                    }));
                },
                onPreviewImage: function(e) {
                    if (this.data.previewFullImage) {
                        var t = e.currentTarget.dataset.index, i = this.data.lists, a = i[t];
                        wx.previewImage({
                            urls: i.filter(function(e) {
                                return Object(n.isImageFile)(e);
                            }).map(function(e) {
                                return e.url;
                            }),
                            current: a.url,
                            fail: function() {
                                wx.showToast({
                                    title: "预览图片失败",
                                    icon: "none"
                                });
                            }
                        });
                    }
                },
                onPreviewVideo: function(e) {
                    if (this.data.previewFullImage) {
                        var t = e.currentTarget.dataset.index, i = this.data.lists;
                        wx.previewMedia({
                            sources: i.filter(function(e) {
                                return Object(n.isVideoFile)(e);
                            }).map(function(e) {
                                return Object.assign(Object.assign({}, e), {
                                    type: "video"
                                });
                            }),
                            current: t,
                            fail: function() {
                                wx.showToast({
                                    title: "预览视频失败",
                                    icon: "none"
                                });
                            }
                        });
                    }
                },
                onClickPreview: function(e) {
                    var t = e.currentTarget.dataset.index, i = this.data.lists[t];
                    this.$emit("click-preview", Object.assign(Object.assign({}, i), this.getDetail(t)));
                }
            }
        });
    },
    "../node_modules/@vant/weapp/dist/uploader/shared.js": function(e, t, i) {
        i.r(t), i.d(t, "chooseImageProps", function() {
            return a;
        }), i.d(t, "chooseVideoProps", function() {
            return n;
        });
        var a = {
            sizeType: {
                type: Array,
                value: [ "original", "compressed" ]
            },
            capture: {
                type: Array,
                value: [ "album", "camera" ]
            }
        }, n = {
            capture: {
                type: Array,
                value: [ "album", "camera" ]
            },
            compressed: {
                type: Boolean,
                value: !0
            },
            maxDuration: {
                type: Number,
                value: 60
            },
            camera: {
                type: String,
                value: "back"
            }
        };
    },
    "../node_modules/@vant/weapp/dist/uploader/utils.js": function(e, t, i) {
        i.r(t), i.d(t, "isImageFile", function() {
            return s;
        }), i.d(t, "isVideoFile", function() {
            return o;
        }), i.d(t, "chooseFile", function() {
            return r;
        });
        var a = i("../node_modules/@vant/weapp/dist/common/utils.js"), n = i("../node_modules/@vant/weapp/dist/common/validator.js");
        function s(e) {
            return null != e.isImage ? e.isImage : e.type ? "image" === e.type : !!e.url && Object(n.isImageUrl)(e.url);
        }
        function o(e) {
            return null != e.isVideo ? e.isVideo : e.type ? "video" === e.type : !!e.url && Object(n.isVideoUrl)(e.url);
        }
        function r(e) {
            var t = e.accept, i = e.multiple, n = e.capture, s = e.compressed, o = e.maxDuration, r = e.sizeType, u = e.camera, l = e.maxCount;
            return new Promise(function(e, c) {
                switch (t) {
                  case "image":
                    wx.chooseImage({
                        count: i ? Math.min(l, 9) : 1,
                        sourceType: n,
                        sizeType: r,
                        success: function(t) {
                            return e(function(e) {
                                return e.tempFiles.map(function(e) {
                                    return Object.assign(Object.assign({}, Object(a.pickExclude)(e, [ "path" ])), {
                                        type: "image",
                                        url: e.path,
                                        thumb: e.path
                                    });
                                });
                            }(t));
                        },
                        fail: c
                    });
                    break;

                  case "media":
                    wx.chooseMedia({
                        count: i ? Math.min(l, 9) : 1,
                        sourceType: n,
                        maxDuration: o,
                        sizeType: r,
                        camera: u,
                        success: function(t) {
                            return e(function(e) {
                                return e.tempFiles.map(function(t) {
                                    return Object.assign(Object.assign({}, Object(a.pickExclude)(t, [ "fileType", "thumbTempFilePath", "tempFilePath" ])), {
                                        type: e.type,
                                        url: t.tempFilePath,
                                        thumb: "video" === e.type ? t.thumbTempFilePath : t.tempFilePath
                                    });
                                });
                            }(t));
                        },
                        fail: c
                    });
                    break;

                  case "video":
                    wx.chooseVideo({
                        sourceType: n,
                        compressed: s,
                        maxDuration: o,
                        camera: u,
                        success: function(t) {
                            return e(function(e) {
                                return [ Object.assign(Object.assign({}, Object(a.pickExclude)(e, [ "tempFilePath", "thumbTempFilePath", "errMsg" ])), {
                                    type: "video",
                                    url: e.tempFilePath,
                                    thumb: e.thumbTempFilePath
                                }) ];
                            }(t));
                        },
                        fail: c
                    });
                    break;

                  default:
                    wx.chooseMessageFile({
                        count: i ? l : 1,
                        type: t,
                        success: function(t) {
                            return e(function(e) {
                                return e.tempFiles.map(function(e) {
                                    return Object.assign(Object.assign({}, Object(a.pickExclude)(e, [ "path" ])), {
                                        url: e.path
                                    });
                                });
                            }(t));
                        },
                        fail: c
                    });
                }
            });
        }
    }
}));