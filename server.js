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

// const generateArticle = () => {
//   function randomEl(list) {
//     var i = Math.floor(Math.random() * list.length);
//     return list[i];
//   }
//   var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
//   var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblet", "cupcake", "carrot", "gnome", "glitter", "potato", "salad", "toejam", "curtain", "beet", "toilet", "exorcism", "stick figure", "mermaid eggs", "sea barnacles", "dragons", "jellybean", "snake", "doll", "bushe", "cookie", "apple", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot balloon", "praying manti", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworker"];
//
//   let noun = randomEl(nouns)
//   let adjective = randomEl(adjectives)
//   noun = noun.charAt(0).toUpperCase() + noun.slice(1);
//   adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
//   let headline = "Today the " + adjective + ' ' + noun + " Disappeared!"
//   let randomNumber = Math.floor(Math.random() * (800 - 1) + 1)
//   let randomGenre = Math.floor(Math.random() * (8 - 1) + 1)
//
//   return {
//     img: 'https://unsplash.it/1000/600?image=' + randomNumber,
//     headline: headline,
//     author: 'Bingo Jackson',
//     postDate: String(new Date()),
//     relatedTag: noun,
//     genreId: randomGenre,
//     tagline: "Disapearing " + adjective + ' ' + noun + "!",
//     views: randomNumber,
//     snippet: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. <br> <br> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
//     body: '<p> <b>Lorem ipsum:</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>' +
//           '<p> Corem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. <br> <br> Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. <br> <br> Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <br> <br> Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint. <br> <br> Occaecat cupidatat non proident, <a href="#">sunt in culpa</a> qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.<br> <br> Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. <br> <br> Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Corem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br> <br>  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>'
//   }
// }
//
// const populateArticles = () => {
//
//   for (var i = 0; i < 250; i++) {
//     let articles = generateArticle();
//     db.add_article([articles.img, articles.headline, articles.body, articles.snippet, articles.author, articles.postDate, articles.relatedTag, articles.tagline, articles.views, articles.genreId], function (err, users) {
//
//     })
//   }
//
// }
// populateArticles()
app.listen(port, () => {
  console.log("Started server on port", port);
});
