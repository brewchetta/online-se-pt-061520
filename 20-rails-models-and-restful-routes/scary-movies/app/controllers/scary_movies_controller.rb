class ScaryMoviesController < ApplicationController

  # INDEX
  def index
    @scary_movies = ScaryMovie.all
    render :index
  end

  # SHOW
  def show
    @scary_movie = ScaryMovie.find_by(id: params[:id])
    render :show
  end

  # we need five more restful routes here...

end
