# Gems / Utilities
require "pry"
require "colorize"
require "uri"
require "net/http"
require "json"

# Modules
require_relative "../lib/modules/Color.rb"

# Classes
require_relative "../lib/models/Song.rb"
require_relative "../lib/services/APIService.rb"
require_relative "../lib/services/cli.rb"

puts Color::Rainbow("Loaded environment")
