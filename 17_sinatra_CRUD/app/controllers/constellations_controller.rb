class ConstellationsController < ApplicationController

  get "/constellations" do
    erb :"constellations/index"
  end

  post "/constellations" do
    redirect "/constellations"
  end

  get "/constellations/new" do
    erb :"constellations/new"
  end

  get "/constellations/:id" do
    erb :"constellations/show"
  end

end
