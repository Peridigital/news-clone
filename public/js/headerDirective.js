angular.module('pnoApp')
.directive('headerDirective', function() {
  return {
    templateUrl: "views/header.html",
    restrict: 'E',
    scope: {
      genre: '=',
      genreClass: '=',
      genreText: '='
    },
    controller: function( $scope ) {
      $scope.selectCard = function () {

      }
    },
    link: function(scope, element, attributes ) {
    }
  }
});
