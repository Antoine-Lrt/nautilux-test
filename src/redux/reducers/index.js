import * as types from '../actions/types';
import _ from 'lodash';

const initialState = {
  inters: []
};

export const intersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INTERVENTIONS:
      return {
        ...state
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
    case types.CREATE_INTERVENTIONS:
      return {
        ...state,
        inters: [...state.inters, { id: ++state.inters.length, ...action.payload }]
      };
    case types.SORT_INTER_ASC:
      return {
        ...state,
        inters: state.inters.sort((a, b) =>
          a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : 0
        )
      };
    case types.SORT_INTER_DESC:
      return {
        ...state,
        inters: state.inters.sort((a, b) =>
          a.created_at > b.created_at ? 1 : a.created_at < b.created_at ? -1 : 0
        )
      };
    default:
      return state;
  }
};

export default intersReducer;
