SELECT img, headline, genre, articles.id as pageid FROM articles
JOIN genre ON genre.id = articles.genreId
WHERE genre = $1
