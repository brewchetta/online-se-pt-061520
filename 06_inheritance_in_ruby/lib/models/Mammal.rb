class Mammal

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

  def shed_hair
    puts "Now there's fur all over your furniture"
  end

end
