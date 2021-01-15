class Pokemon {

  constructor(data, trainer) {
    Object.keys(data).forEach(key => this[key] = data[key])
    this.trainer = trainer
  }

  delete = () => {
    const api = new API
    api.deletePokemon(this.id)
    delete this
  }

}
