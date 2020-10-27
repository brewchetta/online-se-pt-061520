class ScaryMovie < ApplicationRecord

  validates :title, presence: :true, uniqueness: :true, length: { minimum: 2, maximum: 200}, confirmation: true

  validates :title_confirmation, presence: true

  validates :scariness_rating, presence: :true, numericality: { only_integer: true, greater_than: 0, less_than: 11 }

  validate :no_cuss_words

  def no_cuss_words
    if self.title.include?("Heck")
      errors.add(:title, "no cuss words please")
    end
  end


end
