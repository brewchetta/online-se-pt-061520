class Trainer {

  constructor(data) {
    // Assign Attributes //
    this.id = data.id
    this.name = data.name

    // Build Pokemon Dependents //
    const pokemons = data.pokemons.map(pokeData => new Pokemon(pokeData, this))

    // Build Associated Trainer Card //
    this.card = new TrainerCard(this, pokemons)
  }

  // Helpers //

  createPokemon = () => {
    const api = new API
    api.postPokemon(this.id)
    .then(pokeData => {
      const newPoke = new Pokemon(pokeData)
      this.card.addPokemonLi(newPoke)
    })
    .catch(console.log)
  }

}
