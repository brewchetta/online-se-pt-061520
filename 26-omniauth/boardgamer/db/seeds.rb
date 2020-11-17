BoardgameCategory.destroy_all
Boardgame.destroy_all
Category.destroy_all

boardgames = [
  {
    name: "Snakes and Ladders",
    minimum_age: 5,
    playtime: 30,
    min_players: 2,
    max_players: 6
  },
  {
    name: "Candyland",
    minimum_age: 5,
    playtime: 30,
    min_players: 2,
    max_players: 4
  },
  {
    name: "Mario Party",
    minimum_age: 8,
    playtime: 60,
    min_players: 2,
    max_players: 4
  },
  {
    name: "Mansions of Madness",
    minimum_age: 14,
    playtime: 120,
    min_players: 1,
    max_players: 6
  },
  {
    name: "Magic the Gathering",
    minimum_age: 12,
    playtime: 30,
    min_players: 2,
    max_players: 2
  },
  {
    name: "Azul",
    minimum_age: 8,
    playtime: 30,
    min_players: 2,
    max_players: 4
  },
  {
    name: "Dead of Winter",
    minimum_age: 14,
    playtime: 60,
    min_players: 2,
    max_players: 4
  },
  {
    name: "Settlers of Catan",
    minimum_age: 10,
    playtime: 60,
    min_players: 4,
    max_players: 4
  }
]

boardgames.each do |bg|
  Boardgame.create!(bg)
end

categories = ["deck builder", "roll-and-move", "storytelling", "horror", "digital", "wargame", "resource management"]

categories.each do |c|
  Category.create!(name: c)
end

puts "Seeded..."
