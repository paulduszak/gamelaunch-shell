(function() {

    var clNav = function() {

        var clNavCtrl = ['$scope', '$timeout', function($scope, $timeout) {

            $scope.logoff = function() {
              var exec = require('child_process').exec;
              exec("C:\\Windows\\System32\\shutdown.exe -L");
            }
			
			$scope.volumeControl = function() {
              var exec = require('child_process').exec;
              exec("C:\\Windows\\System32\\SndVol.exe");
            }

            $scope.clock = Date.now(); // initialise the time variable
            $scope.tickInterval = 1000 //ms

            var tick = function() {
                $scope.clock = Date.now() // get the current time
                $timeout(tick, $scope.tickInterval); // reset the timer
            }

            // Start the timer
            $timeout(tick, $scope.tickInterval);

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
