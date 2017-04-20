SELECT img, headline, genre, tagline, articles.id as pageid FROM articles
JOIN genre ON genre.id = articles.genreId
WHERE genre = $1
ORDER BY views desc
LIMIT 2
OFFSET 1
