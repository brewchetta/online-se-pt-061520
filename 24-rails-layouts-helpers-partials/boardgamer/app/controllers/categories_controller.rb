class CategoriesController < ApplicationController
  layout "category"

  def new
    @category = Category.new
    render :new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      flash[:message] = "#{@category} created successfully"
      redirect_to boardgames_path
    else
      render :new
    end
  end

  def add_to_category
    bg_c = BoardgameCategory.new(boardgame_category_params)
    if bg_c.save
      flash[:message] = "#{bg_c.boardgame.name} successfully added to #{bg_c.category.name}"
    else
      flash[:message] = "Something went wrong, please try again"
    end
    redirect_to boardgame_path(bg_c.boardgame)
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

  def boardgame_category_params
    params.require(:boardgame_category).permit(:boardgame_id, :category_id)
  end

end
