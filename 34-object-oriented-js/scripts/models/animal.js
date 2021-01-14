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
