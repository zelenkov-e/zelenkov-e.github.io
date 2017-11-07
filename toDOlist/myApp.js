var app = angular.module('myApp', []);
app.controller('MainController', function($scope){
		$scope.tempInput;
		$scope.taskArray = [] ;
		$scope.addNew = function(){
			$scope.taskArray.push($scope.tempInput);
			$scope.tempInput = '';
		};
		$scope.delNew = function(){
			$scope.taskArray.length = 0;
		} 
	});



