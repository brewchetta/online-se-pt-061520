class ActionMovie

  attr_reader :title, :rating, :number_of_explosions

  def initialize(title, rating, number_of_explosions)
    @title = title
    @rating = rating
    @number_of_explosions = number_of_explosions

    self.all << self
  end

  @@all = []

  def self.all
    self.all
  end

end
