import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from './routes/Router';
import { getInterventions } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInterventions());
  }, []);

  return (
    <div className="container">
      <Router />
    </div>
  );
}

export default App;
