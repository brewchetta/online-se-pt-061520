class BirdsController < ApplicationController

  # GET: /birds
  get "/birds" do
    @birds = Bird.all
    erb :"/birds/index.html"
  end

  # GET: /birds/new
  get "/birds/new" do
    erb :"/birds/new.html"
  end

  # POST: /birds
  post "/birds" do
    bird = Bird.new(params)
    if bird.save
      redirect "/birds/#{bird.id}"
    else
      erb :"/birds/new.html"
    end
  end

  # GET: /birds/5
  get "/birds/:id" do
    @bird = Bird.find(params[:id])
    erb :"/birds/show.html"
  end

  # GET: /birds/5/edit
  get "/birds/:id/edit" do
    erb :"/birds/edit.html"
  end

  # PATCH: /birds/5
  patch "/birds/:id" do
    redirect "/birds/:id"
  end

  # DELETE: /birds/5/delete
  delete "/birds/:id/delete" do
    redirect "/birds"
  end
end
