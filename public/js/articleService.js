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


  var article = {
    img: 'https://unsplash.it/1000/600?image=623',
    headline: 'How To Win Friends And Influence People with Blackmail',
    author: 'Bringo Jackson',
    postDate: String(new Date()),
    body: '<p> <b>Lorem ipsum:</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>' +
          '<p> Corem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. <br> <br> Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. <br> <br> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <br> <br> Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint. <br> <br> Occaecat cupidatat non proident, <a href="#">sunt in culpa</a> qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.<br> <br> Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <br> <br> Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br> <br>  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>'
  }
  var articles = {
    topArticle: {
      img: 'https://unsplash.it/1000/600?image=623',
      headline: 'How To Win Friends And Influence People with Blackmail',
      genre: 'entertainment',
      pageId: '1',
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
        postDate: String(new Date()),
        snippet: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
        tagline: 'Death, who needs it?'
      },
      {
        img: 'https://unsplash.it/1000/600?image=260',
        headline: 'Your Key To Success: A Bear',
        postDate: String(new Date()),
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

  var homeArticles = {
    topArticles: [
      {
        img: 'https://unsplash.it/1000/600?image=30',
        headline: '5 Secrets: How To Use Fire To Create A Successful Business'
      },
      {
        img: 'https://unsplash.it/1000/600?image=430',
        headline: 'Want More Money? Begin A Danger Fraught Adventure'
      },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    politics: [
    {
      img: 'https://unsplash.it/1000/600?image=430',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    us: [
    {
      img: 'https://unsplash.it/1000/600?image=420',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    entertainment: [
    {
      img: 'https://unsplash.it/1000/600?image=490',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    tech: [
    {
      img: 'https://unsplash.it/1000/600?image=437',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    science: [
    {
      img: 'https://unsplash.it/1000/600?image=999',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    health: [
    {
      img: 'https://unsplash.it/1000/600?image=436',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
    travel: [
    {
      img: 'https://unsplash.it/1000/600?image=123',
      headline: 'Want More Money? Begin A Danger Fraught Adventure'
    },
      {
        img: 'https://unsplash.it/1000/600?image=530',
        headline: 'The Secret Of Being Terrible'
      },
      {
        img: 'https://unsplash.it/1000/600?image=730',
        headline: '6 Surefire Ways Cindy Will Drive Your Business Into The Ground'
      },
      {
        img: 'https://unsplash.it/1000/600?image=830',
        headline: 'Your Key To Success: A Bear'
      }
    ],
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
