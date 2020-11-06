class ReviewsController < ApplicationController
  layout "boardgames"

  def index
    @reviews = Review.all
  end

end
