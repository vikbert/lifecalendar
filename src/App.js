import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Register from './components/register/Register';
import LiveCalendar from './components/LifeCalendar';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from "./components/NotFound";

const App = () => (
    <Router>
        <Switch>
            <Route exact path={'/register'} component={Register}/>
            <PrivateRoute exact path={'/'} component={LiveCalendar}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default App;
