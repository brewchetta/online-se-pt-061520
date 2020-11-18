Rails.application.routes.draw do
  root "boardgames#index"

  resources :boardgames do
    get '/reviews/search', to: 'reviews#search', as: 'search_reviews'
    resources :reviews, only: [:new, :create, :show, :index]
  end

  resources :categories, only: [:new, :create]

  post '/add-to-category', to: 'categories#add_to_category', as: 'add_to_category'

  delete '/remove-category', to: 'boardgames#remove_category', as: 'remove_category'

  # Routes for sign up form, sign up creation, and profile page
  resources :users, only: [:new, :create, :show]

  # Custom routes for session login form, login creation, and logout
  get '/login', to: 'sessions#login', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#logout', as: 'logout'

  get '/auth/google_oauth2/callback', to: 'sessions#google_login'

end
