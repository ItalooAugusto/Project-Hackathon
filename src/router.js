import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Projeto from './pages/Projeto';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function Routes() {
return (


<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/equipe" component={Equipe} />
        <Route path="/projeto" component={Projeto} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
    </Switch>
</BrowserRouter>

);

}