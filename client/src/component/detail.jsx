import React, { useEffect, useState } from 'react';


function PokemonDetail({match}) {
    useEffect(() => {
       fetchPokemon()
    }, [])

    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = async () => {
        const fetchPokemon = await fetch(`http://localhost:4242/pokemon/${match.params.id}`)
        const pokemon = await fetchPokemon.json()
        setPokemon(pokemon)
        console.log(pokemon)

    }
    return (
        <div>
           <h1>{pokemon.nom}</h1> 
        </div>
    )
}

export default PokemonDetail;