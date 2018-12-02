myApp.directive('myDirective', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.message = 'helloController';
      $scope.text = 'Контроллер без $scope';
      $scope.showElement = function(name) {
        console.log('hello  ' + name);
      };
    },
    template: `<h3>{{ message }}</h3>
    <p>{{ text }}</p>
    <input type = 'text' ng-model='name'/>
    <button ng-click=showElement(name)>click</button>
    `,
  };