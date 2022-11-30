import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInterventions } from '../../redux/actions';

import InterventionCard from '../InterventionsCard/InterventionCard';

function InterventionsList() {
  const interventions = useSelector((state) => state.inters);
  console.log(interventions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInterventions());
  }, []);

  // return <div style={styles.container}>{data && data.map((item) => <InterventionCard />)}</div>;
  return (
    <div className="intet">
      <span>{`${interventions.length} interventions`}</span>
      <InterventionCard />
    </div>
  );
}

export default InterventionsList;

// const styles = {
//   container: {
//     marginTop: '3em',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     border: '3px dashed #f1f1f1',
//     borderRadius: '15px',
//     textAlign: 'center'
//   }
//   placeholder: {
//     fontSize: '1.5em',
//     color: '#ccc',
//     fontWeight: 'bold'
//   }
// };
