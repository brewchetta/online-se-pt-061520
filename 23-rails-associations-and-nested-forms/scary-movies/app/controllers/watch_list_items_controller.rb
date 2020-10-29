class WatchListItemsController < ApplicationController
  def create
    byebug
    @watch_list_item = WatchListItem.new(watch_params)
    @watch_list_item.user = User.find_by_id(session[:user_id])
    @watch_list_item.save
    redirect_to user_path
  end

  def destroy

  end

  def new
    @watch_list_item = WatchListItem.new
  end

  private

  def watch_params
    params.require(:watch_list_item).permit(:scary_movie_id, :user_id)
  end

end
