angular.module("skateApp", ['ngAnimate'])
angular.module('skateApp').config(['$controllerProvider', function($controllerProvider) {
  $controllerProvider.allowGlobals();
}]);

angular.module('skateApp')
  .value('tricks', {points: 0});


angular.module('skateApp')
  .controller('TrickController', function($scope, tricks) {
    $scope.tricks = tricks;
    $scope.increment = function() {
      $scope.tricks.points++;
    };
  });




/* ===========================
Date
=============================*/

angular.module('skateApp')
  .controller('DateController', function($scope) {
    $scope.now = Date.now();
  });