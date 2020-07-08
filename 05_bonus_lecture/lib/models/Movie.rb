class Movie

  attr_reader :title, :rating

  def initialize(title, rating)
    @title = title
    @rating = rating

    @@all << self
  end

  @@all = []

  def self.all
    @@all
  end

end
