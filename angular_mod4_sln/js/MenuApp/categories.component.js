(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
	templateUrl: 'templates/categories.component.html',
	controller: 'CategoriesComponentController',
	controllerAs: 'ctrl',
	bindings: {
		categories: '<'
	}
})
;

})();
