import React, { Component } from 'react';
import logo from '../image/unnamed.png'
import './header.css'



class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='header'>
                <img className='img' src={logo} alt=""/>
                <input className="search-bar" type="text" name="" id=""/>
            </div>
         );
    }
}
 
export default Header;