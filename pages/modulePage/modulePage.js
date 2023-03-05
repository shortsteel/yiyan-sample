require("./../../webpack-require")("./pages/modulePage/modulePage.js", Object.assign(require("././../../commons.js").modules, {
    "./pages/modulePage/modulePage.js": function(e, a, g) {
        g.r(a);
        var s = g("./pages/home/homePage.js");
        s.pageObj.pageKey = "module_page", Page(s.pageObj);
    }
}));