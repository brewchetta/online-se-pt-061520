const main = document.querySelector('main')

class TrainerCard {
  constructor(trainer, pokemons) {

    // Create Card //
    const card = document.createElement('div')
    main.append(card)
    card.className = 'card'

    // Add Nameplate //
    const nameTag = document.createElement('p')
    nameTag.innerText = trainer.name
    card.append(nameTag)

    // Add Create Pokemon Button //
    const addButton = document.createElement('button')
    addButton.innerText = "Add Pokemon"
    card.append(addButton)
    addButton.addEventListener("click", trainer.createPokemon)

    // Add Pokemon List //
    this.pokeList = document.createElement('ul')
    card.append(this.pokeList)

    pokemons.forEach(pokemon => this.addPokemonLi(pokemon))

    // Connect to Trainer //
    this.trainer = trainer

  }

  // Helpers //

  addPokemonLi = pokemon => {

    // Create Li //
    const li = document.createElement('li')
    this.pokeList.append(li)
    li.innerText = `${pokemon.nickname} (${pokemon.species}) `

    // Create Release Button //
    const button = document.createElement('button')
    button.innerText = 'Release'
    li.append(button)
    button.addEventListener("click", () => this.handleReleasePokemon(pokemon, li))

  }

  // Event Handlers //

  handleReleasePokemon = (pokemon, li) => {
    pokemon.delete()
    li.remove()
  }

}
