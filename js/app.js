(function(){
	'use strict';

	var blog = angular.module('blog', ['ngRoute','blogController']);


	blog.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){

		$routeProvider	
			.when("/",{
				templateUrl:'views/post-list.html',
				controller:'PostListCtrl',
				controllerAs:'postlist'
			})
			.when('/post/:postId',{
				templateUrl:'views/post-detail.html',
				controller:'PostDetailCtrl',
				controllerAs:'postdetail'
			})
			.when('/new',{
				templateUrl: 'views/post-create.html',
				controller: 'PostCreateCtrl',
				controllerAs:'postCreate'
			});

			$locationProvider.html5Mode(true);
	}]);

})();