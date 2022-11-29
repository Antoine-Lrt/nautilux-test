import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import InterventionsList from './containers/InterventionsList';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <InterventionsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
