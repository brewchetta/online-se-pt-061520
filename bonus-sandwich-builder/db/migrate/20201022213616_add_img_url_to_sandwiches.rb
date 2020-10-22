class AddImgUrlToSandwiches < ActiveRecord::Migration[6.0]
  def change
    add_column :sandwiches, :img_url, :string
  end
end
