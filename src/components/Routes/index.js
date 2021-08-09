import React from 'react';
import {BrowserRouter as Router,Switch, Redirect,Route,} from 'react-router-dom'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';


const index = () => {
    
    return (
       
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/profil' exact component={Profil} />
               
            </Switch>
        </Router>

    )
};

export default index;