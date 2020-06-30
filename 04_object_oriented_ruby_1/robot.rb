require "pry"

class Robot

  attr_readers(:name, :special_feature) # creates a getter / reader
  attr_writers :name, :special_feature  # creates a setter / writer

  # def name # getter / reader
  #   @name
  # end

  # def name=(name_arg) # setter / writer
  #   @name = name_arg
  # end

  def initialize(name, special_feature)
    # @ denotes an instance variable
    @name = name
    @features = features
    # we can call other instance methods inside initialize if we want
    activate_robot
  end

  def talk
    puts "Beep boop my designation is: #{@name}"
  end


  private

  def activate_robot
    puts "#{name} is powering up..."
  end
  # a private method can only be called from within the class, not through dot notation

end # end Robot class

terminator = Robot.new("T-1000", "Titanium Exo-Skeleton")

binding.pry
puts "Destory all humans"
