class Game < ApplicationRecord
  has_many :highscores, dependent: :destroy
  validates :title, :presence => true
end
