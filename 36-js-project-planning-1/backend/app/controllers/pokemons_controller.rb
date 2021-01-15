class PokemonsController < ApplicationController
  def index
    pokemons = Pokemon.all
    render json: pokemons, include: [:trainer]
  end

  def show
    pokemon = Pokemon.find_by_id(params[:id])
    render json: pokemon, include: [:trainer]
  end

  def create
    name = Faker::Name.first_name
    species = Faker::Games::Pokemon.name
    trainer = Trainer.find_by_id(params[:trainer_id])
    if trainer && trainer.pokemons.length < 6
      pokemon = Pokemon.create(nickname: name, species: species, trainer: trainer)
      render json: pokemon, include: [:trainer]
    else
      render json: {
        error: "Trainer must exist and cannot have more than six pokemon!",
        status: 400
      }, status: 400
    end
  end

  def destroy
    pokemon = Pokemon.find_by_id(params[:id])
    pokemon.destroy
    render json: pokemon, include: [:trainer]
  end
end
