class ReviewsController < ApplicationController
  layout "boardgames"

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      flash[:message] = "Review added successfully for #{@review.boardgame.name}"
      redirect_to boardgame_path(@review.boardgame)
    else
      render :new
    end
  end

  private

  def review_params
    params.require(:review).permit(:content, :boardgame_id)
  end

end
