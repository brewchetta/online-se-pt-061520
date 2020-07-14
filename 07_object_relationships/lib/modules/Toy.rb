class Toy

  attr_accessor :name, :commercial, :kid

  @@all = []

  def initialize(name:, commercial: nil, kid: nil)
    @name = name
    @commercial = commercial
    @kid = kid

    @@all << self
  end

  def self.all
    @@all
  end

end
