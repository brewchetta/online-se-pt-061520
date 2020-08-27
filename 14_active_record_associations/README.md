# Intro to Active Record

## Getting Started

Clone down this repository, `cd` into the proper directory, and then run `bundle install` and `rake db:migrate`.

I'd recommend drawing out a diagram to represent the object relationships so you won't have to go back and change your foreign keys.

## Building Migrations

You'll need to build migrations for Villain, City, and Rivalry. When building the tables, make sure you check the pluralization for City and Rivalry since naming the table wrong will break it.

You can add to the database with `rake db:new_migration name=your_migration_name` and then editing the migration file that appears.

Villain needs these columns: `name`, `power`, `desire`

City needs these columns: `name`, `safety_rating`

Rivalry only keeps track of which heroes and villains are rivals with each other. You won't need any columns besides foreign keys.

In order to build out the relationships, you'll need to figure out which models need foreign keys as well! Remember where the source of truth lies!

## Adding Macros

Finally, you'll need to add macros to your models. The macros you'll use are:

```
has_many
belongs_to
has_many , through:
```

Additionally, if a hero / villain is destroyed, let's make sure you also destroy their connections as well! You can do that with the `dependent: :destroy` macro.

## Seeding

Now that ActiveRecord has been added, we can utilize our `db/seeds.rb` file. When we run `rake db:seed`, it'll run all the code in `db/seeds.rb`. The purpose of this is to allow ourselves to quickly create a whole slew of testing data. I've already created data for the Justice League but feel free to add additional seeds for more heroes, villains and cities. When it comes to making a nemesis, how would you go about doing that?

## Testing

You can test your code with `rake console`. I'd recommend testing at each section to make sure it works.
