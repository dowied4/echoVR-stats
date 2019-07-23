import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Screens/Home';
import Roster from './Screens/Roster';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/roster/:id" component={Roster}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
