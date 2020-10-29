class UsersController < ApplicationController
  before_action :find_user, only: [:profile]

  def new
    @user = User.new
    render :signup
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to scary_movies_path
    else
      render :signup
    end
  end

  private

  def find_user
    @user = User.find_by_id(session[:user_id])
    redirect_to login_path if !@user
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
