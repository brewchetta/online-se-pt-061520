class Kid

  attr_accessor :name, :age

  @@all = []

  def initialize(name:, age:)
    @name = name
    @age = age

    @@all << self
  end

  def self.all
    @@all
  end

  def toys
    Toy.all.select do |toy|
      toy.kid == self
    end
  end

end
