class GroceryItemsController < ApplicationController
  before_action :find_user

  def index
    @gis = @user.grocery_items
    render json: @gis
  end

  def show
    @gi = @user.grocery_items.find_by(id: params[:id])
    render json: @gi
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

  private

  def find_user
    @user = User.find_by(id: params[:user_id])
  end

end
