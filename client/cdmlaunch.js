(function() {
    angular.module('cdmlaunch', ['ngRoute', 'ui.bootstrap', 'cfp.hotkeys']);

    var config = function($routeProvider, $locationProvider, $compileProvider) {



        $routeProvider
            .when('/', {
                templateUrl: 'client/home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'home'
            })
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|chrome-extension):|data:image\//);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|chrome-extension):/);
    }

    angular
        .module('cdmlaunch')
        .config(['$routeProvider', '$locationProvider', '$compileProvider', config]);
})();
