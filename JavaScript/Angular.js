angular.module("skateApp", [])
angular.module('skateApp').config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

function CountController($scope) {
	$scope.count = function() { return 12; }
}