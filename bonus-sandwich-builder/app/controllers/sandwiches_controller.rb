class SandwichesController < ApplicationController
  before_action :find_sandwich, only: [:show, :edit, :update,:destroy]

  def index
    @sandwiches = Sandwich.all
  end

  def new
    @sandwich = Sandwich.new
  end

  def create
    @sandwich = Sandwich.new(sandwich_params)
    if @sandwich.save
      redirect_to sandwich_path(@sandwich)
    else
      render :new
    end
  end

  def update
    if @sandwich.update(sandwich_params)
      redirect_to sandwich_path(@sandwich)
    else
      render :edit
    end
  end

  def destroy
    @sandwich.destroy
    redirect_to sandwiches_path
  end

  private

  def find_sandwich
    @sandwich = Sandwich.find_by_id(params[:id])
    redirect_to sandwiches_path if !@sandwich
  end

  def sandwich_params
    params.require(:sandwich).permit(:name, :price, :img_url, :description)
  end
end
