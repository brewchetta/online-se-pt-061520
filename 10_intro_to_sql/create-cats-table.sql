CREATE TABLE cats (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL UNIQUE,
	age INTEGER NOT NULL,
  breed TEXT NOT NULL
);

INSERT INTO cats (name, age, breed)
VALUES ("Octavia", 6, "Tabby"), ("Ursula", 4, "Tabby/Calico Mix");
