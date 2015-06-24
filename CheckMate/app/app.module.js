(function () {
    var app = angular.module("checkMate", ["ngRoute"]);
    app.config(checkMate.Routes.configureRoutes);
    // Directives
    app.filter("unique", function () { return function (collection, keyName) {
        var output = [], keys = [];
        angular.forEach(collection, function (item) {
            var key = item[keyName];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    }; });
})();
//# sourceMappingURL=app.module.js.map