Constellation.destroy_all
# This will remove all constellations AND their stars since constellations has a dependent: :destroy inside its model

# For seeding, we can create all the seeds we need in an array of hashes
constellations = [
  {name: "Ursa Major"},
  {name: "Perseus"},
  {name: "Cassiopeia"},
  {name: "Boötes"},
  {name: "Aries"},
  {name: "Aquila"}
]

# With the array, we can pass each hash into ActiveRecord's create method to automatically create the necessary constellations
constellations.each do |con|
  Constellation.create(con)
  puts "Seeded #{con[:name]}"
end
