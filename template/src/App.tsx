import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import './tailwind.css';
import Main from './pages/main'

function App() {
  return ( 
    <BrowserRouter>
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Redirect to="/main" from="/" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
