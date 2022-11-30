import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import './style.scss';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data, e) => {
    try {
      console.log(data);
      alert('Votre intervention a été ajoutée !');
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

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
          <label htmlFor="interventionName" className="form__element__input__title">
            Nom de l'intervention
          </label>
          <input
            className="form__element__input__item"
            placeholder="Nom de l'intervention"
            {...register('interventionName', { required: true })}
            aria-invalid={errors.interventionName ? 'true' : 'false'}
          />
          {errors.interventionName?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir le nom de l'intervention
            </p>
          )}
        </section>
        <section className="form__element__input">
          <label htmlFor="interventionDescription" className="form__element__input__title">
            Description
          </label>
          <textarea
            className="form__element__input__item"
            placeholder="Saisissez la description de l'intervention"
            {...register('interventionDescription', { required: true })}
            aria-invalid={errors.interventionDescription ? 'true' : 'false'}
          />
          {errors.interventionDescription?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez décrire l'intervention
            </p>
          )}
        </section>

        <section className="form__element__input">
          <label htmlFor="applicantName" className="form__element__input__title">
            Demendeur
          </label>
          <input
            className="form__element__input__item"
            placeholder="Prénom Nom"
            {...register('applicantName', { required: true })}
            aria-invalid={errors.applicantName ? 'true' : 'false'}
          />
          {errors.applicantName?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir votre nom
            </p>
          )}
        </section>
        <section className="form__element__input">
          <label htmlFor="applicantMail" className="form__element__input__title">
            email
          </label>
          <input
            type="email"
            className="form__element__input__item"
            placeholder="email@domaine.fr"
            {...register('applicantMail', { required: true })}
            aria-invalid={errors.applicantMail ? 'true' : 'false'}
          />
          {errors.applicantMail?.type === 'required' && (
            <p className="form__element__input__error" role="alert">
              Veuillez saisir une adresse email
            </p>
          )}
        </section>
        <section className="form__element__input">
          <label htmlFor="applicantPhone" className="form__element__input__title">
            Téléphone
          </label>
          <input
            className="form__element__input__item"
            placeholder="00 00 00 00 00"
            {...register('applicantPhone')}
          />
        </section>

        {errors.interventionName && <p role="alert">{errors?.message}</p>}
      </form>
    </div>
  );
}

export default Form;
