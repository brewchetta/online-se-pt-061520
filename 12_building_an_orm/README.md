# Building An ORM

In order to build a successful ORM we first need to make sure we can connect to the database. Inside `config/adapter.rb` we create a new variable called DB which represents our database connection through the `sqlite3` gem:

```
DB = SQLite3::Database.new("db/heroes.db")
```

From there we can call that connection in `lib/hero.rb`

## CRUD

### Read
- `.all` method

- `#find` method

### Update
- `#save` method

### Delete / Destroy
- `#delete` method

### Create
- `.create` method
