class SomeClass

  attr_accessor :name

  @@class_var = "I am a class variable"

  def initialize(name)
    self.name = name
  end

  def instance_method
    "I am an instance method for #{self.name}"
  end

  def self.class_method
    "I am a class method for #{self.name}"
  end

end
