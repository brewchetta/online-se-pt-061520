class CreateBoardgameCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :boardgame_categories do |t|
      t.integer :boardgame_id
      t.integer :category_id

      t.timestamps
    end
  end
end
