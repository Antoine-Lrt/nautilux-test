import * as types from '../actions/types';

const initialState = {
  inters: [],
  inter: {},
  loading: false
};

const intersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INTERVENTIONS:
      return {
        ...state,
        loading: true
      };
    case types.GET_INTERVENTIONS_SUCCESS:
      return {
        ...state,
        inters: action.payload
      };
    case types.GET_INTERVENTIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default intersReducer;
