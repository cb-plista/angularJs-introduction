

(function(document, window, undefined){

	'use strict';
	var angular = window.angular || false;
	if(angular === false) { console.error('checkout http://angular.org'); return; }

	var app = angular.module('plista', []);

	app.controller('PageCtrl', ['$scope', function($scope){
		$scope.name = 'world';

		$scope.clickMe = function(){
			$scope.name = 'plista';
		};
	}]);

})(document, window);
