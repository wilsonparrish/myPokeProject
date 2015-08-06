app.directive('navDirect', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/pokeTmpl.html',
		link: function(scope, element, attrs){
			// console.log(scope, element, attrs);
			scope.show = true;
			
			element.on('click', function(){
				scope.show = !scope.show;
				// console.log(show);
				scope.$apply();
			});
			// console.log(scope);
		}
	}
});