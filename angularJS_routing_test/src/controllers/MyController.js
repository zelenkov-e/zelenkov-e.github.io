function MyController($scope, MyFactory) {
  $scope.message = MyFactory.getMessage();
}

export default MyController;
