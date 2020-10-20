class ScaryMoviesController < ApplicationController

  def index
    @scary_movies = ScaryMovie.all
  end

  def show
    find_movie
  end

  def new
    @scary_movie = ScaryMovie.new
  end

  def create
    @scary_movie = ScaryMovie.new(scary_movie_params)
    if @scary_movie.save
      redirect_to scary_movie_path(@scary_movie)
    else
      render :new
    end
  end

  def edit
    find_movie
  end

  def update
    find_movie
    if @scary_movie.update(scary_movie_params)
      redirect_to scary_movie_path(@scary_movie)
    else
      render :edit
    end
  end

  def destroy
  end

  private

  def find_movie
    @scary_movie = ScaryMovie.find_by(id: params[:id])
  end

  def scary_movie_params
    params.require(:scary_movie).permit(:title, :scariness_rating)
  end

end
