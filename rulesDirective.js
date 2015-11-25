angular
	.module('myMod')

.directive('rules', function(){
    return{
      restrict: "EA",
      template: "<div class='rules'>I'm the rules</div>",
      replace: false
    };
    
  });