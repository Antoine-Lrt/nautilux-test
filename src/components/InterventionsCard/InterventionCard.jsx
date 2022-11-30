import React from 'react';
import './style.scss';

function InterventionCard({ name, createAt, details, senderName, senderMail, senderPhone }) {
  return (
    <div className="card">
      <div className="card__date">
        <div className="card__date__container">
          <span>12</span>
          <span>Avr</span>
        </div>
      </div>
      <div className="card__name">
        <span>{name}</span>
        <span>{createAt}</span>
      </div>
      <div className="card__details">
        <p>{details}</p>
      </div>
      <div className="card__user">
        <span>{senderName}</span>
      </div>
      <div className="card__contact">
        <span>{senderMail}</span>
        <span>{senderPhone}</span>
      </div>
    </div>
  );
}

export default InterventionCard;
