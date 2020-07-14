class Toy

  attr_accessor :name, :commercial, :kid

  @@all = []

  # because the Toy is the belongs_to, it contains the single source of truth
  # in other words, it keeps track of who its kid is -- no the other way around

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
