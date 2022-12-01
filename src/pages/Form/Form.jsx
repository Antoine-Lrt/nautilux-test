import React from 'react';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import { createIntervention } from '../../redux/actions';

import './style.scss';

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const formatDate = moment().format('YYYY-MM-DD HH:ss:mm');

  function onSubmit(data, e) {
    e.preventDefault();
    try {
      dispatch(
        createIntervention({
          created_at: formatDate,
          name: data.name,
          description: data.description,
          sender_name: data.sender_name,
          sender_email: data.sender_email,
          sender_phone: data.sender_phone
        })
      );
      console.log('data length', data.length);
      alert('Votre intervention a été ajoutée !');
      e.target.reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  console.log(watch('example'));
  return (
    <div className="form">
      <form className="form__element" onSubmit={handleSubmit(onSubmit)}>
        <section className="form__element__btn">
          <Link to="/">
            <CustomButton btnType="submit" text="Annuler" type="secondary" />
          </Link>
          <CustomButton btnType="submit" text="Créer" type="primary" />
        </section>

        <section className="form__element__input">
          <label htmlFor="name" className="form__element__input__title">
            Nom de l'intervention
          </label>
          <input
            className="form__element__input__item"
            placeholder="Nom de l'intervention"
            {...register('name', { required: true })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir le nom de l'intervention !
            </p>
          )}
        </section>
        <section className="form__element__input">
          <label htmlFor="description" className="form__element__input__title">
            Description
          </label>
          <textarea
            className="form__element__input__item"
            placeholder="Saisissez la description de l'intervention"
            {...register('description', { required: true })}
            aria-invalid={errors.description ? 'true' : 'false'}
          />
          {errors.description?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez décrire l'intervention !
            </p>
          )}
        </section>

        <section className="form__element__input">
          <label htmlFor="sender_name" className="form__element__input__title">
            Demendeur
          </label>
          <input
            className="form__element__input__item"
            placeholder="Prénom Nom"
            {...register('sender_name', { required: true })}
            aria-invalid={errors.sender_name ? 'true' : 'false'}
          />
          {errors.sender_name?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir votre nom !
            </p>
          )}
        </section>
        <section className="form__element__input">
          <label htmlFor="sender_email" className="form__element__input__title">
            email
          </label>
          <input
            type="email"
            className="form__element__input__item"
            placeholder="email@domaine.fr"
            {...register('sender_email', { required: true })}
            aria-invalid={errors.sender_mail ? 'true' : 'false'}
          />
          {errors.sender_email?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir une adresse email !
            </p>
          )}
        </section>
        <section className="form__element__input">
          <label htmlFor="sender_phone" className="form__element__input__title">
            Téléphone
          </label>
          <input
            className="form__element__input__item"
            placeholder="00 00 00 00 00"
            {...register('sender_phone', { minLength: 10, maxLength: 10 })}
            aria-invalid={errors.sender_phone ? 'true' : 'false'}
          />
          {errors.sender_phone && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir un numéro de téléphone valide !
            </p>
          )}
        </section>
      </form>
    </div>
  );
}

export default Form;
