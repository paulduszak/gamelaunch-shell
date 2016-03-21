(function() {

    var bbNav = function() {

        var bbNavCtrl = ['$scope', function($scope) {
            $scope.siteTitle = "paulduszak.com";
        }];

        return {
            restrict: 'E',
            scope: {},
            controller: bbNavCtrl,
            templateUrl: 'client/directives/nav/bbNav.template.html'
        };
    };

    angular
        .module('bootbuilder')
        .directive('bbNav', bbNav);
})();