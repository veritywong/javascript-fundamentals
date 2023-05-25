const Pokedex = require('./pokedex');


describe('Pokedex', () => {
    it('catches a pokemon', (done) => {

        const pokedex = new Pokedex();

        pokedex.catch('pikachu')
            .then(() => {
                pokedex.catch('charizard')
                .then(() => {
                    expect(pokedex.all()[0].name).toEqual('pikachu');
                    
                    expect(pokedex.all()[1].name).toEqual('charizard');
                    console.log(pokedex.all())
                    expect(pokedex.all().map(object => object.name)).toEqual([ 'pikachu', 'charizard' ]);
                    done();
                });
            })
      
        
    })
})