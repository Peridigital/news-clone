angular.module('pnoApp').controller('homeCtrl', function($scope, $state, $stateParams, pageService) {
  var sum = 0
  for (var i = 0; i < 51; i++) {
    sum += i
  }
  console.log(sum);
})
