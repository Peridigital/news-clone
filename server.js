const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');

const db = massive.connectSync({
  connectionString : 'postgres://postgres:PASSWORD@localhost/news_clone'
});



const app = express();
app.use(bodyParser.json());

const port = 3000;

app.get('/api', function(req, res) {
  console.log(db);
  res.status(200).send('test')


  // db.get_all_injuries(function (err, injuries) {
  //   res.send(injuries);
  // })

});


app.listen(port, function() {
  console.log("Started server on port", port);
});
