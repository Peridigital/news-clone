angular.module('pnoApp').controller('homeCtrl', function($scope, $state, $stateParams, $timeout, pageService, weatherService, articleService) {
  $scope.enterPage = function enterPage() {

    $scope.genre = 'News'
    $scope.genreClass = 'home'
    $scope.genreText = 'homeText'
    $scope.genreHeadline = 'homeHeadline'
  }
  $scope.enterPage()
  articleService.getHomeArticles().then(function (res) {
    $scope.articles = res
    $timeout(function () {
      $('.home-carousel').slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
      });
    })
  })
  $scope.test = function () {
    console.log($scope.htmlVariable);
  }

})
