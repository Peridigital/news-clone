angular.module('pnoApp')
.directive('homeStoryDirective', function() {
  return {
    templateUrl: "views/homeStory.html",
    restrict: 'E',
    scope: {
      genre: '=',
      genreClass: '=',
      genreText: '=',
      genreHeadline: '=',
      articles: '='
    },
    controller: function( $scope, $state ) {

      $scope.linkGenre = $scope.genre.toLowerCase().split('.').join('')
    },
    link: function(scope, element, attributes ) {
    }
  }
});
