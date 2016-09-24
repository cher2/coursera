(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
;

ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
	var toBuy = this;

	toBuy.items = ShoppingListCheckOffService.toBuyItems;

	toBuy.buy = function(itemIdx) {
		ShoppingListCheckOffService.buy(itemIdx);
	}
}

AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
	var bought = this;

	bought.items = ShoppingListCheckOffService.boughtItems;
}


ShoppingListCheckOffService.$inject = [];
function ShoppingListCheckOffService() {
	var checkOffSvc = this;

	checkOffSvc.toBuyItems = [
		{ name: 'cookies', quantity: 10 },
		{ name: 'chips', quantity: 5 },
		{ name: 'salsa', quantity: 3 },
		{ name: 'toothbrushes', quantity: 2 },
		{ name: 'toothpastes', quantity: 2 }
	];

	checkOffSvc.boughtItems = [];

	checkOffSvc.buy = function(itemIdx) {
		var items = checkOffSvc.toBuyItems.splice(itemIdx, 1);
		items.forEach(function(e) { checkOffSvc.boughtItems.push(e); });
	}
}

})();
