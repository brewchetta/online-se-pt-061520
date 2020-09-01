class CreateToppings < ActiveRecord::Migration
  def change
    create_table :toppings do |t|
      t.string :name
      t.boolean :vegetarian
      t.integer :calories

      t.timestamps null: false
    end
  end
end
