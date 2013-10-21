(function(document, window, undefined){

	'use strict';
	var ng = window.angular || false;
	if(ng === false) { console.error('checkout http://angular.org'); return; }

	var service = ng.module('plista.service', ['ngResource']);

	service.factory('Campaign', ['$resource',
		function($resource){
			return $resource('/api/index.php?q=/campaign/:id', {id: '@id'});
		}
	]);

	service.factory('CampaignLoader', ['$rootScope', '$q', 'Campaign', '$route',
		function($rootScope, $q, Campaign, $route){
			return function(){
				var delay = $q.defer();
				Campaign.get({ id: $route.current.params.id },
					function(data){ // success
						delay.resolve(data);
					}, function(){ // error
						delay.resolve({error: true});
					}
				);
				return delay.promise;
			};
		}
	]);

})(document, window);
