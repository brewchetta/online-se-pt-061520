class CreateFosterHomes < ActiveRecord::Migration[6.0]
  def change
    create_table :foster_homes do |t|
      t.integer :user_id
      t.integer :cat_id
      t.integer :duration
      t.string :family_name

      t.timestamps
    end
  end
end
