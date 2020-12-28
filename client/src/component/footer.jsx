import React, { Component } from 'react';
import logo from '../image/GitHub-Mark.png';
import logo1 from '../image/GitHub-Mark (1).png';
import logo2 from '../image/GitHub-Mark (2).png';
import footir from '../image/footer (1).jpg';
import fleche from '../image/fleche.png';
import '../style/footer.css';




class Footer extends Component {
    state = {  }
    render() {
        return(
            <div className='footer'>
                <a classeName="fleche" href="#"><img className="retour" alt="" src={fleche} /></a>
                <img className='footir' src={footir} href="https://github.com/aymene01" />
                <p className='origin'><a className='about' href="https://www.github.com" target="_blank" >About this</a></p> {/* à changer le lien avec notre lien de repo ou le read me */}
                <u className='links'>
                    <li className='lists'>
                        <a href="https://github.com/aymene01" target="_blank"><img className="logo" alt="" src={logo} /></a>
                        <a href="https://github.com/Mehdi-githu" target="_blank"><img className="logo" alt="" src={logo1} /></a>
                        <a href="https://github.com/Chahine-tech" target="_blank"><img className="logo" alt="" src={logo2} /></a>
                    </li>
                </u>
                <p className='copy'> &copy; 2020 -<a className='efrei' href="https://www.efrei.fr/" target="_blank" >Efrei Paris</a>- Établissement d'enseignement supérieur technique privé  </p>
                
            </div>

        );

    }
}
export default Footer