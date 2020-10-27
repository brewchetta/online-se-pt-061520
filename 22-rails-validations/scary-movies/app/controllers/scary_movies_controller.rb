class ScaryMoviesController < ApplicationController
  before_action :find_movie, only: [:show, :edit, :update, :destroy]

  def index
    @scary_movies = ScaryMovie.all
  end

  def new
    @scary_movie = ScaryMovie.new
  end

  def create
    @scary_movie = ScaryMovie.new(scary_movie_params)
    if @scary_movie.save
      flash[:messages] = ["#{@scary_movie.title} was successfully created"]
      redirect_to scary_movie_path(@scary_movie)
    else
      flash[:messages] = @scary_movie.errors.full_messages
      redirect_to new_scary_movie_path
    end
  end

  def update
    if @scary_movie.update(scary_movie_params)
      redirect_to scary_movie_path(@scary_movie)
    else
      redirect_to edit_scary_movie_path(@scary_movie)
    end
  end

  def destroy
    @scary_movie.destroy
    redirect_to scary_movies_path
  end

  private

  def find_movie
    @scary_movie = ScaryMovie.find_by(id: params[:id])
    redirect_to scary_movies_path if !@scary_movie
  end

  def scary_movie_params
    params.require(:scary_movie).permit(:title, :scariness_rating, :title_confirmation)
  end

end
