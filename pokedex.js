// const fetchPokemon = require('./api')

class Pokedex {

    constructor() {
        this.fetchedPokemon = []
    }

    catch(pokemon) {

        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
         .then((response) => response.json())
 
        .then(data => {
            const pokemonInfo = {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                
            }
            this.fetchedPokemon.push(pokemonInfo);
        })
    }

    all() {
        return this.fetchedPokemon;
    }
}

module.exports = Pokedex;