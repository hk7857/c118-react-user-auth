import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import AboutUS from './about_us';
import SecretDocs from './secret_docs';
import OperativesList from './operatives_list';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <div className="container">
            <Nav/>

            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={AboutUS}/>
            <Route exact path="/secret-docs" component={auth(SecretDocs)}/>
            <Route exact path="/operative-list" component={OperativesList}/>
        </div>
    </div>
);

export default App;
