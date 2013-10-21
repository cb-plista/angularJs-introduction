(function(document, window, undefined){

	'use strict';
	var ng = window.angular || false;
	if(ng === false) { console.error('checkout http://angular.org'); return; }

	var event = ng.module('plista.Events', []);

	event.directive([ 'focus', 'blur', 'keyup', 'keydown', 'keypress' ].reduce(function (container, name) {
		var directiveName = 'ng' + name[ 0 ].toUpperCase() + name.substr(1);

		container[directiveName] = ['$parse', function ($parse) {
			return function (scope, element, attr) {
				var fn = $parse(attr[directiveName]);
				element.bind(name, function (event) {
					scope.$apply(function () {
						fn(scope, {
							$event:event
						});
					});
				});
			};
		}];

		return container;
	}, {}));


})(document, window);
