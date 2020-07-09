class Animal

  attr_reader :name, :catchphrase

  def initialize(name, catchphrase)
    @name = name
    @catchphrase = catchphrase

    @@all << self
  end

  @@all = []

  def self.all
    @@all
  end

  def eat(food)
    puts "Nom nom #{food}"
  end

end

# DRY --> DONT REPEAT YOURSELF
