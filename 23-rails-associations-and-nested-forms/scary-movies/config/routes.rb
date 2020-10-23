Rails.application.routes.draw do
  resources :scary_movies

  get "/login", to: "users#login", as: :login
  post "/login", to: "users#login_post"

  get "/signup", to: "users#signup", as: :signup
  post "/signup", to: 'users#create'

  delete "/logout", to: "users#logout", as: :logout

  get "/profile", to: "users#profile", as: :profile
end
