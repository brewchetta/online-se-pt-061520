class Toy

  attr_accessor :name, :commercial

  @@all = []

  def initialize(name:, commercial: nil)
    @name = name
    @commercial = commercial

    @@all << self
  end

  def self.all
    @@all
  end

end
