'use strict';

angular.module('app').controller('DemoController', function($scope
// ,$http
) {
	// $http.get('data-api.json').success(function(response) {
	// $scope.fields = response.data;
	var testData = [ {
		"x" : 557,
		"y" : 35,
		"z" : 100,
		"height" : 130,
		"width" : 925,
		"name" : "Menu Options",
		"cssClass" : "class_red",
		"id" : 37,
		"description" : "Menu"
	}, {
		"x" : 822,
		"y" : 274,
		"z" : 0,
		"height" : 250,
		"width" : 829,
		"name" : "AngularJS Main Logo",
		"cssClass" : "class_red",
		"id" : 35,
		"description" : "AngularJS Main Logo"
	}, {
		"x" : 1298,
		"y" : 706,
		"z" : 0,
		"height" : 333,
		"width" : 492,
		"name" : "Angular2",
		"cssClass" : "class_red",
		"id" : 36,
		"description" : "Angular2 Button"
	}, {
		"x" : 699,
		"y" : 704,
		"z" : 0,
		"height" : 338,
		"width" : 593,
		"name" : "Angular1",
		"cssClass" : "class_red",
		"id" : 38,
		"description" : "Angular1 Button"
	} ];
	
	$scope.fields900 = testData.slice(0);
	$scope.fields600 = testData.slice(0);
	
	$scope.onAddArea = function(ev, boxId, areas, area) {
		console.log("area added");
	}
	$scope.onRemoveArea = function(ev, boxId, areas, area) {
		$scope.log900= JSON.stringify(areas);
		$scope.$apply();
		if (area.id) {
			//since new areas doesn't have id
			console.log("one of my initial areas has been removed " + area.id);
		}
	}
	
	$scope.onChangeAreas900 = function(ev, boxId, areas, area) {
		console.log(areas);
		$scope.log900 = JSON.stringify(areas);
		$scope.$apply();
	}
	
	$scope.onChangeAreas600 = function(ev, boxId, areas, area) {
		$scope.log600 = JSON.stringify(areas);
		$scope.$apply();
	}

	// });
});