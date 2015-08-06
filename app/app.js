var app = angular.module('pokeApp', ['ngRoute']);

// app.config(function($httpProvider){
// 		$httpProvider.interceptors.push('httpRequestInterceptor');
// 	});

app.config(function($routeProvider){
	
	$routeProvider
	.when('/', {
		templateUrl: 'templates/homeTmpl.html',
		controller: 'pokeCtrl'
	})
	.when('/learn', {
		templateUrl: 'templates/pokeTmpl.html',
		controller: 'pokeCtrl'
	})
	.when('/battleArena', {						
		templateUrl: 'templates/BattleTmpl.html',
		controller: 'battleCtrl'
	})
	.otherwise({
		redirectTo: '/'	
	})

})