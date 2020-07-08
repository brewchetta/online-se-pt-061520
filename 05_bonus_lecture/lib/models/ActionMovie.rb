class ActionMovie

  attr_reader :title, number_of_explosions

  def initialize(title, number_of_explosions)
    @title = title
    @number_of_explosions = number_of_explosions
  end

  @@all = []

  def self.all
    @@all
  end

end
