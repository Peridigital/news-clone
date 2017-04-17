angular.module('pnoApp').controller('searchCtrl', function($scope, $state, $stateParams, pageService, articleService) {

  $scope.genre = 'Home'
  $scope.genreClass = 'home'
  $scope.genreText = 'homeText'
  $scope.genreHeadline = 'homeHeadline'

  $scope.articles = articleService.getArticlesBySearch($stateParams.search)
  if ($scope.articles) {
    $scope.resultCount = $scope.articles.articles.length
  } else {
    $scope.resultCount = 0
    $scope.articles = {
      articles: []
    }
  }
  
  $scope.searchParam = $stateParams.search

  $scope.search = function () {
    $state.go('search', {search: $scope.searchParam}, {reload: true})
  }



})
