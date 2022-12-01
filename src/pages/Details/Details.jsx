import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import './style.scss';

function Details() {
  const { id } = useParams();
  const interventions = useSelector((state) => state.inters.find((inters) => id == inters.id));

  if (!interventions) {
    return (
      <section>
        <h2>Pas d'intervention trouvée</h2>
      </section>
    );
  }

  console.log('my Object is ', interventions);
  return (
    <div className="details">
      <div className="details__element">
        <div className="details__element__btn">
          <Link to="/">
            <CustomButton text="Retour" type="secondary" />
          </Link>
        </div>
        <div className="details__element__card">
          <h3 className="details__element__card__title">{interventions?.name}</h3>

          <section className="details__element__card__description">
            <h4 className="details__element__card__description__title">Description</h4>
            <p className="details__element__card__description__text">
              {interventions?.description}
            </p>
          </section>
          <section className="details__element__card__contact">
            <h4 className="details__element__card__contact__title">Demendeur</h4>
            <span className="details__element__card__contact__user">
              {interventions?.sender_name}
            </span>
            <span className="details__element__card__contact__mail">
              {interventions?.sender_email}
            </span>
            <span className="details__element__card__contact__phone">
              {interventions?.sender_phone}
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Details;
