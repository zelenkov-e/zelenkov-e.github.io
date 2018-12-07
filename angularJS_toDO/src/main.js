import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.controller('listController', function() {
  this.title = 'toDo';
});

myApp.directive('listDirective', () => {
  let LISTBUTTON = {
    add: 'add',
    delete: 'delete',
  };

  return {
    restrict: 'A',
    template: require('./template/listTemplate.html'),
    link: function(scope) {
      scope.lists = LISTBUTTON;
      scope.tasks = [];
      scope.addElem = function(value) {
        scope.tasks.push(scope.value);
      };
      scope.clearElem = function() {
        scope.tasks = [];
      };
    },
  };
});
