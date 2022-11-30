import React from 'react';
import { useSelector } from 'react-redux';
import InterventionsList from '../components/containers/InterventionsList';
import CustomButton from '../components/CustomButton/CustomButton';
import InterventionCard from '../components/InterventionsCard/InterventionCard';
import './style.scss';

function Home() {
  const interventions = useSelector((state) => state.inters);
  return (
    <div className="home">
      <div className="home__action">
        <CustomButton text={'Créer une intervention'} type="primary" />

        <span className="home__action__details">{`${interventions.length} interventions`}</span>
      </div>
      <InterventionsList />
      {/* {interventions &&
        interventions.map((inter) => (
          <InterventionCard
            key={inter.id}
            name={inter.name}
            createAt={inter.created_at}
            details={inter.description}
            senderName={inter.sender_name}
            senderMail={inter.sender_email}
            senderPhone={inter.sender_phone}
          />
        ))} */}
    </div>
  );
}

export default Home;
