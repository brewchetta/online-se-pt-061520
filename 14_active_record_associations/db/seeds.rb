Hero.destroy_all

justice_league = [
  { name: "Batman", secret_identity: "Bruce Wayne", power: "Really rich" },
  { name: "Superman", secret_identity: "Clark Kent", power: "Basically everything" },
  { name: "Wonder Woman", secret_identity: "Diana Prince", power: "Amazon strength" },
  { name: "Aquaman", secret_identity: "Arthur Curry", power: "Talks to fish" },
  { name: "Flash", secret_identity: "Barry Allen", power: "Super fast" }
]

justice_league.each { |hero| Hero.create(hero) }
