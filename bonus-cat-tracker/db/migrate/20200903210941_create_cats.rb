class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :img_url
      t.integer :location_id

      t.timestamps null: false
    end
  end
end
