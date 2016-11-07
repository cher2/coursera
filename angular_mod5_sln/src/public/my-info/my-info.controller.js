(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];

function MyInfoController(MyInfoService) {
	var ctrl = this;

	ctrl.userInfo = MyInfoService.userInfo;
}

})();

