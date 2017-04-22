angular.module('pnoApp').service('weatherService', function($http) {
  this.getWeatherByZipCode = function (zipcode) {

    var url = 'https://www.zipcodeapi.com/rest/qL4i4xhL347v3vfU2y3HSXDEGPllUm4k89CcGTYKX5f1BvWE40lWXYBEOWZIj42r/info.json/' + zipcode + '/degrees'

    return $http({
      method: "GET",
      url: 'http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&appid=a486883e91e7a92d1ee27560c15451de&units=imperial'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR!', err);
    })

  }


});
