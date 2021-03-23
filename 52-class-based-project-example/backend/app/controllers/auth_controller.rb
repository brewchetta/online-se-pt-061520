class AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token({user_id: user.id})
      render json: token
    else
      render json: {error: "Incorrect username or password!"}, status: :unauthorized
    end
  end

end
