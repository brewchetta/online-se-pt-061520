Rails.application.routes.draw do
  root "boardgames#index"

  # namespace :boardgames do
  #   # an additional route, we'll use this in a minute for illustrative purposes...
  #   resources :reviews, only: [:new, :create, :show, :index]
  # end

  resources :boardgames do
    get '/reviews/search', to: 'reviews#search', as: 'search_reviews'
    resources :reviews, only: [:new, :create, :show, :index]
  end

  resources :categories, only: [:new, :create]

  # add boardgame to category
  post '/add-to-category', to: 'categories#add_to_category', as: 'add_to_category'

  # remove from category
  delete '/remove-category', to: 'boardgames#remove_category', as: 'remove_category'
end
