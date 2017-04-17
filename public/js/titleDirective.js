angular.module('pnoApp')
.directive('titleDirective', function() {
  return {
    templateUrl: "views/title.html",
    restrict: 'E',
    scope: {

    },
    controller: function( $scope, $state, $stateParams ) {
      $scope.genre = $stateParams.genre

    },
    link: function(scope, element, attributes ) {
    }
  }
});
