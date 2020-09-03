class Location < ActiveRecord::Base
  has_many :cats

  def slug
    self.room.split(" ").join("-")
  end

  def self.find_by_slug(slug)
    self.all.find { |l| l.slug == slug }
  end

end
