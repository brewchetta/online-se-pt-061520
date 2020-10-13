class ScaryMoviesController < ApplicationController

  def index
    @scary_movies = ScaryMovie.all
  end

  def show
    @scary_movie = ScaryMovie.find_by(id: params[:id])
  end

end
