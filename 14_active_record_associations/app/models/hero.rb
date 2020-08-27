class Hero < ActiveRecord::Base
  has_many :hero_issues, dependent: :destroy
  has_many :comic_issues, through: :hero_issues
end
