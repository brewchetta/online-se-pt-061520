class HighscoresController < ApplicationController
  before_action :set_highscore, only: [:show]

  def index
    highscores = Highscore.all
    render json: highscores
  end

  def show
    render json: @highscore
  end

  def create
    highscore = Highscore.new(highscore_params)
    highscore.game = Game.find_or_create_by(title: params[:title])
    if highscore.save
      render json: highscore
    else
      render json: { error: highscore.errors.full_messages, status: 400}, status: 400
    end
  end

  private

  def set_highscore
    @highscore = Highscore.find_by_id(params[:id])
  end

  def highscore_params
    params.require(:highscore).permit(:score, :user_initials)
  end
end
