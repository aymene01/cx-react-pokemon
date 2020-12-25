import React, { Component } from 'react';
import './pokecard.css'

class Pokecard extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div className='pokecard'>
                <h1 className='title'>{this.props.name}</h1>
                <img className='image'src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.img}.png`} alt=""/>
                <p className='number'>{this.props.number}</p>
            </div>
         );
    }
}
 
export default Pokecard;