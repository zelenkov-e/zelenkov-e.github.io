import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.message = 'USER';
      $scope.text = 'fill out this form ..';
      $scope.showElement = function(firstName, lastName) {
        $scope.answer = `hello ${firstName} ${lastName}`;
      };
    },

    template: require('./template.html'),
  };
});
