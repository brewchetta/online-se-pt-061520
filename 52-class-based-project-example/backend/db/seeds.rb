puts "Seeding..."

GroceryItem.destroy_all
User.destroy_all

u1 = User.create(username: "Chett", password: "chett")
u2 = User.create(username: "Jason", password: "jason")
u3 = User.create(username: "Kyle", password: "kyle")

g1 = u1.grocery_items.create(name: "Tea")
g2 = u1.grocery_items.create(name: "Honey")
g3 = u2.grocery_items.create(name: "Ice Cream")
g4 = u3.grocery_items.create(name: "Life Elixer")

puts "Seeding complete!"
