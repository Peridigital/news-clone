angular.module('pnoApp').controller('searchCtrl', function($scope, $state, $stateParams, pageService, articleService) {

  $scope.searchParam = $stateParams.search
  $scope.search = function () {
    $state.go('search', {search: $scope.searchParam})
  }

})
