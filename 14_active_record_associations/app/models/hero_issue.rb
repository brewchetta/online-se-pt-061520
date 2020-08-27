class HeroIssue < ActiveRecord::Base
  belongs_to :hero
  belongs_to :comic_issue
end
