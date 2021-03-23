class CreateGroceryItems < ActiveRecord::Migration[6.0]
  def change
    create_table :grocery_items do |t|
      t.string :name
      t.integer :user_id
      t.integer :quantity

      t.timestamps
    end
  end
end
