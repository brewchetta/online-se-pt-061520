class Kid

  attr_accessor :name, :age

  @@all = []

  # the kids class has no toys array attribute in order to maintain single source of truth

  def initialize(name:, age:)
    @name = name
    @age = age

    @@all << self
  end

  def self.all
    @@all
  end

  # in order to get a kid's toys, we need to specifically find those toys that belong to the kid

  def toys
    Toy.all.select do |toy|
      toy.kid == self
    end
  end

end
