require("./../../webpack-require")("./pages/featured/featured.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/featured/featured.js": function(e, a, r) {
        r.r(a);
        var s = r("./pages/home/homePage.js");
        s.pageObj.pageKey = "featured", Page(s.pageObj);
    }
}));