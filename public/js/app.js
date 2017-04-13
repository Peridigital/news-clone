angular.module('pnoApp', ['ui.router'])

  .config( function ($urlRouterProvider, $stateProvider ){

$urlRouterProvider.when('', '/');

  $stateProvider
    .state('home', {
      templateUrl: 'views/home.html',

      url: '/'

    })
    .state('genre', {
      templateUrl: 'views/genre.html',

      url: '/articles/:id'

    })



})
