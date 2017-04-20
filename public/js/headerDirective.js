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
    controller: function( $scope, $state ) {

      $scope.search = function () {
        $state.go('search', {search: $scope.searchParam})
      }
    },
    link: function(scope, element, attributes ) {
    }
  }
});
