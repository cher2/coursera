(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsViewController', ItemsViewController)
;

ItemsViewController.$inject = ['items'];
function ItemsViewController(items) {
	var ctrl = this;
	ctrl.items = items;
}

})();
