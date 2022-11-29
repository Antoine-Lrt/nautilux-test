import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterventions } from '../redux/actions';

function InterventionsList() {
  const interventions = useSelector((state) => state.inters);
  console.log(interventions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInterventions());
  }, []);
  return (
    <div style={styles.container}>
      {interventions && interventions.map((item) => <p style={styles.placeholder}>{item.title}</p>)}
    </div>
  );
}

export default InterventionsList;

const styles = {
  container: {
    marginTop: '3em',
    padding: '10em',
    width: '100%',
    border: '3px dashed #f1f1f1',
    borderRadius: '15px',
    textAlign: 'center'
  },
  placeholder: {
    fontSize: '1.5em',
    color: '#ccc',
    fontWeight: 'bold'
  }
};
