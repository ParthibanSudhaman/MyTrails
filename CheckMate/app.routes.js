var checkMate;
(function (checkMate) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "checkMate.controllers.eventListController", templateUrl: "", controllerAs: "eventList" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ['$routeProvider'];
        return Routes;
    })();
    checkMate.Routes = Routes;
})(checkMate || (checkMate = {}));
//# sourceMappingURL=app.routes.js.map