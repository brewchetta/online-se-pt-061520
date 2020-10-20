Rails.application.routes.draw do
  # resources :scary_movie
  # HTTP VERB - URI PATH - CONTROLLER - ACTION - PATH

  # NEW
  get "/scary-movies/new", to: "scary_movies#new", as: "new_scary_movie"

  # CREATE
  post "/scary-movies", to: "scary_movies#create", as: "scary_movies"

  # INDEX
  get "/scary-movies", to: "scary_movies#index"

  # EDIT
  get "/scary-movies/:id/edit", to: "scary_movies#edit", as: "edit_scary_movie"

  # SHOW
  get "/scary-movies/:id", to: "scary_movies#show", as: "scary_movie"

  # UPDATE
  patch "/scary-movies/:id", to: "scary_movies#update"

  # DELETE
  delete "/scary-movies/:id", to: "scary_movies#destroy", as: "delete_scary_movie"

end
