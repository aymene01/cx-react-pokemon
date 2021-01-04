import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/detail.css';
import Footer from '../component/footer';



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
         <div className='header'>
             <Link to='/pokemon'>
                <button className='back'>Back</button>
             </Link>
            <img className='det-img'src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.ndex}.png`} alt=""/>
         </div>

        <div className='content'>
        <h1 className='title-detail'>Identité</h1>
        <table className="table">
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
        <table className="table">
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
        <div className='footer'>
           <Footer/>
        </div>
    </div>
</div>
)
    
}



export default PokemonDetail;

