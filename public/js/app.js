angular.module('pnoApp', ['ui.router', 'angularUtils.directives.dirPagination', 'ngSanitize'])

  .config( function ($urlRouterProvider, $stateProvider ){

$urlRouterProvider.when('', '/');

  $stateProvider
    .state('home', {
      templateUrl: 'views/home.html',

      url: '/',
      controller: 'homeCtrl'

    })
    .state('genre', {
      templateUrl: 'views/genre.html',

      url: '/articles/:genre',
      controller: 'genreCtrl'

    })


    .state('article', {
      templateUrl: 'views/article.html',

      url: '/articles/:genre/:id',
      controller: 'articleCtrl'

    })
    .state('search', {
      templateUrl: 'views/search.html',
      params: {
        search: null
      },
      url: '/search/:search',
      controller: 'searchCtrl'

    })



})
