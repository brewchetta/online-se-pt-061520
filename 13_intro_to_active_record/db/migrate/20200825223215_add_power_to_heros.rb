class AddPowerToHeros < ActiveRecord::Migration[6.0]
  def change
    add_column :heros, :power, :string
  end
end
