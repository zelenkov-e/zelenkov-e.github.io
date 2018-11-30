import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.directive("myDirective",function(){
  return{
    restrict:"E",
    template:'<h1>hello {{myCtrl.user}}</h1>',
    controller: function(){
         this.user = 'Ivan'
    },
    controllerAs:"myCtrl"
  }
});
