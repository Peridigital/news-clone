angular.module('pnoApp').controller('searchCtrl', function($scope, $state, $stateParams, pageService, articleService) {

  $scope.genre = 'Home'
  $scope.genreClass = 'home'
  $scope.genreText = 'homeText'
  $scope.genreHeadline = 'homeHeadline'

  articleService.getArticlesBySearch($stateParams.search).then(function (res) {
    $scope.articles = res
    if ($scope.articles) {
      $scope.resultCount = $scope.articles.length
    } else {
      $scope.resultCount = 0
      $scope.articles = {
        articles: []
      }
    }
  })


  $scope.searchParam = $stateParams.search

  $scope.search = function () {
    $state.go('search', {search: $scope.searchParam}, {reload: true})
  }



})
