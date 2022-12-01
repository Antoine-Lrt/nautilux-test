import * as types from './types';

// Get Interventions

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

// Sort

export const sortAction = () => {
  return (dispatch) => dispatch({ type: types.SORT_INTER });
};

// Create New Intervention

// export const createIntervention = (inters) => ({
//   type: types.CREATE_INTERVENTIONS,
//   payload: inters
// });

export const createIntervention = (inters) => ({
  type: types.CREATE_INTERVENTIONS,
  payload: inters
});
