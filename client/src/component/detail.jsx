import React, { useEffect, useState } from 'react';


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
                 <ul className='nom'>
                     <li>NomFR:{pokemon.nom}</li>
                     <li>NomEN:{pokemon.nomen}</li>
                     <li>NomDE:{pokemon.nomde}</li>
                     <li>NomJA:{pokemon.nomja}</li>
                     <li>Nomromaji:{pokemon.nomromaji}</li>
                     <li>NomTM:{pokemon.nomtm}</li>
                 </ul>
                 <ul className='caracteristique'>
                     <li>Couleur:{pokemon.couleur}</li>
                     <li>Espece:{pokemon.espece}</li>
                     <li>Poids:{pokemon.poids}</li>
                     <li>Taille:{pokemon.taille}</li>
                     <li>Type1:{pokemon.type1}</li>
                     <li>Forme:{pokemon.forme}</li>
                 </ul>    
                     
                
               
           </div>
           <div>
              <ul>
              <h1>Attaque</h1>
                 {pokemon.attaques.map(item => (
                     <ul className='attaques'>
                       <li>Niveau:{item.niveau}</li>
                       <li>Nom:{item.nom}</li>
                       <li>Puissance:{item.puissance}</li>
                       <li>Precision:{item.precision}</li>
                     </ul>
                 ))}
              </ul>
           </div>
       </div>
      
)}

export default PokemonDetail;

