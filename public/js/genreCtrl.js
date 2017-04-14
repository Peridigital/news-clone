angular.module('pnoApp').controller('genreCtrl', function($scope, $state, $stateParams, pageService, articleService) {
  $scope.enterPage = function enterPage() {
    var pageInfo = pageService.changePage($stateParams.id)
    if (pageInfo) {
      $scope.genre = pageInfo.genre
      $scope.genreClass = pageInfo.genreClass
      $scope.genreText = pageInfo.genreText
    } else {
      $state.go('home')
    }

  }
  $scope.enterPage()
  $scope.articles = articleService.getArticlesByGenre();

})
