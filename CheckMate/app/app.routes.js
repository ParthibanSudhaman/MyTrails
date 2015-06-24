var checkMate;
(function (checkMate) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "checkMate.Controllers.eventController",
                templateUrl: "/app/Partials/eventlist.html",
                controllerAs: "eventList"
            });
            $routeProvider.when("/test", {
                controller: "checkMate.Controllers.testController",
                templateUrl: "/app/Partials/test.html",
                controllerAs: "test"
            });
            $routeProvider.when("/editEvent/:eventId", {
                controller: "checkMate.Controllers.addEditEventController",
                templateUrl: "/app/Partials/addEditEvent.html",
                controllerAs: "eventAddEditManager"
            });
            $routeProvider.when("/addEvent/:eventId", {
                controller: "checkMate.Controllers.addEditEventController",
                templateUrl: "/app/Partials/addEditEvent.html",
                controllerAs: "eventAddEditManager"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    checkMate.Routes = Routes;
})(checkMate || (checkMate = {}));
//# sourceMappingURL=app.routes.js.map