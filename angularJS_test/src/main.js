import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.controller("myController", function($scope){
  $scope.user = {
    name:''
  },
  $scope.showName = function(user){
    user.name = 'ivan'
    // console.log('hello')
    // '<p>hello {{$scope.user}}</p>'
  }
});

// myApp.directive("myDirective",function(){
//   return{
//     restrict:"E",
//     // ВОТ ТАК НЕ РАБОТАЕТ !!!!!!!!!!     
//     // templateUrl:'template.html'
//     template:`
//     <p> send data : </p>
//     <input type = 'text'>
//     `
//   }
// });
