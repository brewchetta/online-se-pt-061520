Rails.application.routes.draw do
  root to: 'scary_movies#index'
  resources :scary_movies
end
