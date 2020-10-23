class UsersController < ApplicationController
  before_action :find_user, only: [:login_post, :profile]

  def login_post
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to scary_movies_path
    else
      render :login
    end
  end

  def signup
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    byebug
    # if @user.save
    #   redirect_to scary_movies_path
    # else
    #   render :signup
    # end
  end

  def logout
    session.clear
  end

  def profile
  end

  private

  def find_user
    @user = User.find_by(username: params[:username])
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
