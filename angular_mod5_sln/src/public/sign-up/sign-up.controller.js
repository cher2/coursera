(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService', '$http', 'ApiPath'];

function SignUpController(MyInfoService, $http, ApiPath) {
	var ctrl = this;

	ctrl.favMenuItemValidated = true;
	ctrl.submitSuccess = false;

	ctrl.submit = function() {
		validateMenuShortName(ctrl.favMenuShortName);
	}

	function submitInternal() {
		MyInfoService.signUp(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phone,  ctrl.favMenuItem);
	}

	function validateMenuShortName(menuShortName) {
		var menuUrl = ApiPath + '/menu_items/' + menuShortName + '.json';
		return $http.get(menuUrl)
			.then(function(response) {
				ctrl.favMenuItemValidated = true;
				ctrl.favMenuItem = response.data;
				ctrl.submitSuccess = true;
				submitInternal();
			})
			.catch(function() {
				ctrl.favMenuItemValidated = false;
				ctrl.submitSuccess = false;
			});
	}
}

})();
