class ArtistsController < ApplicationController
  before_action :find_artist, only: [:show, :edit, :update]

  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      redirect_to artist_path(@artist_path)
    else
      render :new
    end
  end

  def update
    if @artist.update(artist_params)
      redirect_to artist_path(@artist)
    else
      render :edit
    end
  end

  private

  def artist_params
    params.require(:artist).permit(:first_name, :last_name, :birth_year)
  end

  def find_artist
    @artist = Artist.find_by_id(params[:id])
    redirect_to artists_path if !@artist
  end

end
