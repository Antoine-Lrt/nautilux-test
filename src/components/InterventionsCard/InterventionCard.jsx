import React from 'react';
import './style.scss';

function InterventionCard({
  name,
  createAt,
  details,
  senderName,
  senderMail,
  senderPhone,
  day,
  month
}) {
  return (
    <div className="interCard">
      <div className="interCard__date">
        <div className="interCard__date__container">
          <span>{day}</span>
          <span>{month}</span>
        </div>
      </div>
      <div className="interCard__name">
        <span className="interCard__name__title">{name}</span>
        <span className="interCard__name__date">{createAt}</span>
      </div>
      <div className="interCard__details">
        <span>{details}</span>
      </div>
      <div className="interCard__user">
        <span>{senderName}</span>
      </div>
      <div className="interCard__contact">
        <span>{senderMail}</span>
        <span>{senderPhone}</span>
      </div>
    </div>
  );
}

export default InterventionCard;
