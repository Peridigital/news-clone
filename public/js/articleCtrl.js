angular.module('pnoApp').controller('articleCtrl', function($scope, $state, $stateParams, $location, pageService, articleService) {
  $scope.enterPage = function enterPage() {
    var pageInfo = pageService.changePage($stateParams.genre)
    if (pageInfo) {
      $scope.genre = pageInfo.genre
      $scope.genreClass = pageInfo.genreClass
      $scope.genreText = pageInfo.genreText
      $scope.genreHeadline = pageInfo.genreHeadline
    } else {
      // $state.go('home')
    }

  }
  $scope.enterPage()

  $scope.article = articleService.getArticleById($stateParams.id)
  if ($scope.article) {
    
  } else {
    $scope.invalid = true
  }


})
