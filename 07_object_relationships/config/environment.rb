system("clear")

# Gems
require "pry"
require "colorize"

# Modules
require_relative "../lib/modules/Color.rb"

# Classes
require_relative "../lib/models/Toy.rb"
require_relative "../lib/models/Kid.rb"

# Seed File
require_relative "../lib/seed.rb"

puts Color::Rainbow("Loaded environment")
sleep(1.5)
system("clear")
