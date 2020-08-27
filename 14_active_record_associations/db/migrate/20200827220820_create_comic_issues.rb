class CreateComicIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :comic_issues do |t|
      t.string :name
      t.integer :hero_id
    end
  end
end
