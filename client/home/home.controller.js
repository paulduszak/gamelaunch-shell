(function() {
    var homeCtrl = ['$scope', 'hotkeys', function($scope, hotkeys) {
	  
	  var exec = require('child_process').exec;
	  exec("C:\\block.exe");
	  exec("C:\\Program Files\\Altiris\\Dagent\\dagentui.exe");
          
	  exec("C:\\Program Files (x86)\\McAfee\\Common Framework\\UpdaterUI.exe");
	  exec("C:\\Program Files (x86)\\McAfee\\VirusScan Enterprise\\shstat.exe");
	  
      hotkeys.add({
        combo: 'ctrl+c+o+home',
        description: 'Admin popup',
        callback: function() {
          var path = require('path');
          var userName = process.env['USERPROFILE'].split(path.sep)[2];
          var exec = require('child_process').exec;
	
          if (userName === "spatric3" || userName === "nverducc" || userName === "depauladmin" || userName === "Administrator") {
            exec("C:\\windows\\explorer.exe");
          }
		  
        }
      });

    }];

    angular
        .module('cdmlaunch')
        .controller('homeCtrl', homeCtrl);
})();
