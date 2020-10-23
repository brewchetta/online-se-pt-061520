class CreateScaryMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :scary_movies do |t|
      t.string :title
      t.integer :scariness_rating

      t.timestamps
    end
  end
end
