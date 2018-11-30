import angular from 'angular';

var myApp = angular.module('myApp', []);

myApp.directive("myDirective",function(){
  return{
    restrict:"E",
    template:'<p>hello {{myCtrl.user}}</p>',
    controller: function(){
         this.user = 'Ivan'
    },
    controllerAs:"myCtrl"
  }
});
