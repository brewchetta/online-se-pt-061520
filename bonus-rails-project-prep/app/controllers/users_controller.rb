class UsersController < ApplicationController

  def show

  end

  def new

  end

  def create

  end

  def edit

  end

  def update

  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :active)
  end

end
