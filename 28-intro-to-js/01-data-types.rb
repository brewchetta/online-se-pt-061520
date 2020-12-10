require "pry"

# String
some_string = "I am a string"
string_interpolation = "I am #{1} string with interpolation"

# Integer / Float
some_integer = 1
some_float = 0.1

# Boolean
some_boolean = true

# Hash
some_hash = {
  title: "Some Hash",
  nested_names: {
    name_a: "Chett",
    name_b: "Talia"
  }
}

# Array
some_array = [1,2,3]

binding.pry
