(function(document, window, undefined){

	'use strict';
	var ng = window.angular || false;
	if(ng === false) { console.error('checkout http://angular.org'); return; }

	var ctrl = ng.module('plista.Controller', []);

	ctrl
		.controller('PlistaCtrl', ['$scope',
			function($scope){}
		])
		.controller('CampaignsCtrl', ['$scope',
			function($scope){
				$scope.campaigns = [
						{"id":1,"name":"Campaign 1"},
						{"id":2,"name":"Campaign 2"},
						{"id":3,"name":"Campaign 3"}
				];

			}
		])
		.controller('CampaignCtrl', ['$rootScope', '$scope', 'campaign', 'Campaign',
			function($rootScope, $scope, campaign, Campaign){
				$scope.campaign = ng.copy(campaign);

				var css = $scope.css || ($scope.css = {});
				var action = $scope.action || ($scope.action = {});
				var flag = $scope.flag || ($scope.flag = {});
				var text = $scope.text || ($scope.text = {});

				text.status =  {
					0 : 'new',
					1 : 'active',
					2 : 'stop'
				};

				css.saveCampaign = 'icon-save';

				action.save = function(e){
					css.saveCampaign = 'icon-spinner icon-spin';
					Campaign.save($scope.campaign,
						function(data){ /* SUCCESS */
							$scope.campaign = data;
							campaign = ng.copy(data);
							// small additional time
							// to give some feedback to the user if the request is to fast
							setTimeout(function(){
								css.saveCampaign = 'icon-save';
								$scope.$apply();
							}, 200);
						}, function(){ /* ERROR */ }
					);
				};

				action.addEvent = function(e){
					$scope.campaign.events.push({
						name : 0,
						price : 0
					});
				};

				action.setStatus = function(e, status){
					$scope.campaign.status = status;
					flag.showCampaignStatusOptions = false;
				};

				action.reset		= function(e){ $scope.campaign = ng.copy(campaign); };
				action.changeStatus	= function(e){ flag.showCampaignStatusOptions = true; };
				action.removeEvent	= function(e, index){ $scope.campaign.events.splice(index, 1); };
			}
		])
	;

})(document, window);
