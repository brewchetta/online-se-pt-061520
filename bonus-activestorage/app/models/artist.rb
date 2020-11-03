class Artist < ApplicationRecord

  def self.newer_artists
    Artist.where("birth_year  > 1900")
  end

end
