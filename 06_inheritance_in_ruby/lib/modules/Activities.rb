module Activities

  def cook_food
    if @name == "Swedish Chef"
      puts Color::Rainbow("Børk-børk-børk!")
    else
      puts Color::Rainbow("I'm making something tasty!")
    end
  end

end
