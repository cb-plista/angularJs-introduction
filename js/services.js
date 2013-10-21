(function(document, window, undefined){

	'use strict';
	var ng = window.angular || false;
	if(ng === false) { console.error('checkout http://angular.org'); return; }

	var service = ng.module('plista.service', []);

	service.factory('CampaignConnector', ['$rootScope', '$route', function($rootScope, $route){
		// change this the URL to ur ipAddress
		$rootScope.socket = io.connect('http://192.168.2.222:4000');
		return function(){
			$rootScope.socket.on('initData', function(data){
				$rootScope.$broadcast('updateCampaign', data);
				$rootScope.$apply();
			});
			$rootScope.socket.on('updateData', function(data){
				$rootScope.$broadcast('updateCampaign', data);
				$rootScope.$apply();
			});
			$rootScope.socket.emit('listenStart', {
				model: 'campaign',
				id: $route.current.params.id
			});
		};
	}]);



})(document, window);
