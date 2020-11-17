class Review < ApplicationRecord
  belongs_to :boardgame
  belongs_to :user

  validates :content, presence: true
end
