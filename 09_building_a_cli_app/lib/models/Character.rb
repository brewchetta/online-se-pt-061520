class Character

  attr_reader :name, :aliases, :titles
  @@all = []

  def initialize(character_data)
    @name = character_data["name"]
    @aliases = character_data["aliases"]
    @titles = character_data["titles"]

    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    @@all.find { |character| character.name.downcase == name.downcase }
  end

  def pretty_print
    puts @name
    puts "\n"
    puts "Aliases:"
    puts @aliases
    puts "\n"
    puts "Titles:"
    puts @titles
  end

end
