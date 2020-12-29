import React, { useEffect, useState } from 'react';
import '../style/detail.css';

function PokemonDetail({match}) {
    useEffect(() => {
       fetchPokemon()
    }, [])

    const [pokemon, setPokemon] = useState({
        attaques: [],
        pokemon:[]
    });

    const fetchPokemon = async () => {
        const fetchPokemon = await fetch(`http://localhost:4242/pokemon/${match.params.id}`)
        const pokemon = await fetchPokemon.json()
        setPokemon(pokemon)
        console.log(pokemon)

    }
    return (
        <div className='detail'>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt=""/>
            <div className='identité'>
                 <h1>Identité</h1>
                 <ul>
                     <li>{pokemon.nom}</li>
                     <li>{pokemon.nomen}</li>
                     <li>{pokemon.nomde}</li>
                     <li>{pokemon.nomja}</li>
                     <li>{pokemon.nomromaji}</li>
                     <li>{pokemon.nomtm}</li>
                     <li>{pokemon.poids}</li>
                     <li>{pokemon.taille}</li>
                     <li>{pokemon.type1}</li>
                </ul>
               
           </div>
           <div>
              <ul>
              <div className='attaque'>
              <h1>Attaque</h1>
                 {pokemon.attaques.map(item => (
                     <ul>
                       <li>{item.niveau}</li>
                       <li>{item.nom}</li>
                       <li>{item.puissance}</li>
                       <li>{item.precision}</li>
                     </ul>
                 ))}
              </div>
              </ul>
           </div>
       </div>
)}

export default PokemonDetail;

