class ScaryMoviesController < ApplicationController

  def index
    @scary_movies = ScaryMovie.all
  end

  def show
    find_movie
  end

  def new
    @movie = ScaryMovie.new
  end

  def create
    @movie = ScaryMovie.new(params[:movie])
    if @movie.save
      redirect_to scary_movie_path(@movie)
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def find_movie
    @scary_movie = ScaryMovie.find_by(id: params[:id])
  end

end
