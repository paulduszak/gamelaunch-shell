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
			link: function($scope, $element, $attrs, $controller) {
				var button, fileField, proxy;
				fileField = $element.find('[type="file"]').on('change', function() {
					proxy.val(angular.element(this).val());
				});
				proxy = $element.find('[type="text"]').on('click', function() {
					fileField.trigger('click');
				});
				button = $element.find('[type="button"]').on('click', function() {
					fileField.trigger('click');
				});
			}
        };
    };

    angular
        .module('bootbuilder')
        .directive('bbFileBrowser', bbFileBrowser);
})();