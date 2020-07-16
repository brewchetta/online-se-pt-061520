# Gems
require "pry"
require "colorize"
require "json"
require "rest-client"

# Modules
require_relative "../lib/modules/Color.rb"

# Classes
require_relative "../lib/models/CatFact.rb"
require_relative "../lib/APIService.rb"

puts Color::Rainbow("Loaded environment")
