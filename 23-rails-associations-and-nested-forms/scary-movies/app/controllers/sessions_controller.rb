class SessionsController < ApplicationController

  def login
    @user = User.new
  end

  def login_post
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      redirect_back fallback_location: login_path
    end
  end

  def logout
    session.clear
    redirect_to login_path
  end

end
