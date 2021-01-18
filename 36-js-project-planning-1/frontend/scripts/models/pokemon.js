class Pokemon {

  constructor(data, trainer) {
    // Assign Attributes //
    Object.keys(data).forEach(key => this[key] = data[key])
    this.trainer = trainer
  }

  // Helpers //

  delete = () => {
    // You can still call `api` if it was declared in the index
    api.deletePokemon(this.id)
    delete this
  }

}
