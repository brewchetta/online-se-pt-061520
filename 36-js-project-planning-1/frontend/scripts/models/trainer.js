class Trainer {

  constructor(data) {
    this.id = data.id
    this.name = data.name

    const pokemons = data.pokemons.map(pokeData => new Pokemon(pokeData, this))

    this.card = new TrainerCard(this, pokemons)
  }

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
