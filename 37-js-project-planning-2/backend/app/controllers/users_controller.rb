class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by_id(params[:id])
    render json: user
  end

  def create
    user = User.create(user_params)
    if user.save
      render json: user
    else
      render json: { error: "Couldn't create that user", status: 400 }
    end
  end

  def update
    user = User.find_by_id(params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: { error: "Couldn't update that user", status: 400}
    end
  end

  def destroy
    user = User.find_by_id(params[:id])
    user.destroy
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:name)
  end

end
