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


app.listen(port, () => {
  console.log("Started server on port", port);
});
