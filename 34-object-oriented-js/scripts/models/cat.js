class Cat extends Animal {

  constructor(name, canBePet, diet, livesRemaining) {
    super(name, canBePet, diet)
    this.livesRemaining = livesRemaining
    this.constructor.allCats.push(this)
  }

  static allCats = []

  static sayAllNames = () => {
    this.allCats.forEach(cat => console.log(cat.name))
  }

  takeBath = () => {

    const newArrowFunction = () => {
      console.log(this)
    }

    newArrowFunction()
    return `${this.name} licks their fur`
  }

  eat() {
    console.log(super.eat())
    return "Meow meow meow feed me"
  }

  makeSound = () => {
    console.log(`${this.name} meowed`)

    const whatIsThis = () => console.log("This is: ", this)

    whatIsThis()
  }

}
