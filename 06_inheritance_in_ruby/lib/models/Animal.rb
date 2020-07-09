class Animal

  attr_reader :name

  def initialize(name)
    @name = name

    @@all << self
  end

  @@all = []

  def self.all
    @@all
  end

  def eat
    puts "Nom nom"
  end

end
