const fetchPokemon = (pokemonname) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
         .then((response) => response.json())
    // .then((data) => console.log(data));
 
        .then(data => {
            let pokemonInfo = {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                
            }
            return pokemonInfo;
        })
}
 
module.exports = fetchPokemon;