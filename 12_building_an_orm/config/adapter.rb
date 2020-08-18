# Creates a reusable connection to `heroes.db`
DB = SQLite3::Database.new("db/heroes.db")
# DB.execute(some fancy sql in here)
