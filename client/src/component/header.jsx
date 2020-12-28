import React, { Component } from 'react';
import logo from '../image/unnamed.png'
import '../style/header.css'



 class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='header'>
                <img className='img' src={logo} alt=""/>
                <div className='search'>
                   <button className='button'>search</button>
                   <input className="input" type="text" name="Search" id=""/>
                </div>
            </div>
         );
    }
}

export default Header;