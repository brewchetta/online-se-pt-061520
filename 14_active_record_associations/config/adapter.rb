# Creates a reusable connection to `heroes.sqlite3`
# DB = SQLite3::Database.new("db/heroes.db")
ActiveRecord::Base.establish_connection(adapter: 'sqlite3', database: 'db/development.sqlite3')
