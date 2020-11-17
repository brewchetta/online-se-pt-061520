class Review < ApplicationRecord
  belongs_to :boardgame

  validates :content, presence: true
end
