angular.module('pnoApp').service('pageService', function() {
  this.changePage = function (genre) {

    switch (genre) {
      case 'politics':
        return {
          genre: 'Politics',
          genreClass: 'politics',
          genreText: 'politicsText',
          genreHeadline: 'politicsHeadline',
          genreArticle: 'politicsArticle'

        }
      break;
      case 'us':
        return {
          genre: 'U.S.',
          genreClass: 'us',
          genreText: 'usText',
          genreHeadline: 'usHeadline',
          genreArticle: 'usArticle'

        }
      break;
      case 'entertainment':
        return {
          genre: 'Entertainment',
          genreClass: 'entertainment',
          genreText: 'entertainmentText',
          genreHeadline: 'entertainmentHeadline',
          genreArticle: 'entertainmentArticle'

        }
      break;
      case 'tech':
        return {
          genre: 'Tech',
          genreClass: 'tech',
          genreText: 'techText',
          genreHeadline: 'techHeadline',
          genreArticle: 'techArticle'

        }
      break;
      case 'science':
        return {
          genre: 'Science',
          genreClass: 'science',
          genreText: 'scienceText',
          genreHeadline: 'scienceHeadline',
          genreArticle: 'scienceArticle'

        }
      break;
      case 'health':
        return {
          genre: 'Health',
          genreClass: 'health',
          genreText: 'healthText',
          genreHeadline: 'healthHeadline',
          genreArticle: 'healthArticle'

        }
      break;
      case 'travel':
        return {
          genre: 'Travel',
          genreClass: 'travel',
          genreText: 'travelText',
          genreHeadline: 'travelHeadline',
          genreArticle: 'travelArticle'

        }
      break;
      default:

    }
  }
})
