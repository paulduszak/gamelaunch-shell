(function() {

    var clGame = function() {

        var clGameCtrl = ['$scope', function($scope) {

          $scope.launch = function(gameDir) {
            var exec = require('child_process').exec;
            exec(gameDir);
          }

        }];

        return {
            restrict: 'E',
            scope: {
              gameDir: '@',
              gameImg: '@',
              gameBg: '@'
            },
            controller: clGameCtrl,
            templateUrl: 'client/directives/clGame/clGame.template.html',
            link: function(scope, elm, attrs) {
                elm
                    .on('mouseenter',function() {
                        var imgPath = 'url("' + scope.gameBg + '")';
                        var path = imgPath.replace(/\\/g, "\\\\");
                        angular.element(document).find('body').css('background-image', path);
                    })
            }
        };
    };

    angular
        .module('cdmlaunch')
        .directive('clGame', clGame);
})();
