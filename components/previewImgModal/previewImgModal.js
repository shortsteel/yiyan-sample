require("./../../webpack-require")("./components/previewImgModal/previewImgModal.js", {
    "./components/previewImgModal/previewImgModal.js": function(e, o) {
        var t = getApp();
        Component({
            properties: {
                show: {
                    type: Boolean,
                    value: !1
                },
                image: {
                    type: String,
                    value: ""
                }
            },
            data: {
                themeColor: t.globalData.themeColor || {}
            },
            methods: {
                onClose: function() {
                    this.setData({
                        show: !1
                    });
                },
                downloadImg: function(e) {
                    wx.showLoading({
                        title: "下载图片中..."
                    }), wx.downloadFile({
                        url: this.data.image,
                        success: function(e) {
                            wx.hideLoading(), wx.saveImageToPhotosAlbum({
                                filePath: e.tempFilePath,
                                success: function() {
                                    wx.showToast({
                                        title: "保存成功",
                                        icon: "success",
                                        duration: 2e3
                                    });
                                }
                            });
                        }
                    });
                },
                shareImage: function() {
                    wx.showLoading({
                        title: "下载图片中..."
                    }), wx.downloadFile({
                        url: this.data.image,
                        success: function(e) {
                            wx.hideLoading(), wx.showShareImageMenu({
                                path: e.tempFilePath
                            });
                        }
                    });
                }
            }
        });
    }
});