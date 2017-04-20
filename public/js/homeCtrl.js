angular.module('pnoApp').controller('homeCtrl', function($scope, $state, $stateParams, pageService, articleService) {
  $scope.enterPage = function enterPage() {

    $scope.genre = 'News'
    $scope.genreClass = 'home'
    $scope.genreText = 'homeText'
    $scope.genreHeadline = 'homeHeadline'
  }
  $scope.enterPage()
  articleService.getHomeArticles().then(function (res) {
    $scope.articles = res
  })
})
