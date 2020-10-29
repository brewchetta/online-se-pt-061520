Rails.application.routes.draw do
  root "sessions#login"

  resources :scary_movies
  resources :watch_list_items, only: [:create, :destroy, :new]

  get "/login", to: "sessions#login", as: :login
  post "/login", to: "sessions#login_post"

  get "/signup", to: "users#new", as: :signup
  post "/signup", to: 'users#create'

  delete "/logout", to: "sessions#logout", as: :logout

  get "/profile", to: "users#profile", as: :user
end
