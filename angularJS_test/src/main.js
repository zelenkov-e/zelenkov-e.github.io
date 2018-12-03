import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.message = 'USER';
      $scope.text = 'fill out this form ..';
      $scope.showElement = function(firstName, lastName) {
        $scope.answer = `hello  ${firstName} ${lastName} !`;
      };
    },

    template: `<h3>{{ message }}</h3>
    <p>{{ text }}</p>
    <input type = 'text' ng-model='firstName'/>
    <input type = 'text' ng-model='lastName'/>
    <button ng-click=showElement(firstName,lastName)>click</button>
    <p>{{ answer }}</p>
    `,
  };
});

// template: require('ng-cache!./template.html'),
// templateUrl: 'template.html',
