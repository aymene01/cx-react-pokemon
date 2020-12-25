import React, { Component } from 'react';
import Pokecard from './pokecard';
import Header from '../component/header'
import Footer from '../component/footer'
import './pokedex.css'



class Pokedex extends Component {
    state = { 
        pokemon: []
     }
    async componentDidMount(){
        const url = "http://localhost:4242/pokemon"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({pokemon: data})
    }
    render() { 
        return ( 
            <div className='main'>
                <div className='header'>
                    <Header/>
                </div>
                <div className='pokedex'>
                    {this.state.pokemon.map(pokemon => (
                    <Pokecard 
                    name={pokemon.nom}
                    img={pokemon.ndex}
                    number={pokemon.numéro}/>
                ))}
                <div className='footer'>
                    <Footer/>
                </div>
                </div>
            
            </div>
         );
}
}
 
export default Pokedex;