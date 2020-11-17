# Rails Nested Resources

## Route Scopes

We can give a route a specific scope with the `scope` keyword. Different options in a scope will change how our route gets presented in different ways. For example:

```
scope :boardgames do
  resources :reviews
end
```

This will nest the routes we've created for reviews within a boardgame scope. At first, all this really changes is how our url looks. To get to the index for reviews, we'd use this url: `localhost:300/boardgames/reviews`.

We can additionally add the `module` option when creating a scope. This makes some pretty dramatic organizational changes. An example in code:

```
scope :boardgames, module: :boardgames do
  resources :reviews
end
```

This will mean that everything to do with reviews gets attached to a new module called `Boardgames`. It now expects that we can find the controller files in `controllers/boardgames/reviews_controller.rb`. The controller needs to be namespaced with the module, which is to say we now rewrite it to:

```
class Boardgames::ReviewsController < ApplicationController
  #code here
end
```

Additionally, all of our views are expected to be inside of `views/boardgames/reviews`. You get the idea.

At this point, the routes have been changed but the route helpers haven't. We can change the names of the route helpers with the `as` option:

```
scope :boardgames, module: :boardgames, as: 'boardgames' do
  resources :reviews
end
```

This will prepend `boardgames` to all of the related path helpers. For example, `reviews_path` now becomes `boardgame_reviews_path`.

## Namespace

A nice shortcut to include all of this work is to utilize the `namespace` macro. It works similar to `scope` but automatically draws in and intuits all the options by default.

An example of a namespace doing what we did earlier would be:

```
namespace :boardgames do
  resources :reviews
end
```

This will change the urls, the path helpers, and nest the directory structures that we'll need to include to make our app work. Reviews will have to inherit from the `Boardgames` module as well.

## Nested Resources

What if we have two models and we want to create nested routes to show one's dependency on the other? Rails has a solution for that, and while it's easy to implement, it can have far reaching consequences.

```
resources :boardgames do
  resources :reviews
end
```

This automatically nests the routes for reviews directly underneath boardgames. If we wanted to go to a review show page, we'd need to follow a url like this: `/boardgames/3/reviews/4`.

Our dynamic url now takes in two params, a `:boardgame_id` and an `:id`. How we utilize the `params[:boardgame_id]` is up to us and what we do in the controller. However, it can allow for a few easier changes in our controllers. For example, if we went to `/boardgames/3/reviews/new` we'd immediately know which boardgame we were reviewing (it's right there in the url!).

Since we've changed the url, our path helper also changes. Instead of just `new_review_path`, we instead have the longer `new_boardgame_review_path(@boardgame)`. We have to pass in something for the `:boardgame_id` or else our route will complain that it doesn't have one.

With path helpers, the order we now pass our id's is determined by the url. For the show page, remember that our new url is: `/boardgames/:boardgame_id/reviews/:id`. To make our path helper work, we do: `boardgame_review_path(@boardgame, @review)`. We pass in the boardgame first because its `id` gets filled into the url first.
