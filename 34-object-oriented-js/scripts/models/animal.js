class Animal {

  constructor(name, canBePet, diet) {
    this.name = name
    this.canBePet = canBePet
    this.diet = diet

    const animalElement = document.createElement('p')
    animalElement.innerText = `Name: ${this.name}`
    document.querySelector('#animal-container').append(animalElement)
  }

  eat() {
    return `I am eating ${this.diet} nom nom`
  }

  makeSound = function() {
    console.log(`${this.name} made a sound`)
  }

}
