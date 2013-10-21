

(function(document, window, undefined){

	'use strict';
	var ng = window.angular || false;
	if(ng === false) { console.error('checkout http://angular.org'); return; }

	var app = ng.module('plista', ['plista.Controller', 'plista.Events', 'plista.service', 'ngJq']);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/campaign', {
				templateUrl: 'views/campaigns.html',
				controller: 'CampaignsCtrl'
			})
			.when('/campaign/:id', {
				templateUrl: 'views/campaign.html',
				controller: 'CampaignCtrl',
				resolve : ['CampaignConnector', function(CampaignConnector){
						return CampaignConnector();
				}]
			})
			.otherwise({
				redirectTo: '/campaign'
			})
		;
	}])
})(document, window);
