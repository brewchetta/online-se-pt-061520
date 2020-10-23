# Rails Associations and Nested Forms

Building out Rails associations will be trickier than previously in Sinatra. For one, the associations you're expected to build will be more complex. Secondly, we'll need a way to associate certain information in the views themselves.

## Has Many Through

As a refresher, in any association the foreign key needs to be on anything that `belongs_to` another model. First we added that foreign key as a column in our database. If we have `users` and they have many `reviews` then our review would have a `user_id` column. From there we would give the user model `has_many :reviews` and the review model `belongs_to :user`.

For a many to many relationship, we need to use a join table. For example a many to many relationship between `users` and `scary_movies` could happen through `reviews`. The join table would need a foreign key for ever model its joining, in this case `user_id` and `scary_movie_id`.

From there, our models would look like:

```
class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many scary_movies, through: :reviews
end

class Review < ApplicationRecord
  belongs_to :user
  belongs_to :scary_movie
end

class ScaryMovie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
end
```

If we declared a variable `@user` that was an instance of a user, we could then call `@user.reviews` and `@user.scary_movies` thanks to the association.

## Creating the Association Through Collection Select

[Documentation](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select)

In order to associate a review with our user, we can still utilize the current user. However, we need a way to associate reviews with a specific movie. To do that, we can use the Rails helper `collection_select`.

A form with `collection_select` might be formatted like so:

```
<h1>Create A New Review</h1>

<%= form_with model: @review do |f| %>
  <%= f.label :scary_movie_id, "Which Movie Would You Like To Review?" %>
  <%= f.collection_select(:scary_movie_id, ScaryMovie.all, :id, :title) %>

  <%= f.label :content %>
  <%= f.text_area :content %>

  <%= f.submit %>
<% end %>
```

### Breaking It Down

The line in question is `<%= f.collection_select(:scary_movie_id, ScaryMovie.all, :id, :title) %>`. There's a lot going on here so let's break it down.

The `f.collection_select` associates this select with our form.

The first argument, `scary_movie_id` determines what column we're trying to fill in our new `@review`.

`ScaryMovie.all` is the list of options we want to include for our select, in this case every scary movie. If we wanted to limit the options available to especially scary movies, we could do something like `ScaryMovie.all.select{ |movie| movie.scariness_rating > 5 }`

The `:id` determines what releveant information we're grabbing from our scary movie to fill in `:scary_movie_id`. Since we want to fill in the foreign key with our scary movie's primary key, this is what we'll use.

The `:title` is what the option will display to the user. We want our scary movie titles to be shown in the dropdown for our select.

### Additional Options

If we wanted our scary movie selector to have a prompt, we could add an additional option:

`<%= f.collection_select(:scary_movie_id, ScaryMovie.all, :id, :title, {prompt: true}) %>`

You can also explicitly pass in a prompt:

`<%= f.collection_select(:scary_movie_id, ScaryMovie.all, :id, :title, { prompt: "Which movie would you like to review?" }) %>`

## Moving Forward

From here we'd still need to associate our `current_user` to the review, however since we can get our user without a dropdown, we can associate them directly in the reviews controller:

```
def create
  @review = Review.new(review_params)
  @review.user = current_user
  @review.save
end
```

Our controller would probably have some additional logic to make sure it passes validations, but this is essentially what we could do to make an association between the current user and a movie.

*BONUS: If we wanted to make sure our user doesn't already have a review for that movie, how could we go about making a validation for that? A custom validation may be in order or there's a special way we can utilize `validates_uniqueness_of` as well!*

## Nested Forms

If we want to instead create a movie rather than select one, we'd need to utilize a nested form. Our new form might look like this:

```
<h1>Create A New Review</h1>

<%= form_with do |f| %>

  <h3>Add a new movie</h3>

  <%= f.fields_for :scary_movie, @scary_movie do |movie| %>
    <%= f.label :title %>
    <%= f.text_field :title %>

    <%= f.label :scariness_rating %>
    <%= f.number_field :scariness_rating %>
  <% end %>

  <h3>What do you have to say about it?</h3>

  <%= f.fields_for :review, @review do |review| %>
    <%= review.label :content %>
    <%= review.text_area :content %><br>
  <% end %>

  <%= f.submit %>

<% end %>
```

The `fields_for` allow use to subdivide for different models that we can then fill out. Our params would get passed in as `params[:scary_movie]` and `params[:review]` which we can use for specialized strong params.
