require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    @cats = Cat.all
    erb :home
  end

  get "/locations/:slug" do
    @location = Location.find_by_slug(params[:slug])
    erb :location
  end

  post "/search-rooms" do
    @location = Location.find_by(room: params[:search])
    if @location
      redirect "/locations/#{@location.slug}"
    else
      redirect "/"
    end
  end

end
