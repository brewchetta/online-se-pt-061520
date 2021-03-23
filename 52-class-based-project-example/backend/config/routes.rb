Rails.application.routes.draw do
  resources :users do
    resources :grocery_items
  end

  post '/authenticate', to: 'auth#create'
  get '/profile', to: 'auth#profile'

end
