(function() {

    var clGameDirectory = function() {

        var clGameDirectoryCtrl = ['$scope', function($scope) {
           $scope.isCollapsed = false;

           $scope.collapse = function($event) {
             alert($event.target.id);
             $scope.isCollapsed = !$scope.isCollapsed;
           };

           var fs = require('fs');

           fs.readFile($scope.clData, 'utf8', function (err, data) {
               if (err) alert(err);
               $scope.titles = JSON.parse(data);
           });

        }];

        return {
            restrict: 'E',
            scope: {
              clTitle: '@',
              clData: '@'
            },
            controller: clGameDirectoryCtrl,
            templateUrl: 'client/directives/clGameDirectory/clGameDirectory.template.html'
        };
    };

    angular
        .module('cdmlaunch')
        .directive('clGameDirectory', clGameDirectory);
})();
