class CreateConstellations < ActiveRecord::Migration
  def change
    create_table :constellations do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
