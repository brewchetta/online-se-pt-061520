const main = document.querySelector('main')

class TrainerCard {
  constructor(trainer, pokemons) {
    // create card
    const card = document.createElement('div')
    main.append(card)
    card.className = 'card'

    // add nameplate
    const nameTag = document.createElement('p')
    nameTag.innerText = trainer.name
    card.append(nameTag)

    // create the button
    const addButton = document.createElement('button')
    addButton.innerText = "Add Pokemon"
    card.append(addButton)
    addButton.addEventListener("click", trainer.createPokemon)

    // create ul of pokemon
    this.pokeList = document.createElement('ul')
    card.append(this.pokeList)

    pokemons.forEach(pokemon => this.addPokemonLi(pokemon))

    this.trainer = trainer
  }

  // Helpers //
  addPokemonLi = pokemon => {
    const li = document.createElement('li')
    this.pokeList.append(li)
    li.innerText = `${pokemon.nickname} (${pokemon.species}) `
    const button = document.createElement('button')
    button.innerText = 'Release'
    li.append(button)
    button.addEventListener("click", () => this.releasePokemon(pokemon, li))
  }

  releasePokemon = (pokemon, li) => {
    pokemon.delete()
    li.remove()
  }

}
