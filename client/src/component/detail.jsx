import React, { useEffect, useState } from 'react';
import '../style/detail.css'


const PokemonDetail = ({match}) => {
    useEffect(() => {
       fetchPokemon()
    }, [])

    const [pokemon, setPokemon] = useState({
        attaques: [],
    }
)
    const fetchPokemon = async () => {
        const fetchPokemon = await fetch(`http://localhost:4242/pokemon/${match.params.id}`)
        const pokemon = await fetchPokemon.json()
        setPokemon(pokemon)
        console.log(pokemon)

    }
    return (
        <div className='detail-pokemon'>
        <img className='det-img'src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt=""/>
        <h1 className='title-detail'>Identité</h1>
        <table className="table mb-5 mt-2">
             <thead>
                 <tr>
                 <th >Nom</th>
                 <th>Nomen</th>
                 <th>Nomja</th>
                 <th>Nomde</th>
                 <th>Nomromaji</th>
                 <th>Nomtm</th>
                 <th>Poid</th>
                 <th>Taille</th>
                 <th>Type1</th>
                 <th>Type2</th>
                 </tr>
                
             </thead>
             <tbody>
                 <tr>
                 <td>{pokemon.nom}</td>
                 <td>{pokemon.nomen}</td>
                 <td>{pokemon.nomja}</td>
                 <td>{pokemon.nomde}</td>
                 <td>{pokemon.nomromaji}</td>
                 <td>{pokemon.nomtm}</td>
                 <td>{pokemon.poids}</td>
                 <td>{pokemon.taille}</td>
                 <td>{pokemon.type1}</td>
                 <td>{pokemon.type2}</td> 
                 </tr>
             </tbody>
        </table>
        <h1 className= 'title-detail'>Attaque</h1>
        <table className="table mt-2">
        <thead>
                <th>Niveau</th>
                <th>Nom</th>
                <th>Puissance</th>
                <th>Précision</th>
            </thead>
            {pokemon.attaques.map(attaque => (
                <tbody>
                  <td>{attaque.niveau}</td>
                  <td>{attaque.nom}</td>
                  <td>{attaque.puissance}</td>
                  <td>{attaque.precision}</td>
              </tbody>
            ))}
        </table>
    </div>
    )
    
}

export default PokemonDetail;

