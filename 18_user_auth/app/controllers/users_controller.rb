class UsersController < ApplicationController

  get "/login" do
    erb :"users/login"
  end

  get "/signup" do
    erb :"users/signup"
  end

end
