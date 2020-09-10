class StarsController < ApplicationController

  get "/stars" do
    @stars = Star.all
    erb :"stars/index"
  end

  post "/stars" do
    star = Star.new(name: params[:name], light_years: params[:light_years])
    if star.save
      redirect "/stars/#{star.id}"
    else
      erb :"stars/new"
    end
  end

  get "/stars/new" do
    erb :"stars/new"
  end

  get "/stars/:id" do
    @star = Star.find(params[:id])
    erb :"stars/show"
  end

  get "/stars/:id/edit" do
    @star = Star.find(params[:id])
    erb :"stars/edit"
  end

  patch "/stars/:id" do
    @star = Star.find(params[:id])
    if @star.update(name: params[:name], light_years: params[:light_years])
      redirect "/stars/#{@star.id}"
    else
      erb :"stars/edit"
    end
  end

  delete "/stars/:id" do
    star = Star.find(params[:id])
    star.destroy
    redirect "/stars"
  end

end
