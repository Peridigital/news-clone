angular.module('pnoApp').service('pageService', function() {
  this.changePage = function (id) {

    switch (id) {
      case 'politics':
        return {
          genre: 'Politics',
          genreClass: 'politics',
          genreText: 'politicsText',
          genreHeadline: 'politicsHeadline'

        }
      break;
      case 'us':
        return {
          genre: 'U.S.',
          genreClass: 'us',
          genreText: 'usText',
          genreHeadline: 'usHeadline'

        }
      break;
      case 'entertainment':
        return {
          genre: 'Entertainment',
          genreClass: 'entertainment',
          genreText: 'entertainmentText',
          genreHeadline: 'entertainmentHeadline'

        }
      break;
      case 'tech':
        return {
          genre: 'Tech',
          genreClass: 'tech',
          genreText: 'techText',
          genreHeadline: 'techHeadline'

        }
      break;
      case 'science':
        return {
          genre: 'Science',
          genreClass: 'science',
          genreText: 'scienceText',
          genreHeadline: 'scienceHeadline'

        }
      break;
      case 'health':
        return {
          genre: 'Health',
          genreClass: 'health',
          genreText: 'healthText',
          genreHeadline: 'healthHeadline'

        }
      break;
      case 'travel':
        return {
          genre: 'Travel',
          genreClass: 'travel',
          genreText: 'travelText',
          genreHeadline: 'travelHeadline'

        }
      break;
      default:

    }
  }
})
