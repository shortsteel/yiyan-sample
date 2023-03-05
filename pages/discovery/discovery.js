require("./../../webpack-require")("./pages/discovery/discovery.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/discovery/discovery.js": function(e, s, r) {
        r.r(s);
        var a = r("./pages/home/homePage.js");
        a.pageObj.pageKey = "discovery", Page(a.pageObj);
    }
}));