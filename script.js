angular

	.module('myMod', [])
	
	.controller('TestController', ['$scope', function($scope) {
  		$scope.posts = [{a: "I'm post!", b:"Home"}, {a: "Me too!", b:"Images"}, {a: "So am I!", b:"Links"}];
 }]);