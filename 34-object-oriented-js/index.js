class Animal {

  constructor(name, canBePet, diet) {
    this.name = name
    this.canBePet = canBePet
    this.diet = diet
  }

  makeSound = function() {
    console.log(`${this.name} made a sound`)
  }

}

class Cat extends Animal {

  constructor(name, canBePet, diet, livesRemaining) {
    super(name, canBePet, diet)
    this.livesRemaining = livesRemaining
    this.constructor.allCats.push(this)
  }

  static allCats = []

  static sayAllCatNames = () => {
    this.allCats.forEach(cat => console.log(cat.name))
  }

  takeBath = () => {
    return `${this.name} licks their fur`
  }

  makeSound = () => {
    console.log(`${this.name} meowed`)

    const whatIsThis = () => console.log("This is: ", this)

    whatIsThis()
  }

}


octavia = new Cat("Octavia", true, "fish as in now", 7)

ursula = new Cat("Ursula", false, "fishies", 9)
