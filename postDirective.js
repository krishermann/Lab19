angular
	.module('myMod')

.directive('postDir', function(){
    return{
      restrict: "EA",
      template: "<p>{{post.a}}</p>",
      replace: false
    };
  });