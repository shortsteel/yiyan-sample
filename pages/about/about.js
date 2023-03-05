require("./../../webpack-require")("./pages/about/about.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/about/about.js": function(e, a, s) {
        s.r(a);
        var o = s("./pages/home/homePage.js");
        o.pageObj.pageKey = "about", Page(o.pageObj);
    }
}));