(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
;

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
	var narrowItDown = this;

	narrowItDown.searchTerm = "";
	narrowItDown.found = [];
	narrowItDown.queryError = null;

	narrowItDown.search = function(explicitlyTriggered) {
		var searchTerm = narrowItDown.searchTerm.trim();
		if (searchTerm.length > 0) {
			MenuSearchService
			.getMatchedMenuItems(searchTerm)
			.then(function(response) {
				narrowItDown.found = response;
				updateQueryError();
			})
			.catch(function(error) {
				narrowItDown.found = [];
				updateQueryError();
			});
		}
		else {
			narrowItDown.found = [];
			if (explicitlyTriggered) updateQueryError();
			else narrowItDown.queryError = null;
		}
	}

	function updateQueryError() {
		if (narrowItDown.found.length === 0) {
			narrowItDown.queryError = "Nothing found";
		}
		else {
			narrowItDown.queryError = null;
		}
	}

	narrowItDown.remove = function(index) {
		narrowItDown.found.splice(index, 1);
	}
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
	var svc = this;

	svc.getMatchedMenuItems = function(searchTerm) {
		var menuItemsUrl = ApiBasePath + '/menu_items.json';
		return $http({
			method: 'GET',
			url: menuItemsUrl
		})
		.then(function(response) {
			var foundItems = response.data.menu_items
				.filter(function(e) {
					return e.description.toLowerCase()
						.includes(searchTerm.toLowerCase());
				});
			return foundItems;
		});
	}
}

FoundItemsDirective.$inject = [];
function FoundItemsDirective() {
	var ddo = {
		scope: {
			queryError: '<',
			foundItems: '<',
			onRemove: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'queryRst',
		bindToController: true,
		templateUrl: 'foundItems.html',
		restrict: 'E'
	};

	return ddo;
}

FoundItemsDirectiveController.$inject = [];
function FoundItemsDirectiveController() {
	var queryRst = this;
}

})();
