var myApp = angular.module('myApp', []);

myApp.controller('FirstController', ['$scope', function ($scope) {
	
	$scope.data = {message:'hola'};

	$scope.double = function(value){
		return value * 2 || 0;
	}

}]);