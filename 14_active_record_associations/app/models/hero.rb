class Hero < ActiveRecord::Base
  has_many :hero_issues
  has_many :comic_issues, through: :hero_issues
end
