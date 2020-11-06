class Boardgame < ApplicationRecord
  has_many :boardgame_categories, dependent: :destroy
  has_many :categories, through: :boardgame_categories

  has_many :reviews

  validates :name, presence: true, uniqueness: true
end
