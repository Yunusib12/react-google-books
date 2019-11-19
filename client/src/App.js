import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search/Search';
import Save from './pages/Save/Save';
import NavbarComp from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/save" component={Save} />
          <Route path="*" component={Search} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;