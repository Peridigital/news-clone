
CREATE TABLE genre
(
  id SERIAL PRIMARY KEY,
  genre VARCHAR(40)
);
INSERT INTO genre (genre) VALUES ('politics');
INSERT INTO genre (genre) VALUES ('us');
INSERT INTO genre (genre) VALUES ('entertainment');
INSERT INTO genre (genre) VALUES ('tech');
INSERT INTO genre (genre) VALUES ('science');
INSERT INTO genre (genre) VALUES ('health');
INSERT INTO genre (genre) VALUES ('travel');

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
