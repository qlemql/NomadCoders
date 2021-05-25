import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Switch>
                {isLoggedin ? 
                <>
                <Route exact paht='/'>
                    <Home />
                </Route>
                </> : 
                <Route exact paht='/'>
                    <Auth />
                </Route> }
            </Switch>
        </Router>
    )
}

export default AppRouter;