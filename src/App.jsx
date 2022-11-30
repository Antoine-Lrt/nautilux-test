import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import { getInterventions } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInterventions());
  }, []);
  return (
    <div className="container">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
