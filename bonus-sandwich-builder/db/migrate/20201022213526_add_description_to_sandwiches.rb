class AddDescriptionToSandwiches < ActiveRecord::Migration[6.0]
  def change
    add_column :sandwiches, :description, :string
  end
end
