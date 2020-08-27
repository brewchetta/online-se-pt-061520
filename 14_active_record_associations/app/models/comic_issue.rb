class ComicIssue < ActiveRecord::Base
  has_many :hero_issues
  has_many :heros, through: :hero_issues
end
