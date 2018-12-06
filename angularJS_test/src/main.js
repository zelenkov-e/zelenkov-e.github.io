import angular from 'angular';

var myApp = angular.module('myApp', []);
// var myApp = angular.module('myApp', ['ngRoute']);

myApp.directive('fooBar', () => {
  var phones = [
    {
      name: 'Nokia Lumia 630',
      year: 2014,
      price: 200,
      company: {
        name: 'Nokia',
        country: 'Финляндия',
      },
    },
    {
      name: 'Samsung Galaxy S 4',
      year: 2014,
      price: 400,
      company: {
        name: 'Samsung',
        country: 'Республика Корея',
      },
    },
    {
      name: 'Mi 5',
      year: 2015,
      price: 300,
      company: {
        name: 'Xiaomi',
        country: 'Китай',
      },
    },
  ];
  return {
    restrict: 'E',
    template: require('./template/bookmarks.html'),
    link: function(scope) {
      scope.phones = phones;
    },
  };
});

myApp.directive('formDirective', () => {
  return {
    restrict: 'E',
    template: require('./template/template.html'),
    controller: function($scope) {
      this.user = {
        message: 'USER',
        text: 'fill out this form ..',
        showElement: function(firstName, lastName) {
          $scope.answer = `hello ${firstName} ${lastName}`;
        },
      };
    },
    controllerAs: 'myCtrl',
  };
});

myApp.controller('scopeCtrl', $scope => {
  $scope.name = 'HARRY';
  console.log($scope);
});

myApp.directive('scopeDirective', () => {
  return {
    //незавимый scope в директиве ,
    //отделяем scope ctrl от scope directive
    //чтобы при баиндинге не изменить scope ctrl
    scope: true,
    //если  scope: false  - будет меняться scope  контроллера
    restrict: 'E',
    template: '<p> this directive -  {{name}} <input type="text" ng-model ="name"></p>',
    link: function(scope) {
      console.log(scope);
    },
  };
});

myApp.controller('callCtrl', $scope => {
  $scope.name = 'Ivan Ivanov';
  $scope.color = 'red';
});

myApp.directive('callDirective', () => {
  return {
    scope: {
      //отделяем scope ctrl от scope directive
      //только на чтение
      name: '@',
      //scope ctrl == scope directive
      // 2 х сторонинний биндинг
      color: '=',
    },
    restrict: 'E',
    template:
      '<p>{{name}}</p> <input type ="text" ng-model="name"/>' +
      '<p>color: {{color}}</p> <input type="text" ng-model="color"  />',
  };
});
