Rails.application.routes.draw do
  resources :artists, except: :destroy
  post '/upload-painting', to: 'artists#upload_painting', as: 'submit_painting'
end
