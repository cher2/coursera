(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
	templateUrl: 'templates/items.component.html',
	controller: 'ItemsComponentController',
	controllerAs: 'ctrl',
	bindings: {
		items: '<'
	}
})
;

})();
