import moment from 'moment';
import 'moment/locale/fr';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InterventionCard from '../InterventionsCard/InterventionCard';
import { RiArrowUpDownLine } from 'react-icons/ri';
import './style.scss';

function InterventionsList({}) {
  const interventions = useSelector((state) => state.inters);
  console.log(interventions);
  const [sortValue, setSortValue] = useState('');

  function formatDate(date) {
    const formatedDate = moment(date).local('fr').format('L HH:mm');
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
    <table className="list">
      <tr className="list__header">
        <th onClick={'onSortList'} className="list__header__date">
          <span>Date</span>
          <span>
            <RiArrowUpDownLine size={15} />
          </span>
        </th>
        <th className="list__header__name">
          <span>Nom</span>
        </th>
        <th className="list__header__details">
          <span>Description</span>
        </th>
        <th className="list__header__user">
          <span>Demendeur</span>
        </th>
        <th className="list__header__contact">
          <span>Coordonnées</span>
        </th>
      </tr>
      <tr className="list__element">
        {interventions &&
          interventions.map((inter) => (
            <Link style={{ textDecoration: 'none' }} to={`details/${inter.id}`}>
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
      </tr>
    </table>
  );
}

export default InterventionsList;
