angular.module('pnoApp')
.directive('footerTemplateDirective', function() {
  return {
    templateUrl: "views/footerTemplate.html",
    restrict: 'E',
    scope: {

    },
    controller: function( $scope, $state, weatherService ) {

      $scope.getWeatherByZipCode = function () {
        var zipcode = parseInt($scope.zipcode)
        var checkZip = $scope.zipcode
        if (String(checkZip).length === 5 && typeof zipcode === 'number') {

          weatherService.getWeatherByZipCode($scope.zipcode).then(function (res) {
            if (res) {
              $scope.weather = res
              $scope.weatherEvent = true

              $scope.weatherIcon = 'http://openweathermap.org/img/w/'+ $scope.weather.weather[0].icon + '.png'
              $scope.temp = parseInt($scope.weather.main.temp)
            } else {
              $scope.zipcode = 'Invalid'
              console.log('Invalid Zipcode');
            }
          })
        } else {
          $scope.zipcode = 'Invalid'
          console.log('Not Zipcode');
        }
      }
    },
    link: function(scope, element, attributes ) {
    }
  }
});
