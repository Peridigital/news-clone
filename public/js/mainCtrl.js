angular.module('pnoApp').controller('mainCtrl', function($scope, $stateParams, service) {

  $scope.genre = $stateParams
  console.log($scope.genre);
})
