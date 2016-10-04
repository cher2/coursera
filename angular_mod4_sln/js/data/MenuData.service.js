(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
;

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
	var svc = this;

	svc.getAllCategories = function() {
		return $http({
			method: 'GET',
			url: ApiBasePath + '/categories.json'
		})
		.then(function(response) {
			return response.data;
		});
	}

	svc.getItemsForCategory = function(categoryShortName) {
		return $http({
			method: 'GET',
			url: ApiBasePath + '/menu_items.json?category=' + categoryShortName
		})
		.then(function(response) {
			return response.data.menu_items;
		});
	}
}

})();
