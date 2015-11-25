angular
	.module('myMod')

.directive('navDir', function(){
    return{
      restrict: "EA",
      template: "<div class='labnav'><button>{{post.b}}</button></div>",
      replace: false
    };
  });