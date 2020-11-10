class CreateBoardgames < ActiveRecord::Migration[6.0]
  def change
    create_table :boardgames do |t|
      t.string :name
      t.integer :minimum_age
      t.integer :playtime
      t.integer :min_players
      t.integer :max_players

      t.timestamps
    end
  end
end
