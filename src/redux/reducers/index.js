import * as types from '../actions/types';
import _ from 'lodash';

const initialState = {
  inters: [],
  loading: false,
  sortDirection: null,
  sortKey: null
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
    case types.CREATE_INTERVENTIONS:
      return {
        ...state,
        inters: [action.payload, ...state.inters]
      };

    case types.GET_INTERVENTIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case types.SORT_BY_DATE:
      return {
        ...state,
        sortKey: action.sortKey,
        sortDirection: action.sortDirection
      };
    default:
      return state;
  }
};

export default intersReducer;
