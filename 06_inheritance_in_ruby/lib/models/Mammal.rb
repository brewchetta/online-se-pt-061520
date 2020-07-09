class Mammal < Animal

  extend Activities

  attr_accessor :hair_color

  def initialize(name, catchphrase, hair_color)
    super(name, catchphrase)
    @hair_color
  end

  def eat(food)
    super(food)
    puts "MORE...I AM GREEDY"
  end

  def cook_food
    puts "Cookin food"
  end

  def shed_hair
    super
    puts "Now you have hair all over your couch"
  end

  def self.all
    @@all.select {|animal| animal.class == Mammal}
  end

end
