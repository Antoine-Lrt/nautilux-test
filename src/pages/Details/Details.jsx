import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import './style.scss';

function Details({ match }) {
  const { id } = useParams();
  const interventions = useSelector((state) => state.inters.find((inter) => id == inter.id));

  // const inter = useSelector((state) => state.inters.find((inter) => Number(id) === interId));
  // const singleInter = interventions.find((inter) => inter.id === Number(id));
  console.log(interventions);
  return (
    <div className="details">
      <div className="details__element">
        <div className="details__element__btn">
          <CustomButton text="Retour" route={'/'} type="secondary" />
        </div>
        <div className="details__element__card">
          <h3 className="details__element__card__title">Nid de poule</h3>

          <section className="details__element__card__description">
            <h4 className="details__element__card__description__title">Description</h4>
            <p className="details__element__card__description__text">
              Le nid de poules sur la route des prés devient dangereux. Pourriez-vous intervenir
              pour le reboucher ?
            </p>
          </section>
          <section className="details__element__card__contact">
            <h4 className="details__element__card__contact__title">Demendeur</h4>
            <span className="details__element__card__contact__user">Romuald Gauthier</span>
            <span className="details__element__card__contact__mail">romuald_gautier@gmail.com</span>
            <span className="details__element__card__contact__phone">0648736255</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Details;
