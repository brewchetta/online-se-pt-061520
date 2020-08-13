# Advanced SQL Queries

If we're looking at our SQL inside our terminal, it helps to use these settings:
```
.mode column  #=> when selecting, moves the data into columns
.headers on   #=> enables column names when looking at our data
.width auto   #=> modifies the width to automatically fit our terminal
```

In order to see our schema: `.schema`

Don't forget the semi-colon to finish a query!

## Basic CRUD

To create a table we use:
```
CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER,
);
```

To add a new column:
```
ALTER TABLE people
ADD favorite_movie TEXT;
```

To create an entry:
```
INSERT INTO people (name, age, favorite_movie)
VALUES ("Chett", 6, "The Lion King");
```

To see all entries:
```
SELECT * FROM people;
```

To see a specific entry:
```
SELECT * FROM people
WHERE favorite_movie = 1;
```

To update an entry:
```
UPDATE people
SET age = 60, name = "Mister Chett"
WHERE id = 1;
```

To delete an entry:
```
DELETE FROM people
WHERE id = 1;
```

## Advanced Methods

AS
```
SELECT title AS Title
FROM shows;
```

ORDER BY
```
SELECT *
FROM shows
ORDER BY seasons;
```

LIMIT
```
SELECT *
FROM shows
LIMIT 1;
```

AND
```
SELECT * FROM shows
WHERE genre = "drama" AND seasons > 10;
```

IN
```
SELECT * FROM shows
WHERE genre IN ("drama", "crime");
```

LIKE
```
SELECT * FROM shows
WHERE title LIKE "g%";
```

JOIN
```
SELECT characters.full_name AS name, shows.title FROM characters
JOIN shows ON shows.id = characters.show_id;
```

COUNT
```
SELECT COUNT(id) FROM characters;
```

GROUP BY
```
SELECT COUNT(characters.id) AS count, shows.title
FROM characters
JOIN shows ON shows.id = characters.show_id
GROUP BY characters.show_id;
```

HAVING
```
SELECT COUNT(characters.id) AS character_count, shows.title
FROM characters
JOIN shows ON shows.id = characters.show_id
GROUP BY characters.show_id
HAVING title = "Game of Thrones";
```

MIN
```
SELECT MIN(seasons), title FROM shows;
```

MAX
```
SELECT MAX(seasons), title FROM shows;
```

AVG
```
SELECT AVG(seasons) FROM shows;
```
