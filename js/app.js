function MyCtrl($scope) {
	$scope.visible = true;
	$scope.ambito = "test";
	$scope.toggle = function() {
		$scope.visible = !$scope.visible;
	}
}

var app = angular.module("myApp",[]);

app.run(function($rootScope){
	$rootScope.nameTest = "hola mundo";
})