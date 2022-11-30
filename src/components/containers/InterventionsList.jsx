import moment from 'moment';
import 'moment/locale/fr';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InterventionCard from '../InterventionsCard/InterventionCard';
import './style.scss';

function InterventionsList() {
  const interventions = useSelector((state) => state.inters);
  console.log(interventions);

  function formatDate(date) {
    const formatedDate = moment(date).local('fr').format('l HH:mm');
    console.log('formated date id', formatedDate);
    return formatedDate;
  }

  function getDay(date) {
    const getDay = moment(date).format('DD');
    console.log('day', getDay);
    return getDay;
  }

  function getMonth(date) {
    const monthName = moment(date).locale('fr').format('MMM');
    console.log('month', monthName);
    return monthName;
  }

  return (
    <div className="list">
      <section className="list__header">
        <span className="list__header__date">Date</span>
        <span className="list__header__name">Nom</span>
        <span className="list__header__details">Description</span>
        <span className="list__header__user">Demendeur</span>
        <span className="list__header__contact">Coordonnées</span>
      </section>
      <section className="list__element">
        {interventions &&
          interventions.map((inter) => (
            <Link style={{ textDecoration: 'none' }} to="/details">
              <InterventionCard
                day={getDay(inter.created_at)}
                month={getMonth(inter.created_at)}
                key={inter.id}
                name={inter.name}
                createAt={formatDate(inter.created_at)}
                details={inter.description}
                senderName={inter.sender_name}
                senderMail={inter.sender_email}
                senderPhone={inter.sender_phone}
              />
            </Link>
          ))}
      </section>
    </div>
  );
}

export default InterventionsList;
