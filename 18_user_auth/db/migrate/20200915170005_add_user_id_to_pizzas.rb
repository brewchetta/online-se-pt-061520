class AddUserIdToPizzas < ActiveRecord::Migration
  def change
    add_column :pizzas, :user_id, :integer
  end
end
