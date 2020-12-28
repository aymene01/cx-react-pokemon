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
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt=""/>
            <h2>NOM</h2>
            <ul>
                <li>nom: {pokemon.nom}</li>
                <li>nomde: {pokemon.nomde}</li>
                <li>nomja: {pokemon.nomja}</li>
                <li>nomromaji: {pokemon.nomromaji}</li>
                <li>nomtm: {pokemon.nomtm}</li>
            </ul>
        </div>
    )
}
export default PokemonDetail;