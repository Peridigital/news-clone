SELECT img, headline, genre, views, relatedtag, articles.id as pageid FROM articles
JOIN genre ON genre.id = articles.genreId
WHERE relatedtag = $1
ORDER BY views desc
OFFSET 1
