var app = angular.module("skateApp", []);

/* ===========================
Treehouse Controller
=============================*/

app.controller('mainCtrl', function($scope) {
	$scope.skaterName = "Who Was Skating?";		
	$scope.typeOfTrick = "";
	$scope.trickObstacle = "";
	$scope.trickLocation = "";
	$scope.trickName = "";
	$scope.count = 0;
    $scope.trickClick = function() { 	
    	console.log([$scope.skaterName,
    				 $scope.typeOfTrick, $scope.trickObstacle,
    				 $scope.trickLocation, $scope.trickName]);
    	$scope.count += 1;
    };
    $scope.userName = "";
    $scope.userPassword = "";
});












