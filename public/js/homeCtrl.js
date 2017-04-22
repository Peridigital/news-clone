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
    console.log('Testing');
  }
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
})
