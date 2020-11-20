class BoardgamesController < ApplicationController
  before_action :find_boardgame, only: [:show, :edit, :update, :destroy]
  # include BoardgamesHelper
  layout "boardgames"

  def index
    @boardgames = helpers.all_boardgames
  end

  def new
    @boardgame = Boardgame.new
    @review = @boardgame.reviews.build
  end

  def create
    @boardgame = Boardgame.new(boardgame_params)
    if @boardgame.save
      @review = @boardgame.reviews.create(review_params)
      flash[:message] = "#{@boardgame.name} successfully created"
      redirect_to boardgame_path(@boardgame)
    else
      render :new
    end
  end

  def update
    if @boardgame.update(boardgame_params)
      flash[:message] = "#{@boardgame.name} successfully updated"
      redirect_to boardgame_path(@boardgame)
    else
      render :edit
    end
  end

  def destroy
    @boardgame.destroy
    redirect_to boardgames_path
  end

  def remove_category
    bgc = BoardgameCategory.find_by(boardgame_id: params[:boardgame_id], category_id: params[:category_id])

    bgc.destroy

    redirect_to boardgame_path(params[:boardgame_id])
  end

  def search
    @boardgames = Boardgame.search_by("name", params[:search_term])
    render :index
  end

  private

  def find_boardgame
    @boardgame = Boardgame.find_by_id(params[:id])
    redirect_to boardgames_path if !@boardgame
  end

  def boardgame_params
    params.require(:boardgame).permit(:name, :min_players, :max_players, :playtime, :minimum_age, category_ids: [])
  end

  def review_params
    params.require(:review).permit(:content)
  end

end
