class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.string :name
      t.integer :light_years
      t.integer :constellation_id, :default => 1

      t.timestamps null: false
    end
  end
end
