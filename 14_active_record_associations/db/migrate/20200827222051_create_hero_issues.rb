class CreateHeroIssues < ActiveRecord::Migration[6.0]
  def change
    create_table :hero_issues do |t|
      t.integer :hero_id
      t.integer :comic_issue_id
    end
  end
end
