# first let's wipe the former entries
Rivalry.destroy_all
Hero.destroy_all
Villain.destroy_all
City.destroy_all

# here are a few heroes:
justice_league = [
  { name: "Batman", secret_identity: "Bruce Wayne", power: "Really rich" },
  { name: "Superman", secret_identity: "Clark Kent", power: "Basically everything" },
  { name: "Wonder Woman", secret_identity: "Diana Prince", power: "Amazon strength" },
  { name: "Aquaman", secret_identity: "Arthur Curry", power: "Talks to fish" },
  { name: "Flash", secret_identity: "Barry Allen", power: "Super fast" }
]

# we can iterate over our heroes and create them by passing in each hash
justice_league.each { |hero| Hero.create(hero) }

# here's a little more seed data:

legion_of_doom = [
  { name: "Riddler", power: "Brain teasers", desire: "Prove his intellectual superiority" },
  { name: "Lex Luthor", power: "Really smart ... and rich", desire: "Evil capitalism" },
  { name: "Cheetah", power: "Agility and strength", desire: "To hunt" },
  { name: "Black Manta", power: "High tech manta suit", desire: "Control of the sea" },
  { name: "Captain Cold", power: "Freeze Ray", desire: "Ice ice baby" }
]

cities = [
  { name: "Gotham City" },
  { name: "Metropolis" },
  { name: "Central City" },
  { name: "Atlantis" }
]
