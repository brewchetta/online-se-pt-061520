Rails.application.routes.draw do
  # an additional route, we'll use this in a minute for illustrative purposes...
  get '/reviews/search', to: 'reviews#search', as: 'search_reviews'

  root "boardgames#index"
  resources :boardgames
  resources :categories, only: [:new, :create]
  resources :reviews, only: [:new, :create, :show, :index]


  # add boardgame to category
  post '/add-to-category', to: 'categories#add_to_category', as: 'add_to_category'

  # remove from category
  delete '/remove-category', to: 'boardgames#remove_category', as: 'remove_category'
end
