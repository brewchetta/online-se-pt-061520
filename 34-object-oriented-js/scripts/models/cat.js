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
