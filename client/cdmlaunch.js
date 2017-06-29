(function() {
    angular.module('cdmlaunch', ['ngRoute', 'ui.bootstrap']);

    var config = function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'client/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            })
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
    }

    angular
        .module('cdmlaunch')
        .config(['$routeProvider', '$locationProvider', config]);
})();
