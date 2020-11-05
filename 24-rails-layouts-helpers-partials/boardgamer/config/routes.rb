Rails.application.routes.draw do
  resources :boardgames
  resources :categories, only: [:new, :create]

  # add boardgame to category
  post '/add-to-category', to: 'categories#add_to_category', as: 'add_to_category'
end
