var checkMate;
(function (checkMate) {
    var Controllers;
    (function (Controllers) {
        var TestController = (function () {
            function TestController() {
                alert('hi');
            }
            return TestController;
        })();
        Controllers.TestController = TestController;
        angular.module("checkMate").controller("checkMate.Controllers.testController", TestController);
    })(Controllers = checkMate.Controllers || (checkMate.Controllers = {}));
})(checkMate || (checkMate = {}));
//# sourceMappingURL=testController.js.map