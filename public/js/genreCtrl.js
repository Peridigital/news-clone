angular.module('pnoApp').controller('genreCtrl', function($scope, $state, $stateParams, pageService, articleService) {
  $scope.enterPage = function enterPage() {
    var pageInfo = pageService.changePage($stateParams.genre)
    if (pageInfo) {
      $scope.genre = pageInfo.genre
      $scope.genreClass = pageInfo.genreClass
      $scope.genreText = pageInfo.genreText
      $scope.genreHeadline = pageInfo.genreHeadline
    } else {
      $state.go('home')
    }

  }
  $scope.enterPage()
  $scope.articles = articleService.getArticlesByGenre($scope.genreClass);

})
