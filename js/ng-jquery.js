(function(document, window, undefined){

	'use strict';
	var ng = window.angular || false;
	if(ng === false) { console.error('checkout http://angular.org'); return; }

	var ngJq = ng.module('ngJq', []);

	ngJq.directive('jqDatepicker', ['$parse',function($parse){

		var jqFieldTemplate = '<input type="hidden">';
		var template =  '<span class="click" data-ng-click="show($event)">' +
							'{{timestamp | date:"dd. MMMM yyyy"}}'+
							' <i class="icon-calendar" ></i>' +
						'</span>';
		return {
			restrict: 'A',
			scope: true,
			compile: function compile(cElement, cAttrs, transclude) {

				var jqField = ng.element(jqFieldTemplate);
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