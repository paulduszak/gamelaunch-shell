(function() {

    var bbSidebar = function() {

        var bbSidebarCtrl = ['$scope', function($scope) {
            $scope.siteTitle = "paulduszak.com";
        }];

        return {
            restrict: 'E',
            scope: {},
            controller: bbSidebarCtrl,
            templateUrl: 'client/directives/sidebar/bbSidebar.template.html'
        };
    };

    angular
        .module('bootbuilder')
        .directive('bbSidebar', bbSidebar);
})();