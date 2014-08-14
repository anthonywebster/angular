function MyCtrl($scope) {
	$scope.visible = true;
	$scope.val=5;
	$scope.ambito = "test";
	$scope.toggle = function() {
		$scope.visible = !$scope.visible;
	}

	$scope.getVal = function(){
		return $scope.val + 1;
	}

	$scope.name = "";
	$scope.$watch("name",function(newValue,oldValue){
		console.log(oldValue);
		if ($scope.name.length > 0) {
			$scope.greeting = "Greeting" + $scope.name;
		};
	})
}

var app = angular.module("myApp",[]);

app.run(function($rootScope){
	$rootScope.nameTest = "hola mundo";
})

app.factory("UserService",function(){
	var users = ["peter","daniel","Nina"];

	return {
		all: function(){
			return users;
		},
		first: function(){
			return users[0];
		}
	}
});

app.controller("MyCtrl2",function($scope,UserService){
	$scope.users = UserService.all();
});

app.controller("AnotherCtrl",function($scope,UserService){
	$scope.firstUser = UserService.first();
})