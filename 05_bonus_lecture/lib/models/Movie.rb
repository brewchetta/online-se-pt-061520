class Movie

  attr_reader :title

  def initialize(title)
    @title = title
  end

  @@all = []

  def self.all
    @@all
  end

end
