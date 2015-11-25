angular
	.module('myMod')

.directive('login', function(){
    return{
      restrict: "EA",
      template: "<div class='form'>I'm a form!</div>",
      replace: false
    };
    
  });