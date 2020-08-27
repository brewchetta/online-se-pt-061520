class RemoveHeroIdFromcomicIssue < ActiveRecord::Migration[6.0]
  def change
    remove_column :comic_issues, :hero_id
  end
end
