class ScaryMovie < ApplicationRecord
  validates :title, presence: :true, uniqueness: :true
  validates :scariness_rating, presence: :true, numericality: { only_integer: true, greater_than: 0, less_than: 11 } 
end
