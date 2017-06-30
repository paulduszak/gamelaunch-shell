(function() {

    var clNav = function() {

        var clNavCtrl = ['$scope', function($scope) {
            $scope.siteTitle = "cdm launch";
        }];

        return {
            restrict: 'E',
            scope: {},
            controller: clNavCtrl,
            templateUrl: 'client/directives/clNav/clNav.template.html'
        };
    };

    angular
        .module('cdmlaunch')
        .directive('clNav', clNav);
})();
