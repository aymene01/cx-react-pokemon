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
            <h2>Identité</h2>
            <ul>
                <li>Couleur: {pokemon.couleur}</li>
                <li>Espece: {pokemon.espece}</li>
                <li>Type1: {pokemon.type1}</li>
                <li>Taille: {pokemon.taille}</li>
                <li>Poids: {pokemon.poids}</li>
                <li>Forme: {pokemon.forme}</li>
                <li>NomFR: {pokemon.nom}</li>
                <li>NomEN: {pokemon.nomen}</li>
                <li>NomDE: {pokemon.nomde}</li>
                <li>NomJA: {pokemon.nomja}</li>
                <li>Nomromaji: {pokemon.nomromaji}</li>
                <li>NomTM: {pokemon.nomtm}</li>
            </ul>
            <h2>Attaque</h2>
            <ul>
                <li>Niveau: {pokemon.attaques.niveau}</li>
                <li>Nom:{pokemon.attaques.nom}</li>
                <li>Puissance:{pokemon.attaques.puissance}</li>
                <li>Precision:{pokemon.attaques.precision}</li>
                <li>Pp:{pokemon.attaques.pp}</li>
            </ul>
        </div>
    )
}
export default PokemonDetail;