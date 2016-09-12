(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
	$scope.lunchItems = "";
	$scope.message = "";

	var emptyInputMsg = "Please enter data first";
	var enjoyMsg = "Enjoy!";
	var tooMuchMsg = "Too much!";
	var maxNumItemsToEnjoy = 3;

	$scope.check = function() {
		var numItems = getNumItems($scope.lunchItems);
		if (numItems === 0) {
			$scope.message = emptyInputMsg;
		}
		else if (numItems <= maxNumItemsToEnjoy) {
			$scope.message = enjoyMsg;
		}
		else {
			$scope.message = tooMuchMsg;
		}
	};

	// initialize the message
	$scope.check();
}

function getNumItems(input) {
	var items = input.split(",");
	return items.reduce(function(v, e) {
			// only non-empty string after trimming is counted as a valid item
			var trimmedStrVal = e.trim();
			if (trimmedStrVal.length > 0)
				return v + 1;
			else
				return v;
		}, 0);
}

})();
