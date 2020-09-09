ENV["SINATRA_ENV"] ||= "development"

require_relative './config/environment'
require 'sinatra/activerecord/rake'

desc "Starts a pry session"
task :console do
  Pry.start
end
