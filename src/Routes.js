import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./core/Home";
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashboard from './user/userDashboard';
import Add from './user/addlocation';

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/signup"
            component={Signup}/>
            <Route path="/signin"
            component={Signin}/>
            <Route path="/userDashboard"
            component={UserDashboard}/>
            <Route path="/add"
            component={Add}/>
            
            

            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;