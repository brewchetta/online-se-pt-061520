puts "Creating test data..."

kids = [
  {name: "Chett", age: 9},
  {name: "Talia", age: 11}
]

toys = [
  {name: "Tamagotchi", commercial: "https://www.youtube.com/watch?v=P_2-D2WW_qM"},
  {name: "Furby", commercial: "https://www.youtube.com/watch?v=PHWcBbf0Eng"},
  {name: "Pokemon Cards"},
  {name: "Super Soaker", commercial: "https://www.youtube.com/watch?v=neggpM2y3KQ"}
]

kids.each { |kid| Kid.new(kid) }
toys.each { |toy| Toy.new(toy) }

puts "Test data loaded..."
