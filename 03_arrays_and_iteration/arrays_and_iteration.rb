require 'pry'

# Arrays are powerful!
# A list of different data types
# An ordered list
# A list where order matters but it doesn't have to be ordered

# Marvel Characters
superhero_1 = "Thor"
superhero_2 = "Spiderman"
superhero_3 = "Iron Man"
superhero_4 = "Hulk"
superhero_5 = "Captain America"
superhero_6 = "Black Panther"

# We create a an array with [] brackets
fave_marvel_superheros = [superhero_1, superhero_2, superhero_3, superhero_4, superhero_5, superhero_6]

# You can add to an array with push, <<, and shift
# You can remove from an array with pop and unshift

# each will iterate through and do something for each thing, it will return the ORIGINAL ARRAY
def list_superheros(superheros)
  superheros.each do |hero|
    puts hero + "!"
  end
end

# Map is usually used to return a NEW ARRAY for users
def list_superheros_with_map(superheros)
  # the curly boys {} will create a block similar to do / end
  superheros.map { |hero| hero + "!" }
end

# To join things into a single string you can use the .join method on an array

binding.pry
# Adding something to the end so that pry isn't the last line
puts "Hasta la vista baby"
