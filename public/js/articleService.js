angular.module('pnoApp').service('articleService', function($http) {
  this.getArticlesByGenre = function (genre) {
    return $http({
      method: "GET",
      url: '/api/articles/genre/' + genre
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR!', err);
    })

  }

  this.getArticlesBySearch = function (search) {
    return $http({
      method: "GET",
      url: '/api/articles/search/' + search
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR!', err);
    })
  }

  // this.getArticleById = function (id) {
  //   if (id == '1') {
  //     return article
  //   }
  // }
  this.getArticleById = function(id) {
    return $http({
      method: "GET",
      url: '/api/articles/id/' + id
    })
    .then(function(res) {

      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR!', err);
    })
  }


  this.getHomeArticles = function () {
    return $http({
      method: "GET",
      url: '/api/articles/home'
    })
    .then(function(res) {

      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR!', err);
    })
  }


})
