require_relative "config/environment"
require 'standalone_migrations'
StandaloneMigrations::Tasks.load_tasks

desc "Starts the console"
task :console do
  Pry.start
end
