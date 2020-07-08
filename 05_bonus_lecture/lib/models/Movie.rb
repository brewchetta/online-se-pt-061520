class Movie

  attr_reader :title

  def initialize(title)
    @title = title

    @@all << self
  end

  @@all = []

  def self.all
    @@all
  end

end
