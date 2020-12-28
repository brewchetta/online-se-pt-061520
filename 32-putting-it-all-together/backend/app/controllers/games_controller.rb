class GamesController < ApplicationController
  before_action :set_game, only: [:show]

  def index
    games = Game.all
    render json: games
  end

  def show
    render json: @game
  end

  private

  def set_game
    @game = Game.find_by_id(params[:id])
  end

  def game_params
    params.require(:game).permit(:title)
  end

end
