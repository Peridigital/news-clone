angular.module('pnoApp').service('pageService', function() {
  this.changePage = function (id) {
    
    switch (id) {
      case 'politics':
        return {
          genre: 'Politics',
          genreClass: 'politics',
          genreText: 'politics-text'

        }
      break;
      case 'us':
        return {
          genre: 'U.S.',
          genreClass: 'us',
          genreText: 'us-text'

        }
      break;
      case 'entertainment':
        return {
          genre: 'Entertainment',
          genreClass: 'entertainment',
          genreText: 'entertainment-text'

        }
      break;
      case 'tech':
        return {
          genre: 'Tech',
          genreClass: 'tech',
          genreText: 'tech-text'

        }
      break;
      case 'science':
        return {
          genre: 'Science',
          genreClass: 'science',
          genreText: 'science-text'

        }
      break;
      case 'health':
        return {
          genre: 'Health',
          genreClass: 'health',
          genreText: 'health-text'

        }
      break;
      case 'travel':
        return {
          genre: 'Travel',
          genreClass: 'travel',
          genreText: 'travel-text'

        }
      break;
      default:

    }
  }
})
