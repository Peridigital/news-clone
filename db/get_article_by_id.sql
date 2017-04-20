SELECT *, articles.id as pageid FROM articles
JOIN genre ON genre.id = articles.genreId
WHERE articles.id = $1
