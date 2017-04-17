angular.module('pnoApp').service('articleService', function() {
  this.getArticlesByGenre = function (genre) {
    if (genre === 'politics') {
      return politicsArticles
    } else {
      return articles
    }

  }

  this.getArticlesBySearch = function (search) {
    console.log(search);
    if (search) {
      if (search === 'Correct test') {
        return articles
      } else if (search === 'Test') {
        return politicsArticles
      }
     }
  }

  this.getArticleById = function (id) {
    if (id == '1') {
      return article
    }
  }

  var article = {
    img: 'https://unsplash.it/1000/600?image=0',
    headline: 'How To Win Friends And Influence People with Blackmail'
  }
  var articles = {
    topArticle: {
      img: 'https://unsplash.it/1000/600?image=0',
      headline: 'How To Win Friends And Influence People with Blackmail',
      relatedArticles: [
        {
          headline: 'SHOCKING: Blackmail now illegal?'
        },
        {
          headline: 'Get The Most Out of Prison and Facebook'
        },
        {
          headline: '	13 Legends About Blackmail'
        },
        {
          headline: 'She did WHAT with WHOM?!'
        },
      ]
    },
    subTopArticles: [
      {
        img: 'https://unsplash.it/1000/600?image=10',
        headline: 'Death: Do You Really Need It? This Will Help You Decide!',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=200',
        headline: 'You Can Thank Us Later - 3 Reasons To Stop Thinking About Life',
        tagline: 'Stop thinking about Life!'
      }
    ],
    hotArticles: [
      {
        img: 'https://unsplash.it/1000/600?image=90',
        headline: 'Greed - So Simple Even Your Kids Can Do It',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=500',
        headline: 'Get Rid of Blogs For Good',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=64',
        headline: '	17 Tricks About Peach Trees You Wish You Knew Before',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=120',
        headline: 'What Your Customers Really Think About Your Bees?',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=640',
        headline: '5 Reasons Cherry Pie Is A Waste Of Time',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },

    ],
    articles: [

      {
        img: 'https://unsplash.it/1000/600?image=640',
        headline: '5 Reasons Cherry Pie Is A Waste Of Time',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },{
        img: 'https://unsplash.it/1000/600?image=640',
        headline: '5 Reasons Cherry Pie Is A Waste Of Time',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
    ]
  }

  var politicsArticles = {
    topArticle: {
      img: 'https://unsplash.it/1000/600?image=30',
      headline: '5 Secrets: How To Use Fire To Create A Successful Business',
      relatedArticles: [
        {
          headline: 'SHOCKING: Blackmail now illegal?'
        },
        {
          headline: 'Get The Most Out of Prison and Facebook'
        },
        {
          headline: '	13 Legends About Blackmail'
        },
        {
          headline: 'She did WHAT with WHOM?!'
        },
      ]
    },
    subTopArticles: [
      {
        img: 'https://unsplash.it/1000/600?image=400',
        headline: 'Death: Do You Really Need It? This Will Help You Decide!',

        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=50',
        headline: 'You Can Thank Us Later - 3 Reasons To Stop Thinking About Life',
        tagline: 'Stop thinking about Life!'
      }
    ],
    articles: [
      {
        img: 'https://unsplash.it/1000/600?image=90',
        headline: 'Greed - So Simple Even Your Kids Can Do It',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=500',
        headline: 'Get Rid of Blogs For Good',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=64',
        headline: '	17 Tricks About Peach Trees You Wish You Knew Before',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=120',
        headline: 'What Your Customers Really Think About Your Bees?',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=640',
        headline: '5 Reasons Cherry Pie Is A Waste Of Time',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=320',
        headline: '5 Surefire Ways Cindy Will Drive Your Business Into The Ground',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=410',
        headline: 'Getting Her Back: Consquences Be Damned',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=480',
        headline: 'The Secret Of Being Terrible',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=420',
        headline: 'Want More Money? Begin A Danger Fraught Adventure',
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
    ]
  }
})
