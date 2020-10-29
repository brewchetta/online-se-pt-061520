class ScaryMovie < ApplicationRecord
  has_many :watch_list_items
  has_many :users, through: :watch_list_items

  validates :title, :scariness_rating, presence: :true
end
