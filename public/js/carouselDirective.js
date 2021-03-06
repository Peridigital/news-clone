angular.module('pnoApp')
.directive('carouselDirective', function($timeout) {
  return {
    templateUrl: "views/carousel.html",
    restrict: 'E',
    scope: {
      articles: '=',
      // genre: '=',
      genreClass: '='
      // genreText: '='
    },
    controller: function( $scope, $state ) {

      $scope.search = function () {
        $state.go('search', {search: $scope.searchParam})
      }
    },
    link: function(scope, element, attributes ) {
      $timeout(function () {
        $('.home-carousel').slick({
          accessibility: true,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          arrows: false,
        });
      })
    }
  }
});
