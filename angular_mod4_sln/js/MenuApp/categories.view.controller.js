(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesViewController', CategoriesViewController)
;

CategoriesViewController.$inject = ['categories'];
function CategoriesViewController(categories) {
	var ctrl = this;
	ctrl.categories = categories;
}

})();
