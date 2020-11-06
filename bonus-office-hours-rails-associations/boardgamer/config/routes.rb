Rails.application.routes.draw do
  root "boardgames#index"
  resources :boardgames
  resources :categories, only: [:new, :create]
  resources :reviews, only: [:new, :create]

  # add boardgame to category
  post '/add-to-category', to: 'categories#add_to_category', as: 'add_to_category'

  # remove from category
  delete '/remove-category', to: 'boardgames#remove_category', as: 'remove_category'
end
