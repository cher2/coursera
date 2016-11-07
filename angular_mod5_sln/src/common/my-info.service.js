(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);

MyInfoService.$inject = [];
function MyInfoService() {
	var service = this;

	service.userInfo = { hasSignedUp: false };

	service.signUp = function(firstName, lastName, email, phone, favMenuItem) {
		service.userInfo.firstName = firstName;
		service.userInfo.lastName = lastName;
		service.userInfo.email = email;
		service.userInfo.phone= phone;
		service.userInfo.favMenuItem = favMenuItem;
		service.userInfo.hasSignedUp = true;
	}
}

})();
