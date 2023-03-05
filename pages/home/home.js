require("./../../webpack-require")("./pages/home/home.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/home/home.js": function(e, s, a) {
        a.r(s);
        var o = a("./pages/home/homePage.js");
        o.pageObj.pageKey = "home", Page(o.pageObj);
    }
}));