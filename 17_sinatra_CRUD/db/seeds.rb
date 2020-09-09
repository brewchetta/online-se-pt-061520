Constellation.destroy_all
# This will remove all constellations AND their stars since constellations has a dependent: :destroy inside its model

# For seeding, we can create all the seeds we need in an array of hashes
constellations = [
  {name: "Ursa Major"},
  {name: "Taurus"},
  {name: "Virgo"},
  {name: "Perseus"},
  {name: "Pisces"},
  {name: "Sagittarius"},
  {name: "Scorpius"},
  {name: "Pegasus"},
  {name: "Orion"},
  {name: "Lyra"},
  {name: "Libra"},
  {name: "Leo"},
  {name: "Gemini"},
  {name: "Draco"},
  {name: "Cygnus"},
  {name: "Cassiopeia"},
  {name: "Capricornus"},
  {name: "Canis Major"},
  {name: "Cancer"},
  {name: "Boötes"},
  {name: "Auriga"},
  {name: "Aries"},
  {name: "Aquila"},
  {name: "Aquarius"}
]

# With the array, we can pass each hash into ActiveRecord's create method to automatically create the necessary constellations
constellations.each do |con|
  Constellation.create(con)
  puts "Seeded #{con[:name]}"
end
