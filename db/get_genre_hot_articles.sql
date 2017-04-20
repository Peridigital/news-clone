SELECT img, headline, genre, snippet, articles.id as pageid FROM articles
JOIN genre ON genre.id = articles.genreId
WHERE genre = $1
ORDER BY views desc
LIMIT 5
OFFSET 3
