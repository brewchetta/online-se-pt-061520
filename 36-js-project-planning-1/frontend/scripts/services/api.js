class API {

  // Constructor //
  constructor(port = 3000) {
    this.url = `http://localhost:${port}`
  }

  // Helpers //
  parseJSON = response => response.json()

  headers = {"Accepts": "application/json", "Content-Type": "application/json"}

  // Getters //
  get trainerURL() {
    return this.url + '/trainers'
  }

  get pokemonURL() {
    return this.url + '/pokemons'
  }

  // Trainer Requests //
  fetchTrainers = () => {
    return fetch(this.trainerURL).then(this.parseJSON)
  }

  fetchTrainer = (id) => {
    return fetch(this.trainerURL + `/${id}`).then(this.parseJSON)
  }

  // Pokemon Requests //

  fetchPokemons = () => {
    return fetch(this.pokemonURL).then(this.parseJSON)
  }

  fetchPokemon = (id) => {
    return fetch(this.pokemonURL + `/${id}`).then(this.parseJSON)
  }

  postPokemon = (trainerId) => {
    return fetch(this.pokemonURL, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({trainer_id: trainerId})
    }).then(this.parseJSON)
  }

  deletePokemon = (id) => {
    return fetch(this.pokemonURL + `/${id}`, {
      method: "DELETE",
      headers: this.headers
    }).then(this.parseJSON)
  }

}
