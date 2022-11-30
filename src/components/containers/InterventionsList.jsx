import React from 'react';
import { useSelector } from 'react-redux';
import InterventionCard from '../InterventionsCard/InterventionCard';

function InterventionsList() {
  const interventions = useSelector((state) => state.inters);
  console.log(interventions);

  return (
    <div className="intet">
      {interventions &&
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
        ))}
    </div>
  );
}

export default InterventionsList;
