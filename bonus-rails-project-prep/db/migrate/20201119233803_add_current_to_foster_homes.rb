class AddCurrentToFosterHomes < ActiveRecord::Migration[6.0]
  def change
    add_column :foster_homes, :status, :string, default: "current"
  end
end
