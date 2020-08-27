class ComicIssue < ActiveRecord::Base
  has_many :hero_issues, dependent: :destroy
  has_many :heros, through: :hero_issues
end
