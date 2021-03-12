Rails.application.routes.draw do

  scope '/api' do
    scope '/v1' do
      resources :users
      resources :auth, only: [:create]
    end
  end

end
