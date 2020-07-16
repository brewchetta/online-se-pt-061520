# Gems / Utilities
require "pry"
require "colorize"
# we need 'uri' in order to parse our endpoint address
require "uri"
# we use 'net/http' in order to make the requests
require "net/http"
# we need 'json' to parse the responses
require "json"


# Modules
require_relative "../lib/modules/Color.rb"

# Classes
require_relative "../lib/services/APIService.rb"

puts Color::Rainbow("Loaded environment")
