class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :breed
      t.string :description

      t.timestamps
    end
  end
end
