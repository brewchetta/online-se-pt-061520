class CreateWatchListItems < ActiveRecord::Migration[6.0]
  def change
    create_table :watch_list_items do |t|
      t.integer :user_id
      t.belongs_to :scary_movie

      t.timestamps
    end
  end
end
