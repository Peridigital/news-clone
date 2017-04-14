angular.module('pnoApp').service('articleService', function() {
  this.getArticlesByGenre = function () {
    return articles
  }



  var articles = {
    topArticle: {
      img: 'https://unsplash.it/1000/600?random',
      headline: 'How To Win Friends And Influence People with Blackmail'
    },
    subTopArticles: [
      {
        img: 'https://unsplash.it/1000/600?random',
        headline: 'Death: Do You Really Need It? This Will Help You Decide!',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?random',
        headline: 'You Can Thank Us Later - 3 Reasons To Stop Thinking About Life',
        tagline: 'Stop thinking about Life!'
      }
    ],
    articles: [

    ]
  }
})
