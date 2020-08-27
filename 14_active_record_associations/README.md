# Intro to Active Record

## Rake

In order to hook up active record we first need access to `rake`.

We can add rake with `gem "rake"` in our `Gemfile`. You can also install rake globally with `gem install rake`. Once rake is installed, we need to include a `Rakefile` which will have all of our tasks.

The way to define a rake task is:

```
task :do_something do
  puts "I am doing something!"
end
```

You can also add descriptions with the `desc` method. Remember that a rake task is still just running ruby!

## Migrations

To make migrations work, we'll start out utilizing a gem called `standalone_migrations`. The gem gets dropped into our `Gemfile` just like rake, but we also have to do a few configurations outlined in the gem's documentation on github (always read the documentation!). This gem allows us to build out our migrations for our database.

A migration is effectively a reusable SQL query that allows us to predictably change the database. Once we've added the necessary lines to our `Rakefile` and constructed `db/config.yml`, we can create our first migration with `rake db:new_migration name=create_heros`.

As an aside, we're naming the table `heros` instead of `heroes` because ActiveRecord will automatically try and pluralize the `Hero` model and look for a `heros` table.

We can do several actions with the database such as adding, changing, or removing a column, rolling back our changes, or even dropping the database itself all through `rake`.

In order to change the database, we always want to add a new migration rather than dropping it and changing the old migrations.

## ActiveRecord

Once we've got our database, we need to integrate ActiveRecord. Just like the other gems, we can drop `activerecord` into the `Gemfile` and let it work its magic. We'll also need to configure the adapter to now use ActiveRecord (check the documentation on github).

We allow our `Hero` model to inherit from `ActiveRecord::Base` and it suddenly has access to a wide variety of methods we'd otherwise have to build ourselves such as `.create`, `#save`, `#update`, `#destroy`.

## Seeding

Now that ActiveRecord has been added, we can utilize our `db/seeds.rb` file. When we run `rake db:seed`, it'll run all the code in `db/seeds.rb`. The purpose of this is to allow ourselves to quickly create a whole slew of testing data.

## Resources

rake - https://github.com/ruby/rake

standalone migrations - https://github.com/thuss/standalone-migrations

migrations guide - https://guides.rubyonrails.org/active_record_migrations.html

activerecord - https://github.com/rails/rails/tree/master/activerecord
