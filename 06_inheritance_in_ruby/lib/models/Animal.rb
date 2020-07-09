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

  def eat
    puts "Nom nom"
  end

end
