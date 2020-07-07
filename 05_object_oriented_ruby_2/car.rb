require "pry"

class Car

  def make #reader
    @make
  end

  def make=(make) #writer
    @make
  end

  attr_reader :model #reader
  attr_writer :model #writer

  attr_accessor :color # combines reader & writer

  @@all = [] # class variable
  @@quote = "I live my life a quarter-mile at a time." # class variable

  def initialize(make, model, color)
    @make = make
    @model = model
    @color = color

    @@all << self # when we create a new instance, we add it to the all method
    # since initialize is an instance method, its context is the new instance which means "self" is the new instance
  end

  def drive
    puts @@quote
    # self is the instance
    puts "Let's drive the #{make}"
  end

  def self.drive_all_the_cars # self.method_name denotes a class method
    @@all.map do |car|
      car.make
    end.each {|car_make| puts car_make}
  end

  def self.all # reader for @@all class variable
    @@all
  end

  def self.find_by_name(name_arg)
    @@all.find do |car|
      car.name == name_arg
    end
  end

end

# test data
car1 = Car.new("Tesla", "X", "white")
car2 = Car.new("Jeep", "Wrangler", "green")

Car.all

binding.pry
puts "Vroom"
