(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)
;

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.view.html'
	})
	.state('categories', {
		url: '/categories',
		templateUrl: 'templates/categories.view.html',
		controller: 'CategoriesViewController as ctrl',
		resolve: {
			categories: ['MenuDataService', function(MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	})
	.state('items', {
		url: '/items/{categoryShortName}',
		templateUrl: 'templates/items.view.html',
		controller: 'ItemsViewController as ctrl',
		resolve: {
			items: ['$stateParams', 'MenuDataService',
				function($stateParams, MenuDataService) {
					return MenuDataService
						.getItemsForCategory($stateParams.categoryShortName);
				}]
		}
	})
	;
}

})();
