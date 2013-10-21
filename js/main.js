

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

		$scope.timestamp = 1380585600;
	}]);

	app.directive('jqDatepicker', ['$parse',function($parse){

		var jqFieldTemplate = '<input type="hidden">';
		var template =  '<span class="click" data-ng-click="show($event)">' +
			'{{timestamp | date:"dd. MMMM yyyy"}}'+
			' <i class="icon-calendar" ></i>' +
			'</span>';
		return {
			restrict: 'A',
			scope: true,
			compile: function compile(cElement, cAttrs, transclude) {

				var jqField = angular.element(jqFieldTemplate);
				cElement.append(jqField).append(template);

				return function (scope, lElement, lAttrs) {

					scope.timestamp = '';

					var timestampFactor = 1000;
					var timestampGet = $parse(lAttrs.jqDatepicker);
					var timestampSet = timestampGet.assign;

					var setTimestamp = function(timestamp){
						scope.timestamp = timestamp * timestampFactor;
						jqField.datepicker( "setDate", new Date(scope.timestamp) );
					};

					jqField.datepicker({
						altField: '#actualDate',
						altFormat: '@',
						onClose : function(newDate){
							timestampSet(scope.$parent, (Math.round((new Date(newDate).getTime() )) / timestampFactor) );
							// outside of angularJs
							scope.$apply();
						}
					});

					setTimestamp(timestampGet(scope.$parent));

					// action
					scope.show = function(){
						jqField.datepicker('show');
					};

					// value watcher
					scope.$parent.$watch(lAttrs.jqDatepicker, function(newValue){
						setTimestamp(newValue);
					});
				};
			}
		};
	}]);

})(document, window);
