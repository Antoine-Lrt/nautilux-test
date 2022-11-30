import * as types from './types';

export const getInterventions = () => ({
  type: types.GET_INTERVENTIONS
});

export const getInterventionsSuccess = (inters) => ({
  type: types.GET_INTERVENTIONS_SUCCESS,
  payload: inters
});

export const getInterventionsError = (error) => ({
  type: types.GET_INTERVENTIONS_ERROR,
  payload: error
});

export const sortInterventions = () => ({});
