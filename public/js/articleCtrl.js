angular.module('pnoApp').controller('articleCtrl', function($scope, $state, $stateParams, $location, $document, $window, pageService, articleService) {
  $scope.enterPage = function enterPage() {
    var pageInfo = pageService.changePage($stateParams.genre)
    if (pageInfo) {
      $scope.genre = pageInfo.genre
      $scope.genreClass = pageInfo.genreClass
      $scope.genreText = pageInfo.genreText
      $scope.genreHeadline = pageInfo.genreHeadline
      $scope.genreArticle = pageInfo.genreArticle
    } else {
      $state.go('home')
    }

  }
  $scope.enterPage()
  articleService.getArticlesByGenre($scope.genreClass).then(function (res) {
    $scope.articles = res
  });
  articleService.getArticleById($stateParams.id).then(function (res) {
    $scope.article = res[0]
    if ($scope.article) {
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
    } else {
      $scope.invalid = true
    }
  })


//   $document.on('scroll', function() {
//     // do your things like logging the Y-axis
//     console.log($window.scrollY);
//     // or pass this to the scope
//     // $scope.$apply(function() {
//     //     $scope.pixelsScrolled = $window.scrollY;
//     // })
// });

})
