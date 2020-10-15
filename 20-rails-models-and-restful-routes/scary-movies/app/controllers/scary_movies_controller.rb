class ScaryMoviesController < ApplicationController

  # INDEX
  def index
    @scary_movies = ScaryMovie.all
    # render :index
  end

  # SHOW
  def show
    @scary_movie = ScaryMovie.find_by(id: params[:id])
    # render :show
  end

  # NEW
  def new
  end

  # CREATE
  def create
    # byebug
    @movie = ScaryMovie.create(scary_movie_params)
    redirect_to scary_movie_path(@movie)
  end

  private

  def scary_movie_params
    params.require(:movie).permit(:title, :scariness_rating)
  end

end
