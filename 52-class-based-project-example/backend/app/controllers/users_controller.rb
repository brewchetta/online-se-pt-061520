class UsersController < ApplicationController
  before_action :authorized, except: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def create
    puts "Stuff will go here later..."
  end

  def update
    puts "Stuff will go here later..."
  end

  def destroy
    puts "Stuff will go here later..."
  end

end
