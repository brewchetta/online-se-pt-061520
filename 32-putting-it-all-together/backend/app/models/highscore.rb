class Highscore < ApplicationRecord
  belongs_to :game

  validates :user_initials, presence: true, length: {is: 3}
  validates :score, presence: true
end
