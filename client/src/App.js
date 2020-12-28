import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from './component/detail';
import Pokedex from './component/pokedex'


class App extends Component {
    state = {  }
    render() { 
        return ( 
          <Router>
            <div className='App'>
            <Switch>
                <Route path='/pokemon' exact component={Pokedex}/>
                <Route path='/pokemon/:id' component={Detail}/>
            </Switch>
            </div>
          </Router>
           
         );
    }
}
 
export default App;