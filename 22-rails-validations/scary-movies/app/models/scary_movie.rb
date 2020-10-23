class ScaryMovie < ApplicationRecord
  validates :title, :scariness_rating, presence: :true
end
