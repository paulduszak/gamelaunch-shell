(function() {

    var bbFileBrowser = function() {

        var bbFileBrowserCtrl = ['$scope', function($scope) {
            
        }];

        return {
            restrict: 'A',
			replace:true,
			transclude: true,
            scope: {},
            controller: bbFileBrowserCtrl,
            templateUrl: 'client/directives/fileBrowser/bbFileBrowser.template.html',
        };
    };

    angular
        .module('bootbuilder')
        .directive('bbFileBrowser', bbFileBrowser);
})();