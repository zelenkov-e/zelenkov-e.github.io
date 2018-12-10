import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.controller('listController', function($scope) {
  let LISTBUTTON = {
    add: 'add',
    delete: 'delete',
  };
  $scope.title = 'toDo';

  $scope.lists = LISTBUTTON;
  $scope.tasks = [];
  $scope.addElem = function(value) {
    $scope.tasks.push(value);
  };
  $scope.clearAll = function() {
    $scope.tasks = [];
  };
  $scope.deleteElem = function() {
    $scope.task.splice(this.$index, 1);
  };
  $scope.getTotalTodos = function() {
    return $scope.tasks.length;
  };
});

myApp.directive('listDirective', () => {
  return {
    restrict: 'A',
    template: require('./template/listTemplate.html'),
  };
});
