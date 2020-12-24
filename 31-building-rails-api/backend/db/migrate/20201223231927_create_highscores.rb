class CreateHighscores < ActiveRecord::Migration[6.0]
  def change
    create_table :highscores do |t|
      t.integer :score
      t.integer :game_id
      t.string :user_initials

      t.timestamps
    end
  end
end
