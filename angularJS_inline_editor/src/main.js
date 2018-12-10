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
