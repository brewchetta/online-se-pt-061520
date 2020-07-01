require "pry"

class Robot

  attr_reader(:special_feature) # creates a getter / reader
  attr_writer :special_feature  # creates a setter / writer

  def name # getter / reader
    @name
  end

  def name=(name_arg) # setter / writer
    @name = name_arg
  end

  def initialize(name, special_feature)
    # @ denotes an instance variable
    @name = name
    @special_feature = special_feature
    # we can call other instance methods inside initialize if we want
    activate_robot
  end

  def talk
    puts "Beep boop my designation is: #{@name}"
  end

  private
  # a private method can only be called from within the class, not through dot notation

  def activate_robot
    puts "#{name} is powering up..."
  end

end # end Robot class

terminator = Robot.new("T-1000", "Titanium Exo-Skeleton")

binding.pry
puts "Destory all humans"
