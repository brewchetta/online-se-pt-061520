Rails.application.routes.draw do
  # HTTP VERB - URI PATH - CONTROLLER - ACTION
  get '/scary-movies', to: 'scary_movies#index'
  get '/scary-movies/:id', to: 'scary_movies#show'
end
