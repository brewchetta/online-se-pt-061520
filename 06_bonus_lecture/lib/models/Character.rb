class Character

  attr_reader :name

  def initialize(name)
    @name = name
  end

  @@all = []

  def self.all
    @@all
  end

end
