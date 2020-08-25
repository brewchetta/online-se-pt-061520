# Creates a reusable connection to `heroes.sqlite3`
DB = SQLite3::Database.new("db/heroes.db")
