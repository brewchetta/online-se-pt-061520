Rails.application.routes.draw do
  resources :highscores, only: [:index, :show, :create]
  resources :games, only: [:index, :show]
end
