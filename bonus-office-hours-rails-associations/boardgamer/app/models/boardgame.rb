class Boardgame < ApplicationRecord
  has_many :boardgame_categories, dependent: :destroy
  has_many :categories, through: :boardgame_categories

  validates :name, presence: true, uniqueness: true
end
