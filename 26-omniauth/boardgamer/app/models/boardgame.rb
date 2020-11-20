class Boardgame < ApplicationRecord
  has_many :boardgame_categories, dependent: :destroy
  has_many :categories, through: :boardgame_categories

  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
  accepts_nested_attributes_for :reviews

  validates :name, presence: true, uniqueness: true

  scope :search_by, -> (attribute, search) { where("#{attribute} LIKE ?", "%#{search}%") }

end
