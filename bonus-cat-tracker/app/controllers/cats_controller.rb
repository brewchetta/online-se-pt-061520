class CatsController < ApplicationController

  get "/cats/new" do
    @locations = Location.all
    erb :"/cats/new.html"
  end

  post "/cats" do
    @cat = Cat.new(params)
    @cat.save
    redirect "/cats/#{@cat.id}"
  end

  get "/cats/:id" do
    @cat = Cat.find(params[:id])
    erb :"/cats/show.html"
  end

end
