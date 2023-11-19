import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Clo from './Components/DetailsPages/Clo';
import Anderson from './Components/DetailsPages/Anderson';
import Layout from './Components/Layout';

const App = () => (
    <Router>
      <Switch>
        <Route path="/Clo">
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 35%' }}>
              <Clo />
            </div>
          </div>
        </Route>
        <Route path="/Anderson">
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '0 0 35%' }}>
              <Anderson />
            </div>
          </div>
        </Route>
        <Route exact path="/">
          <Layout />
        </Route>
        
      </Switch>
    </Router>
  );
  
  export default App;
