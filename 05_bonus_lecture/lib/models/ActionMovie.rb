class ActionMovie

  attr_reader :title, number_of_explosions

  def initialize(title, number_of_explosions)
    @title = title
    @number_of_explosions = number_of_explosions

    Movie.all << self
  end

  def self.all
    Move.all
  end

end
