require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    enable :sessions
    set :session_secret, "secret"
  end

  get "/" do
    erb :welcome
  end

  helpers do

    def current_user
      if session[:user_id]
        User.find(session[:user_id])
      end
    end

    def logged_in?
      !!current_user
    end

    def redirect_if_logged_out
      if !logged_in?
        redirect "/login"
      end
    end

  end


end
