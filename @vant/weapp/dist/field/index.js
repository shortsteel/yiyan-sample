require("./../../../../webpack-require")("../node_modules/@vant/weapp/dist/field/index.js", Object.assign(require("././../../../../commons.js").modules, {
    "../node_modules/@vant/weapp/dist/field/index.js": function(e, t, n) {
        n.r(t);
        var o = n("../node_modules/@vant/weapp/dist/common/component.js"), i = n("../node_modules/@vant/weapp/dist/field/props.js");
        Object(o.VantComponent)({
            field: !0,
            classes: [ "input-class", "right-icon-class", "label-class" ],
            props: Object.assign(Object.assign(Object.assign(Object.assign({}, i.commonProps), i.inputProps), i.textareaProps), {
                size: String,
                icon: String,
                label: String,
                error: Boolean,
                center: Boolean,
                isLink: Boolean,
                leftIcon: String,
                rightIcon: String,
                autosize: [ Boolean, Object ],
                required: Boolean,
                iconClass: String,
                clickable: Boolean,
                inputAlign: String,
                customStyle: String,
                errorMessage: String,
                arrowDirection: String,
                showWordLimit: Boolean,
                errorMessageAlign: String,
                readonly: {
                    type: Boolean,
                    observer: "setShowClear"
                },
                clearable: {
                    type: Boolean,
                    observer: "setShowClear"
                },
                border: {
                    type: Boolean,
                    value: !0
                },
                titleWidth: {
                    type: String,
                    value: "6.2em"
                }
            }),
            data: {
                focused: !1,
                innerValue: "",
                showClear: !1
            },
            created: function() {
                this.value = this.data.value, this.setData({
                    innerValue: this.value
                });
            },
            methods: {
                onInput: function(e) {
                    var t = (e.detail || {}).value, n = void 0 === t ? "" : t;
                    this.value = n, this.setShowClear(), this.emitChange();
                },
                onFocus: function(e) {
                    this.focused = !0, this.setShowClear(), this.$emit("focus", e.detail);
                },
                onBlur: function(e) {
                    this.focused = !1, this.setShowClear(), this.$emit("blur", e.detail);
                },
                onClickIcon: function() {
                    this.$emit("click-icon");
                },
                onClear: function() {
                    var e = this;
                    this.setData({
                        innerValue: ""
                    }), this.value = "", this.setShowClear(), wx.nextTick(function() {
                        e.emitChange(), e.$emit("clear", "");
                    });
                },
                onConfirm: function(e) {
                    var t = (e.detail || {}).value, n = void 0 === t ? "" : t;
                    this.value = n, this.setShowClear(), this.$emit("confirm", n);
                },
                setValue: function(e) {
                    this.value = e, this.setShowClear(), "" === e && this.setData({
                        innerValue: ""
                    }), this.emitChange();
                },
                onLineChange: function(e) {
                    this.$emit("linechange", e.detail);
                },
                onKeyboardHeightChange: function(e) {
                    this.$emit("keyboardheightchange", e.detail);
                },
                emitChange: function() {
                    var e = this;
                    this.setData({
                        value: this.value
                    }), wx.nextTick(function() {
                        e.$emit("input", e.value), e.$emit("change", e.value);
                    });
                },
                setShowClear: function() {
                    var e = this.data, t = e.clearable, n = e.readonly, o = this.focused, i = this.value;
                    this.setData({
                        showClear: !(!t || !o || !i || n)
                    });
                },
                noop: function() {}
            }
        });
    },
    "../node_modules/@vant/weapp/dist/field/props.js": function(e, t, n) {
        n.r(t), n.d(t, "commonProps", function() {
            return o;
        }), n.d(t, "inputProps", function() {
            return i;
        }), n.d(t, "textareaProps", function() {
            return a;
        });
        var o = {
            value: {
                type: String,
                observer: function(e) {
                    e !== this.value && (this.setData({
                        innerValue: e
                    }), this.value = e);
                }
            },
            placeholder: String,
            placeholderStyle: String,
            placeholderClass: String,
            disabled: Boolean,
            maxlength: {
                type: Number,
                value: -1
            },
            cursorSpacing: {
                type: Number,
                value: 50
            },
            autoFocus: Boolean,
            focus: Boolean,
            cursor: {
                type: Number,
                value: -1
            },
            selectionStart: {
                type: Number,
                value: -1
            },
            selectionEnd: {
                type: Number,
                value: -1
            },
            adjustPosition: {
                type: Boolean,
                value: !0
            },
            holdKeyboard: Boolean
        }, i = {
            type: {
                type: String,
                value: "text"
            },
            password: Boolean,
            confirmType: String,
            confirmHold: Boolean
        }, a = {
            autoHeight: Boolean,
            fixed: Boolean,
            showConfirmBar: {
                type: Boolean,
                value: !0
            },
            disableDefaultPadding: {
                type: Boolean,
                value: !0
            }
        };
    }
}));