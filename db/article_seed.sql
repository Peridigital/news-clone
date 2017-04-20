CREATE TABLE articles
(
  id SERIAL PRIMARY KEY,
  img VARCHAR,
  headline VARCHAR,
  body VARCHAR,
  snippet VARCHAR,
  author VARCHAR,
  postDate VARCHAR,
  relatedTag VARCHAR,
  tagline VARCHAR,
  views INTEGER,
  genreId INTEGER REFERENCES genre
);
