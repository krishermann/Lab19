angular
	.module('myMod')

.directive('masthead', function(){
    return{
      restrict: "EA",
      template: "<div class='labheader'><header>I'm the header</header></div>",
      replace: false
    };
    
  });