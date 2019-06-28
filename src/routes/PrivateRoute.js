import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return <Route {...rest}><Component {...rest}/></Route>;
    }

    return <Route><Redirect to={{pathname: '/register'}}/></Route>;
};

export default PrivateRoute;
 
