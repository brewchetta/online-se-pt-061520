class Artist < ApplicationRecord
  has_one_attached :self_portrait
  has_many_attached :paintings

  scope :newer_artists, -> { where("birth_year  > 1900") }
  scope :before_1950, -> { where("birth_year < 1950")}
  scope :first_names, -> { pluck(:first_name) }
  scope :find_by_first_name, -> (name) { find_by(first_name: name) }

  # def self.newer_artists
  #   where("birth_year  > 1900")
  # end

end
