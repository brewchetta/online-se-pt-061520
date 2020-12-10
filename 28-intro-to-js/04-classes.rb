class SomeClass

  attr_accessor :name

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
