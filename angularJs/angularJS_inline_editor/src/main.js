import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.controller('inlineEditorController', function($scope) {
  $scope.value = ' Edit me.. ';

  $scope.showtooltip = false;

  $scope.hideTooltip = () => {
    $scope.showtooltip = false;
    console.log($scope.value);
  };

  $scope.toggleTooltip = event => {
    event.stopPropagation();
    $scope.showtooltip = !$scope.showtooltip;
  };
});
