class UsersController < ApplicationController

  get "/signup" do
    erb :"users/signup"
  end

  post "/signup" do
    @user = User.new(params[:user])
    if @user.save
      session[:user_id] = @user.id
      redirect "/pizzas"
    else
      erb :"users/signup"
    end
  end

  delete "/logout" do
    session[:user_id] = nil
    redirect "/login"
  end

  get "/login" do
    erb :"users/login"
  end

  post "/login" do
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect "/pizzas"
    else
      erb :"users/login"
    end
  end

end
