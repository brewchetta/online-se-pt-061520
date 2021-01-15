class Pokemon {

  constructor(data, trainer) {
    // Assign Attributes //
    Object.keys(data).forEach(key => this[key] = data[key])
    this.trainer = trainer
  }

  // Helpers //

  delete = () => {
    const api = new API
    api.deletePokemon(this.id)
    delete this
  }

}
