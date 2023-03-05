require("./../../webpack-require")("./components/myAudio/myAudio.js", {
    "./components/myAudio/myAudio.js": function(t, e) {
        Component({
            properties: {
                poster: {
                    type: String,
                    value: ""
                },
                author: {
                    type: String,
                    value: ""
                },
                title: {
                    type: String,
                    value: ""
                },
                src: {
                    type: String,
                    value: ""
                }
            },
            data: {
                audioStatus: 0,
                timeShow: "00:00",
                time: 0
            },
            methods: {
                changeTime: function(t) {
                    return Math.floor(t / 60) + ":" + (t % 60 / 100).toFixed(2).slice(-2);
                },
                ctr: function() {
                    var t = this.data.audioStatus;
                    0 === t && (this.audioCtx.play(), this.setData({
                        audioStatus: 1
                    })), 1 === t && (console.log("1"), this.audioCtx.pause(), this.setData({
                        audioStatus: 0
                    }));
                }
            },
            ready: function() {
                var t = this;
                console.log("ready");
                var e = this.data.src;
                this.audioCtx = wx.createInnerAudioContext(), this.audioCtx.src = e, this.audioCtx.onPlay(function() {
                    t.timer = setInterval(function() {
                        var e = t.data, i = e.time, a = e.timeShow;
                        i++, a = t.changeTime(i), t.setData({
                            time: i,
                            timeShow: a
                        });
                    }, 1e3);
                }), this.audioCtx.onPause(function() {
                    console.log("pause"), clearInterval(t.timer);
                }), this.audioCtx.onStop(function() {
                    clearInterval(t.timer);
                });
            }
        });
    }
});