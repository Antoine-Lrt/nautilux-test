import React from 'react';
import './style.scss';

function InterventionCard({ count }) {
  return (
    <div className="card">
      <section className="card__date">
        <div className="card__date__container">
          <span>12</span>
          <span>Avr</span>
        </div>
      </section>
      <section className="card__name">
        <span>Nid de poules</span>
        <span>date</span>
      </section>
      <section className="card__details">
        <span>le nide de poudsqfsqdfsqd sdfqsldkjfklqsjdflkj lqskdjflksqjdflkj lqksdjf</span>
        <span>Avr</span>
      </section>
      <section className="card__user">
        <span>Antoine</span>
        <span>Laurent</span>
      </section>
      <section className="card__contact">
        <span>antoine@mail.com</span>
        <span>0000000</span>
      </section>
    </div>
  );
}

export default InterventionCard;
