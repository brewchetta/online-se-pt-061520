class ScaryMovie < ApplicationRecord

  validates :title, presence: :true, uniqueness: :true

  validates :scariness_rating, presence: :true

end
