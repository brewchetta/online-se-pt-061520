class CreateBirds < ActiveRecord::Migration
  def change
    create_table :birds do |t|
      t.string :name
      t.string :color
      t.integer :wingspan
      t.string :region

      t.timestamps null: false
    end
  end
end
