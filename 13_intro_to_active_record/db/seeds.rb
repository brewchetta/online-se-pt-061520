# first let's unseed the former heroes
Hero.destroy_all

# then let's create a few heroes
justice_league = [
  { name: "Batman", secret_identity: "Bruce Wayne", power: "Really rich" },
  { name: "Superman", secret_identity: "Clark Kent", power: "Basically everything" },
  { name: "Wonder Woman", secret_identity: "Diana Prince", power: "Amazon strength" },
  { name: "Aquaman", secret_identity: "Arthur Curry", power: "Talks to fish" },
  { name: "Flash", secret_identity: "Barry Allen", power: "Super fast" }
]

# with the hero hash we can just call .each to iterate and create our heroes
justice_league.each { |hero| Hero.create(hero) }
