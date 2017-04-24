angular.module('pnoApp').controller('adminCtrl', function($scope, $state, $stateParams, $timeout, pageService, weatherService, articleService) {
  $scope.composer = true;
  $scope.enterPage = function enterPage() {

    $scope.genre = 'News'
    $scope.genreClass = 'home'
    $scope.genreText = 'homeText'
    $scope.genreHeadline = 'homeHeadline'
    $scope.genreArticle = 'homeArticle'
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
  $scope.parseGenre = function () {
    for (var i = 0; i < $scope.genres.length; i++) {


      if ($scope.genres[i].genre == $scope.articleGenre) {

        return $scope.genres[i].id
      }
    }
  }
  $scope.switchToPreview = function () {
    $scope.composer = false;
    $scope.preview = true;
    $scope.test()
  }
  $scope.switchToComposer = function () {
    $scope.composer = true;
    $scope.preview = false;
  }
  $scope.test = function () {
    $scope.article = {
      img: $scope.imgUrl,
      headline: $scope.headline,
      author: $scope.author,
      postdate: String(new Date()),
      relatedTag: $scope.relatedTag,
      genreId: $scope.parseGenre(),
      tagline: $scope.tagline,
      views: 0,
      snippet: $scope.snippet,
      body: $scope.articleBody
    }
    var date = new Date($scope.article.postdate)

    var month
    switch (date.getMonth()) {
      case 0:
        month = 'January'
      break;
      case 1:
        month = 'February'
      break;
      case 2:
        month = 'March'
      break;
      case 3:
        month = 'April'
      break;
      case 4:
        month = 'May'
      break;
      case 5:
        month = 'June'
      break;
      case 6:
        month = 'July'
      break;
      case 7:
        month = 'August'
      break;
      case 8:
        month = 'September'
      break;
      case 9:
        month = 'October'
      break;
      case 10:
        month = 'November'
      break;
      case 11:
        month = 'December'
      break;
      default:

    }
    $scope.article.date = month + ' ' + date.getDate() + ', ' + date.getFullYear()
  }

  $scope.imgUrl = 'Image URL'
  $scope.genres = [
    {
      genre: 'Politics',
      id: 1
    },
    {
      genre: 'U.S.',
      id: 2
    },
    {
      genre: 'Entertainment',
      id: 3
    },
    {
      genre: 'Tech',
      id: 4
    },
    {
      genre: 'Science',
      id: 5
    },
    {
      genre: 'Health',
      id: 6
    },
    {
      genre: 'Travel',
      id: 7
    }
  ]
  $scope.test()
})
