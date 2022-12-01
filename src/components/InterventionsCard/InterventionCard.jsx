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
    <tr className="interCard">
      <td className="interCard__date">
        <div className="interCard__date__container">
          <span>{day}</span>
          <span>{month}</span>
        </div>
      </td>
      <td className="interCard__name">
        <span className="interCard__name__title">{name}</span>
        <span className="interCard__name__date">{createAt}</span>
      </td>
      <td className="interCard__details">
        <span>{details}</span>
      </td>
      <td className="interCard__user">
        <span>{senderName}</span>
      </td>
      <td className="interCard__contact">
        <span>{senderMail}</span>
        <span>{senderPhone}</span>
      </td>
    </tr>
  );
}

export default InterventionCard;
