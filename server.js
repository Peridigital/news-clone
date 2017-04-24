const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js');

const db = massive.connectSync({
  connectionString : config.database
});



const app = express();
app.use(bodyParser.json());

const port = 3000;
app.use(express.static('./public'));
app.get('/api/articles/genre/:genre', (req, res) => {


  let articlePackage = {}
  db.get_genre_top_article([req.params.genre],  (err, article) => {
    articlePackage.topArticle = article[0]
    let tag = article[0].relatedtag

    db.get_genre_related_articles([tag],  (err, articles) => {
      articlePackage.topArticle.relatedArticles = articles

      db.get_genre_sub_articles([req.params.genre],  (err, articles) => {
        articlePackage.subTopArticles = articles

        db.get_genre_hot_articles([req.params.genre],  (err, articles) => {
          articlePackage.hotArticles = articles

          db.get_genre_all_articles([req.params.genre],  (err, articles) => {
            articlePackage.articles = articles
            res.status(200).json(articlePackage)

          })
        })
      })
    })

  })
  // db.get_all_injuries(function (err, injuries) {
  //   res.send(injuries);
  // })

});

app.get('/api/articles/home', (req, res) => {

  let articlePackage = {}

  db.get_top_articles( (err, articles) => {
    articlePackage.topArticles = articles
    db.get_top_articles_genre(['politics'],  (err, articles) => {
      articlePackage.politics = articles
      db.get_top_articles_genre(['us'],  (err, articles) => {
        articlePackage.us = articles
        db.get_top_articles_genre(['entertainment'],  (err, articles) => {
          articlePackage.entertainment = articles
          db.get_top_articles_genre(['tech'],  (err, articles) => {
            articlePackage.tech = articles
            db.get_top_articles_genre(['science'],  (err, articles) => {
              articlePackage.science = articles
              db.get_top_articles_genre(['health'],  (err, articles) => {
                articlePackage.health = articles
                db.get_top_articles_genre(['travel'],  (err, articles) => {
                  articlePackage.travel = articles
                  res.status(200).json(articlePackage)
                })
              })
            })
          })
        })
      })
    })
  })



});
app.get('/api/articles/search/:search', (req, res) => {

  let searchTerm = '%' + req.params.search + '%'
  db.get_article_by_search([searchTerm],  (err, article) => {
    res.status(200).json(article)
  })



});
app.get('/api/articles/id/:id', (req, res) => {


  db.get_article_by_id([req.params.id],  (err, article) => {
    res.status(200).json(article)
    let newViews = article[0].views + 1
    db.increase_view([req.params.id, newViews],  (err, article) => {


    })
  })




});

const generateArticle = () => {
  function randomEl(list) {
    let i = Math.floor(Math.random() * list.length);
    return list[i];
  }
  let adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
  let nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblet", "cupcake", "carrot", "gnome", "glitter", "potato", "salad", "toejam", "curtain", "beet", "toilet", "exorcism", "stick Figure", "mermaid Egg", "sea Barnacle", "dragon", "jellybean", "snake", "doll", "bushe", "cookie", "apple", "ice Cream", "ukulele", "kazoo", "banjo", "opera Singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot balloon", "praying Mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up Artist", "model", "musician", "penciller", "producer", "scenographer", "set Decorator", "silversmith", "teacher", "auto Mechanic", "beader", "bobbin Boy", "clerk of the Chapel", "filling Station Attendant", "foreman", "maintenance Engineering", "mechanic", "miller", "moldmaker", "panel Beater", "patternmaker", "plant Operator", "plumber", "sawfiler", "shop Foreman", "soaper", "stationary Engineer", "wheelwright", "woodworker"];



  let noun = randomEl(nouns)
  let adjective = randomEl(adjectives)
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);
  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  let subject = adjective + ' ' + noun
  let headline = "Today the " + adjective + ' ' + noun + " Disappeared!"
  let randomNumber = Math.floor(Math.random() * (800 - 1) + 1)
  let randomGenre = Math.floor(Math.random() * (8 - 1) + 1)
  let randomHeadline = Math.floor(Math.random() * (10 - 1) + 1)

  switch (randomHeadline) {
    case 1:
      headline = 'Today the ' + subject + ' Disappeared!'
    break;
    case 2:
      headline = 'The ' + subject + ', and the Controversy Surrounding the ' + subject + '.'
    break;
    case 3:
      headline = 'The ' + subject + ' Tells All! Rumors Confirmed!'
    break;
    case 4:
      headline = 'New Report! Is the ' + subject + ' a Bad Influence on Your Kids?'
    break;
    case 5:
      headline = 'Breaking: the ' + subject + ' Announces Re-election Bid.'
    break;
    case 6:
      headline = 'The ' + subject + ' Does the Thing!'
    break;
    case 7:
      headline = 'The ' + subject + ' In All Out Twitter War!'
    break;
    case 8:
      headline = 'The Hottest Travel Destinations, as decided by the ' + subject + '.'
    break;
    case 9:
      headline = 'Why I Think the ' + subject + ' is Humanity\'s Best Chance.'
    break;
    default:

  }

  return {
    img: 'https://unsplash.it/1000/600?image=' + randomNumber,
    headline: headline,
    author: 'Bingo Jackson',
    postDate: String(new Date()),
    relatedTag: noun,
    genreId: randomGenre,
    tagline:  adjective + ' ' + noun + "? What could go wrong?",
    views: randomNumber,
    snippet: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. <br> <br> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    body: '<p> <b>Lorem ipsum:</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>' +
          '<p> Corem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. <br> <br> Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. <br> <br> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <br> <br> Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint. <br> <br> Occaecat cupidatat non proident, <a href="#">sunt in culpa</a> qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.<br> <br> Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <br> <br> Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br> <br>  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>'
  }
}

const populateArticles = () => {

  for (var i = 0; i < 250; i++) {
    let articles = generateArticle();
    db.add_article([articles.img, articles.headline, articles.body, articles.snippet, articles.author, articles.postDate, articles.relatedTag, articles.tagline, articles.views, articles.genreId], function (err, users) {

    })
  }
}


populateArticles()

app.listen(port, () => {
  console.log("Started server on port", port);
});
