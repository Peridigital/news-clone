angular.module('pnoApp').controller('mainCtrl', function($scope, service) {
  $scope.test = service.serviceTest
})
