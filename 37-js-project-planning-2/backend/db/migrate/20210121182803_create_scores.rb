class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :guesses
      t.integer :time_in_seconds
      t.integer :user_id
      t.integer :num_cards

      t.timestamps
    end
  end
end
