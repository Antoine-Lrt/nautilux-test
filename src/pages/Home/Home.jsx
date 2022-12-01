import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InterventionsList from '../../components/containers/InterventionsList';
import CustomButton from '../../components/CustomButton/CustomButton';
import './style.scss';

function Home() {
  const interventions = useSelector((state) => state);
  console.log('intervention', interventions);
  return (
    <div className="home">
      <div className="home__action">
        <Link to="/formulaire">
          <CustomButton
            btnType="button"
            route={'/formulaire'}
            text={'Créer une intervention'}
            type="primary"
          />
        </Link>
        {/* <span className="home__action__details">{`${inters.length} interventions`}</span> */}
      </div>
      <InterventionsList />
    </div>
  );
}

export default Home;
